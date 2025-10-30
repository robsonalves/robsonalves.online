#!/usr/bin/env node

/**
 * Blog Post Generator
 * Generates technical blog posts using Anthropic Claude API
 */

const Anthropic = require('@anthropic-ai/sdk');
const fs = require('fs');
const path = require('path');

// Topics pool for generating diverse content
const TOPICS = [
  {
    category: 'AWS',
    subjects: [
      'EKS Best Practices for Production Workloads',
      'Optimizing Lambda Cold Starts',
      'AWS Cost Optimization Strategies',
      'Building Resilient Architectures with AWS',
      'AWS Security Best Practices',
      'Implementing Multi-Region Disaster Recovery',
      'AWS re:Invent 2025 Key Announcements',
      'Serverless Architecture Patterns',
    ]
  },
  {
    category: 'Kubernetes',
    subjects: [
      'GitOps with Flux CD: Complete Guide',
      'Kubernetes Security Hardening',
      'Managing Secrets in Kubernetes',
      'Kubernetes Autoscaling Strategies',
      'Service Mesh Comparison: Istio vs Linkerd',
      'Kubernetes Monitoring with Prometheus',
      'Zero-Downtime Deployments in K8s',
      'Kubernetes Cost Optimization',
    ]
  },
  {
    category: 'DevOps',
    subjects: [
      'Infrastructure as Code Best Practices',
      'CI/CD Pipeline Optimization',
      'Implementing SRE Principles',
      'DevOps Metrics That Matter',
      'Incident Response Automation',
      'Platform Engineering: Building Internal Developer Platforms',
      'GitOps vs Traditional DevOps',
      'Observability in Distributed Systems',
    ]
  },
  {
    category: 'Terraform',
    subjects: [
      'Terraform State Management Best Practices',
      'Multi-Cloud IaC with Terraform',
      'Terraform Modules: Design Patterns',
      'Managing Terraform at Scale',
      'Terraform vs CloudFormation',
      'Automated Terraform Testing',
      'Terraform Cloud Migration Guide',
    ]
  },
  {
    category: 'AI & Automation',
    subjects: [
      'AI-Powered DevOps Automation',
      'Using LLMs for Infrastructure Documentation',
      'Automated Incident Response with AI',
      'AI in Cloud Cost Optimization',
      'Building AI Agents for DevOps Tasks',
    ]
  },
];

// Get random topic
function getRandomTopic() {
  const category = TOPICS[Math.floor(Math.random() * TOPICS.length)];
  const subject = category.subjects[Math.floor(Math.random() * category.subjects.length)];
  return {
    category: category.category,
    subject: subject,
  };
}

// Calculate read time
function calculateReadTime(content) {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

// Generate slug from title
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Main function
async function generateBlogPost() {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    console.error('❌ ANTHROPIC_API_KEY environment variable is required');
    process.exit(1);
  }

  const anthropic = new Anthropic({ apiKey });
  const topic = getRandomTopic();

  console.log(`📝 Generating post about: ${topic.subject}`);
  console.log(`📂 Category: ${topic.category}`);

  const prompt = `You are a Senior DevOps Engineer and technical writer.

Write a comprehensive, professional technical blog post about: "${topic.subject}"

Requirements:
- Target audience: Senior DevOps Engineers, SRE, Cloud Architects
- Length: 1500-2000 words
- Include practical examples and code snippets where relevant
- Use real-world scenarios from production environments
- Focus on actionable insights and best practices
- Include pros/cons when comparing technologies
- Add troubleshooting tips if applicable
- Be specific and technical, avoid generic advice

Structure:
1. Brief introduction (2-3 paragraphs) explaining why this topic matters
2. Main content with clear sections and subheadings
3. Code examples with comments (use bash, yaml, hcl, or relevant language)
4. Practical recommendations
5. Conclusion with key takeaways

Style:
- Professional but conversational
- Use "we" and "you" to engage readers
- Include real numbers and metrics when possible
- Add warnings or gotchas sections if applicable

Output ONLY the blog post content in markdown format, starting with a title (# format).
Do NOT include any frontmatter, metadata, or explanations outside the post itself.`;

  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 8000,
      messages: [{
        role: 'user',
        content: prompt
      }]
    });

    const content = message.content[0].text;

    // Extract title from first heading
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : topic.subject;

    // Remove the title from content since we'll add it in frontmatter
    const contentWithoutTitle = content.replace(/^#\s+.+$/m, '').trim();

    const readTime = calculateReadTime(content);
    const date = new Date().toISOString().split('T')[0];
    const slug = generateSlug(title);

    // Generate tags from category
    const tags = [
      topic.category.toLowerCase(),
      'devops',
      'cloud',
    ];

    // Create frontmatter
    const frontmatter = `---
title: "${title}"
date: "${date}"
description: "${content.split('\n').find(line => line.trim() && !line.startsWith('#'))?.trim().substring(0, 155) || `Technical guide about ${topic.subject}`}..."
tags: ${JSON.stringify(tags)}
readTime: "${readTime} min"
author: "Robson Alves"
---

`;

    const finalContent = frontmatter + '# ' + title + '\n\n' + contentWithoutTitle;

    // Save to file
    const filename = `${date}-${slug}.md`;
    const filepath = path.join(process.cwd(), 'content', 'blog', 'en', filename);

    fs.writeFileSync(filepath, finalContent, 'utf8');

    console.log(`✅ Post generated successfully!`);
    console.log(`📄 File: ${filename}`);
    console.log(`📊 Word count: ~${content.split(/\s+/).length} words`);
    console.log(`⏱️  Read time: ${readTime} min`);
    console.log(`🏷️  Tags: ${tags.join(', ')}`);

    return {
      success: true,
      filename,
      title,
      filepath
    };

  } catch (error) {
    console.error('❌ Error generating post:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  generateBlogPost()
    .then(() => {
      console.log('\n🎉 Done!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Fatal error:', error);
      process.exit(1);
    });
}

module.exports = { generateBlogPost };
