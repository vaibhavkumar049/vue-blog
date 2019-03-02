 import showblog from './components/showblog.vue'
 import addblog from './components/addblog.vue'
 import singleblog from './components/singleblog.vue'
 export default [
   {path:'/',component: showblog},
   {path:'/add',component: addblog},
   {path:'/blog/:id',component:singleblog}
]
