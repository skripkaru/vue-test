<template>
  <select class="select" v-model="modelValue" @change="changeOptions">
    <option value="" disabled>Select</option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "custom-select",
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOptions(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<style scoped>

.select {
  padding: .75rem 1rem;
  border: 1px solid #eee;
  border-radius: .5rem;
  cursor: pointer;
}
</style>
