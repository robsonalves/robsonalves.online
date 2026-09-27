import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/BrandIcons";

export default function Contact() {
  const contacts = [
    {
      name: "GitHub",
      icon: GithubIcon,
      url: "https://github.com/robsonalves",
      username: "@robsonalves",
    },
    {
      name: "LinkedIn",
      icon: LinkedinIcon,
      url: "https://linkedin.com/in/robsonalves",
      username: "/in/robsonalves",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:hi@robsonalves.online",
      username: "hi@robsonalves.online",
    },
    {
      name: "Twitter/X",
      icon: XIcon,
      url: "https://twitter.com/robdevops",
      username: "@robdevops",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-10">
      <div className="space-y-3">
        <p className="section-label">contact</p>
        <h1 className="text-4xl font-bold tracking-tight">Let's Connect</h1>
        <p className="text-lg text-[var(--muted)]">
          Always open to discuss technology, DevOps, cloud, and collaboration opportunities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {contacts.map((contact) => (
          <a
            key={contact.name}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group surface-card p-6 flex items-center gap-4"
          >
            <contact.icon className="text-[var(--accent)]" size={28} />
            <div>
              <h2 className="text-lg font-semibold">{contact.name}</h2>
              <p className="text-sm text-[var(--muted)] font-mono-ui">{contact.username}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="surface-card p-6">
        <h2 className="text-xl font-semibold mb-3">Get in Touch</h2>
        <p className="text-[var(--muted)]">
          Prefer to send a direct message? Use LinkedIn's contact form
          or email me at <strong className="text-[var(--foreground)]">hi@robsonalves.online</strong>
        </p>
      </div>
    </div>
  );
}
