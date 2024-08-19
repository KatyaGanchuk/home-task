import Vue from 'vue'; 
import VueRouter from 'vue-router'; 
import AboutMe from './components/MainScreen.vue'; 
 
Vue.use(VueRouter); 
 
const routes = [ 
  { path: '/about-me', component: MainScreen } 
]; 
 
const router = new VueRouter({ 
  routes 
}); 
 
export default router;