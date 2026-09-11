export type CaseSection = {
  heading: string;
  body: string;
};

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
  sections: CaseSection[];
};

/**
 * Placeholder case studies for the editorial template.
 * Replace every field marked [PLACEHOLDER] — and the stories themselves —
 * with Jessica's real work. Do not add investment or trading product work here.
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
      "[PLACEHOLDER] Replace this overview with the real problem, the people you designed for, and the outcome. This case is a template only — a stand-in for a product story about making model assistance inspectable and reversible.",
    sections: [
      {
        heading: "Context",
        body: "[PLACEHOLDER] Who was using the product, what they were trying to finish, and why the existing copilot felt either too silent or too pushy. Include the constraints that mattered: model latency, review policy, or the team's appetite for risk.",
      },
      {
        heading: "Approach",
        body: "[PLACEHOLDER] Research methods, the questions you asked, and how you framed the design problem. Example: we mapped moments of doubt — when people paused, edited, or abandoned a suggestion — and designed around those pauses instead of around model confidence scores.",
      },
      {
        heading: "What I designed",
        body: "[PLACEHOLDER] The surfaces that shipped: suggestion cards, source traces, undo and fork patterns, empty states, and the language used when the model is uncertain. Call out what you chose not to automate.",
      },
      {
        heading: "Outcome",
        body: "[PLACEHOLDER] Qualitative and quantitative results. Example metrics to replace: adoption of review, time-to-confident-submit, support tickets about “why did it do that.” Add a short note on what you would do next.",
      },
    ],
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
      "[PLACEHOLDER] Replace this with the real onboarding problem: people arriving with the wrong mental model, or treating generation as magic instead of a craft. This template is about teaching a workflow, not a feature list.",
    sections: [
      {
        heading: "Context",
        body: "[PLACEHOLDER] Who was new, what “done” looked like in week one, and where drop-off happened. Note any legal or safety copy that had to live next to the happy path.",
      },
      {
        heading: "Approach",
        body: "[PLACEHOLDER] How you sequenced first actions, what you borrowed from studio critique or writing workshops, and how you tested the first session with real people.",
      },
      {
        heading: "What I designed",
        body: "[PLACEHOLDER] Starter prompts that are actually jobs-to-be-done, a first-project scaffold, progress that is about craft rather than checklists, and recovery when generation misses.",
      },
      {
        heading: "Outcome",
        body: "[PLACEHOLDER] Activation, return in week one, and the qualitative shift you heard in interviews. Be honest about what still felt like a tour.",
      },
    ],
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
      "[PLACEHOLDER] Replace this with a real operations or research story: people reviewing model output under time pressure, with incomplete context, and with a name attached to the decision. Not a trading or investment product.",
    sections: [
      {
        heading: "Context",
        body: "[PLACEHOLDER] The review queue, the cost of a miss, and the tools people already used around the system. Include the political reality: who is blamed when the model is wrong.",
      },
      {
        heading: "Approach",
        body: "[PLACEHOLDER] Shadowing, artifact analysis, and how you separated “the model’s recommendation” from “the human’s decision” in the information architecture.",
      },
      {
        heading: "What I designed",
        body: "[PLACEHOLDER] Queue triage, evidence layout, exception paths, and the language of sign-off. Show how disagreement with the model is a first-class action, not a buried override.",
      },
      {
        heading: "Outcome",
        body: "[PLACEHOLDER] Review time, error catch rate, and how reviewers talked about responsibility after the redesign. Note what still needs a human who cannot be automated away.",
      },
    ],
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
