import { createStore, createLogger } from 'vuex'
import products from './module/Product'
const store = createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        products
    },
    plugins: [createLogger()]
})

export default store