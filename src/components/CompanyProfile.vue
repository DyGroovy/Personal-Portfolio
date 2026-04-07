<template>
  <div class="company-page spider-theme">
    <section class="hero-card hud-border">
      <div class="hero-image-container">
        <div class="glow-ring">
          <img src="@/assets/ivex.jpg" class="company-logo" alt="New Ivex Machinery"/>
        </div>
      </div>
      <div class="hero-text">
        <div class="status-tag"><span class="blink">●</span> ACTIVE INTERNSHIP // DRZP-30</div>
        <h1>New Ivex Machinery Corporation</h1>
        <p class="subtitle">INDUSTRIAL & AUTOMATION SOLUTIONS</p>
        <p class="desc">
          Strategic infrastructure for high-precision servicing and automation 
          integration for manufacturing industries nationwide.
        </p>
      </div>
    </section>

    <div class="content-layout">
      <div class="main-content">
        <section class="content-block bento-card">
          <h2 class="tech-title">01 // Company Overview</h2>
          <p>
            Operating at the intersection of traditional manufacturing and modern robotics, 
            New Ivex provides end-to-end system integration. They ensure operational efficiency 
            through specialized maintenance and hardware optimization.
          </p>
        </section>

        <section class="content-block bento-card red-accent">
          <h2 class="tech-title">02 // Project Alignment</h2>
          <div class="context-box">
            <p>
              Integrated into the <strong>Digital Transformation Project</strong>, 
              focusing on migrating legacy manual processes into the <strong>Odoo ERP environment</strong>.
            </p>
            <p class="impact-text">
              Aligned with <strong>Operational Excellence</strong> goals—optimizing the pipeline from 
              Sales to Service. Managed data integrity across cross-functional departments.
            </p>
          </div>
        </section>

        <section class="content-block bento-card">
          <h2 class="tech-title">03 // Department & Role</h2>
          <p class="role-desc">
            Technical Liaison // IT Support Trainee
          </p>
          <div class="capsule-grid">
            <span class="capsule">ERP SUPPORT (ODOO)</span>
            <span class="capsule">DATA VALIDATION</span>
            <span class="capsule">SYSTEM TROUBLESHOOTING</span>
            <span class="capsule">WORKFLOW OPTIMIZATION</span>
          </div>
        </section>
      </div>

      <aside class="sidebar">
        <div class="sidebar-box hud-border">
          <h3 class="side-title">MISSION LOGS</h3>
          <ul class="project-list">
            <li><span class="red-dot"></span> Pre-Service Flowcharts</li>
            <li><span class="red-dot"></span> Odoo Naming Standards</li>
            <li><span class="red-dot"></span> API Integration (JotForm)</li>
            <li><span class="red-dot"></span> Dashboard Optimization</li>
          </ul>
        </div>

        <div class="sidebar-box stats-card">
          <h3 class="side-title">SYSTEM IMPACT</h3>
          <div class="impact-item">
            <span class="lab">DATA ACCURACY</span>
            <span class="val blue-glow">HIGH-RES</span>
          </div>
          <div class="impact-item">
            <span class="lab">QUOTATION SPEED</span>
            <span class="val red-glow">OPTIMIZED</span>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.spider-theme { color: #fff; font-family: 'Inter', sans-serif; padding: 20px; }

/* HUD COMPONENTS */
.hud-border {
  border: 1px solid rgba(74, 158, 255, 0.3);
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(10px);
  position: relative;
}

.bento-card {
  background: rgba(20, 20, 25, 0.6);
  border: 1px solid #222;
  padding: 30px;
  border-radius: 15px;
  margin-bottom: 25px;
  transition: 0.3s;
}
.bento-card:hover { border-color: #4a9eff; transform: translateY(-5px); }

/* HERO SECTION */
.hero-card {
  display: flex; align-items: center; gap: 40px;
  padding: 40px; border-radius: 20px;
  border-top: 4px solid #e11d2e; margin-bottom: 40px;
}

.glow-ring {
  padding: 5px; border: 2px solid #e11d2e; border-radius: 15px;
  box-shadow: 0 0 20px rgba(225, 29, 46, 0.4);
}
.company-logo { width: 220px; border-radius: 10px; display: block; }

.status-tag { color: #e11d2e; font-family: monospace; font-weight: bold; letter-spacing: 2px; font-size: 0.8rem; }
.blink { animation: blinker 1.5s linear infinite; margin-right: 5px; }
@keyframes blinker { 50% { opacity: 0; } }

.hero-text h1 { font-size: 2.5rem; letter-spacing: -1px; margin: 5px 0; }
.subtitle { color: #4a9eff; font-weight: 800; letter-spacing: 2px; }

/* LAYOUT */
.content-layout { display: grid; grid-template-columns: 1fr 320px; gap: 30px; }
.tech-title { color: #e11d2e; font-size: 1.1rem; text-transform: uppercase; margin-bottom: 20px; font-weight: 900; }
.content-block p { color: #aaa; line-height: 1.7; }

/* CAPSULES */
.capsule-grid { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 20px; }
.capsule {
  background: rgba(74, 158, 255, 0.1); border: 1px solid #4a9eff;
  padding: 6px 14px; border-radius: 4px; font-size: 0.75rem; color: #4a9eff; font-weight: bold;
}

/* SIDEBAR */
.sidebar-box { padding: 25px; border-radius: 15px; margin-bottom: 20px; }
.side-title { font-size: 0.9rem; color: #4a9eff; margin-bottom: 20px; border-bottom: 1px solid #333; padding-bottom: 10px; }
.project-list { list-style: none; }
.project-list li { padding: 12px 0; color: #eee; font-size: 0.85rem; display: flex; align-items: center; gap: 10px; }
.red-dot { width: 6px; height: 6px; background: #e11d2e; border-radius: 50%; box-shadow: 0 0 5px #e11d2e; }

.impact-item { margin-bottom: 15px; }
.impact-item .lab { display: block; font-size: 0.7rem; color: #666; margin-bottom: 5px; }
.impact-item .val { font-weight: 900; font-size: 1.2rem; }
.red-glow { color: #e11d2e; text-shadow: 0 0 10px #e11d2e; }
.blue-glow { color: #4a9eff; text-shadow: 0 0 10px #4a9eff; }

@media (max-width: 900px) { .content-layout { grid-template-columns: 1fr; } .hero-card { flex-direction: column; text-align: center; } }
</style>