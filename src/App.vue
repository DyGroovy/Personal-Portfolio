<template>
  <div id="app">
    <header class="spider-nav">
      <div class="nav-container">
        <div class="logo">
          <span class="spider-symbol">🕸️</span>
          <span class="logo-text">DRZP // PROTOCOL</span>
        </div>
        
        <nav class="links">
          <router-link to="/" exact-active-class="active">PROFILE</router-link>
          <router-link to="/company" active-class="active">COMPANY</router-link>
          <router-link to="/experience" active-class="active">EXPERIENCE</router-link>
          <router-link to="/skills" active-class="active">SKILLS</router-link>
          <router-link to="/reflection" active-class="active">REFLECTION</router-link>
        </nav>
      </div>
    </header>

    <main class="viewport">
      <transition name="web-fade" mode="out-in">
        <router-view />
      </transition>
    </main>

    <footer class="spider-footer">
      <div class="footer-line"></div>
      <p>DYLAN RANZE PANGILINAN // CP-E PORTFOLIO v2026.0</p>
      <p class="timestamp">SYSTEM STATUS: ONLINE</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* GLOBAL STYLES & RESET */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Space+Mono&display=swap');

* { 
  margin: 0; 
  padding: 0; 
  box-sizing: border-box; 
}

body {
  background-color: #05050a;
  /* Red Web Grid Pattern */
  background-image: 
    linear-gradient(rgba(225, 29, 46, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(225, 29, 46, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
  color: #ffffff;
  font-family: 'Inter', -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden; /* Prevents side-scrolling on mobile */
}

/* Page Transition Effects */
.web-fade-enter-active, .web-fade-leave-active { 
  transition: opacity 0.3s, transform 0.3s; 
}
.web-fade-enter-from { 
  opacity: 0; 
  transform: translateY(10px); 
}
</style>

<style scoped>
/* NAVIGATION BAR */
.spider-nav {
  background: rgba(5, 5, 15, 0.95);
  backdrop-filter: blur(15px);
  border-bottom: 2px solid #e11d2e;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  box-shadow: 0 4px 20px rgba(225, 29, 46, 0.2);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.logo-text {
  font-weight: 900;
  letter-spacing: 2px;
  font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  color: #fff;
}

.spider-symbol {
  font-size: 1.2rem;
  filter: drop-shadow(0 0 5px #e11d2e);
}

/* NAV LINKS */
.links {
  display: flex;
  gap: 8px;
  flex-wrap: wrap; /* Allows links to wrap to second line if needed */
  justify-content: flex-end;
}

.links a {
  color: #888;
  text-decoration: none;
  font-weight: 700;
  font-size: clamp(0.7rem, 1.8vw, 0.85rem);
  padding: 8px 12px;
  border-radius: 4px;
  transition: 0.3s ease;
  white-space: nowrap;
  text-transform: uppercase;
}

.links a:hover {
  color: #4a9eff;
  background: rgba(74, 158, 255, 0.05);
}

.active {
  color: #ffffff !important;
  background: #e11d2e !important;
  box-shadow: 0 0 15px rgba(225, 29, 46, 0.5);
}

/* VIEWPORT CONTAINER */
.viewport {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
  min-height: 80vh;
}

/* FOOTER */
.spider-footer {
  text-align: center;
  padding: 60px 20px;
  color: #444;
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
}

.footer-line {
  width: 50px;
  height: 2px;
  background: #e11d2e;
  margin: 0 auto 20px;
}

.timestamp {
  margin-top: 5px;
  color: #e11d2e;
  font-weight: bold;
}

/* MOBILE RESPONSIVE OVERRIDES */
@media (max-width: 768px) {
  .nav-container {
    flex-direction: column; /* Stack logo and links */
    gap: 15px;
    padding: 15px 10px;
  }

  .links {
    justify-content: center;
    width: 100%;
  }

  .links a {
    padding: 6px 10px;
    flex: 1 1 auto; /* Grow links to fill space evenly */
    text-align: center;
    background: rgba(255, 255, 255, 0.02);
  }

  .viewport {
    padding: 20px 15px;
  }
}

@media (max-width: 400px) {
  .links a {
    font-size: 0.65rem;
    padding: 5px 8px;
  }
}
</style>
