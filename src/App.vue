<template>
  <div class="app">
    <posts-page/>
  </div>
</template>

<script>
import PostsPage from "@/pages/PostsPage";

export default {
  name: "App",
  components: {PostsPage},
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
