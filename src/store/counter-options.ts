import { defineStore } from 'pinia'

export const useCounterOptions = defineStore('counterOptions', {
    state: () => ({
        count: 0,
        lastChanged: undefined,
    }),

    getters: {
        squareCount: (state) => state.count * state.count,
    },

    actions:{
        
    }
})