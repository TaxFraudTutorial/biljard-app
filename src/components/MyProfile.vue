<template>
    <div class="my-profile">
        <h1 style="font-weight: bold; font-style: italic;">My Profile</h1>
        <div class="profile-info">
            <p><strong>Username:</strong> {{ username }}</p>
            <p><strong>ELO:</strong> {{ elo }}</p>
        </div>

        <!-- Game History section -->
        <div class="game-history">
            <h2>Game History</h2>
            <div class="scrollable-history">
                <!-- Reverse the array so that the most recent game appears at the top -->
                <ul>
                    <li v-for="game in sortedGameHistory" :key="game.id">
                        {{ game.date }} - {{ game.opponent }} - {{ game.result }}
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="my-profile" id="gameRequest">
        <h1 style="font-weight: bold; font-style: italic; font-size: 20px; margin-bottom: 15px;">Pending Requests</h1>

        <!-- Show pending requests or "You have no pending game requests." -->
        <div v-if="pendingRequests.length === 0">
            <p>You have no pending game requests.</p>
        </div>
        <ul v-else>
            <li v-for="request in pendingRequests" :key="request.id">
                {{ request.game }} - {{ request.opponent }} 
                <button @click="acceptRequest(request)">Accept</button>
                <button @click="rejectRequest(request)" id="reject-btn">Reject</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: 'Player1',
            elo: 1200,
            gameHistory: [
                { id: 1, date: '2023-10-01', opponent: 'Player2', result: 'Win' },
                { id: 2, date: '2023-10-02', opponent: 'Player3', result: 'Loss' },
                { id: 3, date: '2023-10-03', opponent: 'Player4', result: 'Win' },
                // Add more games for testing scroll
                { id: 4, date: '2023-10-04', opponent: 'Player5', result: 'Win' },
                { id: 5, date: '2023-10-05', opponent: 'Player6', result: 'Loss' },
                { id: 6, date: '2023-10-06', opponent: 'Player7', result: 'Draw' },
                { id: 6, date: '2023-10-06', opponent: 'Player7', result: 'Draw' },
                { id: 6, date: '2023-10-06', opponent: 'Player7', result: 'Draw' },
                { id: 6, date: '2023-10-06', opponent: 'Player7', result: 'Draw' },
                { id: 6, date: '2023-10-06', opponent: 'Player7', result: 'Draw' },
                { id: 6, date: '2023-10-06', opponent: 'Player7', result: 'Draw' },
                { id: 6, date: '2023-10-06', opponent: 'Player7', result: 'Draw' },
                { id: 6, date: '2023-10-06', opponent: 'Player7', result: 'Draw' },
                { id: 6, date: '2023-10-06', opponent: 'Player7', result: 'Draw' },
                { id: 6, date: '2023-10-06', opponent: 'Player7', result: 'Draw' },
                { id: 6, date: '2023-10-06', opponent: 'Player7', result: 'Draw' },
                { id: 6, date: '2023-10-06', opponent: 'Player7', result: 'Draw' },
                { id: 6, date: '2023-10-06', opponent: 'Player7', result: 'Draw' },
                { id: 6, date: '2023-10-06', opponent: 'Player7', result: 'Draw' },
                { id: 6, date: '2023-10-06', opponent: 'Player7', result: 'Draw' },
            ],
            // Example pending requests (You can replace this with real data)
            pendingRequests: [
                { id: 1, game: 'Game 1', opponent: 'Player2' },
                { id: 2, game: 'Game 2', opponent: 'Player3' },
            ],
        };
    },
    computed: {
        // This computed property sorts the game history in descending order (recent first)
        sortedGameHistory() {
            return this.gameHistory.slice().reverse();
        }
    },
    methods: {
        acceptRequest(request) {
            // Handle accepting the request (you can send an API call here to confirm)
            console.log('Accepted:', request);
            this.removeRequest(request);
        },
        rejectRequest(request) {
            // Handle rejecting the request (you can send an API call here to reject)
            console.log('Rejected:', request);
            this.removeRequest(request);
        },
        removeRequest(request) {
            // Remove the request from the pendingRequests array
            this.pendingRequests = this.pendingRequests.filter(r => r.id !== request.id);
        }
    }
};
</script>

<style scoped>
.my-profile {
    padding: 20px;
    background-color: #1e1e1e;
    color: white;
    border-radius: 10px;
    size: fixed;
}

.profile-info {
    margin-bottom: 20px;
    color: white;
}

.game-history {
    margin-top: 20px;
}

.scrollable-history {
    max-height: 300px; /* Set a fixed height for scroll */
    overflow-y: auto; /* Enable vertical scrolling */
    padding-right: 10px; /* Optional: add space to prevent scroll from hiding text */
}

.game-history ul {
    list-style-type: none;
    padding: 0;
    color: white;
    overflow: autoscroll;
}

.game-history li {
    margin-bottom: 10px;
    color: white;
}

#gameRequest {
    margin-top: 20px;
}

#gameRequest ul {
    list-style-type: none;
    padding: 0;
    color: white;
}

#gameRequest li {
    margin-bottom: 10px;
}

#reject-btn {
    background-color: #db2e1a;
}

button {
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    margin-left: 10px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
</style>
