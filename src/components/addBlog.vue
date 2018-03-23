<template>
  <div id="add-blog">
    <h2>Add an New Blog Post</h2>
    <form v-if="!submitted">
      <label for="title">Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label for="content">Blog Content:</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label for="ninjas">Ninjas</label>
        <input id="ninjas" type="checkbox" value="ninjas" v-model="blog.categories" />
        <label for="wizards">Wizards</label>
        <input id="wizards" type="checkbox" value="wizards" v-model="blog.categories" />
        <label for="mario">Mario</label>
        <input id="mario" type="checkbox" value="mario" v-model="blog.categories" />
        <label for="cheese">Cheese</label>
        <input id="cheese" type="checkbox" value="cheese" v-model="blog.categories" />
      </div>
      <label for="author">Author</label>
      <select id="author" v-model="blog.author">
        <option v-for="(author, index) in authors" v-bind:key="index">{{ author }}</option>
      </select>
      <button v-on:click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding yout post</h3>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="(category, index) in blog.categories" v-bind:key="index">{{ category }}</li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  data () {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: ''
      },
      authors: ['The Net Ninja', 'The Angular Avenger', 'The Vue Vindicator'],
      submitted: false
    }
  },
  methods: {
    post: function () {
      this.$http.post('https://jsonplaceholder.typicode.com/posts', {
        title: this.blog.title,
        body: this.blog.content,
        userId: 1
      }).then(function(data) {
        console.log(data)
        this.submitted = true
      })
    }
  }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>
