  <template>
     <div id="showModal">
        <div class="showModal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-container">
                        <div id="result"></div>

                        <div class="modal-header">
                          <h2> Новый пост </h2>
                        </div>

                        <form @submit="publushTodo">
                          <div class="modal-body">
                              <h3> Заголовок: </h3>
                              <input v-model="title"  type="text" id="title" required> 
                              <br>
                              <h3> Автор:</h3>
                              <input v-model='author' type="text" id="author" required>
                              
                              <h3> Контент:</h3>
                              <textarea v-model='body' class="modal-textarea" id="content" required></textarea>
                          </div>

                          <div class="modal-footer">
                            <router-link to="/">
                              <vs-button id="close" color="danger" type="gradient">
                                Назад
                              </vs-button>
                            </router-link>

                            <vs-button id="success" color="success" type="gradient" button="submit">
                                Опубликовать
                            </vs-button>
                          </div>
                      </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {

  data() {
    return {
        title: '',
        author: '',
        body: '',
        result: '',
      }
    },

  methods: {
    publushTodo(e) {
      e.preventDefault();

      if(this.title !== '' && this.content !== '' && this.author !== '') {
        this.$store.dispatch('createTodo', {
          id: 0,
          title: this.title,
          body: this.body,
        })

        this.$router.push('/')
      }
    }
  }
}
</script>


<style scoped>
.modal-mask {
position: fixed;
z-index: 9998;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, .5);
display: table;
transition: opacity .2s ease;
}

.modal-wrapper {
display: table-cell;
vertical-align: middle;
}

.modal-container {
  width: 50%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .2s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
margin-top: 0;
color: #42b983;
}

.modal-body {
margin: 20px 0;
}

.modal-default-button {
float: right;
}


.modal-enter {
opacity: 0;
}

.modal-leave-active {
opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
-webkit-transform: scale(1.1);
transform: scale(1.1);
}


a#show-modal {
    float: right;
    display: inline-block;
    color: white;
    text-shadow: 1px 2px rgba(0, 0, 0, 0.253);
    text-decoration: none;
    padding: .4em 1em;
    border-radius: 100px;
    outline: none;
    background: -webkit-linear-gradient(left, #b3a7a7, rgba(21, 190, 50, 0.658)); 
    overflow: hidden;
}
a#show-modal:after {
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
a#show-modal:hover {
  background: -webkit-linear-gradient(left, #b3a7a7a6, rgba(21, 190, 49, 0.445)); 
}
a#show-modal:active:after {
  bottom: -1.0em;
  transition: .2s;
}

#close {
  float: left;
}

#sucsses {
  float: right;
}

.showModal {
  color: black;
}

.modal-textarea {
  width: 80%;
  height: 150px;
  border: 1px #b4b5b6 solid;
}
h3 {
  font-size: 24px;
  font-weight: 100;
}

</style>