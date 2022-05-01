<template>
    <Navbar />

    <div class="row justify-content-center" v-if="isLoading">
        <div class="col-3 alert-info text-center mt-5">
            Espere por favor...
            <div class="mt-3">
                <i class="fa fa-spin fa-sync"></i>
            </div>
        </div>
    </div>


    <div class="d-flex">
        <div class="col-4">
            <EntryList />
        </div>
        <div class="col">
            <router-view />
        </div>
    </div>
</template>



<script>
import { defineAsyncComponent } from 'vue';
import { mapActions, mapGetters } from "vuex";

export default {
    components: {
        Navbar: defineAsyncComponent(() => import('../components/Navbar.vue')),
        EntryList: defineAsyncComponent(() => import('../components/EntryList.vue')),
    },
    methods: {
    ...mapActions('journal', ['loadEntries'])
    },
    computed: {
        ...mapGetters('journal', ['isLoading'])
    },
    created(){
        this.loadEntries();
    },
}
</script>