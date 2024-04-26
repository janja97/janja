<template>
  <div class="bg-[#e6e6e9]">
    <!-- <p>{{ $t('about') }}</p> -->
    <div class="container px-6 py-20 mx-auto">
      <div class="flex justify-center items-center text-center flex-col gap-3" data-aos="fade-up">
        <h3 class="font-bold text-4xl text-dark ">Experience</h3>
        <hr class="bg-[#c1121f] w-[6rem] h-[0.20rem]">
      </div>
      <div class="flex flex-col gap-8 mt-28" data-aos="fade-up">
        <div class="card bg-[#dcdcdf]">
          <img class="card-img" src="../public/icons/office-building.png" alt="">
          <div>
            <h5 class="font-medium font-lg">myFuture d.o.o. <span class="font-basis font-normal text-slate-600 ms-1">Full-time</span></h5>
            <p class="text-slate-700">2022-2023</p>
            <p class="text-slate-700">Vitez, Bosnia and Herzegovin &middot; On-site</p>
          </div>
        </div>
        <div class="card bg-[#dcdcdf]">
          <img class="card-img" src="../public/icons/office-building.png" alt="">
          <div>
            <h5 class="font-medium font-lg">MoreScreen <span class="font-basis font-normal text-slate-600 ms-1">Full-time</span></h5>
            <p class="text-slate-700">2023-/</p>
            <p class="text-slate-700">Mostar, Bosnia and Herzegovin &middot; On-site</p>
          </div>
        </div>
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
.card {
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 20px 20px;
  border-radius: 20px;
}
.card-img {
  width: 70px;
  height: 70px;
}

</style>
