import axios from 'axios'

export const productsapp = axios.create();

productsapp.interceptors.request.use((req)=>{
    req.headers['code']="REQ RUNS";
    console.log(req);
    console.log('Request Interceptor Runs')
    return req
});