<template>
  <v-app>
  <Navbar/>
    <v-content>
      <!-- <Home/> -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Home from './views/Home';

export default {
  name: 'App',

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.dividerEdit {
  border: 2px solid;
  width: 60px;
  transition: width 0.5s;
  -webkit-transition: width 0.5s;
}

.dividerEdit:hover {
  width: 150px;
}
</style>