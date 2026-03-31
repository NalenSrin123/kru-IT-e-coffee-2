import axios from 'axios'
import React from 'react'

const api=axios.create({
    baseURL:"https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api"
});
api.interceptors.request.use(config=>{
    const token=localStorage.getItem("token");
    if(token){
        config.headers.Authorization=`Bearer ${token}`;
    }
    return config;
})

export default api


