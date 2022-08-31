<template>
  <h1>Posts page</h1>
  <custom-input
    class="app-search"
    placeholder="Search"
    :model-value="searchQuery"
    @updata:model-value="setSearchQuery"
    v-focus
  />
  <div class="app-btns">
    <custom-button @click="showDialog">Create post</custom-button>
    <custom-select
      :model-value="selectedSort"
      @update:model-value="setSelectedSort"
      :options="sortOptions"
    />
  </div>
  <custom-dialog v-model:show="dialogVisible">
    <post-form @create="createPost"/>
  </custom-dialog>
  <post-list v-if="!isPostsLoading" :posts="sortedAndSearchedPosts" @remove="removePost"/>
  <h2 v-else>Loading</h2>
  <div class="observer" v-intersection="loadMorePost"></div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default {
  name: "post-page-with-store",
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',
    }),
    ...mapActions({
      loadMorePost: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),
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
  },
  mounted() {
    this.fetchPosts()
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions
    }),
    ...mapGetters({
      sortedPost: 'post/sortedPost',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    })
  },
}
</script>

<style scoped>
.app-btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.app-search {
  margin-bottom: 1rem;
}

.observer {
  height: 1px;
}
</style>
