---
title: "Como configurei meu site com Next.js"
date: "2025-10-30"
description: "Aprenda como criar um site pessoal usando Next.js, TypeScript e Tailwind CSS."
tags: ["nextjs", "typescript", "tailwind"]
---

# Como configurei meu site com Next.js

Este é um exemplo de post em português. Você pode editar este arquivo diretamente no GitHub ou localmente.

## Por que Next.js?

Next.js é uma excelente escolha para sites pessoais porque:

- **Performance**: SSG (Static Site Generation) para páginas super rápidas
- **SEO-friendly**: Renderização server-side quando necessário
- **Developer Experience**: Hot reload, TypeScript, etc.
- **Deploy fácil**: Vercel, Netlify, Cloudflare Pages

## Estrutura do projeto

```
robsonalves.online/
├── app/              # Páginas usando App Router
├── components/       # Componentes React reutilizáveis
├── content/          # Conteúdo em Markdown (blog, CV)
│   ├── blog/
│   │   ├── pt/      # Posts em português
│   │   └── en/      # Posts em inglês
└── public/           # Arquivos estáticos
```

## Workflow GitOps

Para publicar um novo post:

1. Crie um arquivo `.md` em `content/blog/pt/`
2. Commit e push para o GitHub
3. Deploy automático via GitHub Actions
4. Site atualizado em ~2 minutos

Simples assim!

## Próximos passos

- [ ] Adicionar RSS feed
- [ ] Implementar busca de posts
- [ ] Analytics (Plausible ou similar)
- [ ] Newsletter (opcional)

---

**Escrito em:** 30 de Outubro de 2025
**Atualizado em:** 30 de Outubro de 2025
