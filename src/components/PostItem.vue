<template>
  <div class="post">
    <div>
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
    <div class="post__btns">
      <Button @click="$emit('remove', post)">Delete</Button>
    </div>
  </div>
</template>

<script>

export default {
  name: "PostItem",
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #eee;
  border-radius: .5rem;
}
</style>
