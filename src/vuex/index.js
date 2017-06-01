import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
// import createLogger from '../../../src/plugins/logger'

//Modules
import Home from './modules/home'
import Article from './modules/article'
import Topic from './modules/topic'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        Home,
        Article,
        Topic
    },
    trict: debug
    // plugins: debug ? [createLogger()] : []
})