import type { Metadata } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SkipLink } from "@/components/SkipLink";
import { defaultMetadata } from "@/lib/metadata";
import "./globals.css";
import "../styles/smartwork/smartwork_color.css";
import "../styles/smartwork/smartwork_typography.css";
import "../styles/smartwork/smartwork_spacing.css";
import "../styles/smartwork/smartwork_radius.css";
import "../styles/smartwork/smartwork_motion.css";
import "../styles/smartwork/smartwork_button.css";
import "../styles/smartwork/smartwork_tag.css";
import "../styles/smartwork-showcase.css";
import "../styles/smartwork-landing.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <JsonLd />
        <SkipLink />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
