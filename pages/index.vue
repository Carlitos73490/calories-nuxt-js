<script setup lang="ts">
import ProductPerformance from '~/components/RecipesList.vue';
const headers = useRequestHeaders(['cookie']) as HeadersInit
const { data: token } = await useFetch('/api/token', { headers })

</script>
<template>
  <v-row>
        <v-col cols="12">
            <v-row>
                <v-col cols="12">
                    Bienvenue
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>