<template>
  <div class="reflection-page spider-theme">
    <header class="header-section text-center">
      <div class="status-pill">MISSION COMPLETE // ARCHIVING...</div>
      <h1 class="page-title">Executive Reflection</h1>
    </header>

    <div class="reflection-timeline">
      <div class="reflect-card hud-border left">
        <div class="card-num">01</div>
        <h3>Challenges & Successes</h3>
        <p>
          My biggest challenge was translating the "perfect" theory of the classroom into 
          the "messy" reality of industrial data. Success came when my automated pathway 
          successfully synced a week’s worth of service data without a single bit of loss.
        </p>
      </div>

      <div class="reflect-card center red-glow-box">
        <div class="motto-header">PERSONAL PHILOSOPHY</div>
        <p class="motto-quote">"We can't change what's done, we can only move on."</p>
        <p class="growth-context">
          I applied this daily at New Ivex. When a system migration failed, I learned 
          not to dwell on the error, but to analyze the data, pivot, and implement a 
          fix immediately. This resilience is my greatest personal growth.
        </p>
      </div>

      <div class="reflect-card hud-border right">
        <div class="card-num">02</div>
        <h3>Industry Takeaways</h3>
        <p>
          The OJT confirmed that Computer Engineering is the backbone of modern industry. 
          I now understand my field better as a tool for <strong>Operational Excellence</strong> 
          rather than just writing code.
        </p>
      </div>

      <div class="reflect-card blue-glow-box full-width">
        <h3 class="blue-text">Future Roadmap</h3>
        <p>
          Moving forward, I will integrate these lessons in ERP logic and professional 
          accountability into my final year at TIP Manila. My target is to specialize 
          in Industrial IoT and Systems Automation.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.spider-theme { color: #fff; padding: 20px; font-family: 'Inter', sans-serif; }
.status-pill { 
  display: inline-block; padding: 5px 15px; border-radius: 50px; 
  background: #e11d2e; font-size: 0.7rem; font-weight: 900; margin-bottom: 10px;
}
.page-title { font-size: 3rem; letter-spacing: -2px; margin-bottom: 60px; text-align: center;}

.reflection-timeline { display: flex; flex-direction: column; gap: 40px; max-width: 900px; margin: 0 auto; }

.reflect-card { 
  background: rgba(10, 10, 15, 0.8); border: 1px solid #222; 
  padding: 40px; border-radius: 20px; position: relative;
}

.card-num { 
  position: absolute; top: -15px; left: 20px; background: #e11d2e; 
  padding: 5px 15px; border-radius: 5px; font-weight: 900; font-family: monospace;
}

.hud-border { border-left: 4px solid #4a9eff; }
h3 { color: #4a9eff; margin-bottom: 15px; font-size: 1.4rem; }
p { color: #aaa; line-height: 1.8; }

/* MOTTO HIGHLIGHT */
.red-glow-box { 
  border: 1px solid #e11d2e; background: linear-gradient(145deg, #1a0505, #0a0a0a);
  box-shadow: 0 0 30px rgba(225, 29, 46, 0.1); text-align: center;
}
.motto-header { color: #e11d2e; font-weight: 900; letter-spacing: 4px; font-size: 0.75rem; margin-bottom: 20px; }
.motto-quote { font-size: 2rem; font-weight: 900; color: #fff; font-style: italic; margin-bottom: 20px; letter-spacing: -1px; }

/* FUTURE BOX */
.blue-glow-box { border-bottom: 4px solid #4a9eff; text-align: center; }
.blue-text { color: #4a9eff; text-transform: uppercase; }

@media (max-width: 768px) { .page-title { font-size: 2rem; } .motto-quote { font-size: 1.5rem; } }
</style>