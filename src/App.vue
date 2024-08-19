<template>
  <NavigationMenu msg="Welcome to Your Vue.js App"/>
   <HomePage/>
  <AboutPage/>
  <MyWorksPage/>
  <SkillsPage/>
  <ContactPage/>
  <FooterPage/>

</template>

<script>
import NavigationMenu from './components/NavigationMenu.vue'
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import MyWorksPage from './components/MyWorksPage.vue'
import SkillsPage from './components/SkillsPage.vue'
import ContactPage from './components/ContactPage.vue'
import FooterPage from './components/FooterPage.vue'

export default {
  name: 'App',
  components: {
    NavigationMenu,
    HomePage,
    AboutPage,
    MyWorksPage,
    SkillsPage,
    ContactPage,
    FooterPage,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
background: rgb(0,40,11);
background: linear-gradient(176deg, rgba(0,40,11,0.0032387955182072714) 25%, rgba(121,227,230,0.3029586834733894) 49%, rgba(29,108,106,0) 83%, rgba(12,74,25,1) 95%);

}
</style>
