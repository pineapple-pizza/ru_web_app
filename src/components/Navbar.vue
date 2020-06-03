<template>
  <div>
    <v-app-bar
      color="white"
      class="toolbarEdit"
      light
      fixed
      :class="{ active: scrolled == true }"
      @scroll="handleScroll"
    >
      <div class="logoPosition">
        <img src="@/assets/ru_logo.jpg" class="appIcon" />
      </div>

      <v-toolbar-title
      class="toolbarTitle"
        >Lorem ipsum dolor sit amet consectetur adipisicing
        elit.</v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-btn text href="tel:+33012345678">
        <v-icon>phone</v-icon>
        +33 0 12 34 56 78
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    scrolled: false,
    elevateOnScroll: false,
  }),
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    },
  },
};
</script>

<style scoped>
.appIcon {
  height: 60px;
  width: auto;
}

.logoPosition {
  margin-left: 10%;
  margin-top: 10px;
}

.toolbarEdit {
  box-shadow: none !important;
  background-color: transparent !important;
}

.active {
  transition: background-color 0.5s ease !important;
  background-color: #fff !important;
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.19) !important;
}

.toolbarTitle {
  font-family: 'Lato', sans-serif;
}
</style>
