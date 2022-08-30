<template>
  <form class="form" @submit.prevent>
    <h4 class="form-title">Create post</h4>
    <custom-input
      class="form-input"
      type="text"
      placeholder="Title"
      v-model="post.title"
    />
    <custom-input
      class="form-input"
      type="text"
      placeholder="Body"
      v-model="post.body"
    />
    <custom-button class="form-btn" @click="createPost">Create</custom-button>
  </form>
</template>

<script>

export default {
  name: "post-form",
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: '',
      }
    },
  },
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  max-width: 350px;
  margin: 0 auto;
}

.form-title {
  margin: 0 0 1rem;
}

.form-input:not(:last-child) {
  margin-bottom: 1rem;
}

.form-btn {
  margin-top: 1rem;
  align-self: flex-end;
}
</style>
