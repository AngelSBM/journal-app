import { useStore } from "vuex";



const useAuth = () => {

    const store = useStore()

    const createUser = async( user ) => {
        const resp = await store.dispatch('auth/createUser', user);
        return resp;
    }

    const loginUser = async(credentials) => {
        const resp = await store.dispatch('auth/logInUser', credentials);
        console.log(resp);
        return resp;
    }

    return {
        createUser,
        loginUser
    }
}


export default useAuth;