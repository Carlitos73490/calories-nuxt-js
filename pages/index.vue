<script setup lang="ts">
import ProductPerformance from '@/components/dashboard/ProductPerformance.vue';
const headers = useRequestHeaders(['cookie']) as HeadersInit
const { data: token } = await useFetch('/api/token', { headers })

</script>
<template>
  <div>{{ token || 'no token present, are you logged in?' }}</div>

  <v-row>
        <v-col cols="12">
            <v-row>
                <v-col cols="12">
                    <ProductPerformance />
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>