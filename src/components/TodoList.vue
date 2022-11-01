<template>
    <router-link to="/new-post">
        <button id="create">
            Создать пост
        </button>
    </router-link>
    

    <table id="table" class="table">
        <thead>
            <tr>
            <td style="width: 2%;">ID</td>
            <td style="width: 18%;">Заголовок</td>
            <td style="width: 40%;">Содержание</td>
            <td style="width: 20%;">Автор</td>
            <td style="width: 18%;">Дата</td>
            <td style="width: 2%;">Удалить</td>
            </tr>
        </thead>
        <tbody id="posts">
            <tr v-for="todo in allTodos" :key="todo">
                {{todo}}
            </tr>
        </tbody>
    </table>

    <router-view></router-view>

</template>

<script>
export default {
    data() {
        return {
        }
    },

}
</script>



<style scoped>
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