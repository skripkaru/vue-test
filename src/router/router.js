import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main";
import About from "@/pages/About";
import PostPage from "@/pages/PostPage";
import SinglePost from "@/pages/SinglePost";
import PostPageWithStore from "@/pages/PostPageWithStore";

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/posts',
    component: PostPage
  },
  {
    path: '/posts/:id',
    component: SinglePost
  },
  {
    path: '/store',
    component: PostPageWithStore
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
