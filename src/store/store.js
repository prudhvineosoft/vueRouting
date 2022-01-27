
import { createStore } from "vuex" 

const store = createStore({
   state:{
      name: "Vue",
      count:0
   },
   mutations:{
      increment(state,payload) {
         return state.count = state.count+payload.amount
      },
      decrement(state,payload) {
         return state.count = state.count-payload.amount
      }
   },
   actions:{
      increment(countext,payload) {
         countext.commit('increment',payload)
      },
      decrement(countext,payload) {
         countext.commit('decrement',payload)
      }
   }
})

export default store