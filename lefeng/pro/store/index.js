import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    activeIndex:0
  },
  mutations:{
		changeIndex (state) {
      state.activeIndex++
    }
  }
})
