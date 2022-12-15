import {DefaultAPIInstance} from "@/api";

export const Account = {

    add(platform_id,account_id,account_token) {
        const url = '/accounts';
        const data = {
            method: 'add',
            platform_id: platform_id,
            account_id: account_id,
            token: account_token,
        };

        return DefaultAPIInstance.post(url, data)
    },
    get() {
        const url = '/accounts';
        const data = {
            method: 'get',
        };

        return DefaultAPIInstance.post(url, data)
    },
    delete(id) {
        const url = '/accounts';
        const data = {
            method: 'delete',
            id: id,
        };

        return DefaultAPIInstance.post(url, data)
    },
}