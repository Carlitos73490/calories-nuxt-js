<script>
import ProductPerformance from "~/components/RecipesList.vue";

export default {
  name: "RecipesList",
  components: {ProductPerformance}
}


</script>

<template>
<h1>Liste des recettes</h1>
  <br />
  <v-row>
    <v-col cols="12">
      <v-row>
        <v-col cols="12">
          <ProductPerformance></ProductPerformance>
        </v-col>
      </v-row>
    </v-col>
  </v-row>

</template>



<style scoped>

</style>