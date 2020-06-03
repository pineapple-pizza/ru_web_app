<template>
  <div>
    <div class="formBackground">
      <h1 class="headerTitle text-center pt-12" color="white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        <v-divider class="mx-auto dividerEdit"></v-divider>
      </h1>
      <p class="text-center pa-2 pb-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br />Corrupti necessitatibus, accusamus alias ut voluptas veritatis
        quibusdam quae repellat consectetur perferendis
      </p>
    </div>

    <v-container>
      <v-row justify="center">
        <v-col md="4">
          <v-card class="pa-2" flat width="300">
            <v-carousel
              height="300"
              cycle
              hide-delimiter-background
              show-arrows-on-hover
            >
              <v-carousel-item
                v-for="(item, i) in items"
                :src="item.src"
                :key="i"
                class="slideEdit"
              >
              </v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>
        <v-col md="4">
          <v-card class="pa-2" flat width="300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eius
            nesciunt et veniam cumque architecto ut. Deserunt architecto facilis
            voluptas fugiat dicta, sapiente provident sunt ratione deleniti
            exercitationem? Unde, quam!
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "content",
  data: () => ({
    items: [
      {
        src: require("@/assets/photo_1.jpg"),
      },
      {
        src: require("@/assets/photo_2.jpg"),
      },
      {
        src: require("@/assets/photo_3.jpg"),
      },
      {
        src: require("@/assets/photo_4.jpg"),
      },
      {
        src: require("@/assets/photo_5.jpg"),
      },
    ],
  }),
};
</script>

<style>
.formBackground {
  background-image: linear-gradient(140deg, #8cb0ff 10%, #407bff);
  color: #fff;
  margin-top: 8%;
  margin-bottom: 5%;
}
</style>
