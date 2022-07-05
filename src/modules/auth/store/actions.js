
import authApi from "@/api/authApi";


export const createUser = async ({ commit }, user) => {

    try {

        const requestBody = {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        }

        const resp = await authApi.post(':signUp', requestBody )

        console.log(resp);

        //TODO: crear mutation

        return { ok: true }

    } catch (error) {
        console.log(error);
        return { ok:false, message: error.response.data.error.message }
    }

} 