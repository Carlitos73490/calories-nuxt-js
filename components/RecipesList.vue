<script setup lang="ts">

const recipesList = ref([]);
const ingredientsList = ref([]);
const title = ref('');
const author = ref('');
const ingredients = ref([]);
const dialog = ref(false);
const calories = ref(0);


const recipesListFetch = await useFetch('/api/recipes', {headers: {'Content-Type': 'application/json'}});
recipesList.value = recipesListFetch.data._rawValue;

const ingredientsListFetch = await useFetch('/api/ingredients', {headers: {'Content-Type': 'application/json'}});
ingredientsList.value = ingredientsListFetch.data._rawValue;

async function deleteRecipe(id: string) {
  await useFetch('/api/recipe/' + id, {method: 'DELETE'});
  recipesList.value = recipesList.value.filter((recipe: any) => recipe.id !== id);
}

async function addRecipe() {
  await useFetch('/api/recipe', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      title: title.value,
      author: author.value,
      ingredients: ingredients.value
    })
  });
  refreshRecipesList();
}

async function refreshRecipesList() {
  const {data} = await useFetch('/api/recipes', {headers: {'Content-Type': 'application/json'}});
  recipesList.value = data._rawValue;
}

async function analiseRecipe(id: string) {
  const {data} = await useFetch('/api/recipe/' + id + '/analyse', {headers: {'Content-Type': 'application/json'}});
  calories.value = JSON.parse(data._rawValue)?.sum?.calories ?? 0;
  dialog.value = true;
  console.log(data._rawValue);
}

</script>
<template>
  <v-card elevation="10" class="">
    <v-card-item class="pa-6">
      <v-card-title class="text-h5 pt-sm-2 pb-7">Recettes enregistrées</v-card-title>
      <v-table class="month-table">
        <thead>
        <tr>
          <th class="text-subtitle-1 font-weight-bold">Recettes</th>
          <th class="text-subtitle-1 font-weight-bold">Auteur</th>
          <th class="text-subtitle-1 font-weight-bold">Date de publication</th>
          <th class="text-subtitle-1 font-weight-bold">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in recipesList" :key="item.name" class="month-item">
          <td>
            <p class="text-15 font-weight-medium">{{ item.title }}</p>
          </td>
          <td>
            <div class="">
              <h6 class="text-subtitle-1 font-weight-bold">{{ item.author }}</h6>
            </div>
          </td>
          <td>
            <h6 class="text-body-1 text-muted">{{ new Date(item.publication_date).toLocaleString('fr') }}</h6>
          </td>
          <td>
            <v-btn size="small" @click="analiseRecipe(item.id)">Calculer</v-btn>
            <v-dialog
                v-model="dialog"
                width="auto"
            >
              <v-card>
                <v-card-text>
                  La recette contient {{ calories }} calories
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-btn color="error" size="small" @click="deleteRecipe(item.id)">Supprimer</v-btn>
          </td>
        </tr>
        </tbody>
      </v-table>
    </v-card-item>
  </v-card>
  <br />
  <v-card elevation="10" class="">
    <v-card-item class="pa-6">
      <v-card-title class="text-h5 pt-sm-2 pb-7">Ajouter une recette</v-card-title>
      <v-form>
        <v-text-field
            v-model="title"
            label="Nom de la recette"
        ></v-text-field>
        <v-text-field
            v-model="author"
            label="Auteur"
        ></v-text-field>
        <v-select
            v-model="ingredients"
            label="Ingrédients"
            :items="ingredientsList"
            item-title="name"
            item-value="id"
            multiple
        ></v-select>
        <v-btn color="primary" @click="addRecipe()">Ajouter</v-btn>
        <v-btn color="warning" >Calculer</v-btn>
      </v-form>
    </v-card-item>
  </v-card>
</template>
