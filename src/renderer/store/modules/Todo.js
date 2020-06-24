import uuid from 'uuid/v4';

const state = {
    todos: []
};

const actions = {
    ADD_TODO({ commit }, name) {
        console.log(name);
        commit('ADD_TODO', name);
    },
    DELETE_TODO({ commit }, id) {
        commit('DELETE_TODO', id);
    }
};

const mutations = {
    ADD_TODO(state, name) {
        state.todos = [...state.todos, { id: uuid(), name }];
    },
    DELETE_TODO(state, id) {
        state.todos = state.todos.filter((todo) => todo.id != id);
    }
};

export default {
    state,
    actions,
    mutations
};