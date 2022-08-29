<template>
  <form class="form" @submit.prevent>
    <h4 style="margin-top: 0">Create post</h4>
    <Input
      class="form-input"
      type="text"
      placeholder="Title"
      v-model="post.title"
    />
    <Input
      class="form-input"
      type="text"
      placeholder="Body"
      v-model="post.body"
    />
    <Button class="form-btn" @click="createPost">Create</Button>
  </form>
</template>

<script>

export default {
  name: "PostForm",
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
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  max-width: 350px;
  margin: 0 auto;
}

.form-input:not(:last-child) {
  margin-bottom: 1rem;
}

.form-btn {
  margin-top: 1rem;
  align-self: flex-end;
}
</style>
