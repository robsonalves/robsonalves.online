export default function CV() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 pb-8 border-b-2">
        <h1 className="text-5xl font-bold mb-4">ROBSON ALVES</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          36 years old, married, Brazilian, 1 child
        </p>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
          DevOps Engineer | SRE | Cloud Architect
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm mb-2">
          <span>📍 Rua Francisco Lamas, 55 - CEP: 08780790</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span>📧 robson.infoo@gmail.com</span>
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

      {/* Professional Summary */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
          Professional Summary
        </h2>
        <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-lg">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I bring extensive experience in DevOps, cloud architecture, and software engineering,
            demonstrated through this comprehensive career history. I am characterized as persevering,
            insightful, and positive, with a constant focus on professional growth and success. I work
            effectively in teams, take responsibility seriously, and continuously seek new challenges
            and experiences to expand my expertise.
          </p>
        </div>
      </section>

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
            <span className="text-gray-500 whitespace-nowrap">March 2024 - Present</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Manage multiple AWS accounts and EKS clusters with extensive use of SQS, SNS, SES, DynamoDB, RDS</li>
            <li>Work with multi-cloud environments: AWS, Azure, and Oracle Cloud Infrastructure (OCI)</li>
            <li>Operate in self-organized DevOps/SRE team ensuring resilient, scalable, and up-to-date services</li>
            <li>Active involvement in cloud security: vulnerability addressing, hardening, compliance best practices</li>
            <li>Lead continuous improvement initiatives across multiple teams</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Tools:</strong> GitLab, Python (Django), ReactJS (Next.js), Docker, docker-compose, WAF, AWS, Azure, OCI
          </p>
        </div>

        {/* Vittude */}
        <div className="mb-8 pl-4 border-l-4 border-purple-500">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-semibold">DevOps Engineer / SRE / Head of Tech</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Vittude (Startup)</p>
            </div>
            <span className="text-gray-500 whitespace-nowrap">March 2020 - March 2024</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Owned AWS infrastructure and CI/CD processes using GitLab, Docker, optimizing velocity and consistency</li>
            <li>Temporarily assumed Head of Tech role (Dec 2020) coordinating team around company OKRs</li>
            <li>Single-handedly resolved DDoS attack: implemented traffic splitting, AWS WAF, blocked malicious requests globally</li>
            <li>Automated various activities using Python, Shell, and AWS resources</li>
            <li>Enhanced vittude.com platform and tech-dependent processes including Back Office, CS/CX, finance</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Tools:</strong> GitLab, Python (Django), ReactJS (Next.js), Docker, docker-compose, AWS WAF
          </p>
        </div>

        {/* TeamIT */}
        <div className="mb-8 pl-4 border-l-4 border-green-500">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-semibold">Platform Engineer / SRE</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">TeamIT (Portugal)</p>
            </div>
            <span className="text-gray-500 whitespace-nowrap">March 2019 - February 2020</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Waitrose (UK):</strong> Maintained large-scale e-commerce platform with thousands of services</li>
            <li>Worked with Jenkins, Ansible, CloudFormation, AWS, GCP, NodeJS, .NET, Python lambdas</li>
            <li><strong>Anova:</strong> Managed IoT platform handling massive telemetry data on Azure AKS</li>
            <li>Used Terraform (Terragrunt), Azure DevOps for distributed database infrastructure</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Tools:</strong> Azure DevOps, Python, ReactJS (Next.js), Docker, docker-compose, Kubernetes (AKS), Terraform, Terragrunt
          </p>
        </div>

        {/* Webjump */}
        <div className="mb-8 pl-4 border-l-4 border-orange-500">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-semibold">DevOps Engineer</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Webjump</p>
            </div>
            <span className="text-gray-500 whitespace-nowrap">May 2017 - March 2019</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Created automation tools for application deployments using AWS SDK (Python/TypeScript)</li>
            <li>Implemented IaC with CloudFormation (Nested Templates) for continuous delivery pipelines</li>
            <li>Worked with Ambev platforms using Fargate/ECS, lambdas, CloudFront, RDS, DocumentDB</li>
            <li>Created first Kubernetes cluster with automatic pipeline in Azure DevOps (3 environments)</li>
            <li>Production environment running microservices with Traefik, AutoScaler, HPA, NewRelic telemetry</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Tools:</strong> AWS, EKS, NewRelic, Azure DevOps, Magento, PHP, Node.js, Serverless Framework, Kubernetes
          </p>
        </div>

        {/* ESX (including Microsoft allocation) */}
        <div className="mb-8 pl-4 border-l-4 border-red-500">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-semibold">ALM / DevOps Consultant</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">ESX</p>
            </div>
            <span className="text-gray-500 whitespace-nowrap">March 2014 - May 2017</span>
          </div>

          <div className="mb-4 p-4 bg-blue-50 dark:bg-gray-800 rounded-lg border-l-4 border-cyan-500">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-lg font-semibold text-cyan-700 dark:text-cyan-400">Client Allocation: Microsoft</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Cloud Solutions Architect (Green Badge)</p>
              </div>
              <span className="text-sm text-gray-500 whitespace-nowrap">Feb 2015 - Sep 2016</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300 ml-2">
              <li>Cloud Solutions Consultant for Microsoft Azure (via ESX partnership)</li>
              <li>Assisted customers in Azure infrastructure setup and migrations from AWS/Mandic to Azure</li>
              <li>Designed PaaS and IaaS solutions with optimal pricing and automated resource deallocation</li>
              <li>Built infrastructure as code using ARM templates and PowerShell</li>
              <li>Gathered requirements, designed solutions with diagrams, coordinated implementation</li>
            </ul>
            <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
              <strong>Tools:</strong> Azure Stack, PowerShell, ARM Templates, Visio, Docker
            </p>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 italic">
            As ALM/DevOps Consultant, I served various clients providing DevOps expertise and automation solutions:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Consulted various clients on DevOps culture and project automation solutions</li>
            <li>Created pipeline patterns for microservices with Java 8, implementing observability and traceability</li>
            <li>Set up automated tests with Postman, JUnit, Selenium using Azure DevOps</li>
            <li>Implemented GitOps with Flux CD, Kubernetes tools (Weave Scope, Kubedash, ELK)</li>
            <li>Taught clients agile frameworks (Scrum, Kanban), CI/CD best practices</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Tools:</strong> Kubernetes, AWS, Jenkins, SonarQube, Dynatrace, ELK, Prometheus, Grafana, Azure DevOps, Flux CD
          </p>
        </div>

        {/* Sofhar */}
        <div className="mb-8 pl-4 border-l-4 border-indigo-500">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-semibold">Web Developer Senior</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Sofhar (Prodesp - São Paulo State Education)</p>
            </div>
            <span className="text-gray-500 whitespace-nowrap">July 2012 - March 2014</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Technical leadership for São Paulo State Education Department systems</li>
            <li>Architected and implemented Azure Virtual Machines, Web API solutions with scalability</li>
            <li>Migrated Oracle database structure to SQL Server, developed ETL routines with SSIS and C#</li>
            <li>Implemented continuous delivery with VSTS, Git pull requests, automated builds, release management</li>
            <li>SQL Server performance tuning, Scrum methodology implementation</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Tools:</strong> SQL Azure/On-Premises, SSIS, Web API, Oracle, VSTS, Git, C#, .NET
          </p>
        </div>

        {/* G & P Projects */}
        <div className="mb-8 pl-4 border-l-4 border-pink-500">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-semibold">Web Programmer</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">G & P Projects and Solutions (Prodesp - São Paulo State Education)</p>
            </div>
            <span className="text-gray-500 whitespace-nowrap">July 2011 - July 2012</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Joined critical delivery projects: diploma printing system with direct stakeholder contact</li>
            <li>Developed school board project using MVC4 from scratch, delivered on time</li>
            <li>Became technical leader of Class Assignment project for State Education</li>
            <li>Direct communication with stakeholders ensuring alignment with education standards</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Tools:</strong> ASP.NET MVC4, .NET Framework, SQL Server
          </p>
        </div>

        {/* Convergência */}
        <div className="mb-8 pl-4 border-l-4 border-teal-500">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-semibold">Senior Web Analyst</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Convergência (Department of Roads)</p>
            </div>
            <span className="text-gray-500 whitespace-nowrap">March 2010 - July 2011</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>On-site service provider maintaining and enhancing legacy systems</li>
            <li>Developed new solutions using .NET Framework 3.5/4.0, SQL Server 2000-2008</li>
            <li>Database analysis, modeling, and development for system implementations</li>
            <li>Gathered functional and non-functional requirements, direct customer contact</li>
            <li>Legacy maintenance in Classic ASP, VB6, and Flex</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Tools:</strong> .NET Framework, SQL Server, Classic ASP, VB6, Flex
          </p>
        </div>

        {/* Principia Software */}
        <div className="mb-8 pl-4 border-l-4 border-yellow-500">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-semibold">Analyst / Programmer</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Principia Software (Department of Roads)</p>
            </div>
            <span className="text-gray-500 whitespace-nowrap">January 2009 - March 2010</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Maintained and enhanced legacy systems for Department of Roads</li>
            <li>Developed new solutions using .NET Framework 3.5 and SQL Server 2005</li>
            <li>Database analysis, modeling, and development</li>
            <li>Implemented 3-layer architecture, decoupling business logic for better code reuse</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Tools:</strong> .NET Framework 3.5, SQL Server 2005, N-tier Architecture
          </p>
        </div>

        {/* Senior Solution */}
        <div className="mb-8 pl-4 border-l-4 border-gray-500">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-semibold">Analyst / Programmer</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Senior Solution (Pension & Insurance)</p>
            </div>
            <span className="text-gray-500 whitespace-nowrap">June 2008 - January 2009</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Developed solutions for private pension schemes and life insurance systems</li>
            <li>Used SSIS to interconnect legacy systems across multiple companies</li>
            <li>MetLife project: lucky numbers management system capitalization</li>
            <li>FUVUP project (BrasilPrev): corporate pension plans simulation system</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Tools:</strong> SQL Server, SSIS, .NET Framework
          </p>
        </div>

        {/* Sofhar Gestão */}
        <div className="mb-8 pl-4 border-l-4 border-lime-500">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-semibold">Analyst / Programmer</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Sofhar Gestão & Tecnologia (Department of Roads)</p>
            </div>
            <span className="text-gray-500 whitespace-nowrap">October 2007 - May 2008</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Production systems maintenance: corrective maintenance and system enhancements</li>
            <li>Direct contact with users to implement changes, delivered updated user manuals</li>
            <li>System documentation creation and analysis using UML</li>
            <li>Developed new systems for users according to business rules</li>
            <li>Full product delivery to maintenance team for production deployment</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Tools:</strong> .NET Framework, SQL Server, UML
          </p>
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
              <li>💻 C# / .NET Framework (MVC, Web API, SSIS)</li>
              <li>💻 Shell/Bash scripting, PowerShell</li>
              <li>💻 SQL (SQL Server, Oracle, DynamoDB)</li>
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
          <h3 className="text-xl font-semibold">Master of Business Administration - Full Cycle - Software Engineering AI Track</h3>
          <p className="text-gray-500">Status: In Progress | Expected Completion: December 2026</p>
        </div>

        <div className="pl-4 border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold">Bachelor's Degree in Computer Science</h3>
          <p className="text-gray-600 dark:text-gray-400">Faculdade Uniesp</p>
          <p className="text-gray-500">Completion: December 2011</p>
        </div>
      </section>

      {/* Additional Info */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
          Additional Activities
        </h2>
        <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-lg">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Active participation in technology forums and mailing lists. I authored articles for
            DevMedia and NetCoders communities (in Portuguese). I continuously follow development
            and technology trends.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>GitHub:</strong>{' '}
            <a
              href="https://github.com/robsonalves?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://github.com/robsonalves?tab=repositories
            </a>
          </p>
        </div>
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
