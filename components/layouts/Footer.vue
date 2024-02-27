<template>
  <div class="footer p-5 pb-10">
    <label class="dropdown">
      <div class="dd-button">
        language
      </div>
      <input type="checkbox" class="dd-input" id="test">
      <ul class="dd-menu">
        <li @click="changeLanguage('en')" class="text-gray-500 py-1 px-2 mx-auto hover:text-black hover:bg-slate-100 text-xs cursor-pointer">English</li>
        <li @click="changeLanguage('hr')" class="text-gray-500 py-1 px-2 mx-auto hover:text-black hover:bg-slate-100 text-xs cursor-pointer">Hrvatski</li>
      </ul>
      </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLanguageDropdown: false,
    };
  },
  methods: {
    changeLanguage(locale) {
      this.$i18n.locale = locale;
      this.showLanguageDropdown = false;
    },
  },
};
</script>

<style scoped>
.dropdown {
  display: inline-block;
  position: relative;
}

.dd-button {
  display: inline-block;
  border-radius: 4px;
  padding: 5px 20px 5px 20px;
  cursor: pointer;
  white-space: nowrap;
}

.dd-input {
  display: none;
}

.dd-menu {
  position: absolute;
  top: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0px;
  margin: 2px 0 0 0;
  box-shadow: 0 0 6px 0 rgba(0,0,0,0.1);
  background-color: #ffffff;
  list-style-type: none;
}

.dd-input + .dd-menu {
  display: none;
}

.dd-input:checked + .dd-menu {
  display: block;
}

</style>
