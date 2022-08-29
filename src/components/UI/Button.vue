<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
}
</script>

<style scoped>
.btn {
  padding: .75rem 1rem;
  background-color: #eee;
  border: none;
  border-radius: .5rem;
  cursor: pointer;
}
</style>
