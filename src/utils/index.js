import axios from 'axios';


const API_URL = "https://api-project-181592317544.appspot.com/attendance/scrap";

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