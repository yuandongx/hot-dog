<template>

    <v-list v-model:opened="items">
      <v-list-group :value="item"  :key="item.Key" v-for="item in items">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-circle"
            title="Users"
          ></v-list-item>
        </template>

        
      </v-list-group>
    </v-list>
</template>
<script setup lang="ts">
import {ListMenu} from "./types/ListMenu"
const items = ref<Array<ListMenu>>(
  [
    {Key: "2025", Title: "01", Children: [
      {Key: "12", Title: "12", Children: [
        {Key: "01", Title: "01"}
      ]}
    ]}
  ]
);

</script>