import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            menssagem: 'Olá mundo'
        }
    },

    actions: {
        alterarNome() {
            console.log("entrei aqui")
        }
    }
})

export default store