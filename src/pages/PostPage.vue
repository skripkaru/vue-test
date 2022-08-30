<template>
  <h1>Posts page</h1>
  <custom-input
    class="app-search"
    placeholder="Search"
    v-model="searchQuery"
    v-focus
  />
  <div class="app-btns">
    <custom-button @click="showDialog">Create post</custom-button>
    <custom-select
      v-model="selectedSort"
      :options="sortOptions"
    />
  </div>
  <custom-dialog v-model:show="dialogVisible">
    <post-form @create="createPost"/>
  </custom-dialog>
  <post-list v-if="!isPostsLoading" :posts="sortedAndSearchedPosts" @remove="removePost"/>
  <h2 v-else>Loading</h2>
  <div class="observer" v-intersection="loadMorePosts"></div>
<!--  <div class="page-wrapper">-->
<!--    <div-->
<!--      class="page"-->
<!--      v-for="pageNumber in totalPages"-->
<!--      :key="pageNumber"-->
<!--      :class="{-->
<!--          'current-page': page === pageNumber-->
<!--        }"-->
<!--      @click="changePage(pageNumber)"-->
<!--    >-->
<!--      {{ pageNumber }}-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from "axios";

export default {
  name: "post-page",
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        {value: 'title', name: 'Title'},
        {value: 'body', name: 'Description'}
      ],
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
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data
      } catch (e) {
        alert('Error')
      } finally {
        this.isPostsLoading = false
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data]
      } catch (e) {
        alert('Error')
      }
    },
    // changePage(pageNumber) {
    //   this.page = pageNumber
    // }
  },
  mounted() {
    this.fetchPosts()
  },
  computed: {
    sortedPost() {
      return [...this.posts].sort((firstPost, secondPost) => {
        return firstPost[this.selectedSort]?.localeCompare(secondPost[this.selectedSort])
      })
    },
    sortedAndSearchedPosts() {
      return this.sortedPost.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {
    // page() {
    //   this.fetchPosts()
    // }
  }
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
