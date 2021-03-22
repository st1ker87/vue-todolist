var app = new Vue({
    el: '#root',

    data:
    {
        canAdd: false,
        listEl: "",
        todos: ['Allenamento', 'Lezione', 'Spesa']
    },

    methods: {
        addTodo() {
            this.canAdd = false;
            if (this.listEl === "") {
                this.canAdd = true;
            }
            else {
                this.canAdd = false;
                this.todos.push(this.listEl);
                this.listEl= "";
            }
        },
        deleteTodo(index) {
            this.todos.splice(index, 1);
        }


    }
    
});
Vue.config.devtools = true