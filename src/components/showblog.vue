<template>
  <div id="show-blogs" >
    <h1>All Blogs Articles</h1>
    <input type="text" v-model="search" placeholder="SearchBox"/>
    <div v-for="blog in filteredBlogs " class="single-blog" v-if="">

      <router-link v-bind:to="'/blog/'+ blog.id"><h2 >{{blog.title | to-uppercase}}</h2></router-link>
      <article>{{blog.content | snippet}}</article>
    </div>

  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin'

export default {

  data () {
    return{
        blogs:[],
        search:''
    }
  },
  methods:{


  },
  created(){
    this.$http.get('https://myself-92b13.firebaseio.com/posts.json').then(function(data){
      return data.json();
      // this.blogs=data.content.slice(0,10);
    }).then(function(data){
      var blogsArray=[];
      for (let key in data){
        // console.log(data[key]);
        data[key].id=key;
        blogsArray.push(data[key]);
      }
      this.blogs=blogsArray;
      // console.log(blogsArray)
    })
  },
  computed:{

  },
  filters:{
    'to-uppercase': function(value){
      return value.toUpperCase();
    }
  },
  directives:{
    'rainbow': {
      bind(el,binding,vnode){
        el.style.color="#"+Math.random().toString().slice(2,8)
      }
    }
  },
  mixins:[searchMixin]

}
</script>
<style>

#show-blogs{
  max-width: 800px;
  margin: 0 auto;
}
.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background-color: #eee;
}

</style>

