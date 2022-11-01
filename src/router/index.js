import {createRouter, createWebHistory} from 'vue-router'


import TodoList from '@/components/TodoList.vue'
import ShowModal from '@/components/ShowModal.vue'

const routes = [
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
    },
    {

    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
