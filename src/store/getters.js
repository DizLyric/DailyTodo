export default{
    allTodos: state => {
        return state.list
    },

    getTodos: (state) => (route) => {
        let list = null
    	switch (route) {
			case 'List':    list = state.list.filter(todo => !todo.isDeleted)
                break
			case 'Deleted': list = state.list.filter(todo => todo.isDeleted)
                break
		}
        
        switch (state.params.filtering) {
            case 'to do':
                list = list.filter(todo => todo.status == 'Выполнить')
                break;
            case 'progress':
                list = list.filter(todo => todo.status == 'Выполняется')
                break
            case 'done':
                list = list.filter(todo => todo.status == 'Выполнена')
                break
        }

        switch(state.params.sorting){
            case 'numASC': list
                break
            case 'numDESC': list.reverse()
                break
            case 'charASC': list.sort(function(a, b) {
                let textA = a.name.toUpperCase()
                let textB = b.name.toUpperCase()
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            })
                break
            case 'charDESC': list.sort(function(a, b) {
                let textA = a.name.toUpperCase()
                let textB = b.name.toUpperCase()
                return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
            })
            break
        }


        return list
    },

    activeTodos: (state) => () => {
        return state.list.filter(todo => !todo.isDeleted)
    },

    deletedTodos: (state) => () => {
        return state.list.filter(todo => todo.isDeleted)
    },

    todoByID: state => id => {
        return state.list.find(todo => todo.id == id)
    },

	

}