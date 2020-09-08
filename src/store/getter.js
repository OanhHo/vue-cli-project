export default {
    newPerson: state => state.newPerson,
    persons: state => state.persons.filter((person) => {
        return !person.completed
    }),
    completePerson: state => state.persons.filter((person) => {
        return person.completed
    })
}