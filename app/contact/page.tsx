export default function Contact() {
  const contacts = [
    {
      name: "GitHub",
      icon: "🐙",
      url: "https://github.com/robsonalves",
      username: "@robsonalves",
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://linkedin.com/in/robsonalves",
      username: "/in/robsonalves",
    },
    {
      name: "Email",
      icon: "📧",
      url: "mailto:hi@robsonalves.online",
      username: "hi@robsonalves.online",
    },
    {
      name: "Twitter/X",
      icon: "🐦",
      url: "https://twitter.com/robdevops",
      username: "@robdevops",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Let's Connect
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Always open to discuss technology, DevOps, cloud, and collaboration opportunities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {contacts.map((contact) => (
          <a
            key={contact.name}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 border-2 border-gray-200 dark:border-gray-700 rounded-2xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="text-4xl">{contact.icon}</span>
              <h2 className="text-2xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {contact.name}
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400">{contact.username}</p>
          </a>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Prefer to send a direct message? Use LinkedIn's contact form
          or email me at <strong>hi@robsonalves.online</strong>
        </p>
      </div>
    </div>
  );
}
