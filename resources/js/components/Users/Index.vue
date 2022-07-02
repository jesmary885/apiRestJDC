<script>
export default {
    name:"entity",
    data() {
        return {
            users:[],
            message:''
        }
    },
    mounted() {
        this.listUsers()
    },
    methods: {
        async listUsers(){
            await this.axios.get('/api/users')
            .then(response=>{
                this.users = response.data
            })
            .catch(error=>{
                this.users = []
            })
        },
        destroy(id){
            if(confirm("¿Esta seguro de eliminar este registro?")){
                this.axios.delete(`/api/users/${id}`)
                .then(response=>{
                    this.message = response.data.message,
                    this.listUsers()
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
    <h1 class="mt-6 text-lg font-bold text-gray-600"><i class="far fa-address-book"></i> Listado de usuarios</h1>
        <div class="card mt-2">
        <div class="card-header">
            <div class="order-last">
                <router-link :to='{name:"createUser"}' class="btn btn-primary btn-sm float-right" > <i class="fas fa-user-plus"></i> Registrar usuario</router-link>
            
            </div>
        </div>
        <div class="text-center p-2" v-if="message">
            <span class="text-gray-800 bg-gray-200 text-semibold">{{message}}</span>
        </div>
        
           <div v-if="users != ''">
                <div class="card-body">
                    <table class="table table-striped table-responsive-md table-responsive-sm">
                        <thead class="thead-dark">
                            <tr>
                                <th class="text-center">Nombre</th>
                                <th class="text-center">Email</th>
                                <th colspan="2"></th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr  v-for="user in users" :key="user.id">
                                    <td class="text-center">{{ user.name}}</td>
                                    <td class="text-center">{{ user.email}}</td>
                                    <td width="10px">
                                        <router-link :to='{name:"editUser",params:{id:user.id}}' class="btn btn-success btn-sm"> <i class="fas fa-user-edit"></i> </router-link>
                                    </td>
                                    <td width="10px">
                                        <a class="btn btn-danger btn-sm" @click="destroy(user.id)"><i class="fas fa-trash-alt"></i></a>
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
                      No hay usuarios registradas
            </div>

        </div>
</div>
</template>