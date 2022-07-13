
import axios from "axios";


const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyCLn0Xe6AujM9SXg8fjiiSV6gZQyxbHLhw'
    },    
});


export default authApi;