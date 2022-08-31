<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div class="dialog-content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>

import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: "custom-dialog",
  mixins: [toggleMixin],
}
</script>

<style scoped>

.dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .75);
  display: flex;
}

.dialog-content {
  min-width: 350px;
  margin: auto;
  padding: 1rem;
  background-color: #fff;
  border-radius: .5rem;
}

</style>
