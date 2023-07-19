export default {
    addTodo: (state, todo) => {
        state.list.push(todo)
    },

    deleteTodo: (state, id) => {
        state.list = state.list.filter(n => n.id !== id);
    },
    
    toggleIsDeleted: (state, id) => {
        state.list = state.list.map(n => n.id === id ? { ...n, isDeleted: !n.isDeleted } : n)
    },

    replaceTodo: (state, todo) => {
        const idx = state.list.findIndex(el => el.id == todo.id)
        state.list[idx] = todo;
    },

    changeParams: (state, obj) => {
        state.params = {...state.params, ...obj}
    }
}