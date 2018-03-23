<template>
  <div id="show-blogs">
    <h1>List Blog Titles</h1>
    <input type="text" v-model="search" placeholder="Search blogs"/>
    <div v-for="(blog, index) in filteredBlogs" v-bind:key="index" class="single-blog">
      <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin'

export default {
  data () {
    return {
      blogs: [],
      search: ''
    }
  },
  methods: {

  },
  created () {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data) {
      this.blogs = data.body.slice(0, 10) // get 10 element from data
    })
  },
  computed: {
    
  },
  mixins: [searchMixin]
}
</script>

<style>
#show-blogs{
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eeeeee;
}
</style>
