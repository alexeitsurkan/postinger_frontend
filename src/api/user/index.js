import {DefaultAPIInstance} from "@/api";


export const User = {
    add(email, password) {
        const url = '/users/add';
        const data = {email, password};

        return DefaultAPIInstance.post(url, data)
    },
}