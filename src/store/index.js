import { createStore } from "vuex"
import actions from './actions'
import mutations from './mutations'
import getters from "./getters"
import plugins from './plugins'

export default createStore({
    state: {
        list: JSON.parse(localStorage.getItem('list') || '[]'),
        params: {
            sorting: null, // charASC, charDESC, numASC, numDESC
            filtering: null // to do, progress, done
        }
    },
    getters,
    actions,
    mutations,
    plugins,
})