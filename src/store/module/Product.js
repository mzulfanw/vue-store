import { get } from '../endpoint'
const basePath = 'products'

const products = {
    namespaced: true,
    state () {
        return {
            items: []
        }
    },
    mutations: {
        SET_ITEMS (state, payload) {
            state.items = payload.data
        }
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        Index ({ commit }, payload) {
            return new Promise((resolve, reject) => {
                get(`${basePath}`).then(res => {
                    commit('SET_ITEMS', {
                        data: res.data
                    })
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
            })
        }
    },
    getters: {
        items (state) {
            return state.items
        }
    }
}

export default products