<template>
  <div class="post">
    <div @click="$router.push(`/posts/${post.id}`)">
      <h3 class="post-title">{{ post.id }}. {{ post.title }}</h3>
      <p class="post-body">{{ post.body }}</p>
    </div>
    <custom-button class="post-remove" @click="$emit('remove', post)">&times;</custom-button>
  </div>
</template>

<script>

export default {
  name: "post-item",
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.post {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #eee;
  border-radius: .5rem;
  cursor: pointer;
  transition: box-shadow .3s ease-in-out;
}

.post:hover {
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.04);
}

.post-title {
  margin: 0 0 1rem;
}

.post-body {
  margin: 0;
}

.post-remove {
  padding: .15rem;
  font-size: 1.5rem;
  background: transparent;
}
</style>
