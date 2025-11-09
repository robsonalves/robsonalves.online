export const translations = {
  en: {
    nav: {
      home: "Home",
      cv: "Resume",
      blog: "Blog",
      contact: "Contact",
      schedule: "Schedule",
    },
    home: {
      title: "Robson Alves",
      subtitle: "DevOps Engineer | SRE | Cloud Architect",
      description: "Specialist in cloud infrastructure, automation, and scalable systems development. Passionate about solving complex problems with simple solutions.",
      github: "GitHub",
      linkedin: "LinkedIn",
      expertise: "Expertise",
      cvCard: {
        title: "Resume",
        description: "View my professional experience, skills, and certifications.",
      },
      blogCard: {
        title: "Blog",
        description: "Articles about tech, DevOps, cloud, and development.",
      },
      contactCard: {
        title: "Contact",
        description: "Get in touch with me through social media.",
      },
      expertiseCards: {
        cloud: {
          title: "Cloud Platforms",
          description: "AWS, Azure, OCI",
        },
        devops: {
          title: "DevOps & SRE",
          description: "K8s, Docker, Terraform, GitOps",
        },
        security: {
          title: "Security",
          description: "AWS WAF, Hardening, Compliance",
        },
      },
    },
    cv: {
      title: "Resume",
      download: "Download Resume (PDF)",
      experience: "Professional Experience",
      skills: "Technical Skills",
      education: "Education",
      additional: "Additional Activities",
      current: "Current",
      graduated: "Graduated",
    },
    blog: {
      title: "Technical Blog",
      subtitle: "Thoughts on DevOps, Cloud Architecture, and Infrastructure",
      readTime: "read",
      noPostsYet: "No posts published yet. Coming soon!",
      regularUpdates: "Regular Updates",
      regularUpdatesDesc: "New articles published regularly covering the latest in DevOps, Cloud, and Infrastructure topics.",
    },
    contact: {
      title: "Let's Connect",
      subtitle: "Always open to discuss technology, DevOps, cloud, and collaboration opportunities.",
      getInTouch: "Get in Touch",
      getInTouchDesc: "Prefer to send a direct message? Use LinkedIn's contact form or email me at",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  pt: {
    nav: {
      home: "Início",
      cv: "Currículo",
      blog: "Blog",
      contact: "Contato",
      schedule: "Agendar",
    },
    home: {
      title: "Robson Alves",
      subtitle: "Engenheiro DevOps | SRE | Arquiteto Cloud",
      description: "Especialista em infraestrutura cloud, automação e desenvolvimento de sistemas escaláveis. Apaixonado por resolver problemas complexos com soluções simples.",
      github: "GitHub",
      linkedin: "LinkedIn",
      expertise: "Especialidades",
      cvCard: {
        title: "Currículo",
        description: "Veja minha experiência profissional, habilidades e certificações.",
      },
      blogCard: {
        title: "Blog",
        description: "Artigos sobre tecnologia, DevOps, cloud e desenvolvimento.",
      },
      contactCard: {
        title: "Contato",
        description: "Entre em contato através das redes sociais.",
      },
      expertiseCards: {
        cloud: {
          title: "Plataformas Cloud",
          description: "AWS, Azure, OCI",
        },
        devops: {
          title: "DevOps & SRE",
          description: "K8s, Docker, Terraform, GitOps",
        },
        security: {
          title: "Segurança",
          description: "AWS WAF, Hardening, Compliance",
        },
      },
    },
    cv: {
      title: "Curriculum Vitae",
      download: "Baixar Versão PDF",
      experience: "Experiência Profissional",
      skills: "Habilidades Técnicas",
      education: "Educação",
      additional: "Atividades Adicionais",
      current: "Atual",
      graduated: "Formado",
    },
    blog: {
      title: "Blog Técnico",
      subtitle: "Reflexões sobre DevOps, Arquitetura Cloud e Infraestrutura",
      readTime: "leitura",
      noPostsYet: "Nenhum post publicado ainda. Em breve!",
      regularUpdates: "Atualizações Regulares",
      regularUpdatesDesc: "Novos artigos publicados regularmente sobre os tópicos mais recentes em DevOps, Cloud e Infraestrutura.",
    },
    contact: {
      title: "Vamos Conversar",
      subtitle: "Sempre aberto para discutir tecnologia, DevOps, cloud e oportunidades de colaboração.",
      getInTouch: "Entre em Contato",
      getInTouchDesc: "Prefere enviar uma mensagem direta? Use o formulário de contato do LinkedIn ou envie um email para",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
  },
};

export type Locale = keyof typeof translations;
export type TranslationKeys = typeof translations.en;
