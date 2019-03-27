import axios from 'axios';


const API_URL = "https://terna-min-attendance.herokuapp.com/attendance/scrap";

export const api = (id, pass) => {
    return new Promise((resolve, reject) => {
        axios.post(API_URL, {id, pass}).then((result) => {
            resolve(result.data.result);
        }).catch((err) => {
            reject(err.response.data.error);
        });
    })
}