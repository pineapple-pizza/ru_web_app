<template>
  <v-content>
    <Header />
    <Content />
    <Contact />
  </v-content>
</template>

<script>
import Header from "@/components/Header";
import Content from "@/components/Content";
import Contact from "@/components/Contact";

export default {
  name: "Home",
  components: {
    Header,
    Content,
    Contact,
  },
};
</script>

<style>

</style>
