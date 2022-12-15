import {DefaultAPIInstance} from "@/api";


export const PublicPlace = {
    pull(platform_id, account_id) {
        const url = '/public-places';
        const data = {
            method: 'pull',
            platform_id: platform_id,
            account_id: account_id,
        };

        return DefaultAPIInstance.post(url, data)
    },
    add(PublicPlaces){
        const url = '/public-places';
        const data = {
            method: 'add',
            PublicPlaces: PublicPlaces,
        };

        return DefaultAPIInstance.post(url, data)
    },
    get(){
        const url = '/public-places';
        const data = {
            method: 'get',
        };

        return DefaultAPIInstance.post(url, data)
    }
}