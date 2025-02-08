<template>
  <div class="register-page">
    <h1 style="font-weight: bold; font-style: italic;">Register</h1>
    <form @submit.prevent="handleRegister">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" placeholder="Enter your username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" placeholder="Enter your password" v-model="password" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your Email" v-model="email" required />
      </div>
      <button type="submit" class="register-button">
        <router-link to="/login" class="register-button">Register</router-link>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      email: ''
    };
  },
  methods: {
    handleRegister() {
      // Handle registration logic here
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      console.log('Email:', this.email);
    }
  }
};
</script>

<style>
.register-page {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;  
  background-color: #1e1e1e;
  border-radius: 5px;
  color: white;
}

.form-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column; /* Stack label above input */
}

label {
  font-weight: bold;
  margin-bottom: 5px; /* Space between label and input */
}

input {
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: white;
  box-sizing: border-box;
}

input:focus {
  outline: none;
  border: 2px solid #bb86fc;
}

.register-button {
  width: 100%;
  padding: 10px;
  background-color: #bb86fc;
  color: white;   
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
}

button:hover {
  background-color: #03dac6;
}
</style>
