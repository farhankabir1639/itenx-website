import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for itenx technologies limited. Conditions for using our website and services.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <article className="bg-[#0A0C10]">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <PageHero
          title="Terms of Service"
          description="Conditions for using the itenx technologies limited website and services."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]}
        />

        <div className="prose prose-invert mx-auto max-w-3xl space-y-8 pt-8">
          <section>
            <h2 className="font-heading text-xl font-semibold text-white">
              1. Acceptance
            </h2>
            <p className="mt-4 text-slate-400">
              By accessing or using the itenx technologies limited website, you
              agree to these Terms of Service. If you do not agree, please do not
              use our website.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-white">
              2. Use of Website
            </h2>
            <p className="mt-4 text-slate-400">
              You may use our website for lawful purposes only. You may not use
              it to transmit harmful or illegal content, interfere with its
              operation, or attempt to gain unauthorized access to our systems.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-white">
              3. Intellectual Property
            </h2>
            <p className="mt-4 text-slate-400">
              Content on this website, including text, graphics, and design, is
              the property of itenx technologies limited and protected by
              applicable intellectual property laws. You may not reproduce or
              distribute it without our written permission.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-white">
              4. Services
            </h2>
            <p className="mt-4 text-slate-400">
              Specific technology services are governed by separate agreements.
              Contact us to discuss project terms, deliverables, and
              confidentiality.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-white">
              5. Limitation of Liability
            </h2>
            <p className="mt-4 text-slate-400">
              To the fullest extent permitted by law, itenx technologies limited
              shall not be liable for any indirect, incidental, special, or
              consequential damages arising from your use of our website or
              services. Our liability is limited to the amount paid for specific
              services, where applicable.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-white">
              6. Contact
            </h2>
            <p className="mt-4 text-slate-400">
              For questions about these terms, contact us at hello@itenx.com.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
