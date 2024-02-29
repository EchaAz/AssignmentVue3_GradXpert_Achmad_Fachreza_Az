<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <img src="../assets/Gourmet_Icon.webp" alt="" class="navbar-icon">
      <span class="navbar-text">THE GOURMET RESEARCH SOCIETY</span>
    </div>
    <ul class="navbar-menu">
      <li><router-link to="/">HOME</router-link></li>
      <li><router-link to="/menu">MENU</router-link></li>
      <li><router-link to="/book-table">BOOK A TABLE</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
};
</script>

<style scoped>
.navbar {
  background-color: #a8a8a8;
  color: #fff;
  width: calc(100% - 20px);
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-icon {
  width: 150px; 
  height: auto;
  margin-right: 5px;
}

.navbar-text {
  font-weight: bold;
  font-size: 30px;
  line-height: 1;
  color: rgba(255, 0, 0, 0.765);
  text-transform: uppercase;
}

.navbar-menu {
  list-style: none;
  display: flex;
  gap: 20px;
}

.navbar-menu li {
  font-size: 18px;
}

.navbar-menu li a {
  font-weight: bold;
  font-size: 20px;
  color: #000000;
  text-decoration: none;
}

.navbar-menu li a:hover {
  text-decoration: underline;
}
</style>
