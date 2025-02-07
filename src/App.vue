<template>
  <header>
    <button class="leaderboard-btn">Leaderboard</button>
  </header>
  <div id="app">
    <PlayerLeaderboard />
  </div>
</template>

<script>
import PlayerLeaderboard from './components/PlayerLeaderboard.vue';

export default {
  name: 'App',
  components: {
    PlayerLeaderboard
  }
}
</script>

<style>

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
  align-items: flex-start;
  position: absolute;  /* Position it absolutely */
  top: 0;
  left: 0;
  width: 100%;  /* Full width of the page */
  padding: 10px;
}

.leaderboard-btn {
  background-color: #444; /* Button background */
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1.5em;
  cursor: pointer;
  border-radius: 5px; /* Optional: rounded corners */
  text-align: center;
}

.leaderboard-btn:hover {
  background-color: #555; /* Change on hover */
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
