<script>
export default {
    data() {
        return {
            entity:{
                type:"",
                name:"",
                phone:"",
                direction:"",
                email:""
            },
             errors:[]
        }
    },
    methods: {
        async create(){
           await this.axios.post('/api/entities', this.entity)

            .then(response=>{
                this.$router.push({name:"entities"})
            })
            .catch(error=>{
                console.log(error)
                 this.errors = error.response.data.errors;
            })
        }
    },
    
}
</script>

<template>
<div class="container">
    <div class="card">
        <h1 class="py-2 text-lg text-gray-600 ml-4 mt-1 font-semibold"> <i class="fas fa-user-tie"></i> Nueva entidad</h1>
    </div>

    <div class="card w-full pt-0 mt-2">
        <h2 class="text-sm m-2 p-0 text-gray-500 font-semibold"><i class="fas fa-info-circle"></i> Complete todos los campos y presiona Guardar</h2> 

        <hr class="m-0 p-0">
        <div class="card-body w-full m-0">

           <form @submit.prevent="create">
                <div class="flex mt-2 justify-between w-full">
                    <div class="w-full mr-2">
                        <select v-model="entity.type" class="block w-full bg-gray-100 border border-gray-200 text-gray-400 py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="tipo_documento">
                                <option value="" selected>Tipo de entidad</option>
                                <option value="1">PERSONA</option>
                                <option value="2">EMPRESA</option>
                        </select>
                        <span class="w-full text-red-500" v-if="errors.type">{{errors.type}}</span>
                      
                    </div>
                    <div class="w-full mr-2">
                        <input type="text" v-model="entity.name"  class="px-2 appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Nombre">
                        <span class="w-full text-red-500" v-if="errors.name">{{errors.name}}</span>
                    </div>
                    <div class="w-full">
                        <input type="email" v-model="entity.email"  class="w-full px-2 appearance-none block bg-gray-100 text-gray-700 border border-gray-200 rounded py-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Email">
                        <span class="w-full text-red-500" v-if="errors.email">{{errors.email}}</span>
                    </div>
                </div>
    
                <div class="flex justify-between w-full mt-3 mr-2">
                    <div class="w-full mr-2">
                        <input type="text" v-model="entity.direction" class="w-full px-2 appearance-none block bg-gray-100 text-gray-700 border border-gray-200 rounded py-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Dirección">
                        <span class="w-full text-red-500" v-if="errors.direction">{{errors.direction}}</span>
                    </div>
                    <div class="w-full mr-2">
                        <input  type="number" v-model="entity.phone" class="w-full px-2 appearance-none block bg-gray-100 text-gray-700 border border-gray-200 rounded py-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Teléfono">
                        <span class="w-full text-red-500" v-if="errors.phone">{{errors.phone}}</span>
                    </div>
                </div>

                <div class="py-12">
                    <button  class="btn btn-primary">
                        <i class="fas fa-file-download"></i> Guardar
                    </button>
                    <router-link :to='{name:"entities"}' class="btn btn-primary"> <i class="fas fa-undo-alt"></i> Regresar </router-link>
                </div>
            </form>
        </div>
    </div>
</div>
</template>