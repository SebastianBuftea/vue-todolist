const { createApp } = Vue

createApp ({
    data() {
        return{
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
            ]
          
        }
    },
    methods:{
    }
}).mount("#app")

