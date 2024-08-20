<template>
  <footer>
    <div class="container footer-container">
      <div class="row footer-row">
        <div class="col-xs-12 col-sm-6 col-md-6 text-center">
          <h4 class="text-center">Find me here</h4>
          <address>
            <strong><i class="fa fa-location-arrow"></i> yakova st.</strong><br>37,<br>Vinnytsia, Ukraine 21012<br><br>
            <a class="tel" href="tel:+380983526207" type="tel" target="_blank"><i class="fa fa-mobile"></i><span> +
              38 (098) 352 62 07</span></a>
          </address>
        </div>
        <div class="col-xs-12 col-md-6 col-sm-6 social-section">
          <div class="text-center">
            <h4 class="text-center">Also, I can be found here</h4>
            <div class="text-center social-buttons">
              <a href="https://www.facebook.com/ekaterinaganchuk.ganchuk" target="_blank"
                class="btn btn-default btn-lg social-button link-facebook"><i class="bi bi-facebook"></i>
              </a>
              <a href="https://codepen.io/urmnkvot-the-bashful" target="_blank"
                class="btn btn-default btn-lg social-button link-codepen"><i class="fa-brands fa-codepen"></i>
              </a>
              <a href="https://twitter.com/home?lang=ru" target="_blank"
                class="btn btn-default btn-lg social-button link-twitter"><i class="bi bi-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/%D0%B3%D0%B0%D0%BD%D1%87%D1%83%D0%BA-%D0%BA%D0%B0%D1%82%D1%8F-75935b1a3/"
                target="_blank" class="btn btn-default btn-lg social-button link-linkedin"><i class="bi bi-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/gan4uk_katya/" target="_blank"
                class="btn btn-default btn-lg social-button link-instagram"><i class="bi bi-instagram"></i>
              </a>
            </div>
            <!-- Кнопка для завантаження резюме -->
            <div class="text-center mt-3">
              <a href="../assets/CV.pdf" class="btn btn-primary btn-lg" download>
                <i class="fa fa-download"></i> Download CV
              </a>
            </div>
          </div>
        </div>
      </div> 
    </div> 
  </footer>
</template>


<script>
export default {
  name: 'FooterPage ',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a.tel,
a.tel:hover {
    text-decoration: none;
    color: #fff;
}

a.tell,
a.tell:hover {
    text-decoration: none;
    color: #fff;
}

a.poshta,
a.poshta:hover {
    text-decoration: none;
    color: #fff;
}

a.social-button {
    background: #fff;
    font-size: 20px;
    border-radius: 50%;
    margin: 5px;
}

.address-container {
    display: inline-block;
    margin: 0 auto;
}

a.link-facebook,
a.link-twitter,
a.link-codepen,
a.link-linkedin,
a.link-instagram {
    transition: 0.4s ease;
}

a.link-twitter {
    color: #1DA1F2;
}

a.link-facebook {
    color: #3b5998;
}

a.link-linkedin {
    color: #007bb6;
}

a.link-instagram {
    color: #e95950;
}

a.link-facebook:hover {
    background-color: #3b5998;
    color: #fff;
}

a.link-twitter:hover {
    background-color: #1DA1F2;
    color: #fff;
}

a.link-codepen:hover {
    background-color: black;
    color: #fff;
}

a.link-linkedin:hover {
    background-color: #007bb6;
    color: #fff;
}

a.link-instagram:hover {
    background-color: #e95950;
    color: #fff;
}

.btn-default {
    color: #333;
    background-color: #fff;
    border-color: transparent !important;
}

.fa-heart {
    color: #f32323;
}

h4.author {
    letter-spacing: 4px;
}

hr.footer-hr {
    width: 50%;
}

hr.copyright {
    opacity: 0.4;
}

.content-text {
    font-size: 30px;
}

.content-text li {
    font-size: 25px;
}

#contact span {
    font-size: 24px;
}

#contact i {
    font-size: 24px;
}
#contact .row .col-md-12{
    padding:15px 0 0 15px;
}
.btn-primary {
  color: #fff;
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
</style>
