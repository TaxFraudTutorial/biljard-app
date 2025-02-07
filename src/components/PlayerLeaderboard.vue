<template>
  <div class="leaderboard">
    <h2>Player Leaderboard</h2>
    <ul>
      <li v-for="(player, index) in sortedPlayers" :key="player.id">
        <span class="rank">#{{ index + 1 }}</span>
        <span class="name">{{ player.name }}</span>
        <span class="elo">{{ player.elo }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      players: [
        { id: 1, name: "Alice", elo: 1500 },
        { id: 2, name: "Bob", elo: 1700 },
        { id: 3, name: "Charlie", elo: 1600 },
        { id: 4, name: "Dave", elo: 1800 }
      ]
    };
  },
  computed: {
    sortedPlayers() {
      return [...this.players].sort((a, b) => b.elo - a.elo);
    }
  }
};
</script>

<style scoped>


.leaderboard {
  max-width: 400px;
  margin: auto;
  background: #1e1e1e;
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #555;
}

.rank {
  font-weight: bold;
  color: white;
}

.name {
  flex-grow: 1;
  text-align: left;
  color: #bb86fe;
}

.elo {
  font-weight: bold;
}
</style>
