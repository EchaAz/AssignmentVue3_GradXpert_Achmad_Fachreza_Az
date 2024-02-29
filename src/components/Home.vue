<template>
  <div class="home-container">
    <div class="home">
      <h1>Welcome to The Gourmet Research Society</h1>
      <p>
        Thank you for choosing The Gourmet Research Society, where we pursue the perfect gourmet experience with extreme dedication. Our motto is "Eat or Die," reflecting our commitment to delivering exceptional culinary adventures.
      </p>
      <p>
        Explore our menu to embark on a journey of gastronomic discovery, where each dish is meticulously crafted to tantalize your taste buds. Make a reservation to secure your table and immerse yourself in a dining experience like no other.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.home-container {
  background: #ff0000;
  margin: 20px auto;
  max-width: 800px;
  padding: 20px;
  border-radius: 10px; 
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.1);
}

.home {
  text-align: center;
  color: white;
}
</style>
