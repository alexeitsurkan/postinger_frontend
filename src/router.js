import {createRouter,createWebHashHistory} from 'vue-router';
import Signin from './components/Signin.vue';
import Signup from './components/Signup.vue';
import Dashboard from './components/app/Dashboard.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/signin', component: Signin, alias: '/' },
        { path: '/signup', component: Signup },
        { path: '/dashboard', component: Dashboard },
    ]
})