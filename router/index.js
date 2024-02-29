import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/components/Home.vue';
import Menu from '../src/components/Menu.vue';
import BookTable from '../src/components/Book_Table.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: Home },
      { path: '/menu', component: Menu },
      { path: '/book-table', component: BookTable }
    ]
  });
  

export default router;
