<template>
  	<span class="login100-form-title p-b-41">
        Ingresar
    </span>
    <form class="login100-form validate-form p-b-33 p-t-5" @submit.prevent="logIn">

        <div class="wrap-input100 validate-input" data-validate = "Enter username">
            <input class="input100" type="text" placeholder="Correo" required v-model="credentials.email">
            <span class="focus-input100" data-placeholder="&#xe82a;"></span>
        </div>

        <div class="wrap-input100 validate-input" data-validate="Enter password">
            <input class="input100" type="password" placeholder="Contraseña" required v-model="credentials.password">
            <span class="focus-input100" data-placeholder="&#xe80f;"></span>
        </div>

        <div class="container-login100-form-btn m-t-32">
            <button class="login100-form-btn" type="submit">
                Login
            </button>

        </div>

        <div class="container-login100-form-btn m-t-32">
            <router-link :to="{ name: 'register' }">¿No tienes cuenta?</router-link>
        </div>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useRouter } from "vue-router";
import useAuth from "../composables/useAuth";
import Swal from "sweetalert2";


export default {

    setup(){
         
        const router = useRouter();

        const { loginUser } = useAuth();

        const credentials = ref({
            email: '',
            password: ''
        })


        return {
            credentials,

            async logIn(){
                 const {ok, message} = await loginUser(credentials.value)

                if(!ok) Swal.fire('Error', message, 'error')
                else router.push({name: 'no-entry'})
            }
        }

    }

}
</script>
