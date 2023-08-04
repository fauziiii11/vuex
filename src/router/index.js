import { createWebHistory, createRouter } from "vue-router";
import Counter from '../components/views/Counter.vue';
import Todo from '../components/views/Todo.vue';


const routes = [
       {
         path: "/",
         name: "Counter",
         component: Counter,
        },
        {
            path: "/todo",
            name: "Todo",
            component: Todo,
           },
  ];
  
  

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;