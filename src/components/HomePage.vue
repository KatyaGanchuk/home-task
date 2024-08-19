<template>
<div class="container-fluid splash" id="splash">
        <div class="container">
            <img src="../assets/katyag.jpg" class="img" >
            <h1>HELLO!</h1>
            <h1 class="intro-text"><span class="lead" id="typed">I am a web developer! </span></h1>
            <span class="continue"><a href="#about-me"><i class="fa fa-angle-down"></i></a></span>
        </div>
    </div>

<!-- <div id="background-wrap">
    <div class="bubble x1"></div>
    <div class="bubble x2"></div>
    <div class="bubble x3"></div>
    <div class="bubble x4"></div>
    <div class="bubble x5"></div>
    <div class="bubble x6"></div>
    <div class="bubble x7"></div>
    <div class="bubble x8"></div>
    <div class="bubble x9"></div>
    <div class="bubble x10"></div>
</div> -->
</template>

<script>
export default {
  name: 'HomePage',
 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nc-main {
    position: relative;
    height: 100vh;
    overflow-x: hidden;
    -webkit-box-shadow: 0 0 30px #241d20;
    box-shadow: 0 0 30px #241d20;
    -webkit-transition: -webkit-transform 0.4s;
    transition: -webkit-transform 0.4s;
    transition: transform 0.4s;
    transition: transform 0.4s, -webkit-transform 0.4s;
}

.full-wh {
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    width: 100%;
}

.bg-animation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}


.bg-animation{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}


.splash h1 {
    font-size: 40px;
    margin-bottom: .15em;
    text-align: center;
}

.h2{
    font-size: 2.5rem;
}

.splash .lead,
.splash .continue {
    display: inline-block;
    text-align: center;
}

h1.intro-text {
    margin: 0;
    color: black;
}

.splash .lead {
    font-size: 30px;
    margin-bottom: 1em;
    font-family: Rockwell;
}

.navbar-inverse {
    border: none !important;
}

@keyframes blink {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@-webkit-keyframes blink {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@-moz-keyframes blink {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@-ms-keyframes blink {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@-o-keyframes blink {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

/* code for animated blinking cursor */
#typed-cursor {
    opacity: 1;
    font-size: 40px;
    color: green;
    font-weight: 50;
    -webkit-animation: blink 1s infinite;
    -moz-animation: blink 1s infinite;
    -ms-animation: blink 1s infinite;
    -o-animation: blink 1s infinite;
    animation: blink 1s infinite;
}

.splash .continue {
    font-size: 3em;
    display: block;
}

.splash .continue a {
    border: 2px solid green;
    border-radius: 100%;
    color: green;
    display: inline-block;
    text-decoration: none;
    width: 40px;
    height: 40px;
    font-size: 30px;
}

.splash .continue a:hover {
    background-color: black;
}
.img{
    width: 31%;
    border-radius: 50%;
    margin: 20px;
}

</style>
