<script>
export default {
    data() {
        return {
            email:{
                content:"",
                title:"",
                user_id:"",
                file:null
            },
            q:'',
            ent:[],
            selects:[],
            message:'',
            errors:[],
            users:[],
            include:'',
           
        }
    },
     mounted() {
        this.listUsers()
    },
     watch:{
            q:function(value){
                this.axios.post('/api/emails',{q:value})
                .then(response=>{
                    this.ent = response.data.ent;
                    console.log(this.selects);
                })
                .catch(error=>{
                    this.errors = error.response.data.errors;
                    console.log(error)
                })
            }
    },
    methods: {
        listUsers(){
            this.axios.post('/api/emails')
                .then(response=>{
                    this.users = response.data.users
                 })
                .catch(error=>{
                    this.errors = error.response.data.errors;
                    console.log(error)
                })

        },
        create(){
            //pass file
            let formData = new FormData();

            formData.append("content",this.email.content)
            formData.append("file",this.email.file)
            formData.append("title",this.email.title)
            formData.append("user_id",this.email.user_id)
            formData.append("send","true")

           const json = JSON.stringify({
                entities: this.selects,
            });

            formData.append('formData', json);
            this.axios.post('/api/emails',formData)

           .then(response=>{
                this.message = response.data.message;
                if(!this.message){
                    this.$router.push({name:"emails"})
                }
            })
            .catch(error=>{
                console.log(error)
            })
        },
        addSelect(e){
            let exists;
      
            this.selects.forEach(element => {
                if (element.id == e.id) {
                    this.exists = 1
                }
            })

            if(this.exists != 1) {
                this.selects.push(e)
            }
        },
        select_file(e){
            this.email.file = e.target.files[0];
        },
        remove(e){
            let position = this.selects.indexOf(e)
            this.selects.splice(position,1)
        }
    },
    
    
}
</script>

<template>
<div class="container">

    <div class="card">
        <h1 class="py-2 text-lg text-gray-600 ml-4 mt-1 font-semibold"> <i class="fas fa-user-tie"></i> Nuevo email</h1>
    </div>
    <div class="text-center p-2" v-if="message">
        <span class="text-gray-800 bg-gray-200 text-semibold">{{message}}</span>
    </div>
    <div class="grid lg:grid-cols-3 gap-6">
        <aside class="lg:col-span-2">
            <div class="card w-full pt-0 mt-2">

                <hr class="m-0 p-0">
                <div class="card-body w-full m-0">

                <div class=" w-full">
    
                    <input v-model="q" type="text" class="px-2 appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Destinatarios" >
                </div>

                <div class="bg-white rounded-lg shadow-lg">
                 <div v-if="ent"> 
                        <div v-for="e in ent" :key="e.id" class="px-4 py-3 space-y-1" >
                            <div @click="addSelect(e)" class="ml-4 text-gray-700 cursor-pointer">
                                <p class="text-lg font-semibold leading-5">{{e.name}}</p>
                                <p>Email: {{e.email}}</p>
                            </div>
                        </div> 
                 </div>
                <!-- <div v-else>
                    <p class="text-lg leading-5">
                        No existe ningún registro con los parametros especificados
                    </p>
                </div> -->
            </div>

                <form @submit.prevent="create">
                        <div class="w-full">
                            <div class="w-full mt-2">
                                <select v-model="email.user_id" class="block w-full bg-gray-100 border border-gray-200 text-gray-400 py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required>
                                    <option value="" selected>Remitente</option>
                                    <option v-for="user in users" :key="user.id" :value="user.id">{{user.name}}</option>
                                </select> 
                                <span class="w-full text-red-500" v-if="errors.user_id">{{errors.user_id}}</span>
                            </div>
                            <div class="w-full mr-2 mt-2">
                                <input type="text" v-model="email.title"  class="px-2 appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Asunto ">
                            </div>
                            <div class="w-full">
                            <textarea v-model="email.content" class="mt-2 resize-none rounded-md outline-none w-full px-2 appearance-none block bg-gray-100 text-gray-700 border border-gray-200 py-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" cols="80" rows="2" required placeholder="Contenido"></textarea>
                            <span class="w-full text-red-500" v-if="errors.name">{{errors.content}}</span>
                            </div>
                            
                            <div class="w-full flex mr-2 mt-2">
                                <input type="file"  @change="select_file" class="px-2 appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="file " accept="application/pdf">
                            </div>
                        </div>

                        <hr class="mb-0 pb-0">

                        <div class="py-12">
                            <button  class="btn btn-primary">
                                <i class="fas fa-file-download"></i> Enviar
                            </button>
             
                              <router-link :to='{name:"emails"}' class="btn btn-primary"> <i class="fas fa-undo-alt"></i> Regresar </router-link>
                        </div>
                    </form>

                </div>
            </div>
        </aside>

        <div class="card mt-2 lg:col-span-1">

        <p class="text-md font-semibold text-gray-600 text-center p-2">Destinatarios seleccionados</p>
        <hr class="mb-2">

         <div v-for="select in selects" :key="select.id" class="px-4 py-1 space-y-1 text-center" >
            <div class="flex ml-4 text-gray-700">
                <p class="font-semibold text-sm leading-5 mr-2">{{select.name}}</p>
                <p class="text-sm">Email: {{select.email}}</p>
                <div @click="remove(select)">
                    <i class="fas fa-times text-sm ml-2 text-red-600 cursor-pointer" ></i>
                </div>

            </div>
        </div> 

        </div>


    </div>
    
</div>
</template>