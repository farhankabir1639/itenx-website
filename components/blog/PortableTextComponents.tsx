import type { PortableTextComponents } from "@portabletext/react";

export const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="font-heading mt-12 mb-4 text-2xl font-bold text-white first:mt-0 sm:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-heading mt-8 mb-3 text-xl font-semibold text-white sm:text-2xl">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mb-6 leading-relaxed text-slate-300">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mb-6 border-l-4 border-[#00D8FF]/50 bg-[#00D8FF]/5 py-2 pl-6 pr-4 italic text-slate-300">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 ml-6 list-disc space-y-2 text-slate-300">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 ml-6 list-decimal space-y-2 text-slate-300">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm text-[#00D8FF]">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const href = value?.href ?? "#";
      const isExternal = href.startsWith("http");
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="font-medium text-[#00D8FF] underline decoration-[#00D8FF]/50 underline-offset-2 transition-colors hover:text-cyan-300 hover:decoration-cyan-300"
        >
          {children}
        </a>
      );
    },
  },
};
