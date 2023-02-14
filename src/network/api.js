import { axiosInstance } from "./axiosInstance";


export const api = {
    getAll: async (url) => {

        let token = localStorage.getItem('token')
        let response = [];
        await axiosInstance.get(url, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => {
                response = res.data;
            })
            .catch(err => {
                if (err.response.status === 401)
                    window.location.href = '/';
            })
        return response;
    },
    add: async (url, data) => {
        let response = {};
        await axiosInstance.post(url, data)
            .then(res => {
                response = res.data;
            })
            .catch(err => {
                console.log('Err', err);
                throw err;
            })

        return response;
    }
}