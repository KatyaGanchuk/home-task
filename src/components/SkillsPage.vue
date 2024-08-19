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
            <li><i class="fa-brands fa-git-alt"></i> GIT</li>
            <li><i class="fa-brands fa-html5"></i> HTML5</li>
            <li><i class="fa-brands fa-css3-alt"></i> CSS3</li>
            <li><i class="fa-brands fa-js"></i> JavaScript</li>
          </ul>
        </div>




        
        <div class="col-lg-4">
          <ul class="content-text" style="text-align:justify;">
            <li><i class="fa-solid fa-people-arrows"></i> Scrum</li>
            <li><i class="fa-solid fa-arrows-spin"></i> Agile</li>
            <li><i class="fa-solid fa-users"></i> Teamwork</li>
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
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
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
    color: #198754; /* Колір іконки */
  }
  </style>
  