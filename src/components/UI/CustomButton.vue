<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "custom-button",
}
</script>

<style scoped>
button {
  display: inline-block;
  padding: .75rem 1rem;
  line-height: 1;
  background-color: #eee;
  border: none;
  border-radius: .5rem;
  cursor: pointer;
}
</style>
