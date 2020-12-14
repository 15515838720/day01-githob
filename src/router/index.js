import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
 
  {
    path: '/',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  {
    path:'/stu1',
    name:'stu1',
    component:()=>import('../views/stu1/index.vue'),
    children:[
        {
          path:'sun1',
          name:'sun1',
    component:()=>import('../views/stu1/sun1.vue'),

        },
        {
          path:'sun2',
          name:'sun2',
    component:()=>import('../views/stu1/sun2.vue'),

        },
        {
          path:'sun3',
          name:'sun3',
    component:()=>import('../views/stu1/sun3.vue'),

        },
    ]
  },
  {
    path:'/stu2',
    name:'stu2',
    component:()=>import('../views/stu2/index.vue'),
    children:[
      {
        path:'sun1',
        name:'sun1',
  component:()=>import('../views/stu2/sun1.vue'),

      },
      {
        path:'sun2',
        name:'sun2',
  component:()=>import('../views/stu2/sun2.vue'),

      },
      {
        path:'sun3',
        name:'sun3',
  component:()=>import('../views/stu2/sun3.vue'),

      },
  ]
  },
  {
    path:'/stu3',
    name:'stu3',
    component:()=>import('../views/stu3/index.vue'),
    children:[
      {
        path:'sun1',
        name:'sun1',
  component:()=>import('../views/stu1/sun1.vue'),

      },
      {
        path:'sun2',
        name:'sun2',
  component:()=>import('../views/stu1/sun2.vue'),

      },
      {
        path:'sun3',
        name:'sun3',
  component:()=>import('../views/stu1/sun3.vue'),

      },
  ]
  },
  {
    path:'/stu4',
    name:'stu4',
    component:()=>import('../views/stu4/index.vue'),
    children:[
      {
        path:'sun1',
        name:'sun1',
  component:()=>import('../views/stu1/sun1.vue'),

      },
      {
        path:'sun2',
        name:'sun2',
  component:()=>import('../views/stu1/sun2.vue'),

      },
      {
        path:'sun3',
        name:'sun3',
  component:()=>import('../views/stu1/sun3.vue'),

      },
  ]
  },
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to,form,next)=>{
//   if(localStorage.getItem("token")){
//       next()
//   }else{
//     if(to.path=="/"){
//         next()
//     }else{
//       next("/")
//     }
//   }
// })

export default router
