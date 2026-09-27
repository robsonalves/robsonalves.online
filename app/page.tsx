import Link from "next/link";
import {
  CalendarClock,
  FileText,
  Newspaper,
  Mail,
  BarChart3,
  Cloud,
  Workflow,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { getLocale } from "@/lib/i18n/get-locale";
import { useTranslations } from "@/lib/i18n/use-translations";

export default async function Home() {
  const locale = await getLocale();
  const t = useTranslations(locale);

  return (
    <div className="space-y-16 py-4">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center py-8">
        <div className="space-y-6">
          <p className="section-label">{t.home.subtitle}</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {t.home.title}
          </h1>
          <p className="text-lg text-[var(--muted)] leading-relaxed max-w-xl">
            {t.home.description}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://github.com/robsonalves"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <GithubIcon size={18} />
              {t.home.github}
            </a>
            <a
              href="https://linkedin.com/in/robsonalves"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <LinkedinIcon size={18} />
              {t.home.linkedin}
            </a>
            <Link href="/schedule" className="btn-primary">
              <CalendarClock size={18} />
              {locale === "pt" ? "Agende uma Conversa" : "Schedule a Call"}
            </Link>
          </div>
        </div>

        <div className="terminal-window font-mono-ui text-sm">
          <div className="terminal-chrome">
            <span className="terminal-dot bg-[var(--signal-red)]" />
            <span className="terminal-dot bg-[var(--signal-amber)]" />
            <span className="terminal-dot bg-[var(--signal-green)]" />
            <span className="ml-2 text-xs text-[var(--muted)]">
              robson@ops:~
            </span>
          </div>
          <div className="p-5 space-y-2">
            <p>
              <span className="text-[var(--accent)]">$</span> whoami
            </p>
            <p className="text-[var(--muted)]">Robson Alves</p>
            <p>
              <span className="text-[var(--accent)]">$</span> role --current
            </p>
            <p className="text-[var(--muted)]">DevOps Engineer · SRE · Cloud Architect</p>
            <p>
              <span className="text-[var(--accent)]">$</span> stack --primary
            </p>
            <p className="text-[var(--muted)]">AWS · Azure · OCI · Kubernetes · Terraform</p>
            <p>
              <span className="text-[var(--accent)]">$</span>{" "}
              <span className="cursor-blink" />
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Link href="/cv" className="group surface-card p-6 flex flex-col gap-3">
          <FileText className="text-[var(--accent)]" size={28} />
          <h2 className="text-lg font-semibold">{t.home.cvCard.title}</h2>
          <p className="text-sm text-[var(--muted)]">{t.home.cvCard.description}</p>
          <span className="mt-auto text-xs font-mono-ui text-[var(--accent)] inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {locale === "pt" ? "ver mais" : "view more"} <ArrowRight size={14} />
          </span>
        </Link>

        <Link href="/blog" className="group surface-card p-6 flex flex-col gap-3">
          <Newspaper className="text-[var(--accent)]" size={28} />
          <h2 className="text-lg font-semibold">{t.home.blogCard.title}</h2>
          <p className="text-sm text-[var(--muted)]">{t.home.blogCard.description}</p>
          <span className="mt-auto text-xs font-mono-ui text-[var(--accent)] inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {locale === "pt" ? "ver mais" : "view more"} <ArrowRight size={14} />
          </span>
        </Link>

        <Link href="/contact" className="group surface-card p-6 flex flex-col gap-3">
          <Mail className="text-[var(--accent)]" size={28} />
          <h2 className="text-lg font-semibold">{t.home.contactCard.title}</h2>
          <p className="text-sm text-[var(--muted)]">{t.home.contactCard.description}</p>
          <span className="mt-auto text-xs font-mono-ui text-[var(--accent)] inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {locale === "pt" ? "ver mais" : "view more"} <ArrowRight size={14} />
          </span>
        </Link>

        <Link href="/github" className="group surface-card p-6 flex flex-col gap-3">
          <BarChart3 className="text-[var(--accent)]" size={28} />
          <h2 className="text-lg font-semibold">{t.home.githubCard.title}</h2>
          <p className="text-sm text-[var(--muted)]">{t.home.githubCard.description}</p>
          <span className="mt-auto text-xs font-mono-ui text-[var(--accent)] inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {locale === "pt" ? "ver mais" : "view more"} <ArrowRight size={14} />
          </span>
        </Link>
      </section>

      {/* Highlights */}
      <section className="surface-card p-8 md:p-10">
        <p className="section-label mb-2">{t.home.expertise}</p>
        <div className="grid md:grid-cols-3 gap-8 mt-4">
          <div className="flex gap-4">
            <Cloud className="text-[var(--accent)] shrink-0" size={24} />
            <div>
              <h3 className="font-semibold mb-1">{t.home.expertiseCards.cloud.title}</h3>
              <p className="text-sm text-[var(--muted)]">{t.home.expertiseCards.cloud.description}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Workflow className="text-[var(--accent)] shrink-0" size={24} />
            <div>
              <h3 className="font-semibold mb-1">{t.home.expertiseCards.devops.title}</h3>
              <p className="text-sm text-[var(--muted)]">{t.home.expertiseCards.devops.description}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <ShieldCheck className="text-[var(--accent)] shrink-0" size={24} />
            <div>
              <h3 className="font-semibold mb-1">{t.home.expertiseCards.security.title}</h3>
              <p className="text-sm text-[var(--muted)]">{t.home.expertiseCards.security.description}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
