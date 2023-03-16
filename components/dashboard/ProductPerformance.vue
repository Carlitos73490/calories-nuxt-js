<script setup lang="ts">
import {productPerformance} from '@/data/dashboard/dashboardData';
const { data } = await useFetch('/api/recipes', { headers: { 'Content-Type': 'application/json' } });
const recipesList = data._rawValue;

console.log(recipesList);

async function deleteRecipe(id: string){
    await useFetch('/api/recipe/' + id, { method: 'DELETE' });
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
                      <v-btn size="small">Editer</v-btn>
                      <v-btn color="error" size="small" @click="deleteRecipe(item.id)">Supprimer</v-btn>
                    </td>
                </tr>
            </tbody>
        </v-table>
        </v-card-item>
    </v-card>
</template>
