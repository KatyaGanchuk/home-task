<template>
    <div class="container-fluid contact-me-container content-section" id="contact">
      <div class="container">
        <h1 class="intro-text text-center">Contact Me</h1>
        <hr class="star-light">
        <div class="row mt-4">
          <div class="col-md-12">
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" v-model="form.name" required>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model="form.email" required>
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" rows="3" v-model="form.message" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactPage',
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Тут можна додати логіку для обробки форми, наприклад, відправлення даних на сервер
        alert(`Message sent by ${this.form.name}`);
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-me-container {
    padding: 3%;
  }
  
  .bi-envelope,
  .bi-phone,
  .fa-phone {
    color: black;
  }
  
  span {
    font-size: 24px;
    color: black;
  }
  
  a {
    text-decoration: none;
  }
  
  .form-label {
    font-size: 18px;
  }
  
  .btn-primary {
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 5px;
    background-color: #ffffff;
    color: black;
    padding: 10px 20px;
    border-radius: 20px;
    text-decoration: none;
    text-align: center;
    display: inline-block;
    position: relative;
    overflow: hidden;
    border: none;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }
  input{
    border: 1px solid green;
  }
  textarea{
    border: 1px solid green;
  }
  </style>
  