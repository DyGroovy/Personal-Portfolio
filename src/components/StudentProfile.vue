<template>
  <div class="hud-panel">
    <div class="profile-layout">
      <div class="side-bar">
        <div class="glow-frame">
          <img src="@/assets/me.jpg" alt="Pangilinan" class="profile-img" />
        </div>
        <div class="meta-data">
          <p class="blue-label">SUBJECT: DRZP-30</p>
          <p>dylanpangilinan30@gmail.com</p>
          <p>mdrpangilinan1@tip.edu.ph</p>
          <p>TIP MANILA // CP-E</p>
        </div>
      </div>

      <div class="main-bio">
        <span class="red-tag">IDENTITY CONFIRMED</span>
        <h1>DYLAN RANZE PANGILINAN</h1>
        <h2 class="subtitle">BS Computer Engineering // 4th Year</h2>
        
        <div class="bio-paragraphs">
          <p>I am a Computer Engineering student at the Technological Institute of the Philippines with a passion for bridging hardware logic and software automation. My academic background has equipped me with a deep curiosity for IoT development and embedded systems.</p>
          <p>During my tenure at New Ivex Machinery, I specialized in ERP lifecycle management and digital system integration. I believe that an engineer’s role is to build resilient "webs" of technology that optimize human labor and industrial efficiency.</p>
          <p>My career aspiration is to lead digital transformation projects as a Systems Automation Engineer, focusing on sustainable and intelligent industrial solutions.</p>
        </div>

        <div class="motto-box">
          <p>"We can't change what's done, we can only move on."</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hud-panel { background: rgba(10, 10, 20, 0.6); padding: 50px; border-radius: 20px; border: 1px solid #222; border-top: 4px solid #e11d2e; }
.profile-layout { display: grid; grid-template-columns: 280px 1fr; gap: 50px; }
.glow-frame { border: 2px solid #4a9eff; padding: 5px; border-radius: 15px; box-shadow: 0 0 15px rgba(74, 158, 255, 0.3); }
.profile-img { width: 100%; border-radius: 10px; display: block; }
.meta-data { margin-top: 20px; font-size: 0.8rem; color: #888; line-height: 1.8; font-family: monospace; }
.blue-label { color: #4a9eff; font-weight: bold; }
.red-tag { color: #e11d2e; font-weight: 900; letter-spacing: 2px; font-size: 0.7rem; }
h1 { font-size: 2.8rem; margin: 10px 0; color: #fff; }
.subtitle { color: #4a9eff; font-size: 1.1rem; margin-bottom: 25px; }
.bio-paragraphs p { margin-bottom: 15px; color: #ccc; line-height: 1.7; }
.motto-box { margin-top: 30px; padding: 20px; border-left: 5px solid #e11d2e; background: rgba(225, 29, 46, 0.1); font-style: italic; font-size: 1.2rem; font-weight: bold; color: #fff; }

@media (max-width: 768px) { .profile-layout { grid-template-columns: 1fr; } }
</style>