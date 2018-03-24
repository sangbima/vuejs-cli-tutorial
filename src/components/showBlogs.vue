<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="Search blogs"/>
    <div v-for="(blog, index) in filteredBlogs" v-bind:key="index" class="single-blog">
      <router-link v-bind:to="'/blog/' + blog.id"><h2>{{ blog.title | to-uppercase }}</h2></router-link>
      <article>{{ blog.body | snippet }}</article>
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
