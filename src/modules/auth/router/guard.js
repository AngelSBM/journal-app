import store from '@/store'


const isAuthenticated = async (to, from, next) => {

    // console.log(store);
    const {ok} = await store.dispatch('auth/checkAuthentication')

    if(ok) next()
    else next({name: 'login'})

}


export default isAuthenticated;