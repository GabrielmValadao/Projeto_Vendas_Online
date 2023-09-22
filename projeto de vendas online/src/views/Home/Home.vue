<template>
  <div class="itens-lista">
    <v-card
      width="30%"
      class="pa-1 ma-1"
      v-for="product in products"
      :key="product.id"
    >
      <v-img
        :src="product.imagem"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        width="200px"
        height="200px"
        cover
        class="align-end"
        aspect-radio="1/1"
      >
        <v-card-title class="nome">{{ product.nome }}</v-card-title>
      </v-img>
      <v-card-subtitle class="pt-1">
        {{
          new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(product.preco)
        }}
      </v-card-subtitle>
      <v-card-subtitle class="pt-1">
        10x de
        {{
          new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(product.parcela)
        }}
      </v-card-subtitle>
      <v-card-actions>
        <v-btn
          color="#A9D9D0"
          @click="() => this.$store.dispatch('adicionarProduto', { product })"
        >
          COMPRAR
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
    };
  },

  mounted() {
    this.loadProducts();
  },
  methods: {
    loadProducts() {
      axios({
        url: " http://localhost:3000/produtos",
        method: "GET",
      })
        .then((response) => {
          this.products = response.data;
        })
        .catch(() => {
          alert("Produtos não recuperados!");
        });
    },
  },
};
</script>

<style scoped>
.itens-lista {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.nome {
  color: rgb(197, 237, 230);
}
</style>
