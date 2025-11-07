import Link from 'next/link';

export default function CVPT() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 pb-8 border-b-2">
        <h1 className="text-5xl font-bold mb-4">ROBSON ALVES</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          36 anos, casado, brasileiro, 1 filho
        </p>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
          Engenheiro DevOps | SRE | Arquiteto de Nuvem
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
          <Link
            href="/cv"
            className="text-blue-600 hover:underline"
          >
            🇬🇧 English Version
          </Link>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
          Resumo Profissional
        </h2>
        <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-lg">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Trago vasta experiência em DevOps, arquitetura de nuvem e engenharia de software,
            demonstrada através desta abrangente história de carreira. Sou caracterizado como
            perseverante, perspicaz e positivo, com foco constante em crescimento profissional e
            sucesso. Trabalho efetivamente em equipes, levo a responsabilidade a sério e busco
            continuamente novos desafios e experiências para expandir minha expertise.
          </p>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
          Experiência Profissional
        </h2>

        {/* Prezensa/Veloe */}
        <div className="mb-8 pl-4 border-l-4 border-blue-500">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-semibold">Engenheiro DevOps</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Consultor Prezensa (Veloe - Alelo/Elopar)
              </p>
            </div>
            <span className="text-gray-500 whitespace-nowrap">Março 2024 - Atual</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Gerencio múltiplas contas AWS e clusters EKS com uso extensivo de SQS, SNS, SES, DynamoDB, RDS</li>
            <li>Trabalho com ambientes multi-nuvem: AWS, Azure e Oracle Cloud Infrastructure (OCI)</li>
            <li>Atuo em equipe DevOps/SRE auto-organizada garantindo serviços resilientes, escaláveis e atualizados</li>
            <li>Envolvimento ativo em segurança na nuvem: tratamento de vulnerabilidades, hardening, boas práticas de compliance</li>
            <li>Lidero iniciativas de melhoria contínua em múltiplos times</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Ferramentas:</strong> GitLab, Python (Django), ReactJS (Next.js), Java, Flutter (Mobile), Docker, docker-compose, WAF, AWS, Azure, Azure DevOps, OCI, Terraform, Terragrunt, ServiceNow, FinOps
          </p>
        </div>

        {/* Vittude */}
        <div className="mb-8 pl-4 border-l-4 border-purple-500">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-semibold">Engenheiro DevOps / SRE / Head of Tech</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Vittude (Startup)</p>
            </div>
            <span className="text-gray-500 whitespace-nowrap">Março 2020 - Março 2024</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Responsável pela infraestrutura AWS e processos de CI/CD usando GitLab, Docker, otimizando velocidade e consistência</li>
            <li>Assumi temporariamente o cargo de Head of Tech (Dez 2020) coordenando a equipe em torno dos OKRs da empresa</li>
            <li>Resolvi sozinho ataque DDoS: implementei divisão de tráfego, AWS WAF, bloqueio de requisições maliciosas globalmente</li>
            <li>Automatizei várias atividades usando Python, Shell e recursos AWS</li>
            <li>Aprimorei a plataforma vittude.com e processos dependentes de tech incluindo Back Office, CS/CX, finanças</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Ferramentas:</strong> GitLab, Python (Django), ReactJS (Next.js), Docker, docker-compose, AWS WAF
          </p>
        </div>

        {/* TeamIT */}
        <div className="mb-8 pl-4 border-l-4 border-green-500">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-semibold">Engenheiro de Plataforma / SRE</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">TeamIT (Portugal)</p>
            </div>
            <span className="text-gray-500 whitespace-nowrap">Março 2019 - Fevereiro 2020</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Waitrose (UK):</strong> Mantive plataforma de e-commerce em larga escala com milhares de serviços</li>
            <li>Trabalhei com Jenkins, Ansible, CloudFormation, AWS, GCP, NodeJS, .NET, lambdas Python</li>
            <li><strong>Anova:</strong> Gerenciei plataforma IoT processando dados massivos de telemetria no Azure AKS</li>
            <li>Usei Terraform (Terragrunt), Azure DevOps para infraestrutura de banco de dados distribuído</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Ferramentas:</strong> Azure DevOps, Python, ReactJS (Next.js), Docker, docker-compose, Kubernetes (AKS), Terraform, Terragrunt
          </p>
        </div>

        {/* Webjump */}
        <div className="mb-8 pl-4 border-l-4 border-orange-500">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-semibold">Engenheiro DevOps</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Webjump</p>
            </div>
            <span className="text-gray-500 whitespace-nowrap">Maio 2017 - Março 2019</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Criei ferramentas de automação para deploys de aplicações usando AWS SDK (Python/TypeScript)</li>
            <li>Implementei IaC com CloudFormation (Nested Templates) para pipelines de entrega contínua</li>
            <li>Trabalhei com plataformas Ambev usando Fargate/ECS, lambdas, CloudFront, RDS, DocumentDB</li>
            <li>Criei primeiro cluster Kubernetes com pipeline automático no Azure DevOps (3 ambientes)</li>
            <li>Ambiente de produção rodando microserviços com Traefik, AutoScaler, HPA, telemetria NewRelic</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Ferramentas:</strong> AWS, EKS, NewRelic, Azure DevOps, Magento, PHP, Node.js, Serverless Framework, Kubernetes
          </p>
        </div>

        {/* ESX (including Microsoft allocation) */}
        <div className="mb-8 pl-4 border-l-4 border-red-500">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-semibold">Consultor ALM / DevOps</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">ESX</p>
            </div>
            <span className="text-gray-500 whitespace-nowrap">Março 2014 - Maio 2017</span>
          </div>

          <div className="mb-4 p-4 bg-blue-50 dark:bg-gray-800 rounded-lg border-l-4 border-cyan-500">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-lg font-semibold text-cyan-700 dark:text-cyan-400">Alocação no Cliente: Microsoft</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Arquiteto de Soluções Cloud (Green Badge)</p>
              </div>
              <span className="text-sm text-gray-500 whitespace-nowrap">Fev 2015 - Set 2016</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300 ml-2">
              <li>Consultor de Soluções Cloud para Microsoft Azure (via parceria ESX)</li>
              <li>Assisti clientes na configuração de infraestrutura Azure e migrações de AWS/Mandic para Azure</li>
              <li>Projetei soluções PaaS e IaaS com pricing otimizado e desalocação automatizada de recursos</li>
              <li>Construí infraestrutura como código usando templates ARM e PowerShell</li>
              <li>Coletei requisitos, projetei soluções com diagramas, coordenei implementação</li>
            </ul>
            <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
              <strong>Ferramentas:</strong> Azure Stack, PowerShell, ARM Templates, Visio, Docker
            </p>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 italic">
            Como Consultor ALM/DevOps, atendi diversos clientes fornecendo expertise em DevOps e soluções de automação:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Consultei diversos clientes sobre cultura DevOps e soluções de automação de projetos</li>
            <li>Criei padrões de pipeline para microserviços com Java 8, implementando observabilidade e rastreabilidade</li>
            <li>Configurei testes automatizados com Postman, JUnit, Selenium usando Azure DevOps</li>
            <li>Implementei GitOps com Flux CD, ferramentas Kubernetes (Weave Scope, Kubedash, ELK)</li>
            <li>Ensinei clientes sobre frameworks ágeis (Scrum, Kanban), boas práticas de CI/CD</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Ferramentas:</strong> Kubernetes, AWS, Jenkins, SonarQube, Dynatrace, ELK, Prometheus, Grafana, Azure DevOps, Flux CD
          </p>
        </div>

        {/* Sofhar */}
        <div className="mb-8 pl-4 border-l-4 border-indigo-500">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-semibold">Desenvolvedor Web Sênior</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Sofhar (Prodesp - Secretaria de Educação SP)</p>
            </div>
            <span className="text-gray-500 whitespace-nowrap">Julho 2012 - Março 2014</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Liderança técnica para sistemas da Secretaria de Educação do Estado de São Paulo</li>
            <li>Arquitetei e implementei Azure Virtual Machines, soluções Web API com escalabilidade</li>
            <li>Migrei estrutura de banco Oracle para SQL Server, desenvolvi rotinas ETL com SSIS e C#</li>
            <li>Implementei entrega contínua com VSTS, pull requests Git, builds automatizados, gestão de releases</li>
            <li>Tuning SQL Server, implementação de metodologia Scrum</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Ferramentas:</strong> SQL Azure/On-Premises, SSIS, Web API, Oracle, VSTS, Git, C#, .NET
          </p>
        </div>

        {/* G & P Projects */}
        <div className="mb-8 pl-4 border-l-4 border-pink-500">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-semibold">Programador Web</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">G & P Projects and Solutions (Prodesp - Secretaria de Educação SP)</p>
            </div>
            <span className="text-gray-500 whitespace-nowrap">Julho 2011 - Julho 2012</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Ingressei em projetos de entrega crítica: sistema de impressão de diplomas com contato direto com stakeholders</li>
            <li>Desenvolvi projeto de conselho escolar usando MVC4 do zero, entregue no prazo</li>
            <li>Tornei-me líder técnico do projeto de Atribuição de Aulas para a Secretaria de Educação</li>
            <li>Comunicação direta com stakeholders garantindo alinhamento com padrões educacionais</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Ferramentas:</strong> ASP.NET MVC4, .NET Framework, SQL Server
          </p>
        </div>

        {/* Convergência */}
        <div className="mb-8 pl-4 border-l-4 border-teal-500">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-semibold">Analista Web Sênior</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Convergência (Departamento de Estradas)</p>
            </div>
            <span className="text-gray-500 whitespace-nowrap">Março 2010 - Julho 2011</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Prestador de serviços on-site mantendo e aprimorando sistemas legados</li>
            <li>Desenvolvi novas soluções usando .NET Framework 3.5/4.0, SQL Server 2000-2008</li>
            <li>Análise, modelagem e desenvolvimento de banco de dados para implementações de sistemas</li>
            <li>Coletei requisitos funcionais e não-funcionais, contato direto com clientes</li>
            <li>Manutenção de legado em Classic ASP, VB6 e Flex</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Ferramentas:</strong> .NET Framework, SQL Server, Classic ASP, VB6, Flex
          </p>
        </div>

        {/* Principia Software */}
        <div className="mb-8 pl-4 border-l-4 border-yellow-500">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-semibold">Analista / Programador</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Principia Software (Departamento de Estradas)</p>
            </div>
            <span className="text-gray-500 whitespace-nowrap">Janeiro 2009 - Março 2010</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Mantive e aprimorei sistemas legados para Departamento de Estradas</li>
            <li>Desenvolvi novas soluções usando .NET Framework 3.5 e SQL Server 2005</li>
            <li>Análise, modelagem e desenvolvimento de banco de dados</li>
            <li>Implementei arquitetura em 3 camadas, desacoplando lógica de negócio para melhor reuso de código</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Ferramentas:</strong> .NET Framework 3.5, SQL Server 2005, Arquitetura N-tier
          </p>
        </div>

        {/* Senior Solution */}
        <div className="mb-8 pl-4 border-l-4 border-gray-500">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-semibold">Analista / Programador</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Senior Solution (Previdência & Seguros)</p>
            </div>
            <span className="text-gray-500 whitespace-nowrap">Junho 2008 - Janeiro 2009</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Desenvolvi soluções para sistemas de previdência privada e seguros de vida</li>
            <li>Usei SSIS para interconectar sistemas legados em múltiplas empresas</li>
            <li>Projeto MetLife: sistema de gestão de números da sorte para capitalização</li>
            <li>Projeto FUVUP (BrasilPrev): sistema de simulação de planos de previdência corporativa</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Ferramentas:</strong> SQL Server, SSIS, .NET Framework
          </p>
        </div>

        {/* Sofhar Gestão */}
        <div className="mb-8 pl-4 border-l-4 border-lime-500">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-semibold">Analista / Programador</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Sofhar Gestão & Tecnologia (Departamento de Estradas)</p>
            </div>
            <span className="text-gray-500 whitespace-nowrap">Outubro 2007 - Maio 2008</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Manutenção de sistemas em produção: manutenção corretiva e melhorias nos sistemas</li>
            <li>Contato direto com usuários para implementar mudanças, entregava manuais de usuário atualizados</li>
            <li>Criação de documentação de sistemas e análise usando UML</li>
            <li>Desenvolvi novos sistemas para usuários de acordo com regras de negócio</li>
            <li>Entrega completa de produto para equipe de manutenção para implantação em produção</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Ferramentas:</strong> .NET Framework, SQL Server, UML
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
          Habilidades Técnicas
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Plataformas Cloud</h3>
            <ul className="space-y-1">
              <li>☁️ AWS (EKS, ECS, Lambda, RDS, DynamoDB, CloudFormation)</li>
              <li>☁️ Azure (AKS, DevOps, ARM Templates, OCI)</li>
              <li>☁️ Oracle Cloud Infrastructure (OCI)</li>
              <li>☁️ GCP</li>
            </ul>
          </div>

          <div className="p-6 bg-purple-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">DevOps & Infraestrutura</h3>
            <ul className="space-y-1">
              <li>🚀 Kubernetes, Docker, EKS, AKS</li>
              <li>🚀 Terraform, Terragrunt, CloudFormation</li>
              <li>🚀 GitOps, Flux CD</li>
              <li>🚀 Jenkins, GitLab CI, Azure DevOps, GitHub Actions</li>
            </ul>
          </div>

          <div className="p-6 bg-green-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Programação & Scripting</h3>
            <ul className="space-y-1">
              <li>💻 Python (Django, AWS SDK, Automação)</li>
              <li>💻 TypeScript/JavaScript (NodeJS, ReactJS, Next.js)</li>
              <li>💻 C# / .NET Framework (MVC, Web API, SSIS)</li>
              <li>💻 Shell/Bash scripting, PowerShell</li>
              <li>💻 SQL (SQL Server, Oracle, DynamoDB)</li>
            </ul>
          </div>

          <div className="p-6 bg-orange-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Monitoramento & Segurança</h3>
            <ul className="space-y-1">
              <li>🔒 AWS WAF, Hardening de Segurança</li>
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
          Formação Acadêmica
        </h2>

        <div className="mb-6 pl-4 border-l-4 border-purple-500">
          <h3 className="text-xl font-semibold">MBA - Full Cycle - Engenharia de Software com IA</h3>
          <p className="text-gray-500">Status: Em Andamento | Conclusão Prevista: Dezembro 2026</p>
        </div>

        <div className="pl-4 border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold">Bacharelado em Ciência da Computação</h3>
          <p className="text-gray-600 dark:text-gray-400">Faculdade Uniesp</p>
          <p className="text-gray-500">Conclusão: Dezembro 2011</p>
        </div>
      </section>

      {/* Additional Info */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
          Atividades Adicionais
        </h2>
        <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-lg">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Participação ativa em fóruns de tecnologia e listas de discussão. Autor de artigos para
            as comunidades DevMedia e NetCoders (em Português). Acompanho continuamente tendências
            de desenvolvimento e tecnologia.
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
          href="/cv-pt.pdf"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg hover:scale-105 transition-transform shadow-lg"
        >
          Baixar Versão em PDF
        </a>
      </div>
    </div>
  );
}
