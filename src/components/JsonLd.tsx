import { site } from "@/data/site";

export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    description: site.shortBio,
    url: site.url,
    email: site.email,
    knowsAbout: [
      "Experience design",
      "Product design",
      "AI-native products",
      "Human-computer interaction",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
    />
  );
}
