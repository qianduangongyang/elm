import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import createPersistedState from "vuex-persistedstate"
const store = new Vuex.Store({
    //共享状态，类似于组件data数据源
    state,
    //修改状态的方法  类似于组件中的methods
    mutations,
    //类似于组件中的计算属性 用来处理state状态值的
    getters,
    //异步操作  类似于mutations
    actions,
    plugins: [createPersistedState()],
})
export default store;