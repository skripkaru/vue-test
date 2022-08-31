<template>
  <h1>Posts page</h1>
  <custom-input
    class="app-search"
    placeholder="Search"
    v-model="searchQuery"
    v-focus
  />
  <div class="app-btns">
    <custom-select
      v-model="selectedSort"
      :options="sortOptions"
    />
  </div>
  <post-list v-if="!isPostsLoading" :posts="sortedAndSearchedPosts" @remove="removePost"/>
  <h2 v-else>Loading</h2>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import usePosts from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";

export default {
  name: "post-page",
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        {value: 'title', name: 'Title'},
        {value: 'body', name: 'Description'}
      ],
    }
  },
  setup(props) {
    const {posts, totalPages, isPostsLoading} = usePosts(10)
    const {selectedSort, sortedPosts} = useSortedPosts(posts)
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)

    return {
      posts,
      totalPages,
      isPostsLoading,
      selectedSort,
      sortedPosts,
      searchQuery,
      sortedAndSearchedPosts
    }
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

.page-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.page {
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .25rem;
  margin-right: .5rem;
  border: 1px solid #eee;
  border-radius: .5rem;
  cursor: pointer;
}

.current-page {
  background-color: #eee;
}
</style>
