<template>
  <div class="container" id="Skills">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2>Skills</h2>
        <hr class="star-light">
      </div>
    </div>
    <div class="skills row">
      <div class="col-lg-4 col-lg-offset-2">
        <ul class="content-text" style="text-align:justify;">
          <li><i class="fa-brands fa-git-alt git"></i> GIT</li>
          <li><i class="fa-brands fa-html5 html5"></i> HTML5</li>
          <li><i class="fa-brands fa-css3-alt css3"></i> CSS3</li>
          <li><i class="fa-brands fa-js js"></i> JavaScript</li>
          <li><i class="fa-brands fa-vuejs vuejs"></i> Vue.js</li>
          <li><i class="fa-brands fa-figma figma"></i> Figma</li>
          <li><i class="fa-solid fa-n nuxt"></i> Nuxt.js</li>
        </ul>
      </div>
      <div class="col-lg-4">
        <ul class="content-text" style="text-align:justify;">
          <li><i class="fa-solid fa-people-arrows scrum"></i> Scrum</li>
          <li><i class="fa-solid fa-arrows-spin agile"></i> Agile</li>
          <li><i class="fa-solid fa-users teamwork"></i> Teamwork</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsPage',
}
</script>

<style scoped>
.skills {
  justify-content: space-around;
  margin-left: 100px;
}

#Skills {
  padding-top: 5%;
}

h2 {
  font-size: 2.5rem;
}

ul {
  font-weight: bold;
  font-size: 20px;
  list-style: none; /* Відключаємо стандартні маркери списку */
  padding: 0;
}

li {
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 10px; /* Відстань між пунктами списку */
}

li i {
  margin-right: 10px; /* Відстань між іконкою і текстом */
}

/* Додаємо кольори для кожної іконки */
.git {
  color: #f05032; /* Колір Git */
}

.html5 {
  color: #e34f26; /* Колір HTML5 */
}

.css3 {
  color: #1572b6; /* Колір CSS3 */
}

.js {
  color: #f7df1e; /* Колір JavaScript */
}

.vuejs {
  color: #42b883; /* Колір Vue.js */
}

.figma {
  color: #a259ff; /* Колір Figma */
}

.nuxt {
  color: #00c58e; /* Колір Nuxt.js */
}

.scrum {
  color: #ff8c00; /* Наприклад, помаранчевий для Scrum */
}

.agile {
  color: #007acc; /* Наприклад, синій для Agile */
}

.teamwork {
  color: #ff6347; /* Наприклад, червоний для Teamwork */
}
</style>
