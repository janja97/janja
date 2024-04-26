<template>
  <div class="nav bg-black/70 flex h-14 w-full fixed justify-between px-10 z-50">
    <input type="checkbox" id="nav-check">
    <div class="nav-header inline">
      <a @click="scrollToSection('hero')" class="inline-block text-white p-2 text-3xl font-bold dark:text-red cursor-pointer">
        Janja
      </a>
    </div>
    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>

    <div class="nav-links text-lg">
      <a @click="scrollToSection('about-me')" class="inline-block px-4 py-3 no-underline text-white hover:underline cursor-pointer">About Me</a>
      <a @click="scrollToSection('projects')" class="inline-block px-4 py-3 no-underline text-white hover:underline cursor-pointer">Projects</a>
      <a @click="scrollToSection('experience')" class="inline-block px-4 py-3 no-underline text-white hover:underline cursor-pointer">Experience</a>
      <a @click="scrollToSection('education')" class="inline-block px-4 py-3 no-underline text-white hover:underline cursor-pointer">Education</a>
      <a @click="scrollToSection('contact')" class="inline-block px-4 py-3 no-underline text-white hover:underline cursor-pointer">Contact Me</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>


<style>

.nav > .nav-btn {
  display: none;
}
.nav > .nav-links > a {
  /* display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #efefef; */
}


.nav > #nav-check {
  display: none;
}

@media (max-width:600px) {
  .nav > .nav-btn {
    display: inline-block;
    position: absolute;
    right: 20px;
    top: 0px;
  }
  .nav > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
  }
  /* .nav > .nav-btn > label:hover,.nav  #nav-check:checked ~ .nav-btn > label {
    background-color: rgba(0, 0, 0, 0.3);
  } */
  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: #333;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 50px;
    left: 0px;
  }
  .nav > .nav-links > a {
    display: block;
    width: 100%;
  }
  .nav > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  .nav > #nav-check:checked ~ .nav-links {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
}
</style>
