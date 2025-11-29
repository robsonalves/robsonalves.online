import { Metadata } from "next";

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
  return (
    <div className="space-y-12 py-8">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          GitHub Profile
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          DevOps Engineer | SRE | Cloud Architect
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-500 italic">
          "Resolvendo problemas complexos com soluções simples"
        </p>
      </section>

      {/* Quick Stats */}
      <section className="grid md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 text-center">
          <div className="text-4xl font-bold">{stats.repos}</div>
          <div className="text-sm opacity-90 mt-2">Public Repositories</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 text-center">
          <div className="text-4xl font-bold">{stats.followers}</div>
          <div className="text-sm opacity-90 mt-2">Followers</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 text-center">
          <div className="text-4xl font-bold">{stats.gists}</div>
          <div className="text-sm opacity-90 mt-2">Public Gists</div>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6 text-center">
          <div className="text-4xl font-bold">{stats.yearsOnGitHub}+</div>
          <div className="text-sm opacity-90 mt-2">Years on GitHub</div>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6">💼 Expertise</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">
              ☁️ Cloud Platforms
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              AWS, Azure, OCI
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-purple-600 dark:text-purple-400">
              🐳 DevOps & SRE
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Kubernetes, Docker, Terraform, GitOps
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-red-600 dark:text-red-400">
              🔒 Security
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              AWS WAF, Hardening, Compliance
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">
              🛠️ Infrastructure as Code
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Terraform, CloudFormation, Helm Charts
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-indigo-600 dark:text-indigo-400">
              🔄 CI/CD
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              GitHub Actions, Azure DevOps, ArgoCD
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-yellow-600 dark:text-yellow-400">
              📊 Monitoring & Observability
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Prometheus, Grafana, KEDA
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section>
        <h2 className="text-3xl font-bold mb-6">🔧 Tech Stack</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-3">Languages</h3>
            <div className="flex flex-wrap gap-2">
              <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
              <img src="https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java&logoColor=white" alt="Java" />
              <img src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python" />
              <img src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">DevOps & Cloud</h3>
            <div className="flex flex-wrap gap-2">
              <img src="https://img.shields.io/badge/-AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white" alt="AWS" />
              <img src="https://img.shields.io/badge/-Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white" alt="Kubernetes" />
              <img src="https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker" />
              <img src="https://img.shields.io/badge/-Terraform-7B42BC?style=flat-square&logo=terraform&logoColor=white" alt="Terraform" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Frameworks & Tools</h3>
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
        <h2 className="text-3xl font-bold">📊 GitHub Stats</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
            <img 
              src="https://github-readme-stats.vercel.app/api?username=robsonalves&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true" 
              alt="GitHub Stats"
              className="w-full"
            />
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
            <img 
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=robsonalves&layout=compact&langs_count=8&theme=tokyonight" 
              alt="Top Languages"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <h2 className="text-3xl font-bold mb-6">🏗️ Featured Projects</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Check out my pinned repositories on GitHub for some of my most interesting work in automation, cloud infrastructure, and DevOps!
        </p>
        <a
          href="https://github.com/robsonalves"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-semibold hover:scale-105 transition-transform"
        >
          View on GitHub →
        </a>
      </section>

      {/* Contact */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6">💬 Let's Connect</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="https://robsonalves.online"
            className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow"
          >
            <span className="text-2xl">🌐</span>
            <div>
              <div className="font-semibold">Website</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">robsonalves.online</div>
            </div>
          </a>
          <a
            href="https://linkedin.com/in/robsonalves"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow"
          >
            <span className="text-2xl">💼</span>
            <div>
              <div className="font-semibold">LinkedIn</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">linkedin.com/in/robsonalves</div>
            </div>
          </a>
          <a
            href="mailto:hi@robsonalves.online"
            className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow"
          >
            <span className="text-2xl">📧</span>
            <div>
              <div className="font-semibold">Email</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">hi@robsonalves.online</div>
            </div>
          </a>
          <a
            href="/schedule"
            className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow"
          >
            <span className="text-2xl">📅</span>
            <div>
              <div className="font-semibold">Schedule a Call</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Technical discussions</div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
