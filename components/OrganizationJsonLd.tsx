const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://itenx.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "itenx technologies limited",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/favicon.ico`,
  },
  description:
    "World-class engineering, design, and software solutions. Trusted technology outsourcing partner in Bangladesh.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressRegion: "Dhaka",
    addressCountry: "BD",
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Bangladesh",
    },
    {
      "@type": "Place",
      name: "Dhaka",
    },
    {
      "@type": "AdministrativeArea",
      name: "Global",
    },
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 23.8103,
      longitude: 90.4125,
    },
    geoRadius: "100000000",
  },
  sameAs: [
    "https://www.linkedin.com/company/itenx",
    "https://twitter.com/itenx",
    "https://github.com/itenx",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@itenx.com",
    availableLanguage: ["English", "Bengali"],
    areaServed: "BD",
    responseTime: "P1D",
  },
};

export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
