---
title: "Construindo o Nodefort: um kit Terraform hardened pra EKS (e por que estou fazendo isso em público)"
date: "2026-08-03T15:00:00.000Z"
description: "Depois de subir EKS 'do jeito certo' repetidas vezes em projetos diferentes, resolvi parar de reescrever a mesma base toda vez. Nasceu o Nodefort: um kit Terraform hardened, mais um ebook de runbooks de troubleshooting, sendo validado publicamente antes de virar produto fechado."
tags: ["kubernetes","terraform","eks","devops"]
readTime: "4 min"
author: "Robson Alves"
image: "https://images.unsplash.com/photo-1670057046254-3b5095eb4b66?ixid=M3w4MjQ1OTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzAwODA4NTd8&ixlib=rb-4.1.0&w=1200&q=80&fit=crop"
---
# Construindo o Nodefort: um kit Terraform hardened pra EKS (e por que estou fazendo isso em público)

---

## O problema que eu já resolvi umas cinco vezes

Todo projeto novo de EKS que eu pego como consultor SRE começa com a mesma lista: control plane com endpoint privado, node groups Graviton por custo/performance, IRSA em vez de credenciais estáticas espalhadas, criptografia em repouso, External Secrets em vez de secret solto direto no manifesto, acesso sem SSH via SSM Session Manager. Nenhum item dessa lista é novidade — é o "jeito certo" de subir EKS de produção, documentado em blog post atrás de blog post.

O que ninguém documenta é o trabalho chato de reescrever essa base do zero em cada projeto novo. Fiz isso pela quinta vez há algumas semanas e resolvi parar: empacotei tudo num kit Terraform reusável — módulos de cluster, node-groups, irsa e external-secrets, com um exemplo end-to-end — pra nunca mais precisar reconstruir essa checklist do zero.

Chamei de **Nodefort**.

## O kit sozinho não é o produto todo

Hardening bem feito evita boa parte dos incidentes idiotas — mas os sérios ainda vão acontecer, porque infraestrutura correta não é a mesma coisa que operação sem incidente. Foi por isso que, junto com o kit, comecei a escrever um ebook curto (~42 páginas) só de runbooks de troubleshooting: não mais um guia de comandos `kubectl`, mas a metodologia estruturada que uso de verdade quando um incidente cai em produção — Identificar → Isolar → Verificar → Hipótese → Testar → Resolver → Confirmar — aplicada a sete cenários realistas: 502 intermitente que não é bug seu, deploy que "foi" no Git mas não sincronizou no cluster, `CrashLoopBackOff` que só acontece em produção, certificado expirando calado, autoscaler que trava.

Introdução e capítulo 1 são gratuitos, sem pedir cartão.

## Por que fazer isso em público

`terraform init` e `terraform validate` rodam limpos nos módulos, mas eu ainda não fiz um `apply` de verdade contra conta própria — esse é o próximo passo antes de eu confiar 100% em chamar isso de "pronto pra produção". Em vez de esperar meses num canto polindo sozinho até "estar perfeito", decidi publicar a landing e validar demanda real antes de fechar o resto: se ninguém achar isso útil, é sinal barato de aprender agora, não depois de meses investidos.

Se você já configurou EKS hardened mais de uma vez e sabe exatamente a dor que estou descrevendo, dá uma olhada — feedback sincero vale mais que elogio nesse estágio:

**[nodefort.robsonalves.online](https://nodefort.robsonalves.online)**
