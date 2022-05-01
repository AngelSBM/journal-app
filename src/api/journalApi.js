import axios from "axios";


const journalApi = axios.create({
    baseURL: 'https://vue-demos-e2b76-default-rtdb.firebaseio.com'
});


export default journalApi;