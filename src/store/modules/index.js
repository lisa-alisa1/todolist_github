import { createStore } from 'vuex'

export default createStore({
    state: {
        todos: [
            {
                id: 1,
                title: 'allTodos',
                author: 'ffg',
                content: 'hbjhb'
            },
            {
                id: 2,
                title: 'allTodos',
                author: 'ffg',
                content: 'hbjhb'
            },
            {
                id: 3,
                title: 'allTodos',
                author: 'ffg',
                content: 'hbjhb'
            },
            {
                id: 4,
                title: 'allTodos',
                author: 'ffg',
                content: 'hbjhb'
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