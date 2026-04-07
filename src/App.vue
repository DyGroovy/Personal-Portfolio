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
      <p>DYLAN RANZE PANGILINAN // CPE PORTFOLIO </p>
    </footer>
  </div>
</template>

<style>
/* Global Spider-Theme Reset */
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background-color: #05050a;
  /* Red Grid Background Pattern */
  background-image: 
    linear-gradient(rgba(225, 29, 46, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(225, 29, 46, 0.04) 1px, transparent 1px);
  background-size: 40px 40px;
  color: #fff;
  font-family: 'Inter', -apple-system, sans-serif;
}

.web-fade-enter-active, .web-fade-leave-active { transition: all 0.3s ease; }
.web-fade-enter-from { opacity: 0; transform: translateY(10px); }
</style>

<style scoped>
.spider-nav {
  background: rgba(5, 5, 15, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 2px solid #e11d2e;
  position: sticky;
  top: 0; z-index: 1000;
  box-shadow: 0 4px 20px rgba(225, 29, 46, 0.3);
}
.nav-container {
  max-width: 1200px; margin: 0 auto; height: 70px;
  display: flex; justify-content: space-between; align-items: center; padding: 0 20px;
}
.logo-text { font-weight: 900; letter-spacing: 2px; font-size: 1.1rem; }
.links a {
  color: #888; text-decoration: none; font-weight: 700; font-size: 0.8rem;
  margin-left: 20px; transition: 0.3s;
}
.links a:hover { color: #4a9eff; }
.active { color: #fff !important; background: #e11d2e; padding: 8px 15px; border-radius: 4px; box-shadow: 0 0 10px #e11d2e; }
.viewport { max-width: 1100px; margin: 40px auto; min-height: 85vh; padding: 0 20px; }
.spider-footer { text-align: center; padding: 30px; color: #333; font-size: 0.7rem; font-weight: bold; font-family: monospace; }
</style>