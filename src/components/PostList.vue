<template>
  <div v-if="posts.length > 0">
    <h2>Post List</h2>
    <transition-group name="post-list">
      <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
  <h2 v-else>Post list is empty</h2>
</template>

<script>
import PostItem from "@/components/PostItem";

export default {
  name: "post-list",
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style scoped>
.post-list {
  display: inline-block;
  margin-right: 10px;
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all .5s ease-in-out;
}

.post-list-enter,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.post-list-move {
  transition: transform .5s ease-in-out;
}
</style>
