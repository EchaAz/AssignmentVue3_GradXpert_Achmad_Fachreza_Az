<template>
    <div class="menu">
      <h2>Menu here boys</h2>
      <ul>
        <li v-for="item in menuItems" :key="item.id">
          <h3>{{ item.name }}</h3>
          <img :src="item.image" alt="Menu Item" class="menu-image">
          <p>{{ item.detail }}</p>
          <p>Price: ${{ item.price }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Menu',
    data() {
      return {
        menuItems: []
      };
    },
    async created() {
      try {
        const response = await axios.get('http://localhost:3000/menu');
        this.menuItems = response.data;
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    }
  };
  </script>
  
  <style scoped>
  .menu {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .menu ul {
    list-style: none;
    padding: 0;
  }
  
  .menu li {
    margin-bottom: 20px;
  }
  
  .menu h3 {
    margin-bottom: 5px;
  }

  .menu-image {
  width: 100%;
  max-width: 400px;
  height: auto;
}
  </style>
  