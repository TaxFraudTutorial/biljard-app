<template>
  <header>
    <button class="leaderboard-btn">
      <router-link to="/" class="nav-btn">Leaderboard</router-link>
    </button>
    
    <!-- Conditionally render My Profile or Login button -->
    <button v-if="isLoggedIn" class="addgame-btn">
      <router-link to="/my-profile" class="nav-btn">My Profile</router-link>
    </button>
    <button v-else class="addgame-btn">
      <router-link to="/login" class="nav-btn">Login</router-link>
    </button>
  </header>

  <div id="app"></div>
  <router-view />

  <button class="floating-btn">
    <router-link to="/add-game" class="nav-btn">+</router-link>
  </button>
</template>

<script>
import PlayerLeaderboard from './components/PlayerLeaderboard.vue';

export default {
  name: 'App',
  components: {
    PlayerLeaderboard
  },
  data() {
    return {
      // Track if the user is logged in or not
      isLoggedIn: true, // Default state is logged out
    };
  },
  created() {
    // Here you would check if the user is logged in, e.g., by checking a token
    // For simplicity, I'm leaving it as false, but you would replace this with your logic
    const user = localStorage.getItem('user'); // Example of checking local storage
    if (user) {
      this.isLoggedIn = true;
    }
  },
};
</script>

<style scoped>
body {
  background-color: #121212;
  color: white;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 1px;
  margin-left: 1px;
  width: 100%;
  padding: 10px;
}

.nav-btn {
  color: white;
  text-decoration: none;
}

.leaderboard-btn {
  background-color: #444;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1.5em;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
}

.leaderboard-btn:hover {
  background-color: #bb86fe;
}

.addgame-btn {
  background-color: #444;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1.5em;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  margin-left: auto;
}

.addgame-btn:hover {
  background-color: #bb86fe;
}

.floating-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: cyan;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 15px;
  width: 60px;
  height: 60px;
  font-size: 2em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  z-index: 1000;
}

.floating-btn:hover {
  background-color: #00bcd4;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
