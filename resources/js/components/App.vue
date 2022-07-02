<template>
    <div class="min-h-screen bg-gray-100">
        <header class="bg-blue-600 sticky top-0" style=" z-index: 900">
            <div class="container flex items-center justify-between h-16">
                <div class="order-first md:order-last">
                    <router-link class="text-white" to="/"  >
                        <p class="items-center sm:mr-4 md:ml-4 justify-center text-xl md:text-2xl font-extrabold rounded-full p-2">
                                | Inicio |
                        </p>
                    </router-link>
                    
                </div>
                <div class="hidden md:block mr-4">
                    <router-link class=" text-sm text-gray-100 hover:text-white mr-3 md:text-md lg:text-lg " to="/users" >Usuarios</router-link>
                    <router-link class=" text-sm text-gray-100 hover:text-white mr-3 md:text-md lg:text-lg " to="/entities"  >Entidades</router-link>
                    <router-link class=" text-sm text-gray-100 hover:text-white mr-3 md:text-md lg:text-lg " to="/emails" >Emails</router-link>
                            

                </div>
            </div>
        </header>

        <div>
            <router-view> </router-view>
        </div>
    </div>
</template>