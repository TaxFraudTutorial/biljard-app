<template>
  <div class="leaderboard">
    <h2>< Player Leaderboard ></h2>
    <ul>
      <li v-for="(player, index) in sortedPlayers" :key="player.id">
        <!-- Apply rank classes for coloring the rank number -->
        <span :class="getRankClass(index)" class="rank">#{{ index + 1 }}</span>
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
      return [...this.players].sort((a, b) => b.elo - a.elo); // Sort players based on ELO
    }
  },
  methods: {
    // Function to return the class for 1st, 2nd, 3rd ranks
    getRankClass(index) {
      if (index === 0) return 'gold';  // 1st place
      if (index === 1) return 'silver';  // 2nd place
      if (index === 2) return 'bronze';  // 3rd place
      return '';  // No specific class for others
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
  color: white; /* Default color for the rank */
  margin-right: 5px;  /* Adds space between rank and name */
}

.name {
  flex-grow: 1;
  text-align: left;
  color: #bb86fe;
}

.elo {
  font-weight: bold;
}

/* Styling for 1st, 2nd, and 3rd places */
.gold {
  color: gold;
}

.silver {
  color: silver;
}

.bronze {
  color: #cd7f32;  /* Bronze color */
}
</style>
