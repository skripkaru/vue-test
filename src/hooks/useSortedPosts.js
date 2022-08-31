import {computed, ref} from "vue";

const useSortedPosts = (posts) => {
  const selectedSort = ref('')
  const sortedPosts = computed(() => {
    return [...posts.value].sort((firstPost, secondPost) => {
      return firstPost[selectedSort.value]?.localeCompare(secondPost[selectedSort.value])
    })
  })

  return {
    selectedSort,
    sortedPosts
  }
}

export default useSortedPosts
