const CYAN = "#00D8FF";

const services = [
  "Software Development",
  "Web Development",
  "UI/UX Design",
  "IT Infrastructure",
  "Consulting",
  "Digital Transformation",
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl space-y-24 px-4 pb-16 pt-8 sm:px-6">
      {/* Hero */}
      <section className="pt-8 text-center sm:pt-12">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          We Build the Technology You Need
        </h1>
        <p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-base">
          itenx technologies limited is a technology outsourcing partner for software, web, design, IT, consulting,
          and digital transformation.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="space-y-6">
        <h2 className="text-xl font-semibold">Services</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((name) => (
            <div
              key={name}
              className="rounded-lg border border-slate-800/80 bg-black/10 p-4 text-left text-sm text-slate-200"
            >
              <h3 className="mb-1 text-sm font-semibold" style={{ color: CYAN }}>
                {name}
              </h3>
              <p className="text-xs text-slate-400">
                Bespoke solutions delivered by senior engineers, designers, and consultants.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="space-y-6">
        <h2 className="text-xl font-semibold">Contact</h2>
        <form className="grid gap-4 rounded-lg border border-slate-800/80 bg-black/10 p-4 text-sm sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <label htmlFor="name" className="text-xs text-slate-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full rounded-md border border-slate-800 bg-black/40 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-[#00D8FF]"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="text-xs text-slate-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-md border border-slate-800 bg-black/40 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-[#00D8FF]"
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label htmlFor="message" className="text-xs text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full rounded-md border border-slate-800 bg-black/40 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-[#00D8FF]"
              placeholder="Tell us briefly about your project..."
            />
          </div>
          <button
            type="submit"
            style={{ backgroundColor: CYAN, color: "#0A0C10" }}
            className="mt-2 inline-flex items-center justify-center rounded-md px-4 py-2 text-xs font-medium hover:opacity-90"
          >
            Send message
          </button>
        </form>
      </section>
    </main>
  );
}
