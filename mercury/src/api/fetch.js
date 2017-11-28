import axios from 'axios'
import qs from 'qs' // POST 参数序列化

export default {
    fetchGet (url, params) {
        return new Promise((resolve, reject) => {
            axios.get(url, {params}).then(res => {
                resolve(res.data)
            });
        }).catch(error => {
            reject(error);
        })
    },
    fetchPost (url, data={}) {
        return new Promise((resolve, reject) => {
            axios.post(url, qs.stringify(data)).then(res => {
                resolve(res.data);
            }).catch(error => {
                reject(error);
            })
        })
    }
}