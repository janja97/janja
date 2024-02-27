<template>
  <div class="bg-[#e6e6e9]">
    <div class="container px-6 py-20 mx-auto">
      <div class="flex justify-center items-center text-center flex-col gap-3" data-aos="fade-up">
        <h3 class="font-bold text-4xl text-dark ">kontact me </h3>
        <hr class="bg-[#c1121f] w-[6rem] h-[0.20rem]">
        <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, repellat!</p>
      </div>
      <form action="https://formsubmit.co/janjasentic@gmail.com" method="POST" class="form mt-20">
        <div class="d-flex justify-content-between">
          <input type="text" id="name" placeholder="Name*" class="inline-block w-2/6 mb-8 px-4 outline-none border-solid border-b-2 border-red-100 text-sm">
          <input type="email" name="email"  placeholder="Email*" required>
          <!-- <input type="hidden" name="_next" value="https://bubaphotography.com"> -->
          <input type="text" name="subject"  placeholder="Subject*">
        </div>
        <textarea placeholder="Message*" name="text" class="col"></textarea>
        <button type="submit">Send</button>

      </form>
    </div>
  </div>
</template>

<script>


</script>

<style setup>

/* input[type="text"],input[type="email"], textarea {
    display: inline-block;
    width: 29%;
    margin: 0 0% 30px;
    padding: 8px 0 12px;
    outline: none;
    border: 0;
    border-bottom: 1px solid #aaa;
    font-size: 14px;
    font-family: Playfairdisplay_regular;
} */
textarea {
    width: 100%;
    height: 44px;
}
button {
    border: 0;
    padding: 9px 30px;
    border-radius: 3px;
    background-color: #333;
    color: #fff;
    font-size: 16px;
}


</style>
