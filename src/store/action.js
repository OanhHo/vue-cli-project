export default {
    getPerson({commit}, person) {
        commit('getPerson', person)
    },
    addPerson({commit}) {
        commit('addPerson')
    },
    editPerson({commit}, person){
        commit('editPerson', person)
    },
    completePerson({commit}, person) {
        commit('completePerson', person)
    },
    removePerson({commit}, person){
        commit('removePerson', person)
    }
    
}