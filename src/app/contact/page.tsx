import { ContactForm } from "@/components/ContactForm";
import { PlaceholderBanner } from "@/components/PlaceholderBanner";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description: `Contact ${site.name} about experience design for AI-native products.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main-content" className="site-shell py-14 sm:py-20">
      <header className="max-w-3xl space-y-5">
        <p className="text-sm tracking-[0.2em] text-accent uppercase">
          Contact
        </p>
        <h1 className="text-4xl leading-tight sm:text-6xl">
          Tell me what you are making.
        </h1>
        <p className="text-lg leading-relaxed text-muted sm:text-xl">
          I am most useful when a product has to be lived with — copilots,
          review tools, and other AI-native surfaces that need judgment, not
          just generation. I do not take on investment-product design through
          this site.
        </p>
        <PlaceholderBanner>
          Replace the email, availability note, and form endpoint before going
          live.
        </PlaceholderBanner>
      </header>

      <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)]">
        <ContactForm />
        <aside className="space-y-6 border-t border-rule pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
          <div>
            <h2 className="text-2xl">Direct</h2>
            <p className="mt-3 text-muted">
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p className="mt-2 text-sm text-muted">
              [PLACEHOLDER] Typical reply time — for example, within a few days.
            </p>
          </div>
          <div>
            <h2 className="text-2xl">Elsewhere</h2>
            <ul className="mt-3 space-y-2 text-muted">
              <li>
                <a href={site.social.linkedin} rel="noreferrer">
                  LinkedIn [PLACEHOLDER]
                </a>
              </li>
              <li>{site.location}</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
