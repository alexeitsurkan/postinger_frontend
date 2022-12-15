import {DefaultAPIInstance} from "@/api";


export const Post = {
    add(public_place_id, text, datetime) {
        const url = '/posts';
        const data = {
            method: 'add',
            public_place_id: public_place_id,
            text: text,
            datetime: datetime,
        };

        return DefaultAPIInstance.post(url, data)
    },
    get() {
        const url = '/posts';
        const data = {
            method: 'get',
        };

        return DefaultAPIInstance.post(url, data)
    },
    delete(id) {
        const url = '/posts';
        const data = {
            method: 'delete',
            id: id,
        };

        return DefaultAPIInstance.post(url, data)
    },
}