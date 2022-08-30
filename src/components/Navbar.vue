<template>
  <div class="navbar">
    <div @click="$router.push('/')">
      Vue 3
    </div>
    <div>
      <custom-button class="navbar-btn" @click="$router.push('/about')">About</custom-button>
      <custom-button class="navbar-btn" @click="$router.push('/posts')">Posts</custom-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
}
</script>

<style scoped>
  .navbar {
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar-btn {
    background-color: transparent;
    border-radius: 0;
  }
</style>
