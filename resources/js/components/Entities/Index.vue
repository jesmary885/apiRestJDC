<script>
export default {
    name:"entity",
    data() {
        return {
            entities:[],
            message:''
        }
    },
    mounted() {
        this.listEntities()
    },
    methods: {
        async listEntities(){
            await this.axios.get('/api/entities')
            .then(response=>{
                this.entities = response.data
            })
            .catch(error=>{
                this.entity = []
            })
        },
        destroy(id){
            if(confirm("¿Esta seguro de eliminar este registro?")){
                this.axios.delete(`/api/entities/${id}`)
                .then(response=>{
                    this.message = response.data.message,
                    this.listEntities()
                })
                .catch(error=>{
                    console.log('error');
                })
            }

        }
    },

}
</script>

<template>
<div class="container">
    <h1 class="mt-6 text-lg font-bold text-gray-600"><i class="far fa-address-book"></i> Listado de entidades</h1>
        <div class="card mt-2">
        <div class="card-header">
            <div class="order-last">
                <router-link :to='{name:"createEntity"}' class="btn btn-primary btn-sm float-right" > <i class="fas fa-user-plus"></i> Registrar entidad</router-link>
            
            </div>
        </div>
        <div class="text-center p-2" v-if="message">
            <span class="text-gray-800 bg-gray-200 text-semibold">{{message}}</span>
        </div>
           <div v-if="entities != ''">
                <div class="card-body">
                    <table class="table table-striped table-responsive-md table-responsive-sm">
                        <thead class="thead-dark">
                            <tr>
                                <th class="text-center">Nombre</th>
                                <th class="text-center">Email</th>
                                <th class="text-center">Tipo</th>
                                <th class="text-center">Dirección</th>
                                <th class="text-center">Teléfono</th>
                                <th colspan="2"></th>
                
                            </tr>
                        </thead>
                        <tbody>
                            <tr  v-for="entity in entities" :key="entity.id">
                                    <td class="text-center">{{ entity.name}}</td>
                                    <td class="text-center">{{ entity.email}}</td>
                                    <td v-if="entity.type == '1'" class="text-center">PERSONA</td>
                                    <td v-if="entity.type == '2'" class="text-center">EMPRESA</td>
                                    <td class="text-center">{{ entity.direction}}</td>
                                    <td class="text-center">{{ entity.phone}}</td>

                                    <td width="10px">
                                        <router-link :to='{name:"editEntity",params:{id:entity.id}}' class="btn btn-success btn-sm"> <i class="fas fa-user-edit"></i> </router-link>
                                    </td>
                                    <td width="10px">
                                        <a class="btn btn-danger btn-sm" @click="destroy(entity.id)"><i class="fas fa-trash-alt"></i></a>
                                    </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- <div class="card-footer">
                    {{$users->links()}}
                </div> -->
           </div>
            <div v-else class="px-6 py-4">
                      No hay entidades registradas
            </div>

        </div>
</div>
</template>

