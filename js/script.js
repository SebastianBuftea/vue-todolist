const { createApp } = Vue

createApp ({
    data() {
        return{
            // creo l'array con le cose da fare
            todolist:[
                {
                    text: "Buttare la spazzatura",
                    done:false,
                },
                {
                    text: "Pulire la stanza",
                    done:false,
                },
                {
                    text: "Fare i compiti",
                    done:false,
                },
                {
                    text: "Cucinare",
                    done:false,
                },
                {
                    text: "Portare il cane fuori ",
                    done:false,
                }
            ],
            texttask:""
          
        }
    },
    methods:{
        // funzione per eliminare un oggetto del array
        deleteTodo(index){
            this.todolist.splice(index,1)
        },
        addTodo(){
            this.todolist.push({
                text: this.texttask,
                done:false
            });
            this.texttask=""
        }
    }
}).mount("#app")

