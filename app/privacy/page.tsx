import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for itenx technologies limited. How we collect, use, and protect your information.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <article className="bg-[#0A0C10]">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <PageHero
          title="Privacy Policy"
          description="How itenx technologies limited collects, uses, and protects your information."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        />

        <div className="prose prose-invert mx-auto max-w-3xl space-y-8 pt-8">
          <section>
            <h2 className="font-heading text-xl font-semibold text-white">
              1. Information We Collect
            </h2>
            <p className="mt-4 text-slate-400">
              We collect information you provide when you contact us (name,
              email, message content). We may also collect usage data when you
              visit our website, such as IP address and browser information.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-white">
              2. How We Use Your Information
            </h2>
            <p className="mt-4 text-slate-400">
              We use your contact information to respond to inquiries and
              provide services. We may use usage data to improve our website and
              services. We do not sell your personal information to third
              parties.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-white">
              3. Data Protection
            </h2>
            <p className="mt-4 text-slate-400">
              We take reasonable measures to protect your information from
              unauthorized access, alteration, or disclosure. We use industry
              standard practices for data storage and transmission.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-white">
              4. Cookies
            </h2>
            <p className="mt-4 text-slate-400">
              Our website may use cookies for essential functionality and
              analytics. You can control cookie preferences through your browser
              settings.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-white">
              5. Third-Party Services
            </h2>
            <p className="mt-4 text-slate-400">
              We may use third-party services for analytics, hosting, and
              communication. These services have their own privacy policies. We
              do not share your personal data with third parties except as
              necessary to provide our services or as required by law.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-white">
              6. Contact
            </h2>
            <p className="mt-4 text-slate-400">
              For questions about this privacy policy, contact us at
              hello@itenx.com.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
