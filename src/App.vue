<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import fetchCount from './fetchCount'
import {  reactive} from 'vue';
import Counter from './Counter.vue';
// const count = ref(0);

// const nextCount = computed(() => {
//     if (count.value !== null) {
//         return count.value + 1
//     }
//     return null;
// })

interface AppInfo {
  name: string;
  slogan: string;
}

const appinfo = reactive({
  name: 'Counter',
  slogan: 'an app you can count on'
})

// const cb = (initialcount) => {
//     count.value += initialcount
// }

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <div>
    <h1>{{ appinfo.name }}</h1>
    <h1>{{ appinfo.slogan }}</h1>
  </div>
  <Counter
  :limit="10"
  ></Counter>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
