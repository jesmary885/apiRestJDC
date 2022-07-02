<template>
    <div class="container bg-white rounded shadow-lg mt-4">
      <span class="text-bold text-lg text-gray-800 ">Asunto: </span><h1 class="text-bold text-gray-600 text-lg inline-block">{{email.title}} </h1>
 
    <div v-if="!loading" class="mt-2">
        <span class="text-bold text-lg text-gray-800 ">De: </span><h2 class="text-gray-600 text-lg inline-block"> {{email.user.name}} - {{email.user.email}}  </h2>
    </div>

    <div v-if="!loading" class="mt-2">
        <span class="text-bold text-lg text-gray-800 ">Para: </span>
             <ul class="bg-white">
                <div v-for="entity in entities" :key="entity.id">
                    <li class="text-gray-800 text-lg ml-4 mt-2">
                        {{entity.entity.name}} - {{entity.entity.email}}
                    </li>
                </div>
            </ul>

    </div>
    <div class="mt-4">
        <h2 class="text-bold text-lg text-gray-800">Contenido:</h2>
        <div>
            <p class="text-gray-800 text-md m-4">{{email.content}}</p>
        </div>
    </div>

    
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            email:[],
            loading: true,
            entities:[]
        }
    },
  
    mounted() {
        this.viewEmail()
    },
    methods: {
        
        async viewEmail(){
            this.loading = true;
           await this.axios.get(`/api/emails/${this.$route.params.id}`)
            .then(response=>{
                this.email = response.data.email;
                this.entities = response.data.entities;
                this.loading = false;
                console.log(this.entities)
            })
            .catch(error=>{
                console.log(error)
            })
        },
    }
}
</script>