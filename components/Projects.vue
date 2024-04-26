<template>
  <div class="bg-[#e6e6e9]">
    <!-- <p>{{ $t('about') }}</p> -->
    <div class="container px-6 py-20 mx-auto">
      <div class="flex justify-center items-center text-center flex-col gap-3" data-aos="fade-up">
        <h3 class="font-bold text-4xl text-dark ">Projects</h3>
        <hr class="bg-[#c1121f] w-[6rem] h-[0.20rem]">
        <!-- <p class="mt-4">projects I worked on</p> -->
      </div>
      <div class="grid md:grid-cols-3 grid-cols-1 gap-16 mt-28 items-center">
        <a class="card relative rounded-3xl" href="https://portal.resignea.com/register" target="_blank">
          <img src="../public/projects/resignea.png" alt="" class="w-full h-[20rem] object-cover rounded-3xl">
          <div class="content hidden">
            <h3 class="font-bold text-lg">Resignea Web App</h3>
            <p>Html, vue, nuxt ,tailwindcss... </p>
          </div>
        </a>
        <a class="card relative rounded-3xl" href="https://www.resignea.com/" target="_blank">
          <img src="../public/projects/resignea-landing.png" alt="" class="w-full h-[20rem] object-cover rounded-3xl">
          <div class="content hidden">
            <h3 class="font-bold text-lg">Resignea landingpage</h3>
            <p>Html, vue, nuxt ,tailwindcss... </p>
          </div>
        </a>
        <a class="card relative rounded-3xl" href="https://bubaphotogrphy.netlify.app/" target="_blank">
          <img src="../public/projects/buba.png" alt="" class="w-full h-[20rem] object-cover rounded-3xl">
          <div class="content hidden">
            <h3 class="font-bold text-lg">Bubaphotography</h3>
            <p>Html, vue, bootstrap</p>
          </div>
        </a>
        <a class="card relative rounded-3xl" href="https://sentic.netlify.app/" target="_blank">
          <img src="../public/projects/sentic.png" alt="" class="w-full h-[20rem] object-cover rounded-3xl">
          <div class="content hidden">
            <h3 class="font-bold text-lg">Apartmani Sentić</h3>
            <p>Html, vue, bootstrap</p>
          </div>
        </a>
        <a class="card relative rounded-3xl p-[5rem] bg-white" href="https://myfuture.ba/" target="_blank">
          <img src="../public/projects/myFuture.png" alt="" class="h-[10rem] object-contain">
          <div class="content hidden">
            <h3 class="font-bold text-lg">myFuture</h3>
            <p>Html, vue, nuxt, tailwindcss...</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  }
};
</script>

<style scoped>

.card:hover::before {
  content: '';
  width: 100%;
  height: 100%;
  background: #00000069;
  position: absolute;
  border-radius: 26px;
  top: 0;
  left: 0;
}
.card:hover .content {
  display: block;
}
/* .card:hover img {

} */
.content {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
}
</style>
