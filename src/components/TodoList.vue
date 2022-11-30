<template>
    <div>
        <router-link to="/new-post">
            <vs-button id="create" color="rgb(160, 44, 255)" type="filled">
                 Создать пост
            </vs-button>
        </router-link>

        <vs-table  
            search 
            :max-items="descriptionItems[0]"
            pagination
            :data="allTodos"
            description
            :description-items="descriptionItems"
            description-title="Записей на странице"
            description-connector="of"
            description-body="Страницы"
        >
    
            <template #thead>
                <vs-th sort-key="id"> ID</vs-th>
                <vs-th sort-key="title"> Заголовок</vs-th>
                <vs-th sort-key="content">Содержание</vs-th>
                <vs-th sort-key="author">Автор</vs-th>
                <vs-th sort-key="date">Дата</vs-th>
                <vs-th sort-key="delete">Удалить</vs-th>
            </template>

            <template  v-slot="{data}">

                <vs-tr :key="index" v-for="(todo, index) in data">
                    <vs-td >{{todo.id}}</vs-td>
                    <vs-td >{{todo.title}}</vs-td>
                    <vs-td >{{todo.content}}</vs-td>
                    <vs-td >{{todo.author}}</vs-td>
                    <vs-td >{{dateTime(todo.date)}}</vs-td>
                    <vs-td >
                        <button @click="deleteTodo(todo.id)">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </vs-td>
                </vs-tr>    
            </template>
        </vs-table>
        
        <router-view></router-view>
    </div>
        
    
</template>



<script>
import {mapGetters, mapActions} from 'vuex'
import moment from 'moment'

export default {
    data() {
        return {
            descriptionItems: [3,5,15],
        }
    },

    computed: mapGetters(['allTodos']),

    methods: {

        dateTime(value) {
            return moment(new Date(value)).format('YYYY-MM-DD HH:mm')
        },
        
        ...mapActions(['deleteTodo'])
    }
    
} 
</script>

<style scoped>
/* {
    display: flex;
    justify-content: center !important;
    align-items: center !important;
} */
    button#create {
    margin: 15px;
    float: right;
    display: inline-block;
    color: white;
    text-shadow: 1px 2px rgba(178, 45, 45, 0.351);
    text-decoration: none;
    padding: .4em 1em;
    border-radius: 100px;
    outline: none;
    background: -webkit-linear-gradient(left, rgba(160, 44, 255, 0.367), rgba(237, 255, 240, 0)); 
    overflow: hidden;
}

button#create:after {
  content: "+";
  position: relative;
  bottom: 0;
  display: inline-block;
  margin-left: 1.4em;
  vertical-align: middle;
  font-family: "Times","Times New Roman","serif","sans-serif","EmojiSymbols";
  font-weight: 700;
  font-size: 140%;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
button#create:hover {
  background: -webkit-linear-gradient(left, #b3a7a7a6, rgba(21, 190, 49, 0.445)); 
}
button#create:active:after {
  bottom: -1.0em;
  transition: .2s;
}

</style>