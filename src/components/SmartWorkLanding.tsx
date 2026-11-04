"use client";

import Link from "next/link";
import { useState } from "react";

const prompt = "用 smartwork-design 设计 AI 协作流程：展示上下文、工具进度、人工确认与交付产物。";

const examples = [
  { title: "场景先行", detail: "任务边界 → 场景 → 容器 → 版式 → 信息层级" },
  { title: "同名 Token", detail: "一套语义名称，浅色与暗色使用不同取值" },
  { title: "组件配方", detail: "按钮、标签等组件按变体、尺寸与状态选型" },
  { title: "代码验收", detail: "用规则和检查脚本降低实现偏差" },
];

const aiStages = [
  { label: "理解任务", status: "Context", note: "把用户目标与当前项目的规则放在同一个上下文里。" },
  { label: "调用工具", status: "Execution", note: "过程可见：正在读取规则、检查组件，而不是只显示等待。" },
  { label: "人工确认", status: "Review", note: "涉及写入的动作先展示将要发生的事，保留人的判断。" },
  { label: "交付产物", status: "Artifact", note: "结果进入可继续编辑的工作区，保留来源和下一步。" },
] as const;

export function SmartWorkLanding() {
  const [dark, setDark] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "detail" | "states">("overview");
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [aiStage, setAiStage] = useState(1);

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main id="main-content" className="sw-landing">
      <div className="sw-landing-shell">
        <nav className="sw-landing-nav" aria-label="SmartWork 页面导航">
          <a href="#top" className="sw-landing-brand"><span aria-hidden="true">✦</span> SmartWork <em>Design Skill</em></a>
          <div><a href="#ai-native">AI 协作</a><a href="#playground">组件体验</a><a href="#method">设计方法</a><Link href="/work/smartwork-design-skill">案例</Link></div>
        </nav>

        <header id="top" className="sw-landing-hero">
          <div className="sw-landing-pill"><span className="sw-landing-pulse" /> CODE-NATIVE DESIGN SYSTEM</div>
          <h1>为 AI 原生工作台，<br /><span>设计每一步。</span></h1>
          <p>从对话理解、工具执行到人工确认和产物交付。SmartWork Design Skill 把这些 AI 协作场景写成可复用的界面规则。</p>
          <div className="sw-landing-prompt" aria-label="示例提示词">
            <span className="sw-landing-dollar">↗</span>
            <code>{prompt}</code>
            <button type="button" onClick={copyPrompt} aria-label="复制示例提示词">{copied ? "已复制" : "复制"}</button>
          </div>
          <div className="sw-landing-hero-actions"><a href="#ai-native" className="sw-landing-action-primary">体验 AI 协作 <span aria-hidden="true">↘</span></a><a href="#playground" className="sw-landing-action-secondary">浏览组件</a></div>
          <p className="sw-landing-source">Scene decisions <span>·</span> CSS tokens <span>·</span> Component recipes <span>·</span> Visual checks</p>
        </header>

        <section id="ai-native" className="sw-landing-section sw-ai-section" aria-labelledby="sw-ai-title">
          <div className="sw-landing-section-head"><p>01 / AI-NATIVE WORKSPACE</p><h2 id="sw-ai-title">AI 在做什么，始终看得见。</h2><span>从任务理解到产物交付，把执行、判断与控制放回同一条工作流。</span></div>
          <div className="sw-ai-stage-nav" role="tablist" aria-label="AI 协作流程">
            {aiStages.map((stage, index) => <button key={stage.label} type="button" role="tab" aria-selected={aiStage === index} onClick={() => setAiStage(index)}><span>0{index + 1}</span>{stage.label}</button>)}
          </div>
          <div className="smartwork-scope desktop-mode sw-ai-workspace" role="tabpanel">
            <aside className="sw-ai-sidebar" aria-label="演示会话列表"><div className="sw-ai-sidebar-logo"><span>✦</span> SmartWork</div><p>WORKSPACE</p><div className="sw-ai-side-row sw-ai-side-active">◇　设计评审</div><div className="sw-ai-side-row">▦　项目</div><div className="sw-ai-side-row">◷　最近任务</div><p className="sw-ai-side-bottom">会话</p><div className="sw-ai-side-row">组件一致性检查</div><div className="sw-ai-side-row">体验评审摘要</div></aside>
            <div className="sw-ai-conversation"><div className="sw-ai-workspace-top"><div><strong>设计评审协作</strong><span>交互流程演示</span></div><span className="sw-tag sw-tag--surface">{aiStages[aiStage].status}</span></div><div className="sw-ai-thread"><div className="sw-ai-user-message">帮我检查这个 AI 工作台页面，给出能落地的修改建议。</div><div className="sw-ai-context"><span>引用上下文</span><span>SmartWork Design Skill</span><span>当前页面结构</span></div><div className="sw-ai-agent"><span className="sw-ai-avatar">✦</span><div><strong>SmartWork</strong><p>{aiStages[aiStage].note}</p></div></div>{aiStage >= 1 && <div className="sw-ai-tool"><span className="sw-ai-tool-icon">⌘</span><div><strong>已读取场景规则与组件配方</strong><p>Scene Catalog · Component Recipes</p></div><span className="sw-ai-tool-done">完成</span></div>}{aiStage === 2 && <div className="sw-ai-approval"><div><span>需要你确认</span><strong>将建议写入评审文档？</strong><p>改动摘要已在右侧预览，可决定是否应用。</p></div><div><button type="button" className="sw-btn sw-btn--primary sw-btn--sm" onClick={() => setAiStage(3)}>确认写入</button></div></div>}{aiStage >= 3 && <div className="sw-ai-result"><span>产物已就绪</span><strong>AI 工作台体验评审</strong><p>3 条建议 · 已附规则来源 · 可继续编辑</p></div>}</div><div className="sw-ai-composer"><span>继续追问或修改任务…</span><span>＋　↗</span></div></div>
            <aside className="sw-ai-artifact" aria-label="演示产物预览"><div className="sw-ai-artifact-top"><span>评审文档</span><span>↗</span></div><div className="sw-ai-artifact-body"><span className="sw-ai-doc-kicker">DESIGN REVIEW / EXAMPLE</span><h3>让 AI 的工作过程可被理解</h3><p>一份示意评审：围绕任务上下文、执行状态和人工控制整理建议。</p><div className="sw-ai-doc-rule" /><div className="sw-ai-doc-item"><span>01</span><div><strong>保留当前上下文</strong><p>在对话中明确引用的规则与页面。</p></div></div><div className="sw-ai-doc-item"><span>02</span><div><strong>让执行状态可见</strong><p>工具、进度与结果留在同一条时间线。</p></div></div><div className="sw-ai-doc-item"><span>03</span><div><strong>关键动作交给人</strong><p>写入前展示差异和确认入口。</p></div></div></div></aside>
          </div>
          <p className="sw-landing-demo-note">脚本化交互示例，不会调用真实 AI 或写入数据。展示的界面模式对应项目中的消息流、工具进度、审批与产物能力。</p>
        </section>

        <section id="playground" className="sw-landing-section" aria-labelledby="sw-play-title">
          <div className="sw-landing-section-head"><p>02 / LIVE SPECIMENS</p><h2 id="sw-play-title">每条规则，都能被体验。</h2><span>切换主题，操作组件，查看规则如何影响界面。</span></div>
          <div className={`smartwork-scope desktop-mode sw-landing-specimens${dark ? " dark-mode" : ""}`}>
            <div className="sw-landing-theme-bar"><span><i /> SmartWork / Component playground</span><div role="group" aria-label="主题切换"><button type="button" aria-pressed={!dark} onClick={() => setDark(false)}>浅色</button><button type="button" aria-pressed={dark} onClick={() => setDark(true)}>暗色</button></div></div>
            <div className="sw-landing-grid">
              <article className="sw-landing-specimen sw-landing-specimen-large"><div className="sw-landing-card-head"><span>01 / BUTTONS</span><span>variant × state</span></div><div className="sw-landing-specimen-body"><h3>操作层级</h3><p>主要操作用品牌紫，次级操作保留清晰轮廓。</p><div className="sw-landing-button-row"><button type="button" className="sw-btn sw-btn--primary sw-btn--sm">主要操作</button><button type="button" className="sw-btn sw-btn--outline sw-btn--sm">次要操作</button><button type="button" className="sw-btn sw-btn--brand-soft sw-btn--sm">轻量操作</button></div></div></article>
              <article className="sw-landing-specimen"><div className="sw-landing-card-head"><span>02 / STATUS</span><span>semantic</span></div><div className="sw-landing-specimen-body"><h3>状态有语义</h3><p>颜色表达状态，不充当装饰。</p><div className="sw-landing-tag-row"><span className="sw-tag sw-tag--success">已完成</span><span className="sw-tag sw-tag--warning">需关注</span><span className="sw-tag sw-tag--secure">安全防护中</span><span className="sw-tag sw-tag--surface">草稿</span></div></div></article>
              <article className="sw-landing-specimen"><div className="sw-landing-card-head"><span>03 / CHOICE</span><span>interactive demo</span></div><div className="sw-landing-specimen-body"><h3>选择清楚可见</h3><p>控制状态保持明确的视觉反馈。</p><label className="sw-landing-check"><input type="checkbox" checked={checked} onChange={(event) => setChecked(event.target.checked)} /><span>{checked ? "已选中：保留人工复核" : "保留人工复核"}</span></label></div></article>
              <article className="sw-landing-specimen sw-landing-specimen-large"><div className="sw-landing-card-head"><span>04 / NAVIGATION</span><span>interactive demo</span></div><div className="sw-landing-specimen-body"><h3>在同一场景中切换</h3><div className="sw-landing-tabs" role="tablist" aria-label="组件示例选项卡">{(["overview", "detail", "states"] as const).map((tab) => <button key={tab} type="button" role="tab" aria-selected={activeTab === tab} onClick={() => setActiveTab(tab)}>{({ overview: "概览", detail: "详情", states: "状态" } as const)[tab]}</button>)}</div><div className="sw-landing-tab-panel" role="tabpanel">{activeTab === "overview" ? "先识别用户任务，再决定页面应承载什么。" : activeTab === "detail" ? "容器、版式与信息层级确定后再选择组件。" : "悬浮、禁用、反馈与暗色状态都应在配方中定义。"}</div></div></article>
              <article className="sw-landing-specimen"><div className="sw-landing-card-head"><span>05 / DISCLOSURE</span><span>interactive demo</span></div><div className="sw-landing-specimen-body"><h3>信息按需展开</h3><button className="sw-landing-disclosure" type="button" aria-expanded={open} onClick={() => setOpen(!open)}>为什么从场景开始？ <span aria-hidden="true">{open ? "−" : "+"}</span></button>{open && <p className="sw-landing-disclosure-copy">因为组件和颜色只能解决局部表现。场景先决定任务、容器和信息层级。</p>}</div></article>
              <article className="sw-landing-specimen"><div className="sw-landing-card-head"><span>06 / TOKENS</span><span>light + dark</span></div><div className="sw-landing-specimen-body"><h3>一组语义名称</h3><p>切换主题后，Token 名称保持一致。</p><div className="sw-landing-swatches"><span style={{ background: "var(--color-primary-6)" }} /><span style={{ background: "var(--color-secure-6)" }} /><span style={{ background: "var(--color-success-6)" }} /><span style={{ background: "var(--color-warning-6)" }} /><span style={{ background: "var(--color-danger-6)" }} /></div><code>--color-primary-6</code></div></article>
            </div>
          </div>
          <p className="sw-landing-demo-note">按钮与标签使用 SmartWork Design Skill 的原始 CSS；选择、导航和展开卡是以其 Token 构建的交互示意。</p>
        </section>

        <section id="method" className="sw-landing-section sw-landing-method" aria-labelledby="sw-method-title"><div className="sw-landing-section-head"><p>03 / THE SKILL</p><h2 id="sw-method-title">先做判断，再做界面。</h2><span>把设计意图保留在从任务到实现的每一步。</span></div><div className="sw-landing-method-grid">{examples.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div><div className="sw-landing-code-panel"><div className="sw-landing-code-top"><span className="sw-landing-code-dots">● ● ●</span><span>smartwork-design / workflow</span></div><div className="sw-landing-code-content"><span className="sw-landing-code-comment">// 从使用场景进入实现，而不是先选颜色</span><br /><span className="sw-landing-code-purple">Task</span> → Scene → Container → Layout → Hierarchy<br /><span className="sw-landing-code-purple">Then</span> → Component → Token → Visual check</div></div></section>

        <section className="sw-landing-close"><p>SMARTWORK DESIGN SKILL</p><h2>规则写进代码，<br />体验才能保持一致。</h2><Link href="/work/smartwork-design-skill">阅读项目案例 <span aria-hidden="true">↗</span></Link></section>
      </div>
    </main>
  );
}
