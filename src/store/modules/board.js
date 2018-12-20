import {ADD_CHESSMAN, RESET_BOARD, SET_BOARD, SET_FIVES, SET_STEPS} from '../mutations.js'

const getBoard = function () {
    return [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
}

const copy = function (a) {
    return a.map((r) => r.slice()).slice()
}

const state = {
    board: getBoard(),
    steps: [
        /*
         * like this:
        {
          position: [7, 7],
          role: 1
        }*/
    ],
    stepsTail: [],
    fives: []
}

const getters = {
    board: state => state.board,
    steps: state => state.steps,
    stepsTail: state => state.stepsTail,
    fives: state => state.fives,
}

const mutations = {
    [RESET_BOARD](state) {
        state.board = getBoard()
        state.steps = []
    },
    [SET_BOARD](state, board) {
        state.board = board
    },
    [SET_STEPS](state, steps) {
        state.steps = steps
    },
    [SET_FIVES](state, fives) {
        state.fives = fives
    },
    [ADD_CHESSMAN](state, {position, role}) {
        let newBoard = copy(state.board)
        newBoard[position[0]][position[1]] = role
        state.board = newBoard
        const step = {
            position: position,
            role: role
        }
        state.steps.push(step)
        state.stepsTail = [] //
    },
}

const actions = {
    [RESET_BOARD]({commit}) {
        commit(RESET_BOARD)
    },
    [SET_BOARD]({commit}, board) {
        commit(SET_BOARD, board)
    },
    [SET_STEPS]({commit}, steps) {
        commit(SET_STEPS, steps)
    },
    [SET_FIVES]({commit}, fives) {
        commit(SET_FIVES, fives)
    },
    [ADD_CHESSMAN]({commit}, c) {
        commit(ADD_CHESSMAN, c)
    },
}

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}
