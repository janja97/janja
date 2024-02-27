<template>
  <div class="bg-[#e6e6e9]">
    <div class="container px-6 py-20 mx-auto">
      <div class="flex justify-center items-center text-center flex-col gap-3" data-aos="fade-up">
        <h3 class="font-bold text-4xl text-dark ">About Myself</h3>
        <hr class="bg-[#c1121f] w-[6rem] h-[0.20rem]">
        <p class="mt-4">Frontend developer with a focus on details</p>
      </div>
      <div class="grid md:grid-cols-2 grid-cols-1 gap-16 mt-28 items-center">
        <img src="../public/hero.jpg" alt="Hero Image" data-aos="fade-right">
        <div class="grid grid-cols-1 gap-y-5" data-aos="fade-left">
          <h3 class="font-bold text-3xl">Web developer</h3>
          <p data-aos="fade-up" data-aos-delay="200">Web developer with two years of experience behind me, I am a passionate and ambitious person who longs to learn and progress in the world of web development. I pay particular attention to detail to ensure that the user experience is outstanding.</p>
          <p data-aos="fade-up" data-aos-delay="200">In addition, paying attention to clean and transparent code ensures the efficiency and sustainability of projects. With her ability to quickly adapt to new technologies and trends, she is ready to accept all the challenges brought by the dynamic environment of web development.</p>
          <h3 class="font-bold text-xl mt-2" data-aos="fade-up" data-aos-delay="200">Skills</h3>

          <div class="flex flex-wrap gap-4">
            <p v-for="(skill, index) in skills" :key="index" class="px-3 py-1 bg-[#dcdcdf] rounded-3xl" :data-aos="'fade-left'" :data-aos-delay="200 + index * 100">{{ skill }}</p>
          </div>
          <!-- <button class="w-auto px-10 py-2 mr-auto ml-0 border border-red-600 rounded-3xl mt-2" data-aos="fade-left" data-aos-delay="400">My Work</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Bootstrap', 'Tailwind css', 'PHP' ,'Laravel', 'SQL', '.NET', 'C', 'C#' ,'C++','GIT', 'SQL'] // Dodaj vještine koje želiš prikazati
    };
  }
};
</script>

<style scoped>
button {
  transition: 0.25s !important;
}
button:hover {
  box-shadow: inset 0 -3.25em 0 0 red;
  color: white;
}
</style>
