import {DefaultAPIInstance} from "@/api";


export const Platform = {
    get() {
        const url = '/platforms/get';
        const data = {};

        return DefaultAPIInstance.post(url, data)
    },
}