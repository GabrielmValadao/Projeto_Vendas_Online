import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      produtosCarrinho: [],
    };
  },

  mutations: {
    adicionarProdutoAoCarrinho(state, produtoRecebido) {
      // procura se o produto ja esta no carrinho
      const produtoNoCarrinho = state.produtosCarrinho.find(produto => produto.id === produtoRecebido.id)
      
      // se estiver no carrinho, adiciona a quantidade + 1, percorre o array com o map(mapea o array)
      if (produtoNoCarrinho) {
        state.produtosCarrinho = state.produtosCarrinho.map(item => {
            if(item.id === produtoRecebido.id) {
                item.quantidade = item.quantidade + 1
            }

            return item
        })
      } else {
        // mantem o que recebe e adiciona a quantidade, novo objeto
        state.produtosCarrinho = [
          ...state.produtosCarrinho,
          {
            ...produtoRecebido,
            quantidade: 1,
          },
        ];
      }
    },
  },

  actions: {
    adicionarProduto(context, value) {
      context.commit("adicionarProdutoAoCarrinho", value.product);
    },
  },
});

export default store;
