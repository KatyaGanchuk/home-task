<template>
<div class="container">
            <div class="row">
            </div>
                <div class="col-md-12 col-lg-offset-2">
                    <p class="content-text text-center" style="text-align:justify;">Hey there! I am a junior software developer
                        based in Vinnytsia, Ukraine. I work with some of the popular front end technologies to create
                        beautiful websites that get noticed. I seek experience to gain more knowledge in the web
                        development field.
                    </p>
                </div>
            </div>
</template>

<script>
export default {
  name: 'AboutPage',
 
}
</script>


<style scoped>
p {
  animation-duration: 3s;
  animation-name: slidein;
  
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
.img{
    width:90%;
}

#about-me{
    padding-bottom:5%;
}
.h2{
    font-size: 2.5rem;
}
</style>
