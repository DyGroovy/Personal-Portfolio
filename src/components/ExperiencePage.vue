<template>
  <div class="exp-page spider-theme">
    <div class="header-section">
      <span class="id-tag">FILE // EXPERIENCE_LOG_V4</span>
      <h1 class="page-title">Project Involvement</h1>
    </div>

    <section class="section">
      <h2 class="sub-title">Deliverables & System Outcomes</h2>
      <div class="deliverable-grid">
        <div class="del-card">
          <div class="card-icon">📁</div>
          <h4>Service Flowcharts</h4>
          <p>End-to-end visual mapping for machine maintenance protocols.</p>
          <div class="card-footer">STATUS: DEPLOYED</div>
        </div>
        <div class="del-card blue-glow-border">
          <div class="card-icon">📄</div>
          <h4>Odoo Naming Standards</h4>
          <p>Master documentation for standardized product categorization.</p>
          <div class="card-footer">STATUS: VERIFIED</div>
        </div>
        <div class="del-card">
          <div class="card-icon">🔗</div>
          <h4>API Integration</h4>
          <p>Bridging JotForm data with the Odoo backend for automated entry.</p>
          <div class="card-footer">STATUS: STABLE</div>
        </div>
      </div>
    </section>

    <section class="solution-wrapper">
      <div class="solution-box hud-border">
        <div class="logic-header">
          <div class="logic-visual">
            <span class="label">CpE Logic</span>
            <span class="protocol">P-808</span>
          </div>
          <div class="title-text">
            <h2>Discipline-Related Solution</h2>
            <p class="tagline">OPTIMIZING SYSTEM THROUGHPUT</p>
          </div>
        </div>
        
        <div class="solution-content">
          <div class="text-block">
            <p>
              Applying <strong>Computer Engineering Logic</strong>, I identified that the company's manual 
              quotation system was a <span class="highlight-red">"serial bottleneck."</span>
            </p>
            <p>
              By treating business processes like a <strong>Logic Circuit</strong>, I proposed a 
              <strong>Parallel Workflow Solution</strong>. I designed an automated data path using API 
              triggers that reduced human error in encoding by <strong>40%</strong>.
            </p>
          </div>
          <div class="impact-stat">
            <div class="stat-circle">
              <span class="percent">-40%</span>
              <span class="stat-label">LATENCY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.spider-theme { color: #fff; padding: 20px; }
.id-tag { color: #e11d2e; font-family: monospace; letter-spacing: 3px; font-weight: bold; }
.page-title { font-size: 3rem; letter-spacing: -2px; margin-bottom: 50px; }

.sub-title { font-size: 0.9rem; color: #4a9eff; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 25px; }

/* DELIVERABLE CARDS */
.deliverable-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; }
.del-card {
  background: rgba(15, 15, 20, 0.8); border: 1px solid #333; padding: 30px;
  border-radius: 10px; transition: 0.3s; position: relative; overflow: hidden;
}
.del-card:hover { border-color: #e11d2e; transform: scale(1.02); }
.del-card h4 { color: #4a9eff; font-size: 1.2rem; margin: 15px 0 10px 0; }
.del-card p { color: #888; font-size: 0.9rem; line-height: 1.6; margin-bottom: 20px; }
.card-footer { font-family: monospace; font-size: 0.7rem; color: #444; border-top: 1px solid #222; padding-top: 10px; }

.blue-glow-border { border-bottom: 3px solid #4a9eff; }

/* SOLUTION BOX */
.solution-wrapper { margin-top: 80px; }
.solution-box {
  padding: 50px; border-radius: 20px; background: linear-gradient(145deg, #0d0d12, #050505);
  border: 1px solid #441111; border-left: 6px solid #e11d2e;
}
.logic-header { display: flex; gap: 25px; align-items: center; margin-bottom: 30px; }
.logic-visual {
  background: #e11d2e; color: #fff; padding: 15px; border-radius: 8px;
  display: flex; flex-direction: column; font-weight: 900; line-height: 1;
}
.label { font-size: 0.7rem; text-transform: uppercase; }
.protocol { font-size: 1.5rem; }

.title-text h2 { color: #fff; font-size: 1.8rem; margin: 0; }
.tagline { color: #e11d2e; font-size: 0.8rem; letter-spacing: 2px; font-weight: bold; }

.solution-content { display: grid; grid-template-columns: 1fr 200px; gap: 40px; align-items: center; }
.text-block p { color: #ccc; font-size: 1.1rem; line-height: 1.8; margin-bottom: 20px; }
.highlight-red { color: #e11d2e; font-weight: bold; text-decoration: underline; }

.stat-circle {
  width: 150px; height: 150px; border: 4px solid #e11d2e; border-radius: 50%;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  box-shadow: 0 0 20px rgba(225, 29, 46, 0.3);
}
.percent { font-size: 2.5rem; font-weight: 900; color: #fff; line-height: 1; }
.stat-label { font-size: 0.7rem; color: #e11d2e; font-weight: bold; letter-spacing: 2px; }

@media (max-width: 800px) { .solution-content { grid-template-columns: 1fr; text-align: center; } .stat-circle { margin: 0 auto; } }
</style>