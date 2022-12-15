import {createStore} from 'vuex';
import {AuthAPI} from '@/api/auth';
import {DefaultAPIInstance} from "@/api";


export default createStore({
    state() {
        return {
            user: {
                token: localStorage.getItem('token') || null,
            }
        }
    },
    getters: {
        isAuthenticated: (state) => state.user.token !== null,
    },
    mutations: {
        setToken(state, token) {
            localStorage.setItem('token', token)
            state.user.token = token;
        },
        deleteToken(state) {
            localStorage.removeItem('token')
            state.user.token = null;
        },
    },
    actions: {
        async login({commit},{email, password}) {
            await AuthAPI.login(email, password).then((res) => {
                commit('setToken', res.data.token);
                DefaultAPIInstance.defaults.headers['authorization'] = `Bearer ${res.token}`
            })
        },
        logout({commit}) {
            commit('deleteToken');
            delete DefaultAPIInstance.defaults.headers['authorization'];
        }
    }
});

