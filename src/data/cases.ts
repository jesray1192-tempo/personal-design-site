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
  client: string;
  duration: string;
  /** When true, the case leads Selected work on `/`. */
  featured?: boolean;
  tags: string[];
  /** BCP 47 tag for title, dek, and narrative copy. */
  locale?: string;
  overview: string;
  /** Fixed case-study body: 问题 / 过程 / 结果. Do not add extra section keys. */
  narrative: Record<CaseNarrativeKey, string>;
  /** Optional. Leave empty until a Figma file or live URL exists. */
  links?: {
    figma?: string;
    live?: string;
  };
  /** Public path to cover art, e.g. `/cases/orange-planet-diary/cover.webp`. */
  cover?: string;
  /** Intrinsic pixel size of `cover`, for next/image. */
  coverSize?: {
    width: number;
    height: number;
  };
  /** Captions for PlaceholderFigure slots until real images land. */
  figureCaptions?: {
    hero?: string;
    secondary?: string;
  };
};

/**
 * Editorial case studies for the personal design site.
 * Each case must keep the 问题 / 过程 / 结果 narrative.
 * Do not add investment or trading product work here.
 *
 * Cover art for 桔子星球漫游日记 lives at
 * `public/cases/orange-planet-diary/cover.webp`.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "orange-planet-diary",
    number: "01",
    title: "桔子星球漫游日记",
    dek: "把冷冰冰的效能数据，做成一场可上滑的「小桔」星际漫游。",
    year: "2025",
    role: "体验设计",
    client: "企业年度总结 H5",
    duration: "2025 年度",
    featured: true,
    tags: ["企业年度总结 H5"],
    locale: "zh-Hans",
    overview:
      "一场可上滑的星际漫游：用毡感 3D「小桔」IP，把年度效能数据做成同事愿意看、也愿意分享的航行日记。",
    narrative: {
      problem:
        "年度总结容易变成指标堆砌：难读、难分享，也难让人感到被看见。",
      process:
        "分镜叙事 + 毡感 3D IP；按 D-Chat / Cooper / DHR / 招聘 / 闪报 / 研发工具链分页讲故事；数据位可配置。",
      result:
        "完整上滑旅程：封面授权 → 入职航行 → 多产品数据页 → 幸运签分享卡，风格统一可落地。",
    },
    cover: "/cases/orange-planet-diary/cover.webp",
    coverSize: { width: 750, height: 1624 },
    figureCaptions: {
      secondary:
        "Journey still — 封面授权, a product data page, or the 幸运签分享卡. Same folder as the cover when assets are ready.",
    },
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((item) => item.slug === slug);
}

/** Selected work on `/` — featured cases first; falls back to the full index. */
export function getFeaturedCases(): CaseStudy[] {
  const featured = caseStudies.filter((study) => study.featured);
  return featured.length > 0 ? featured : caseStudies;
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
