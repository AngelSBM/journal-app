import { computed } from "vue";
import { useStore } from "vuex";



const useAuth = () => {

    const store = useStore()

    const createUser = async( user ) => {
        const resp = await store.dispatch('auth/createUser', user);
        return resp;
    }

    const loginUser = async(credentials) => {
        const resp = await store.dispatch('auth/logInUser', credentials);
        return resp;
    }

    const logout = () => {
        store.commit('auth/logout');
        store.commit('journal/purgeEntries');
    }

    const checkAuthStatus = async() => {
        const resp = await store.dispatch('auth/checkAuthentication')
        return resp;
    }

    return {
        createUser,
        loginUser,
        logout,
        checkAuthStatus,

        authStatus: computed( () => store.getters['auth/currentState'] ),
        userName: computed( () => store.getters['auth/username'] )        
    }
}


export default useAuth;