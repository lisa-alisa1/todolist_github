import VueRouter from 'vue-router'

import TodoList from '@/components/TodoList.vue'
import ShowModal from '@/components/ShowModal.vue'


export default new VueRouter({
    mode: 'history',
    routes:  [
        {
            path: '/',
            name: 'MainPage',
            component: TodoList,
            children: [
                {
                    path: 'new-post',
                    name: 'ShowModal',
                    component: ShowModal
                }
            ]
        }
    ]
})
