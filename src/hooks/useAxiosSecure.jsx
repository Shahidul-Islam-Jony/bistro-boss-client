import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    // withCredentials:true,
})
const useAxiosSecure = () => {

    // request interceptor to add authorization header for every secure call to the api
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        console.log('request stoped by interceptoprs', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // interceptors 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {   //see axios interceptor doc
        return response;
    },(error)=>{
        // console.log('status error in the interceptor',error);
        const status = error.response.status;
        console.log('status error in the interceptor',status);
        return Promise.reject(error);
    });

    return axiosSecure;
};

export default useAxiosSecure;