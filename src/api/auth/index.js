import {LoginAPIInstance, DefaultAPIInstance} from "@/api";


export const AuthAPI = {
    login(email, password) {
        const url = '/login';
        const data = {username:email, password:password};

        return LoginAPIInstance.post(url, data)
    },
    logout() {
        const url = '/logout';
        return DefaultAPIInstance.post(url)
    },
}