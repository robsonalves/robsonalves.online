# Próximos Passos - robsonalves.online

## Status Atual

✅ Projeto Next.js criado com sucesso
✅ TypeScript configurado
✅ Tailwind CSS funcionando
✅ Estrutura de pastas criada
✅ Páginas principais (Home, CV, Blog, Contato)
✅ Componentes base (Header, Footer, LanguageSwitcher)
✅ Build testado e funcionando
⏳ i18n precisa ser implementado (App Router usa abordagem diferente)

---

## 1. Testar Localmente

```bash
# Rodar servidor de desenvolvimento
npm run dev
```

Abra http://localhost:3000 e veja o site funcionando!

---

## 2. Personalizar Conteúdo

### 2.1 Atualizar informações pessoais

**Home (`app/page.tsx`)**
- Edite seu nome, título e descrição

**CV (`app/cv/page.tsx`)**
- Adicione suas experiências reais
- Atualize skills, certificações, educação
- Substitua os dados de exemplo

**Contato (`app/contact/page.tsx`)**
- Atualize seus links sociais (GitHub, LinkedIn, etc)
- Coloque seu email real
- Adicione/remova plataformas conforme necessário

### 2.2 Adicionar foto de perfil

```bash
# Adicione sua foto em:
public/images/profile.jpg

# Depois use no código:
<Image src="/images/profile.jpg" alt="Robson Alves" width={200} height={200} />
```

---

## 3. Implementar i18n (PT/EN) no App Router

O Next.js 16 App Router não usa `i18n` no `next.config.ts`. Precisa de abordagem manual:

### Opção A: Usar middleware (recomendado)

Crie `middleware.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';

const locales = ['pt', 'en'];
const defaultLocale = 'pt';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Verifica se já tem locale na URL
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redireciona para /pt ou /en baseado no Accept-Language
  const locale = defaultLocale; // Ou detecte do header
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)'],
};
```

### Opção B: Usar biblioteca (mais fácil)

```bash
npm install next-intl
```

Ver docs: https://next-intl-docs.vercel.app/

---

## 4. Configurar Git

```bash
# Inicializar repositório
git init

# Adicionar todos os arquivos
git add .

# Primeiro commit
git commit -m "Initial commit: robsonalves.online"

# Criar repositório no GitHub
# https://github.com/new

# Adicionar remote
git remote add origin https://github.com/SEU_USUARIO/robsonalves.online.git

# Push
git push -u origin main
```

---

## 5. Deploy na Vercel

### Passo a passo:

1. Acesse https://vercel.com
2. Clique em "New Project"
3. Importe seu repositório do GitHub
4. Vercel detecta Next.js automaticamente
5. Clique em "Deploy"
6. Aguarde ~2 minutos
7. Site estará em: `https://robsonalves-online.vercel.app`

### Configurar domínio custom:

1. No dashboard do projeto na Vercel
2. Settings → Domains
3. Adicione `robsonalves.online` e `www.robsonalves.online`
4. Siga as instruções para configurar DNS no registrador do domínio
5. Aguarde propagação (até 48h, geralmente 5-10min)

---

## 6. Implementar Sistema de Blog com MDX

### Instalar dependências:

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
npm install gray-matter remark remark-gfm rehype-highlight
```

### Criar utilitário para ler posts:

```typescript
// lib/blog.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getBlogPosts(locale: string) {
  const postsDirectory = path.join(process.cwd(), 'content/blog', locale);
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ''),
      frontmatter: data,
      content,
    };
  });
}
```

Ver tutorial completo: https://nextjs.org/docs/app/building-your-application/configuring/mdx

---

## 7. Adicionar Analytics (Opcional)

### Opção A: Vercel Analytics (grátis)

```bash
npm install @vercel/analytics
```

Em `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

// No final do <body>
<Analytics />
```

### Opção B: Plausible (privacidade-first)

```typescript
// Em app/layout.tsx no <head>
<Script defer data-domain="robsonalves.online" src="https://plausible.io/js/script.js" />
```

---

## 8. Melhorias Futuras

- [ ] **RSS Feed** para o blog
- [ ] **Busca de posts** (Algolia ou local)
- [ ] **Dark mode toggle** manual (além do automático)
- [ ] **Comentários** nos posts (giscus, utterances)
- [ ] **Newsletter** (Mailchimp, ConvertKit)
- [ ] **Sitemap.xml** automático
- [ ] **Open Graph images** automáticas
- [ ] **Reading time** nos posts
- [ ] **Tags/Categorias** no blog
- [ ] **Related posts** no final de cada post

---

## 9. GitOps Workflow

Depois de fazer deploy:

### Adicionar novo post:

```bash
# 1. Criar arquivo
vim content/blog/pt/meu-novo-post.md

# 2. Escrever conteúdo
---
title: "Meu Post"
date: "2025-10-30"
description: "..."
tags: ["tag1"]
---

Conteúdo aqui...

# 3. Commit e push
git add content/blog/pt/meu-novo-post.md
git commit -m "Post: Meu Novo Post"
git push

# 4. Deploy automático (Vercel)
# Site atualizado em ~2min
```

### Atualizar CV:

```bash
# 1. Editar
vim app/cv/page.tsx

# 2. Commit e push
git add app/cv/page.tsx
git commit -m "Atualiza CV com nova experiência"
git push

# 3. Deploy automático
```

---

## 10. Recursos Úteis

### Documentação:
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs
- Vercel: https://vercel.com/docs

### Inspiração de design:
- https://leerob.io (Lee Robinson - VP Vercel)
- https://rauchg.com (Guillermo Rauch - CEO Vercel)
- https://kentcdodds.com (Kent C. Dodds)
- https://samuelkraft.com

### Icons:
- https://heroicons.com (Tailwind)
- https://lucide.dev
- https://react-icons.github.io/react-icons

### Fontes:
- https://fonts.google.com
- https://fontsource.org

---

## Pronto para começar?

```bash
# Teste localmente
npm run dev

# Build
npm run build

# Commit
git add .
git commit -m "Setup inicial do site"
git push

# Deploy na Vercel
# https://vercel.com
```

Boa sorte! 🚀
