<script>
export default {
    name:"email",
    data() {
        return {
            emails:[],
            users:[],
        }
    },
    props:{
        message:String
    },
   
    mounted() {
        this.listEmails()
    },
    methods: {
        
        async listEmails(){
            await this.axios.get('/api/emails')
            .then(response=>{
                 this.emails = response.data.emails
                 this.users = response.data.users
            })
            .catch(error=>{
                this.email = []
            })
        },
        destroy(id){
            if(confirm("¿Esta seguro de eliminar este email?")){
                this.axios.delete(`/api/emails/${id}`)
                .then(response=>{
                    this.listEmails()
                  
                })
                .catch(error=>{
                    console.log('error');
                })
            }

        },
        formatDate(dateString) {
            const date = new Date(dateString);
                // Then specify how you want your dates to be formatted
            return new Intl.DateTimeFormat('default', {dateStyle: 'long'}).format(date);
        }
    },

}
</script>

<template>
<div class="container">
    <div class="card mt-2">
        <div class="card-header">
            <div class="order-last">
                <h1 class="text-lg font-bold text-gray-600"><i class="fas fa-mail-bulk"></i> Listado de Emails</h1>
                <router-link :to='{name:"createEmail"}' class="btn btn-primary btn-sm float-right"><i class="fas fa-edit"></i> Nuevo email</router-link>
            </div>
        </div>
        {{message}}
        <div class="card-body">
                    <div v-if="emails != ''">
                            <div class="card-body">
                                <table class="table table-striped table-responsive-sm table-responsive-md">
                                    <thead class="dark">
                                        <tr>
                                            <th>De</th>
                                            <th>Asunto</th>
                                            <th>Recibido</th>
                                            <th colspan="2"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr  v-for="email in emails" :key="email.id">
                                            <td class="text-bold text-gray-600">{{ email.user.name}}</td>
                                            <td class="text-semibold text-gray-600">{{ email.title}}</td>
                                            <td class="text-semibold text-gray-600">{{ formatDate(email.created_at)}}</td>
                                                 
                                                
                                                
                                                <td width="10px">
                                                    <router-link :to='{name:"showEmail",params:{id:email.id}}' class="btn btn-success btn-sm"> <i class="far fa-eye"></i> </router-link>
                                                </td>
                                                <td width="10px">
                                                    <a class="btn btn-danger btn-sm" @click="destroy(email.id)"><i class="fas fa-trash-alt"></i></a>
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
                            No hay emails registrados
                    </div>
         </div>
    </div>
</div>
</template>
