import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: []
    },

    getters: {
        allTodos: (state) => state.todos,
    },

    mutations: {
        updateTodos(state, todos) {
            state.todos = todos
        }
    },

    actions: {
        async fetchTodos({commit}) {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=7')
            const todos = await res.json()

            commit('updateTodos', todos)
        },

        createTodo({state, commit}, newTodo) {
            if (state.todos && state.todos.length) {
                var lastTodo = state.todos[state.todos.length - 1]
                newTodo.id = lastTodo.id + 1
            } else {
                state.todos = []
                newTodo.id = 1
            }
            newTodo.date = Date.now()
            
            var todos = state.todos
            todos.push(newTodo)

            commit('updateTodos', todos)
        },

        deleteTodo({state, commit} , id) {
            var todos = state.todos
            var index = todos.findIndex(todo => todo.id === id)

            if (todos && index || index === 0) {
                todos.splice(index, 1)
            }

            commit('updateTodos', todos)
        }
    }
})