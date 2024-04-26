<template>
  <div class="bg-[#e6e6e9]">
    <div class="container px-6 py-20 mx-auto">
      <div class="flex justify-center items-center text-center flex-col gap-3" data-aos="fade-up">
        <h3 class="font-bold text-4xl text-dark ">Contact me </h3>
        <hr class="bg-[#c1121f] w-[6rem] h-[0.20rem]">
        <!-- <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, repellat!</p> -->
      </div>
      <div class="grid md:grid-cols-2 grid-cols-1 py-20" data-aos="fade-up">
        <div class="social flex flex-col gap-5">
          <h3 class="text-[#c1121f] text-2xl font-bold mb-3">Social Links</h3>
          <p class="text-kg">Do you want to learn more about my projects or do you have any questions? Follow me on social media or send me a message through the contact form below. I look forward to your messages!</p>
          <div class="flex mt-5 gap-5">
            <a href="https://github.com/janja97?tab=repositories" target="_blank"><img src="../public/icons/github.png" alt="" ></a>
            <a href="https://www.linkedin.com/in/janja-badrov-078b92238/" target="_blank"><img src="../public/icons/linkedin.png" alt=""></a>

          </div>
        </div>
        <form action="https://formsubmit.co/janjasentic@gmail.com" method="POST" class="form md:rounded-r-2xl rounded-b-2xl">
          <h3 class="text-[#c1121f] text-2xl font-bold mb-3">Let's talk</h3>

          <div class="d-flex justify-content-between">
            <input type="text" id="name" placeholder="Name*" class="inline-block md:w-2/6 w-full mb-8 px-4">
            <input type="email" name="email"  placeholder="Email*" required  class="inline-block  md:w-2/6 w-full  mb-8 px-4">
            <!-- <input type="hidden" name="_next" value="https://bubaphotography.com"> -->
            <input type="text" name="subject"  placeholder="Subject*"  class="inline-block mb-8 px-4 w-full">
          </div>
          <textarea placeholder="Message*" name="text" class="w-full inline-block p-4 mb-8"></textarea>
          <button type="submit" class="btn">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>


</script>

<style setup>
.social {
  background-image: url('../public/bbblurry.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 40px;
  color: white;
  border-radius: 20px 0 0 20px;
}
.social img {
  width: 50px ;
  height: auto;
}
.form {
  background-color: white;
  padding: 40px;
  border-radius: 0px 20px 20px 0px;

}
@media screen and (max-width: 768.5px) {
  .social {
    border-radius: 20px 20px 0px 0;
  }
  .form {
    border-radius: 0px 0 20px 20px;
  }
}

input[type="text"],input[type="email"] {
  border: 1px solid black;
  border-radius: 20px;
  height:40px;
}

textarea {
  border: 1px solid black;
  border-radius: 20px;
  height:100px;
}
.btn{
  color:#c1121f;
  border: 1px solid #c1121f;
  border-radius: 10px;
  padding: 10px 20px;
  font-weight: 700;
}
.btn:hover {
  color: white;
  background-color: #c1121f;
}
</style>
