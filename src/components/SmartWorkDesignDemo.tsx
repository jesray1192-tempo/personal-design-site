"use client";

import { useState } from "react";

const palette = [
  { name: "Primary", token: "--color-primary-6" },
  { name: "Secure", token: "--color-secure-6" },
  { name: "Success", token: "--color-success-6" },
  { name: "Warning", token: "--color-warning-6" },
  { name: "Danger", token: "--color-danger-6" },
];

export function SmartWorkDesignDemo() {
  const [dark, setDark] = useState(false);

  return (
    <section aria-labelledby="smartwork-demo-title" className="smartwork-showcase">
      <div className="smartwork-showcase-intro">
        <div>
          <p className="smartwork-showcase-eyebrow">Live code / Design tokens</p>
          <h2 id="smartwork-demo-title">把规则变成界面</h2>
          <p>
            这里的颜色、按钮与标签直接使用 SmartWork Design Skill 的 CSS Token 和组件样式；
            界面是用于展示规则的代码示意。
          </p>
        </div>
        <div className="smartwork-theme-switch" aria-label="预览主题">
          <button type="button" aria-pressed={!dark} onClick={() => setDark(false)}>
            Light
          </button>
          <button type="button" aria-pressed={dark} onClick={() => setDark(true)}>
            Dark
          </button>
        </div>
      </div>

      <div className={`smartwork-scope smartwork-demo desktop-mode${dark ? " dark-mode" : ""}`}>
        <div className="smartwork-demo-topbar">
          <span className="smartwork-demo-mark" aria-hidden="true">✦</span>
          <strong>SmartWork</strong>
          <span className="smartwork-demo-topbar-note">Design system / Interactive specimen</span>
          <span className="sw-tag sw-tag--primary">AI workspace</span>
        </div>

        <div className="smartwork-demo-grid">
          <aside className="smartwork-demo-sidebar" aria-label="示意导航">
            <p className="smartwork-demo-overline">WORKSPACE</p>
            <div className="smartwork-demo-nav-active">✦ <span>工作台</span></div>
            <div className="smartwork-demo-nav-row">▦ <span>项目</span></div>
            <div className="smartwork-demo-nav-row">◇ <span>技能</span></div>
            <p className="smartwork-demo-overline smartwork-demo-sidebar-bottom">SYSTEM</p>
            <div className="smartwork-demo-nav-row">⚙ <span>设置</span></div>
          </aside>

          <div className="smartwork-demo-main">
            <div className="smartwork-demo-heading">
              <div>
                <p className="smartwork-demo-overline">SCENE · CONVERSATION</p>
                <h3>让工作自然发生</h3>
                <p>先定义任务与场景，再选择容器、布局和组件。</p>
              </div>
              <span className="sw-tag sw-tag--surface">页面容器</span>
            </div>

            <div className="smartwork-demo-card">
              <span className="sw-tag sw-tag--primary">智能协作</span>
              <h4>从一个清晰的问题开始</h4>
              <p>在同一个工作流里组织信息、行动与反馈。</p>
              <div className="smartwork-demo-actions">
                <button type="button" className="sw-btn sw-btn--primary sw-btn--sm">开始任务</button>
                <button type="button" className="sw-btn sw-btn--outline sw-btn--sm">查看详情</button>
              </div>
            </div>

            <div className="smartwork-demo-status-row">
              <span className="sw-tag sw-tag--success">已完成</span>
              <span className="sw-tag sw-tag--warning">需关注</span>
              <span className="sw-tag sw-tag--secure">安全防护中</span>
              <span className="sw-tag sw-tag--surface">草稿</span>
            </div>
          </div>
        </div>

        <div className="smartwork-demo-palette" aria-label="语义色 Token">
          {palette.map(({ name, token }) => (
            <div key={token} className="smartwork-demo-swatch">
              <span className="smartwork-demo-swatch-color" style={{ backgroundColor: `var(${token})` }} />
              <span>{name}</span>
              <code>{token}</code>
            </div>
          ))}
        </div>
      </div>
      <p className="smartwork-showcase-credit">
        样式来源：SmartWork Design Skill 的 color、typography、spacing、radius、motion、button 与 tag CSS。
      </p>
    </section>
  );
}
