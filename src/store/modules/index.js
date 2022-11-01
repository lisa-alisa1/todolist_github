export default {
    state: {
      todos: [
        {
            id: Date.now(),
            title: '1',
            author: 'ffg',
            content: 'hbjhb'
        },
        {
            id: Date.now(),
            title: '2',
            author: 'ffg',
            content: 'hbjhb'
        },
        {
            id: Date.now(),
            title: '3',
            author: 'ffg',
            content: 'hbjhb'
        },
        
      ]
    },
    getters: {
        allTodos: (state) => state.todos
       
    },
    mutations: {
       add_todo(state,todo) {
        state.todos.push(todo)
       }
    },
    actions: {
        addTodo({commit}, todo) {
            commit('add_todo', todo)
        }
    }
 
}