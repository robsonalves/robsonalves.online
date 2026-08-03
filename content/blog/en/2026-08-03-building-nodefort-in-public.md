---
title: "Building Nodefort: a hardened Terraform kit for EKS (and why I'm doing it in public)"
date: "2026-08-03T15:00:00.000Z"
description: "After setting up EKS 'the right way' across different projects one too many times, I stopped rewriting the same base from scratch. Nodefort was born: a hardened Terraform kit plus a troubleshooting-runbooks ebook, being validated publicly before it becomes a closed product."
tags: ["kubernetes","terraform","eks","devops"]
readTime: "4 min"
author: "Robson Alves"
image: "https://images.unsplash.com/photo-1670057046254-3b5095eb4b66?ixid=M3w4MjQ1OTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzAwODA4NTd8&ixlib=rb-4.1.0&w=1200&q=80&fit=crop"
---
# Building Nodefort: a hardened Terraform kit for EKS (and why I'm doing it in public)

---

## The problem I'd already solved about five times

Every new EKS project I pick up as an SRE consultant starts with the same list: control plane with a private endpoint, Graviton node groups for cost/performance, IRSA instead of static credentials scattered around, encryption at rest, External Secrets instead of a loose secret sitting in a manifest, no-SSH access via SSM Session Manager. None of that is news — it's the "right way" to stand up production EKS, documented in blog post after blog post.

What nobody documents is the tedious work of rewriting that base from scratch on every new project. I did it for the fifth time a few weeks ago and decided to stop: I packaged all of it into a reusable Terraform kit — cluster, node-groups, irsa, and external-secrets modules, with an end-to-end example — so I'd never have to rebuild that checklist from zero again.

I called it **Nodefort**.

## The kit alone isn't the whole product

Good hardening prevents most of the dumb incidents — but the serious ones will still happen, because correct infrastructure isn't the same thing as incident-free operations. That's why, alongside the kit, I started writing a short ebook (~42 pages) of nothing but troubleshooting runbooks: not another `kubectl` command reference, but the actual structured methodology I use when an incident hits production — Identify → Isolate → Verify → Hypothesize → Test → Resolve → Confirm — applied to seven realistic scenarios: an intermittent 502 that isn't your code's fault, a deploy that "went" into Git but never synced to the cluster, a `CrashLoopBackOff` that only happens in production, a certificate expiring silently, an autoscaler that stalls.

Intro and chapter 1 are free, no card required.

## Why do this in public

`terraform init` and `terraform validate` run clean on the modules, but I haven't done a real `apply` against my own account yet — that's the next step before I fully trust calling this "production-ready." Instead of spending months polishing alone in a corner until it's "perfect," I decided to publish the landing page and validate real demand before finishing the rest: if nobody finds this useful, that's cheap signal to learn now, not months of sunk effort later.

If you've configured hardened EKS more than once and know exactly the pain I'm describing, take a look — honest feedback is worth more than praise at this stage:

**[nodefort.robsonalves.online](https://nodefort.robsonalves.online)**
