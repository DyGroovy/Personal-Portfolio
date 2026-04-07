import { createRouter, createWebHistory } from 'vue-router'
import StudentProfile from '../components/StudentProfile.vue'
import CompanyProfile from '../components/CompanyProfile.vue'
import ExperiencePage from '../components/ExperiencePage.vue'
import SkillsPage from '../components/SkillsPage.vue'
// Step 1: Import the Reflection component
import ReflectionPage from '../components/ReflectionPage.vue'

const routes = [
  { path: '/', component: StudentProfile },
  { path: '/company', component: CompanyProfile },
  { path: '/experience', component: ExperiencePage },
  { path: '/skills', component: SkillsPage },
  // Step 2: Add the route for Reflection
  { path: '/reflection', component: ReflectionPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Step 3: Add scroll behavior so it always starts at the top
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router