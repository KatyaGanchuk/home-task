<template>
  <div class="text-center" id="my-works">
    <h1>My works</h1>
    <hr class="star-portfolio">
  </div>

  <div class="cards-list">
    <div class="card">
      <div class="card_image">
        <img src="../assets/uspih.png" alt="uspih">
      </div>
      <div class="card_content">
        <h2 class="card_title">it.uspih</h2>
        <p class="card_description">Created a comprehensive web application for an IT academy, including functionalities for course listings, student registration, and online learning modules. Implemented features to facilitate easy navigation and user interaction, enhancing the overall educational experience for students.</p>
        <a href="https://it.uspih.vn.ua/" target="_blank" class="card_button box__link button-animation ">View the site
          <span></span>
  <span></span>
  <span></span>
  <span></span>
        </a>
      </div>
    </div>

    <div class="card">
      <div class="card_image">
        <img src="../assets/natali.png" alt="natali">
      </div>
      <div class="card_content">
        <h2 class="card_title">fitnessnatali</h2>
        <p class="card_description">Developed a responsive website for a fitness trainer, incorporating features such as online class schedules, booking systems, and client testimonials. Focused on creating an intuitive layout and seamless user experience, ensuring the site was fully optimized for both desktop and mobile devices.</p>
        <a href="https://fitnessnatali.intita.com/" target="_blank" class="card_button">View the site</a>
      </div>
    </div>

    <div class="card">
      <div class="card_image">
        <img src="../assets/germany.png" alt="germany">
      </div>
      <div class="card_content">
        <h2 class="card_title">Pokhilko Darina</h2>
        <p class="card_description">Created a comprehensive web application for an IT academy, including functionalities for course listings, student registration, and online learning modules. Implemented features to facilitate easy navigation and user interaction, enhancing the overall educational experience for students.</p>
        <a href="https://pokhilkodarina.intita.com/" target="_blank" class="card_button">View the site</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyWorksPage',
}
</script>

<style scoped>
.text-center h1 {
  color: #101010;
  margin-bottom: 20px;
}

.cards-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.card {
  background-color: #1c1c1e;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  margin: 20px;
  width: 300px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.card_image {
  height: 200px;
  overflow: hidden;
}

.card_image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card:hover .card_image img {
  transform: scale(1.1);
}

.card_content {
  padding: 20px;
}

.card_title {
  font-size: 1.5rem;
  color: white;
  margin-bottom: 10px;
  border-bottom: 2px solid green;
}

.card_description {
  color: #d1d1d6;
  margin-bottom: 20px;
}

.card_button {
  background-color: #00530f;
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  transition: background-color 0.3s ease;
  position: relative;
  overflow: hidden;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.card_button::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300%;
  height: 300%;

  transition: all 0.5s ease;
  transform: translate(-50%, -50%) scale(0);
  border-radius: 50%;
}

.card_button:hover::before {
  transform: translate(-50%, -50%) scale(1);
}

.card_button:hover {
  background-color: #0056b3;
}

</style>
