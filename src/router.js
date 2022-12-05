import {createRouter,createWebHashHistory} from 'vue-router';
import Signin from './components/Signin.vue';
import Signup from './components/Signup.vue';
import Dashboard from './components/app/Dashboard.vue';
import Post from './components/app/Post.vue';
import Account from './components/app/Account.vue';
import Place from './components/app/Place.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/signin', component: Signin },
        { path: '/signup', component: Signup },
        { path: '/dashboard', component: Dashboard, children: [
                { path: '/posts', component: Post, alias: '/'},
                { path: '/accounts', component: Account},
                { path: '/places', component: Place},
            ]
        },
    ]
})