<template>
    <div class="container">

        <v-layout>
            <v-app-bar color="rgb(169, 217, 208)"> 
                <v-app-bar-title class="titulo">Funko Lab</v-app-bar-title>
                
                <v-btn icon>
                    <router-link to="/carrinho">
                        {{ this.$store.state.produtosCarrinho.length}}
                        <v-icon color="#FFF">mdi-cart</v-icon>
                    </router-link>
                </v-btn>
            </v-app-bar>
            
            <v-main>
                <router-view></router-view>
            </v-main>
        </v-layout>
    </div>
    </template>

  <style scoped>
  
  .container {
    background-color: rgb(169, 217, 208);
  }
.titulo {
    display: flex;
    justify-content: center;
}

    a {
        text-decoration: none;
    }
</style>