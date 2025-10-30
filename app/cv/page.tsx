export default function CV() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 pb-8 border-b-2">
        <h1 className="text-5xl font-bold mb-4">Robson Alves</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
          DevOps Engineer | SRE | Cloud Architect
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span>📍 São Paulo, Brazil</span>
          <span>📧 hi@robsonalves.online</span>
          <span>📱 +55 11 95040-5840</span>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://github.com/robsonalves"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/robsonalves"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Professional Experience */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
          Professional Experience
        </h2>

        {/* Prezensa/Veloe */}
        <div className="mb-8 pl-4 border-l-4 border-blue-500">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-semibold">DevOps Engineer</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Prezensa Consultant (Veloe - Alelo/Elopar)
              </p>
            </div>
            <span className="text-gray-500 whitespace-nowrap">03/2024 - Current</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Manage multiple AWS accounts and EKS clusters with extensive use of SQS, SNS, SES, DynamoDB, RDS</li>
            <li>Work with multi-cloud environments: AWS, Azure, and Oracle Cloud Infrastructure (OCI)</li>
            <li>Operate in self-organized DevOps/SRE team ensuring resilient, scalable, and up-to-date services</li>
            <li>Active involvement in cloud security: vulnerability addressing, hardening, compliance best practices</li>
            <li>Lead continuous improvement initiatives across multiple teams</li>
          </ul>
        </div>

        {/* Vittude */}
        <div className="mb-8 pl-4 border-l-4 border-purple-500">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-semibold">DevOps Engineer / SRE / Head of Tech</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Vittude (Startup)</p>
            </div>
            <span className="text-gray-500 whitespace-nowrap">03/2020 - 03/2024</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Owned AWS infrastructure and CI/CD processes using GitLab, Docker, optimizing velocity and consistency</li>
            <li>Temporarily assumed Head of Tech role (Dec 2020) coordinating team around company OKRs</li>
            <li>Single-handedly resolved DDOS attack: implemented traffic splitting, AWS WAF, blocked malicious requests globally</li>
            <li>Automated various activities using Python, Shell, and AWS resources</li>
            <li>Enhanced vittude.com platform and tech-dependent processes including Back Office, CS/CX, finance</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Tools:</strong> GitLab, Python (Django), ReactJS (Next.js), Docker, AWS WAF
          </p>
        </div>

        {/* TeamIT */}
        <div className="mb-8 pl-4 border-l-4 border-green-500">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-semibold">Platform Engineer / SRE</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">TeamIT (Portugal)</p>
            </div>
            <span className="text-gray-500 whitespace-nowrap">03/2019 - 02/2020</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Waitrose (UK):</strong> Maintained large-scale e-commerce platform with thousands of services</li>
            <li>Worked with Jenkins, Ansible, CloudFormation, AWS, GCP, NodeJS, .NET, Python lambdas</li>
            <li><strong>Anova:</strong> Managed IoT platform handling massive telemetry data on Azure AKS</li>
            <li>Used Terraform (Terragrunt), Azure DevOps for distributed database infrastructure</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Tools:</strong> Azure DevOps, Python, ReactJS, Docker, Terraform, AKS
          </p>
        </div>

        {/* Webjump */}
        <div className="mb-8 pl-4 border-l-4 border-orange-500">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-semibold">DevOps Engineer</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Webjump</p>
            </div>
            <span className="text-gray-500 whitespace-nowrap">05/2017 - 03/2019</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Created automation tools for application deployments using AWS SDK (Python/TypeScript)</li>
            <li>Implemented IaC with CloudFormation (Nested Templates) for continuous delivery pipelines</li>
            <li>Worked with Ambev platforms using Fargate/ECS, lambdas, CloudFront, RDS, DocumentDB</li>
            <li>Created first Kubernetes cluster with automatic pipeline in Azure DevOps (3 environments)</li>
            <li>Production environment running microservices with Traefik, AutoScaler, HPA, NewRelic telemetry</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Tools:</strong> AWS, EKS, NewRelic, Azure DevOps, Magento, PHP, NodeJS, Serverless
          </p>
        </div>

        {/* ESX */}
        <div className="mb-8 pl-4 border-l-4 border-red-500">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-semibold">ALM / DevOps Consultant</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">ESX</p>
            </div>
            <span className="text-gray-500 whitespace-nowrap">03/2014 - 05/2017</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Consulted various clients on DevOps culture and project automation solutions</li>
            <li>Created pipeline patterns for microservices with Java 8, implementing observability and traceability</li>
            <li>Set up automated tests with Postman, JUnit, Selenium using Azure DevOps</li>
            <li>Implemented GitOps with Flux CD, Kubernetes tools (Weave Scope, Kubedash, ELK)</li>
            <li>Taught clients agile frameworks (Scrum, Kanban), CI/CD best practices</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Tools:</strong> Kubernetes, AWS, Jenkins, SonarQube, Dynatrace, ELK, Prometheus, Grafana
          </p>
        </div>

        {/* Microsoft */}
        <div className="mb-8 pl-4 border-l-4 border-cyan-500">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-semibold">Cloud Architect Solution</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Microsoft (Green Badge via ESX)</p>
            </div>
            <span className="text-gray-500 whitespace-nowrap">02/2015 - 09/2016</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Assisted customers in Azure infrastructure setup and migrations from AWS/Mandic to Azure</li>
            <li>Designed PaaS and IaaS solutions with optimal pricing and automated hardware deallocation</li>
            <li>Built infrastructure as code using ARM templates and PowerShell</li>
            <li>Gathered requirements, designed solutions with diagrams, coordinated implementation</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Cloud Platforms</h3>
            <ul className="space-y-1">
              <li>☁️ AWS (EKS, ECS, Lambda, RDS, DynamoDB, CloudFormation)</li>
              <li>☁️ Azure (AKS, DevOps, ARM Templates, OCI)</li>
              <li>☁️ Oracle Cloud Infrastructure (OCI)</li>
              <li>☁️ GCP</li>
            </ul>
          </div>

          <div className="p-6 bg-purple-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">DevOps & Infrastructure</h3>
            <ul className="space-y-1">
              <li>🚀 Kubernetes, Docker, EKS, AKS</li>
              <li>🚀 Terraform, Terragrunt, CloudFormation</li>
              <li>🚀 GitOps, Flux CD</li>
              <li>🚀 Jenkins, GitLab CI, Azure DevOps, GitHub Actions</li>
            </ul>
          </div>

          <div className="p-6 bg-green-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Programming & Scripting</h3>
            <ul className="space-y-1">
              <li>💻 Python (Django, AWS SDK, Automation)</li>
              <li>💻 TypeScript/JavaScript (NodeJS, ReactJS, Next.js)</li>
              <li>💻 Shell/Bash scripting</li>
              <li>💻 PowerShell</li>
            </ul>
          </div>

          <div className="p-6 bg-orange-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Monitoring & Security</h3>
            <ul className="space-y-1">
              <li>🔒 AWS WAF, Security Hardening</li>
              <li>📊 Prometheus, Grafana, NewRelic</li>
              <li>📊 ELK Stack, Graylog</li>
              <li>📊 Dynatrace</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
          Education
        </h2>

        <div className="mb-6 pl-4 border-l-4 border-purple-500">
          <h3 className="text-xl font-semibold">MBA in Software Engineering AI</h3>
          <p className="text-gray-600 dark:text-gray-400">Full Cycle</p>
          <p className="text-gray-500">December 2025 - December 2026</p>
        </div>

        <div className="pl-4 border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold">Bachelor in Computer Science</h3>
          <p className="text-gray-600 dark:text-gray-400">Faculdade Uniesp</p>
          <p className="text-gray-500">Graduated: December 2011</p>
        </div>
      </section>

      {/* Additional Info */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
          Additional Activities
        </h2>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>✍️ Write technical articles for DevMedia and NetCoders (Portuguese)</li>
          <li>🌐 Active participation in technology forums and mailing lists</li>
          <li>📚 Continuously follow development and technology evolution</li>
          <li>🔗 Open source contributions on GitHub</li>
        </ul>
      </section>

      {/* Download CV */}
      <div className="text-center py-8">
        <a
          href="/cv.pdf"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg hover:scale-105 transition-transform shadow-lg"
        >
          Download PDF Version
        </a>
      </div>
    </div>
  );
}
