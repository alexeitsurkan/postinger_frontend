import {createRouter, createWebHashHistory} from 'vue-router';
import Signin from './components/Signin.vue';
import Signup from './components/Signup.vue';
import Dashboard from './components/app/Dashboard.vue';
import Post from './components/app/Post.vue';
import Account from './components/app/Account.vue';
import Place from './components/app/Place.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {name: 'Signin', path: '/signin', component: Signin},
        {name: 'Signup', path: '/signup', component: Signup},
        {
            name: 'Home', path: '/', component: Dashboard, children: [
                {path: '/posts', component: Post},
                {path: '/accounts', component: Account},
                {path: '/places', component: Place},
            ]
        },
    ]
});

router.beforeEach((to,from,next) => {
    if (to.name === 'Signup' && localStorage.getItem('token') == null) next()
    else if (to.name !== 'Signin' && localStorage.getItem('token') == null) next({name: 'Signin'})
    else next()
})

export default router;