<template>
  <div >
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addblog from './components/addblog.vue';
import showblog from './components/showblog.vue';
import listblogs from './components/listblogs.vue';
import header from './components/header.vue';
export default {
  components:{
    'add-blog': addblog,
    'show-blogs':showblog,
    'list-blog':listblogs,
    'app-header':header
  },

  data () {
    return{

    }
  },
  methods:{

  }
}
</script>
<style>
body{
  margin: 0;
  font-family: 'Nunito SemiBold';
}


</style>

