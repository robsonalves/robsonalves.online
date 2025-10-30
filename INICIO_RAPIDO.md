# Início Rápido - robsonalves.online

## Status do Projeto

✅ **Projeto criado e funcionando!**

- Next.js 16 com TypeScript
- Tailwind CSS configurado
- Build testado e aprovado
- 4 páginas principais criadas
- Componentes base prontos
- Exemplos de blog posts
- GitHub Actions configurado

---

## Teste Agora Mesmo

```bash
# 1. Rodar servidor de desenvolvimento
npm run dev

# 2. Abrir no navegador
# http://localhost:3000
```

Você verá:
- ✅ Home com seu nome e bio
- ✅ CV/Resume com experiências
- ✅ Blog com posts de exemplo
- ✅ Página de contato
- ✅ Botão de tradução PT/EN (básico)

---

## Estrutura do Projeto

```
robsonalves.online/
├── app/                    # Páginas (Next.js App Router)
│   ├── page.tsx           # Home
│   ├── cv/                # CV/Resume
│   ├── blog/              # Blog
│   └── contact/           # Contato
├── components/            # Componentes React
│   ├── Header.tsx         # Cabeçalho com menu
│   ├── Footer.tsx         # Rodapé
│   └── LanguageSwitcher.tsx # Botão PT/EN
├── content/               # Conteúdo Markdown
│   └── blog/
│       ├── pt/            # Posts em português
│       └── en/            # Posts em inglês
├── public/                # Arquivos estáticos
└── [arquivos de config]
```

---

## Personalize em 5 Minutos

### 1. Home (`app/page.tsx`)

Mude as linhas 8-12:
```typescript
<h1 className="text-5xl font-bold">SEU NOME AQUI</h1>
<p className="text-2xl text-gray-600 dark:text-gray-400">
  Seu Título | Sua Especialidade
</p>
<p className="text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto">
  Sua bio aqui...
</p>
```

### 2. CV (`app/cv/page.tsx`)

Substitua os dados de exemplo pelas suas experiências reais.

### 3. Contato (`app/contact/page.tsx`)

Linhas 3-22 - atualize seus links sociais:
```typescript
{
  name: "GitHub",
  url: "https://github.com/SEU_USUARIO",
  username: "@SEU_USUARIO",
},
```

### 4. Header (`components/Header.tsx`)

Linha 18 - mude o logo "RA" para suas iniciais.

---

## Deploy em 10 Minutos

### 1. Criar repositório no GitHub

```bash
# Inicializar Git
git init

# Adicionar tudo
git add .

# Commit inicial
git commit -m "Initial commit"

# Criar repo no GitHub
# https://github.com/new

# Adicionar remote
git remote add origin https://github.com/SEU_USUARIO/robsonalves.online.git

# Push
git push -u origin main
```

### 2. Deploy na Vercel

1. Acesse https://vercel.com/new
2. Importe seu repositório GitHub
3. Clique "Deploy"
4. Pronto! Site no ar em ~2 minutos

Seu site estará em:
`https://robsonalves-online.vercel.app`

### 3. Configurar domínio `robsonalves.online`

1. Na Vercel: Settings → Domains
2. Adicione `robsonalves.online`
3. Configure DNS no registrador:
   ```
   A    @    76.76.21.21
   CNAME www  cname.vercel-dns.com
   ```
4. Aguarde propagação (~10min)

---

## GitOps: Publicar Conteúdo via Git

### Publicar novo post:

```bash
# 1. Criar post
cat > content/blog/pt/meu-post.md << 'EOF'
---
title: "Meu Primeiro Post"
date: "2025-10-30"
description: "Testando o blog"
tags: ["teste"]
---

# Olá Mundo!

Este é meu primeiro post.
EOF

# 2. Commit e push
git add content/blog/pt/meu-post.md
git commit -m "Post: Meu Primeiro Post"
git push

# 3. Deploy automático!
# Vercel detecta o push e faz deploy
# Site atualizado em ~2 minutos
```

### Atualizar CV:

```bash
vim app/cv/page.tsx
git add app/cv/page.tsx
git commit -m "Atualiza CV"
git push
```

---

## Checklist: Pronto para Produção

Antes de fazer deploy público:

- [ ] Personalizei Home com meu nome e bio
- [ ] Atualizei CV com minhas experiências reais
- [ ] Configurei links de contato corretos
- [ ] Removi dados de exemplo
- [ ] Testei localmente (`npm run dev`)
- [ ] Build funciona (`npm run build`)
- [ ] Criei repositório no GitHub
- [ ] Fiz deploy na Vercel
- [ ] Configurei domínio custom
- [ ] Testei site em produção

---

## Comandos Úteis

```bash
# Desenvolvimento
npm run dev          # Roda servidor local (http://localhost:3000)

# Build
npm run build        # Build para produção
npm run start        # Roda build de produção localmente

# Qualidade
npm run lint         # Verifica erros no código

# Git
git status           # Ver alterações
git add .            # Adicionar tudo
git commit -m "msg"  # Commit
git push             # Enviar para GitHub
```

---

## Precisa de Ajuda?

📖 **Documentação completa:** Ver `README.md`

📋 **Próximos passos:** Ver `PROXIMOS_PASSOS.md`

🐛 **Problemas?**
- Verifique se Node.js 18+ está instalado: `node -v`
- Delete `node_modules` e reinstale: `rm -rf node_modules && npm install`
- Limpe cache do Next: `rm -rf .next`

---

## Está Pronto!

Seu site está 100% funcional. Agora é só:

1. ✅ Personalizar conteúdo
2. ✅ Fazer push para GitHub
3. ✅ Deploy na Vercel
4. ✅ Configurar domínio
5. 🎉 Compartilhar com o mundo!

Boa sorte! 🚀
