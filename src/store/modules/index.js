import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [
            {
                id: 1,
                title: 'allTodos',
                author: 'ffg',
                content: 'hbjhb',
                date: ' 2022-08-13 09:55'
            },
            {
                id: 2,
                title: 'allTodos',
                author: 'ffg',
                content: 'hbjhb',
                date: '2022-06-20 10:46'
            },
            {
                id: 3,
                title: 'allTodos',
                author: 'ffg',
                content: 'hbjhb',
                date: '2022-12-2 23:13'
            },
            {
                id: 4,
                title: 'allTodos',
                author: 'ffg',
                content: 'hbjhb',
                date: '2016-09-28 20:30'
            },
            
        ]
    },
    getters: {
        allTodos: (state) => state.todos,

        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id)
        },

    },
    mutations: {
        updateTodos(state, todos) {
            state.todos = todos
        }
    },
    actions: {

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