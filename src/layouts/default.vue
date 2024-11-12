<template>
  <v-app>

  <v-app-bar>
    <v-row justify="start" align-self="center" align="center">
      <v-col cols="2" class="pl-10">
        <v-btn  to="/">首页</v-btn>
        <v-btn  to="/market">市场</v-btn>
        <v-btn  to="/stock">自选</v-btn>
      </v-col>
      <v-col></v-col>
      <v-col cols="1" class="mt-10">
        <v-switch :label="themeName" v-model="theme"></v-switch>
      </v-col>
    </v-row>
  </v-app-bar>
  <v-main>
    <router-view />
  </v-main>
  <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
  const theme = ref(false);
  const themeName = computed(()=> theme.value ? "暗黑":"明亮");
</script>
