export const site = {
  name: "Jessica Ray",
  role: "Experience designer",
  shortBio:
    "Experience designer working on AI-native products — how people understand, trust, and collaborate with intelligent systems.",
  description:
    "Personal design portfolio of Jessica Ray, an experience designer focused on AI-native products, research, and the human side of intelligent software.",
  /** [PLACEHOLDER] Replace with the production domain after first Vercel deploy. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  /** [PLACEHOLDER] Replace with your public email. */
  email: "hello@example.com",
  location: "[PLACEHOLDER] City, Country",
  social: {
    /** [PLACEHOLDER] Replace with your LinkedIn URL, or remove. */
    linkedin: "https://www.linkedin.com/",
    /** [PLACEHOLDER] Replace with your public profile URL, or remove. */
    website: "https://example.com",
  },
} as const;

export const navItems = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
