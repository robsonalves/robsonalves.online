# robsonalves.online

Meu site pessoal construído com Next.js, TypeScript e Tailwind CSS. Totalmente gerenciável via Git (GitOps).

## Stack Tecnológica

- **Framework**: Next.js 16 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Conteúdo**: Markdown/MDX
- **Deploy**: Vercel (recomendado)
- **i18n**: Português (padrão) + Inglês

## Estrutura do Projeto

```
robsonalves.online/
├── app/                    # Páginas e rotas (Next.js App Router)
│   ├── page.tsx           # Home
│   ├── cv/                # CV/Resume
│   ├── blog/              # Lista de posts
│   ├── contact/           # Contato
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Estilos globais
├── components/            # Componentes React reutilizáveis
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── LanguageSwitcher.tsx
├── content/               # Conteúdo em Markdown (gerenciado via Git)
│   ├── blog/
│   │   ├── pt/           # Posts em português
│   │   └── en/           # Posts em inglês
│   └── cv/               # CV em diferentes idiomas
├── public/                # Arquivos estáticos
└── README.md             # Este arquivo
```

## Como rodar localmente

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/SEU_USUARIO/robsonalves.online.git
cd robsonalves.online

# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Como adicionar conteúdo (GitOps)

### Adicionar um novo post no blog

1. Crie um arquivo `.md` em `content/blog/pt/` (português) ou `content/blog/en/` (inglês)
2. Adicione o frontmatter:

```markdown
---
title: "Título do Post"
date: "2025-10-30"
description: "Descrição breve do post"
tags: ["tag1", "tag2"]
---

# Conteúdo do post aqui...
```

3. Commit e push:

```bash
git add content/blog/pt/meu-novo-post.md
git commit -m "Adiciona novo post: Meu Novo Post"
git push
```

4. Deploy automático em ~2 minutos

### Atualizar CV

Edite o arquivo `app/cv/page.tsx` e faça commit:

```bash
git add app/cv/page.tsx
git commit -m "Atualiza CV"
git push
```

### Trocar idioma

O site suporta português (padrão) e inglês. Use o botão no header para alternar.

## Deploy

### Vercel (Recomendado)

1. Faça push do código para GitHub
2. Conecte o repositório no [Vercel](https://vercel.com)
3. Configure o domínio `robsonalves.online`
4. Deploy automático a cada push na branch `main`

### Netlify

1. Conecte o repositório no [Netlify](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Configure o domínio

### Cloudflare Pages

1. Conecte o repositório no [Cloudflare Pages](https://pages.cloudflare.com)
2. Framework preset: Next.js
3. Configure o domínio

## Scripts disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção
npm run start    # Servidor de produção
npm run lint     # Linter ESLint
```

## Personalização

### Cores e tema

Edite `tailwind.config.ts` para customizar cores:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
    },
  },
},
```

### Metadata e SEO

Edite `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Seu Nome - Seu Título",
  description: "Sua descrição",
};
```

### Links de contato

Edite `app/contact/page.tsx` e adicione/remova seus links sociais.

## Roadmap

- [ ] Implementar leitura de posts via MDX
- [ ] Adicionar RSS feed
- [ ] Implementar busca de posts
- [ ] Analytics (Plausible/Umami)
- [ ] Dark mode toggle manual
- [ ] Newsletter (opcional)
- [ ] Comentários nos posts (giscus)

## Licença

MIT - Sinta-se livre para usar este projeto como base para o seu próprio site!

## Contato

- **Email**: robson@robsonalves.online
- **GitHub**: [@robsonalves](https://github.com/robsonalves)
- **LinkedIn**: [/in/robsonalves](https://linkedin.com/in/robsonalves)

---

Feito com ❤️ por Robson Alves
