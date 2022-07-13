
import authApi from "@/api/authApi";


export const createUser = async ({ commit }, user) => {

    try {

        const requestBody = {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        }

        const register = await authApi.post(':signUp', requestBody )

        await authApi.post(':update', { displayName: user.name, idToken: register.data.idToken })

        delete user.password
        commit('loginUser', {user, idToken: register.data.idToken, refreshToken: register.data.refreshToken})
        return { ok: true }

    } catch (error) {
        console.log(error);
        return { ok:false, message: error.response.data.error.message }
    }

} 





export const logInUser = async ({ commit }, user) => {

    try {

        const requestBody = {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        }

        const login = await authApi.post(':signInWithPassword', requestBody )

        user.name = login.data.displayName

        commit('loginUser', {user, idToken: login.data.idToken, refreshToken: login.data.refreshToken})
        return { ok: true }

    } catch (error) {
        console.log(error);
        return { ok:false, message: error.response.data.error.message }
    }

} 