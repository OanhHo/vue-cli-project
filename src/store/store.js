import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import getters from './getter'
import mutations from './mutation'
import actions from './action'

export default new Vuex.Store({
    state: {
        persons: [],
        newPerson: ''
    },
    getters,
    mutations,
    actions
})