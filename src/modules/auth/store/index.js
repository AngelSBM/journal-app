import state from './state';
import * as getters from './actions';
import * as actions from './actions';
import * as mutations from './actions';


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}