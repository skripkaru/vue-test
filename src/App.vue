<template>
  <div class="app">
    <navbar/>
    <router-view></router-view>
  </div>
</template>

<script>

import Navbar from "@/components/Navbar";
export default {
  name: "App",
  components: {Navbar},
}
</script>

<style>

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: sans-serif;
}

.app {
  max-width: 800px;
  margin: 1rem auto;
  padding: 0 1rem;
}

</style>
