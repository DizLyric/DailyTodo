export default {
    addTodo: ({ commit }, todo) => {
        commit('addTodo', todo)
    },

    deleteTodo: ({ commit }, id) => {
        commit('deleteTodo', id)
    },
    
    toggleIsDeleted: ({ commit }, id) => {
        commit('toggleIsDeleted', id)
    },

    replaceTodo: ({ commit }, todo) => {
        commit('replaceTodo', todo)
    },

    changeParams: ({ commit }, obj) => {
        commit('changeParams', obj)
    }

}