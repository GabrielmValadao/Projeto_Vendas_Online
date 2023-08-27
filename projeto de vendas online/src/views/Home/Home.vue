<template>
  <h1 class="titulo">Funkos</h1>

  <div class="itens-lista">
    <v-card width="20%" class="pa-2" v-for="produto in produtos" :key="produto.id">
      <v-img
        :src="produto.imagem"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        width="200px"
        height="200px"
        cover
        class="align-end"
        aspect-radio="1/1"
      >
        <v-card-title class="nome">{{produto.nome}}</v-card-title>
      </v-img>
      <v-card-subtitle class="pt-4"> 10x de {{new Intl.NumberFormat('pt-BR',{ style: 'currency', currency:'BRL'}).format(produto.parcela)}} </v-card-subtitle>
      <!-- new intl, transforma o valor para R$  -->
      <v-card-actions>
        <v-btn color="#A9D9D0" @click= "() => adicionarAoCarinho(produto)"> COMPRAR </v-btn> 
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            produtos: [],
            produtosCarrinho: [],
            // var para acesso das variveis globais 
            mensagemEstadoGlobal: this.$store.state.mensagem  
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
    adicionarAoCarinho(produto) {
        this.produtosCarrinho.push(produto) 
    }
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
