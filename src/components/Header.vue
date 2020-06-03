<template>
  <div>
    <v-layout align-center justify-space-around row fill-height>
      <img src="~@/assets/ru_illu.svg" alt="" class="headerBG" />
    </v-layout>
    <v-container align-center fluid class="headerTitle">
      <h1 class="text-xs-center headlineColor">
        Pourquoi nous choisir
        <v-divider class="mx-auto dividerEdit"></v-divider>
      </h1>
      <p class="text-xs-center pa-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br />Corrupti necessitatibus, accusamus alias ut voluptas veritatis
        quibusdam quae repellat consectetur perferendis
      </p>
    </v-container>
    <v-container grid-list-md>
      <v-layout justify-center align-center fill-height>
        <v-flex v-for="(item, i) in items" :key="i">
          <v-card color="#fafafa" flat class="cardsContent" max-width="344">
            <v-list-item>
              <v-list-item-content>
                {{ item }}
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    items: [
      { slot1: "texte slot 1" },
      { slot2: "texte slot 2" },
      { slot3: "texte slot 3" },
      { slot4: "texte slot 4" },
    ],
  }),
};
</script>

<style>
.headerBG {
  height: 700px;
}

.headerTitle {
  font-family: "Lato", sans-serif;
  text-align: center;
}

.headlineColor {
  color: #407bff;
}

.cardsContent {
  border-radius: 20px !important;
  height: 120px !important;
  background-color: #fafafa !important;
}
</style>
