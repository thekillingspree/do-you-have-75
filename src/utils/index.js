import axios from 'axios';


const API_URL = "https://terna-min-attendance.herokuapp.com/attendance/scrap";

export const api = (id, pass) => {
    return new Promise((resolve, reject) => {
        axios.post(API_URL, {id, pass}).then((result) => {
            resolve(result.data.result);
        }).catch((err) => {
            if (err.response && err.response.data)
                reject(err.response.data.error);
            else 
                reject("Error");
        });
    })
}