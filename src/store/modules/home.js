import {SET_DEEP, SET_FIRST, SET_LANG, SET_SHOW_STEPS, SET_SPREAD, SET_STATUS} from '../mutations.js'

import * as status from '@/status'

const state = {
    lang: 'cn',
    deep: 8,
    showSteps: true,
    spread: true,
    status: status.LOADING,
    first: 1,
    randomOpening: true,
    deepList: [{
        value: 2,
        title: 'idiot'
    },{
        value: 4,
        title: 'easy'
    }, {
        value: 6,
        title: 'normal'
    } ,{
        value: 8,
        title: 'hard'
    },]
}

const getters = {
    lang: state => state.lang,
    deep: state => state.deep,
    deepList: state => state.deepList,
    status: state => state.status,
    showSteps: state => state.showSteps,
    spread: state => state.spread,
    first: state => state.first,
    randomOpening: state => state.randomOpening
}

const mutations = {
    [SET_DEEP](state, deep) {
        state.deep = deep
    },
    [SET_LANG](state, lang) {
        state.lang = lang
    },
    [SET_SHOW_STEPS](state, show) {
        state.showSteps = show
    },
    [SET_SPREAD](state, s) {
        state.spread = s
    },
    [SET_STATUS](state, status) {
        state.status = status
    },
    [SET_FIRST](state, first) {
        state.first = first
    }
}

const actions = {
    [SET_DEEP]({commit}, deep) {
        commit(SET_DEEP, deep)
    },
    [SET_LANG]({commit}, lang) {
        commit(SET_LANG, lang)
    },
    [SET_SHOW_STEPS]({commit}, show) {
        commit(SET_SHOW_STEPS, show)
    },
    [SET_SPREAD]({commit}, s) {
        commit(SET_SPREAD, s)
    },
    [SET_STATUS]({commit}, status) {
        commit(SET_STATUS, status)
    },
    [SET_FIRST]({commit}, first) {
        commit(SET_FIRST, first)
    }


}

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}
