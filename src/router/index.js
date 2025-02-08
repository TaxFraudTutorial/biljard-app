import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlayerLeaderboard from '../components/PlayerLeaderboard.vue'
import AddGame from '../components/AddGame.vue'
import MyProfile from '../components/MyProfile.vue'
import LoginPage from '../components/LoginPage.vue'
import RegisterPage from '../components/RegisterPage.vue'
import Slots from '../components/Slots.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: "/add-game",
      name: "addgame",
      component: AddGame,
    },
    {
      path: "/leaderboard",
      name: "leaderboard",
      component: PlayerLeaderboard,
    },
    {
      path: "/my-profile",
      name: "myprofile",
      component: MyProfile,
    },
    {
      path: "/login",
      name: "loginpage",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "registerpage",
      component: RegisterPage
    },
    {
      path: '/slots',
      name: 'slots',
      component: Slots,
    }

  ],
})

export default router
