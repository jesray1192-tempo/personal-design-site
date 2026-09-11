export const CASE_NARRATIVE_SECTIONS = [
  { key: "problem", zh: "问题", en: "Problem" },
  { key: "process", zh: "过程", en: "Process" },
  { key: "result", zh: "结果", en: "Result" },
] as const;

export type CaseNarrativeKey = (typeof CASE_NARRATIVE_SECTIONS)[number]["key"];

export type CaseStudy = {
  slug: string;
  number: string;
  title: string;
  dek: string;
  year: string;
  role: string;
  /** [PLACEHOLDER] Replace with the real client or product name. */
  client: string;
  duration: string;
  tags: string[];
  overview: string;
  /** Fixed case-study body: 问题 / 过程 / 结果. Do not add extra section keys. */
  narrative: Record<CaseNarrativeKey, string>;
  /** Optional. Leave empty until a Figma file or live URL exists. */
  links?: {
    figma?: string;
    live?: string;
  };
};

/**
 * Placeholder case studies for the editorial template.
 * Each case must keep the 问题 / 过程 / 结果 narrative.
 * Replace every field marked [PLACEHOLDER] with Jessica's real work.
 * Do not add investment or trading product work here.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "copilot-trust",
    number: "01",
    title: "Designing trust into an AI copilot",
    dek: "How people decide when to lean on a model, when to override it, and how the interface should make that choice feel obvious.",
    year: "2025",
    role: "Lead experience designer",
    client: "[PLACEHOLDER] Client or product name",
    duration: "[PLACEHOLDER] 6 months",
    tags: ["AI-native", "Trust", "Copilot"],
    overview:
      "[PLACEHOLDER] One-line framing for the case. The body below is locked to 问题 / 过程 / 结果.",
    narrative: {
      problem:
        "[PLACEHOLDER] 问题 / Problem — Who was using the product, what they were trying to finish, and why the copilot felt either too silent or too pushy. Name the cost of getting it wrong.",
      process:
        "[PLACEHOLDER] 过程 / Process — Research, the questions you asked, and what you designed: suggestion cards, source traces, undo, and the language used when the model is uncertain. Call out what you chose not to automate.",
      result:
        "[PLACEHOLDER] 结果 / Result — What changed for people after it shipped. Replace with qualitative notes and any metrics (review adoption, time-to-confident-submit). Add what you would do next.",
    },
  },
  {
    slug: "generative-onboarding",
    number: "02",
    title: "Onboarding for a generative workspace",
    dek: "First-week rituals that teach a new kind of tool without turning the product into a tutorial.",
    year: "2025",
    role: "Product design",
    client: "[PLACEHOLDER] Client or product name",
    duration: "[PLACEHOLDER] 4 months",
    tags: ["Onboarding", "Generative UI", "Education"],
    overview:
      "[PLACEHOLDER] One-line framing for the case. The body below is locked to 问题 / 过程 / 结果.",
    narrative: {
      problem:
        "[PLACEHOLDER] 问题 / Problem — People arriving with the wrong mental model, or treating generation as magic instead of a craft. Where week-one drop-off happened.",
      process:
        "[PLACEHOLDER] 过程 / Process — How you sequenced first actions, tested the first session, and designed starter jobs, a first-project scaffold, and recovery when generation misses.",
      result:
        "[PLACEHOLDER] 结果 / Result — Activation, return in week one, and the qualitative shift you heard. Be honest about what still felt like a tour.",
    },
  },
  {
    slug: "review-loops",
    number: "03",
    title: "Human review loops for automated systems",
    dek: "A quieter interface for people who are accountable when the system is wrong.",
    year: "2024",
    role: "Experience design",
    client: "[PLACEHOLDER] Client or product name",
    duration: "[PLACEHOLDER] 5 months",
    tags: ["Review", "Operations", "Accountability"],
    overview:
      "[PLACEHOLDER] One-line framing for the case. The body below is locked to 问题 / 过程 / 结果. Not a trading or investment product.",
    narrative: {
      problem:
        "[PLACEHOLDER] 问题 / Problem — The review queue, the cost of a miss, and who is blamed when the model is wrong. People reviewing under time pressure with incomplete context.",
      process:
        "[PLACEHOLDER] 过程 / Process — Shadowing, artifact analysis, and the surfaces you designed: queue triage, evidence layout, exception paths, and sign-off language where disagreement is a first-class action.",
      result:
        "[PLACEHOLDER] 结果 / Result — Review time, error catch rate, and how reviewers talked about responsibility after the redesign. Note what still needs a human.",
    },
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((item) => item.slug === slug);
}

export function getAdjacentCases(slug: string): {
  previous: CaseStudy | null;
  next: CaseStudy | null;
} {
  const index = caseStudies.findIndex((item) => item.slug === slug);
  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: caseStudies[index - 1] ?? null,
    next: caseStudies[index + 1] ?? null,
  };
}
