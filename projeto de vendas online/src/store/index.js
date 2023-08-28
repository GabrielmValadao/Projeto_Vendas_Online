import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            produtosCarrinho: []
        }
    },

    mutations: {
        adicionarProdutoAoCarrinho(state, value) {
            state.produtosCarrinho = [...state.produtosCarrinho, value]
        }
    },

    actions: {
        adicionarProduto(context, value) {
            context.commit("adionarProdutoAoCarrinho", value.product) 
        }
    }
})

export default store