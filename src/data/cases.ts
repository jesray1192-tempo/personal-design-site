export const CASE_NARRATIVE_SECTIONS = [
  { key: "problem", zh: "问题", en: "Problem" },
  { key: "process", zh: "过程", en: "Process" },
  { key: "result", zh: "结果", en: "Result" },
] as const;

export type CaseNarrativeKey = (typeof CASE_NARRATIVE_SECTIONS)[number]["key"];

/** One still in a case journey gallery. Tall H5 frames keep intrinsic size. */
export type CaseJourneyFrame = {
  src: string;
  caption: string;
  /** Intrinsic pixel size of `src`, for next/image. Defaults to 750×1624. */
  width?: number;
  height?: number;
};

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
  /** Sequential journey stills after the narrative. Omit until assets exist. */
  journey?: CaseJourneyFrame[];
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
 * Cover and journey stills for 桔子星球漫游日记 live under
 * `public/cases/orange-planet-diary/`.
 * D-Hub and AgentHub copy is live; figures wait for stills.
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
    journey: [
      {
        src: "/cases/orange-planet-diary/cover-auth.webp",
        caption: "封面授权",
      },
      {
        src: "/cases/orange-planet-diary/onboard-voyage.webp",
        caption: "入职航行",
      },
      {
        src: "/cases/orange-planet-diary/product-dchat.webp",
        caption: "D-Chat",
      },
      {
        src: "/cases/orange-planet-diary/product-cooper.webp",
        caption: "Cooper / 知识库",
      },
      {
        src: "/cases/orange-planet-diary/product-dhr.webp",
        caption: "DHR",
      },
      {
        src: "/cases/orange-planet-diary/product-recruit.webp",
        caption: "招聘",
      },
      {
        src: "/cases/orange-planet-diary/product-welfare.webp",
        caption: "食域 / 弹性福利",
      },
      {
        src: "/cases/orange-planet-diary/product-devtools.webp",
        caption: "OE / MAS / Git",
      },
      {
        src: "/cases/orange-planet-diary/product-flash-report.webp",
        caption: "小桔闪报",
      },
      {
        src: "/cases/orange-planet-diary/lucky-draw-cta.webp",
        caption: "抽取幸运签入口",
      },
      {
        src: "/cases/orange-planet-diary/lucky-share.webp",
        caption: "幸运签分享卡",
      },
    ],
  },
  {
    slug: "d-hub",
    number: "02",
    title: "D-Hub",
    dek: "把分散的内部产品，收成一个能找、能进、能继续做事的工作台。",
    year: "2025",
    role: "体验设计",
    client: "企业内部工作台",
    duration: "2025",
    featured: true,
    tags: ["内部平台", "工作台"],
    locale: "zh-Hans",
    overview:
      "D-Chat、Cooper、DHR、招聘和研发工具链各自为政时，同事先在入口里迷路。D-Hub 把这些产品收成一个工作台：先找到对的入口，再把人送进正在发生的任务。",
    narrative: {
      problem:
        "要办一件事，往往先在十几个入口里切换。搜索、权限和「最近在做」互不相通，门户变成又一个需要记忆的地址。",
      process:
        "按「找得到 → 进得去 → 回得来」排信息架构；高频任务上台前，低频能力进目录；空态、权限失败和入口文案用同一套同事口吻。",
      result:
        "一条可落地的工作台骨架：产品目录、任务入口、最近使用，和现有 D- 家族对齐，而不是再做一个孤岛门户。",
    },
    figureCaptions: {
      hero: "D-Hub 工作台首页 — 产品目录与最近任务。",
      secondary: "从 Hub 进入 D-Chat / Cooper / DHR 的跳转路径。",
    },
  },
  {
    slug: "agenthub",
    number: "03",
    title: "AgentHub",
    dek: "让人把任务交给 Agent，同时还能看见它做了什么、为什么、怎么改。",
    year: "2025",
    role: "体验设计",
    client: "企业 Agent 平台",
    duration: "2025",
    featured: true,
    tags: ["Agent 平台", "AI-native"],
    locale: "zh-Hans",
    overview:
      "面向产品、设计、研发和运营的企业 Agent 平台：托管 Agent、会话与记忆、工具与技能、任务协作。设计重点不是「更像人」，而是让委派可检查、可打断、可复盘。",
    narrative: {
      problem:
        "Agent 能跑，但不透明。人不知道它用了什么上下文、调用了什么工具、卡在哪；失败时只能重来。平台若只堆能力，会变成又一个黑盒控制台。",
      process:
        "把 Session / Event / Memory、Tool / Skill、任务状态做成可阅读的界面；设计暂停、重试、回放和权限边界；让「委派」和「接手」一样容易。",
      result:
        "一条从目录到会话到回放的主路径：选择或创建 Agent → 看它怎么做 → 在出错时介入。模型和工具可以换，人始终知道自己把什么交给了系统。",
    },
    figureCaptions: {
      hero: "AgentHub 会话 — 任务、工具调用与可打断的进行中状态。",
      secondary: "回放 / Trace：一次 Agent 运行用了什么上下文和工具。",
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
