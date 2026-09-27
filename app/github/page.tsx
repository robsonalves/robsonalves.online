import { Metadata } from "next";
import {
  Cloud,
  Container,
  ShieldAlert,
  Workflow,
  LineChart,
  Briefcase,
  Wrench as ToolIcon,
  Building2,
  Globe,
  Mail,
  CalendarClock,
} from "lucide-react";
import { LinkedinIcon } from "@/components/BrandIcons";

export const metadata: Metadata = {
  title: "GitHub Profile | Robson Alves",
  description: "GitHub profile, stats, and open source contributions",
};

async function getGitHubStats() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    const response = await fetch('https://api.github.com/users/robsonalves', {
      next: { revalidate: 3600 }, // Cache for 1 hour
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn(`GitHub API returned status ${response.status}`);
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    return {
      repos: data.public_repos,
      followers: data.followers,
      gists: data.public_gists,
      yearsOnGitHub: new Date().getFullYear() - new Date(data.created_at).getFullYear(),
    };
  } catch (error) {
    // Log error silently without stack trace
    if (error instanceof Error && error.name === 'AbortError') {
      console.warn('GitHub API request timed out after 5 seconds');
    } else {
      console.warn('GitHub API request failed, using fallback values');
    }

    // Fallback to static values if API fails
    return {
      repos: 119,
      followers: 27,
      gists: 27,
      yearsOnGitHub: 14,
    };
  }
}

export default async function GitHubProfile() {
  const stats = await getGitHubStats();

  const quickStats = [
    { label: "Public Repositories", value: stats.repos },
    { label: "Followers", value: stats.followers },
    { label: "Public Gists", value: stats.gists },
    { label: "Years on GitHub", value: `${stats.yearsOnGitHub}+` },
  ];

  const expertise = [
    { icon: Cloud, title: "Cloud Platforms", desc: "AWS, Azure, OCI" },
    { icon: Container, title: "DevOps & SRE", desc: "Kubernetes, Docker, Terraform, GitOps" },
    { icon: ShieldAlert, title: "Security", desc: "AWS WAF, Hardening, Compliance" },
    { icon: ToolIcon, title: "Infrastructure as Code", desc: "Terraform, CloudFormation, Helm Charts" },
    { icon: Workflow, title: "CI/CD", desc: "GitHub Actions, Azure DevOps, ArgoCD" },
    { icon: LineChart, title: "Monitoring & Observability", desc: "Prometheus, Grafana, KEDA" },
  ];

  return (
    <div className="space-y-14 py-4">
      {/* Header */}
      <section className="text-center space-y-3">
        <p className="section-label">github</p>
        <h1 className="text-4xl font-bold tracking-tight">GitHub Profile</h1>
        <p className="text-lg text-[var(--muted)]">DevOps Engineer | SRE | Cloud Architect</p>
        <p className="text-[var(--muted)] italic font-mono-ui text-sm">
          "Resolvendo problemas complexos com soluções simples"
        </p>
      </section>

      {/* Quick Stats */}
      <section className="grid md:grid-cols-4 gap-5">
        {quickStats.map((stat) => (
          <div key={stat.label} className="surface-card p-6 text-center">
            <div className="text-3xl font-bold font-mono-ui text-[var(--accent)]">{stat.value}</div>
            <div className="text-sm text-[var(--muted)] mt-2">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Expertise */}
      <section className="surface-card p-8">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase size={22} className="text-[var(--accent)]" />
          <h2 className="text-2xl font-bold">Expertise</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {expertise.map((item) => (
            <div key={item.title} className="flex gap-4">
              <item.icon className="text-[var(--accent)] shrink-0" size={22} />
              <div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-[var(--muted)]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
        <div className="space-y-5">
          <div>
            <h3 className="font-mono-ui text-sm text-[var(--muted)] mb-3">Languages</h3>
            <div className="flex flex-wrap gap-2">
              <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
              <img src="https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java&logoColor=white" alt="Java" />
              <img src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python" />
              <img src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js" />
            </div>
          </div>
          <div>
            <h3 className="font-mono-ui text-sm text-[var(--muted)] mb-3">DevOps & Cloud</h3>
            <div className="flex flex-wrap gap-2">
              <img src="https://img.shields.io/badge/-AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white" alt="AWS" />
              <img src="https://img.shields.io/badge/-Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white" alt="Kubernetes" />
              <img src="https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker" />
              <img src="https://img.shields.io/badge/-Terraform-7B42BC?style=flat-square&logo=terraform&logoColor=white" alt="Terraform" />
            </div>
          </div>
          <div>
            <h3 className="font-mono-ui text-sm text-[var(--muted)] mb-3">Frameworks & Tools</h3>
            <div className="flex flex-wrap gap-2">
              <img src="https://img.shields.io/badge/-Angular-DD0031?style=flat-square&logo=angular&logoColor=white" alt="Angular" />
              <img src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
              <img src="https://img.shields.io/badge/-Spring%20Boot-6DB33F?style=flat-square&logo=spring-boot&logoColor=white" alt="Spring Boot" />
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Stats */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">GitHub Stats</h2>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="surface-card p-4">
            <img
              src="https://github-readme-stats.vercel.app/api?username=robsonalves&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true&hide_border=true&bg_color=00000000"
              alt="GitHub Stats"
              className="w-full"
            />
          </div>
          <div className="surface-card p-4">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=robsonalves&layout=compact&langs_count=8&theme=tokyonight&hide_border=true&bg_color=00000000"
              alt="Top Languages"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="surface-card p-8">
        <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
        <p className="text-[var(--muted)] mb-5">
          Check out my pinned repositories on GitHub for some of my most interesting work in automation, cloud infrastructure, and DevOps!
        </p>
        <a href="https://github.com/robsonalves" target="_blank" rel="noopener noreferrer" className="btn-primary">
          View on GitHub →
        </a>
      </section>

      {/* Contact */}
      <section className="surface-card p-8">
        <div className="flex items-center gap-2 mb-6">
          <Building2 size={22} className="text-[var(--accent)]" />
          <h2 className="text-2xl font-bold">Let's Connect</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <a href="https://robsonalves.online" className="flex items-center gap-3 p-4 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] transition-colors">
            <Globe className="text-[var(--accent)]" size={22} />
            <div>
              <div className="font-semibold">Website</div>
              <div className="text-sm text-[var(--muted)]">robsonalves.online</div>
            </div>
          </a>
          <a href="https://linkedin.com/in/robsonalves" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] transition-colors">
            <LinkedinIcon className="text-[var(--accent)]" size={22} />
            <div>
              <div className="font-semibold">LinkedIn</div>
              <div className="text-sm text-[var(--muted)]">linkedin.com/in/robsonalves</div>
            </div>
          </a>
          <a href="mailto:hi@robsonalves.online" className="flex items-center gap-3 p-4 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] transition-colors">
            <Mail className="text-[var(--accent)]" size={22} />
            <div>
              <div className="font-semibold">Email</div>
              <div className="text-sm text-[var(--muted)]">hi@robsonalves.online</div>
            </div>
          </a>
          <a href="/schedule" className="flex items-center gap-3 p-4 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] transition-colors">
            <CalendarClock className="text-[var(--accent)]" size={22} />
            <div>
              <div className="font-semibold">Schedule a Call</div>
              <div className="text-sm text-[var(--muted)]">Technical discussions</div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
