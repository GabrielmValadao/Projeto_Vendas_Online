<template>
  <h1 class="titulo">Funkos</h1>

  <div class="itens-lista">
    <v-card width="20%" class="pa-2" v-for="product in products" :key="product.id">
      <v-img
        :src="product.imagem"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        width="200px"
        height="200px"
        cover
        class="align-end"
        aspect-radio="1/1"
      >
        <v-card-title class="nome">{{product.nome}}</v-card-title>
      </v-img>
      <v-card-subtitle class="pt-4"> 10x de {{new Intl.NumberFormat('pt-BR',{ style: 'currency', currency:'BRL'}).format(product.parcela)}} </v-card-subtitle>
      <!-- new intl, transforma o valor para R$  -->
      <v-card-actions>
        <v-btn color="#A9D9D0"> COMPRAR </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            products: []
        }
    },
  mounted() {
    this.loadProducts() 
  },
  methods: {
    loadProducts() {
      axios({
        url: " http://localhost:3000/produtos",
        method: "GET",
      })
        .then((response) => {
            console.log(response.data)
            this.products = response.data
        })
        .catch(() => {
          alert("Produtos não recuperados!");
        });
    },
  },
};
</script>

<style scoped>
.titulo {
  color: rgb(169, 217, 208);
  display: flex;
  justify-content: center;
}

.itens-lista {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.nome {
  color: rgb(169, 217, 208);
}

</style>
