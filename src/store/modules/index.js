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
                date: ' 13:45 01.01.2022'
            },
            {
                id: 2,
                title: 'allTodos',
                author: 'ffg',
                content: 'hbjhb',
                date: '12:55 03.05.2022'
            },
            {
                id: 3,
                title: 'allTodos',
                author: 'ffg',
                content: 'hbjhb',
                date: '10:30 11.10.2022'
            },
            {
                id: 4,
                title: 'allTodos',
                author: 'ffg',
                content: 'hbjhb',
                date: '06:12 05.06.2022'
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