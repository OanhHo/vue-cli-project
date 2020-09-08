export default {
    getPerson(state, person){
        state.newPerson = person
    },
    addPerson(state) {
        state.persons.push({
            body: state.newPerson,
            completed: false
        })
    },
    completePerson(state, person) {
        person.completed = !person.completed
    },
    removePerson(state, person) {
        var persons = state.persons
        persons.splice(persons.indexOf(person), 1)
    },
    editPerson(state, person) {
        var persons = state.persons
        persons.splice(persons.indexOf(person), 1)
        state.persons = persons
        state.newPerson = person.body
    }
}