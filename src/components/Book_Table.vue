<template>
  <div class="book-table">
    <h2>Book a Table</h2>
    <form @submit.prevent="submitBooking">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="bookingData.name" required>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="bookingData.email" required>
      <label for="date">Date:</label>
      <input type="date" id="date" v-model="bookingData.date" required>
      <label for="people">Number of People:</label>
      <input type="number" id="people" v-model="bookingData.people" required>
      <label for="specialRequest">Special Request:</label>
      <textarea id="specialRequest" v-model="bookingData.specialRequest"></textarea>
      <button type="submit" :disabled="isSubmitting">{{ submitButtonText }}</button>
    </form>
    <p v-if="bookingCompleted">{{ completionMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'BookTable',
  data() {
    return {
      bookingData: {
        name: '',
        email: '',
        date: '',
        people: '',
        specialRequest: ''
      },
      isSubmitting: false,
      bookingCompleted: false
    };
  },
  methods: {
    async submitBooking() {
      this.isSubmitting = true;
      try {
        const response = await axios.post('http://localhost:3000/bookings', this.bookingData);
        console.log('Booking submitted:', response.data);
        this.bookingCompleted = true;
      } catch (error) {
        console.error('Error submitting booking:', error);
      } finally {
        this.isSubmitting = false;
        this.clearForm();
      }
    },
    clearForm() {
      this.bookingData.name = '';
      this.bookingData.email = '';
      this.bookingData.date = '';
      this.bookingData.people = '';
      this.bookingData.specialRequest = '';
    }
  },
  computed: {
    submitButtonText() {
      return this.bookingCompleted ? 'Book Again' : 'Submit';
    },
    completionMessage() {
      return 'Booking is done. If you want to make another booking, please submit again.';
    }
  }
};
</script>

<style scoped>
.book-table {
  max-width: 400px;
  margin: 0 auto;
}
label {
  display: block;
  margin-bottom: 5px;
}
input,
textarea {
  width: 100%;
  margin-bottom: 10px;
}
button {
  width: 100%;
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
