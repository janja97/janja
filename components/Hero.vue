<template>
  <div class="h-screen hero bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
    <div class="relative z-20 text-[#f8edeb] text-center">
      <h6 class="text-2xl font-bold text-[#c1121f] mb-5">Janja Badrov</h6>
      <h1 class="font-extrabold text-2xl md:text-[3rem]">WEB DEVELOPER</h1>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
.hero {
  background-image: url('../public/hero.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

}
.hero::after {
  content: '';
  width: 100%;
  height: 100%;
  background: #00000087;
  position: absolute;
  top: 0;
  left: 0;
}

h1 {
  position: relative;
  letter-spacing: 7px;
  border-right: 2px solid hsl(0, 0%, 80%);
  overflow: hidden;
  height: 50px;
  white-space: nowrap;
  animation: typewriter 4s steps(44) 1s 1 normal both,
    blinkTextCursor 500ms infinite;
  width: auto;
  margin: auto;
}
@media (max-width: 768.5px) {
  h1 {
    animation: typewriterMobile 4s steps(44) 1s 1 normal both,
    blinkTextCursor 500ms infinite;

  }
}

@keyframes typewriterMobile {
  from {
    width: 0;
  }
  to {
    width: 290px;
  }
}
@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 490px;
  }
}
@keyframes blinkTextCursor {
  from {
    border-right-color: hsl(0, 0%, 80%);
  }
  to {
    border-right-color: transparent;
  }
}
</style>

