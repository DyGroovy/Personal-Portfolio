<template>
  <div class="skills-page spider-theme">
    <header class="header-section">
      <span class="id-tag">SYSTEM // UPGRADES_V4.0</span>
      <h1 class="page-title">Technical Arsenal</h1>
    </header>

    <div class="skills-layout">
      <section class="tech-stack bento-card">
        <h2 class="tech-title">01 // Modern Tools & Software</h2>
        <div class="tool-grid">
          <div class="tool-item">
            <span class="tool-name">Odoo ERP</span>
            <div class="progress-bar"><div class="fill red" style="width: 90%"></div></div>
          </div>
          <div class="tool-item">
            <span class="tool-name">Python Automation</span>
            <div class="progress-bar"><div class="fill blue" style="width: 85%"></div></div>
          </div>
          <div class="tool-item">
            <span class="tool-name">Excel Power Query</span>
            <div class="progress-bar"><div class="fill red" style="width: 95%"></div></div>
          </div>
          <div class="tool-item">
            <span class="tool-name">Zapier / JotForm API</span>
            <div class="progress-bar"><div class="fill blue" style="width: 80%"></div></div>
          </div>
        </div>
        
        <div class="method-chips">
          <span class="chip">Workflow Optimization</span>
          <span class="chip">Data Integrity Auditing</span>
          <span class="chip">API Integration</span>
          <span class="chip">Agile Documentation</span>
        </div>
      </section>

      <aside class="growth-panel">
        <div class="bento-card blue-accent">
          <h2 class="tech-title">02 // Professional Behavior</h2>
          <p class="growth-text">
            Developed <strong>Technical Empathy</strong>—learning to translate complex 
            CpE logic into actionable business insights for non-technical departments.
          </p>
        </div>

        <div class="bento-card red-accent">
          <h2 class="tech-title">03 // Industrial Insight</h2>
          <p class="growth-text">
            Gained deep understanding of the <strong>Industrial Supply Chain</strong> 
            and how real-time data accuracy prevents multi-million peso operational delays.
          </p>
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.spider-theme { color: #fff; padding: 20px; font-family: 'Inter', sans-serif; }
.id-tag { color: #e11d2e; font-family: monospace; letter-spacing: 3px; font-weight: bold; }
.page-title { font-size: 3rem; letter-spacing: -2px; margin-bottom: 40px; }

.skills-layout { display: grid; grid-template-columns: 1fr 350px; gap: 30px; }
.bento-card { 
  background: rgba(15, 15, 20, 0.8); border: 1px solid #222; 
  padding: 35px; border-radius: 20px; backdrop-filter: blur(10px);
}

.tech-title { color: #e11d2e; font-size: 0.9rem; letter-spacing: 2px; margin-bottom: 25px; text-transform: uppercase; }

/* TOOL PROGRESS */
.tool-grid { display: grid; gap: 20px; margin-bottom: 30px; }
.tool-name { display: block; font-size: 0.8rem; margin-bottom: 8px; font-weight: bold; color: #4a9eff; }
.progress-bar { width: 100%; height: 6px; background: #111; border-radius: 10px; overflow: hidden; }
.fill { height: 100%; border-radius: 10px; }
.fill.red { background: #e11d2e; box-shadow: 0 0 10px #e11d2e; }
.fill.blue { background: #4a9eff; box-shadow: 0 0 10px #4a9eff; }

/* CHIPS */
.method-chips { display: flex; flex-wrap: wrap; gap: 10px; }
.chip { 
  font-size: 0.7rem; padding: 6px 12px; border: 1px solid #333; 
  border-radius: 4px; color: #888; font-weight: bold;
}

/* SIDEBAR GROWTH */
.growth-panel { display: flex; flex-direction: column; gap: 20px; }
.growth-text { color: #ccc; font-size: 0.95rem; line-height: 1.6; }
.blue-accent { border-left: 4px solid #4a9eff; }
.red-accent { border-left: 4px solid #e11d2e; }

@media (max-width: 900px) { .skills-layout { grid-template-columns: 1fr; } }
</style>