<template>
    <div class="login-page">
        <h1 style="font-weight: bold;">Login</h1>
        <form @submit.prevent="handleLogin">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" placeholder="Enter your Email" v-model="email" required />
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" placeholder="Enter your password" v-model="password" required />
            </div>
            <button type="submit" class="register-button">Login</button>
            <button class="register-button" @click="goToRegister">Register</button>
        </form>
    </div>
</template>

<script>


export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        handleLogin() {
            console.log('Email:', this.email);  // Adjusted variable name
            console.log('Password:', this.password);
            login(this.username, this.password);
        },

        goToRegister() {
            this.$router.push('/register');
        }
    }
};
</script>

<style>
.login-page {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #1e1e1e;
    border-radius: 5px;
    color: white;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    text-align: left;
}

input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

.login-button {
    width: 100%;
    padding: 10px;
    background-color: #bb86fc;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 10px;
}

.register-button {
    width: 100%;
    padding: 10px;
    background-color: #bb86fc;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 10px;
}

button:hover {
    background-color: #03dac6;
}
</style>
