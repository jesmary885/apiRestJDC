<script>
export default {
    data() {
        return {
            user:{
                name:"",
                email:"",
                password:"",
                password_confirmation:""
            },
            errors:[]
        }
    },
    mounted() {
        this.viewEntity()
    },
    methods: {
        async viewEntity(){
           await this.axios.get(`/api/users/${this.$route.params.id}`)
            .then(response=>{
                const {name,password,email} = response.data
                this.user.name = name,
                this.user.password = password,
                this.user.password_confirmation = password,
                this.user.email = email
            })
            .catch(error=>{
                console.log(error)
                 this.errors = error.response.data.errors;
            })
        },

        async edit(){
          
           await this.axios.put(`/api/users/${this.$route.params.id}`, this.user)
             .then(response=>{
                  console.log(response);
                 this.$router.push({name:"users"})
             })
             .catch(error=>{
                this.errors = error.response.data.errors;
                 console.log(error)
             })
        }


    },

}
</script>

<template>
<div class="container">
    <div class="card">
        <h1 class="py-2 text-lg text-gray-600 ml-4 mt-1 font-semibold"> <i class="fas fa-user-tie"></i> Actualizar usuario</h1>
    </div>

    <div class="card w-full pt-0 mt-2">
        <h2 class="text-sm m-2 p-0 text-gray-500 font-semibold"><i class="fas fa-info-circle"></i> Complete todos los campos y presiona Actualizar</h2>

        <hr class="m-0 p-0">
        <div class="card-body w-full m-0">

           <form @submit.prevent="edit">
               <div class="flex mt-2 justify-between w-full">
                    <div class="w-full mr-2">
                        <input type="text" v-model="user.name"  class="px-2 appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Nombre">
                       <span class="w-full text-red-500" v-if="errors.name">{{errors.name}}</span>
                    </div>
                    <div class="w-full">
                        <input type="email" v-model="user.email"  class="w-full px-2 appearance-none block bg-gray-100 text-gray-700 border border-gray-200 rounded py-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Email">
                        <span class="w-full text-red-500" v-if="errors.email">{{errors.email}}</span>
                    </div>
                </div>
    
                <div class="flex justify-between w-full mt-3 mr-2">
                    <div class="w-full mr-2">
                        <input type="text" v-model="user.password" class="w-full px-2 appearance-none block bg-gray-100 text-gray-700 border border-gray-200 rounded py-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Contraseña">
                        <span class="w-full text-red-500" v-if="errors.password">{{errors.password}}</span>
                    </div>
                    <div class="w-full mr-2">
                        <input  type="text" v-model="user.password_confirmation" class="w-full px-2 appearance-none block bg-gray-100 text-gray-700 border border-gray-200 rounded py-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Confirme contraseña">
                    
                    </div>
                </div>

                <div class="py-12">
                    <button  class="btn btn-primary">
                        <i class="fas fa-file-download"></i> Actualizar
                    </button>
                    <router-link :to='{name:"users"}' class="btn btn-primary"> <i class="fas fa-undo-alt"></i> Regresar </router-link>
                </div>
            </form>
        </div>
    </div>
</div>
</template>