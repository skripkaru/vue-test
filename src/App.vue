<template>
  <div class="app">
    <h1>Posts page</h1>
    <Button @click="showDialog">Create post</Button>
    <Dialog v-model:show="dialogVisible">
      <PostForm @create="createPost"/>
    </Dialog>
    <PostList v-if="!isPostsLoading" :posts="posts" @remove="removePost"/>
    <h2 v-else>Loading</h2>
  </div>
</template>

<script>
import axios from 'axios'
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default {
  name: "App",
  components: {
    PostForm,
    PostList
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        this.posts = response.data
      } catch (e) {
        alert('Error')
      } finally {
        this.isPostsLoading = false
      }
    }
  },
  mounted() {
    this.fetchPosts()
  }
}
</script>

<style>

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: sans-serif;
}

.app {
  max-width: 800px;
  margin: 3rem auto 0;
  padding: 0 1rem;
}

</style>
