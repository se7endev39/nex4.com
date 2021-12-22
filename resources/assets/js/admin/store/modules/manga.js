
const alertify = require('alertify.js');

const module = {
    state: {
        data: [],
        chapters_data: [],
        data_search: {},
        button_loading: false,
        spinner_loading: false,
        button_delete_loading: false
    },
    actions: {

        GET_ALL_MANGA({ commit }) {
            commit('SPINER_LOAD');
            axios.get('/api/admin/get/manga').then(response => {
                // if status code 200
                if (response.status === 200) {
                    commit('SET_MANGA', response.data.data);
                    commit('SPINER_CLEAN');
                }
            });
        },

        GET_MANGA({ commit }, id) {
            commit('SPINER_LOAD');
            axios.get('/api/admin/get/manga/' + id).then(response => {
                // if status code 200
                if (response.status === 200) {
                    commit('SET_MANGA', response.data.data);
                    commit('SPINER_CLEAN');
                }
            });
        },

        GET_MANGA_PAGINATION({ commit }, path_url) {
            commit('SPINER_LOAD');
            axios.get(path_url).then(response => {
                // if status code 200
                if (response.status === 200) {
                    commit('SET_MANGA', response.data.data);
                    commit('SPINER_CLEAN');
                }
            });
        },

        DELETE_MANGA({ commit }, { id, key }) {
            commit('BUTTON_LOAD', id);
            axios.delete('/api/admin/delete/manga/' + id).then(response => {
                if (response.status === 200) {
                    alertify.logPosition('top right');
                    alertify.success('Successful Delete');
                    commit('DELETE_MANGA', key);
                    commit('BUTTON_CLEAN');
                }
            }, error => {
                alertify.logPosition('top right');
                alertify.error(error.response.data.message);
                commit('BUTTON_CLEAN');
            });
        },
        GET_MANGA_SEARCH({ commit }, query) {
            commit('SPINER_LOAD');
            axios.post('/api/admin/get/manga/search', { query: query }).then(response => {
                // if status code 200
                if (response.status === 200) {
                    commit('SET_SEARCH_MANGA', response.data.data);
                    commit('SPINER_CLEAN');
                }
            });
        },
        GET_ALL_CHAPTERS({ commit }, id) {
            commit('SPINER_LOAD');
            axios.get('/api/admin/get/manga/chapters/' + id).then(response => {
                if (response.status === 200) {
                    commit('SET_MANGA', response.data.data);
                    commit('SPINER_CLEAN');
                }
            });
        },

        GET_MANGA_INFO({ commit }, id) {
            commit('SPINER_LOAD');
            axios.get('/api/admin/get/manga/info/' + id).then(response => {
                if (response.status === 200) {
                    commit('SET_MANGA', response.data.data);
                    commit('SPINER_CLEAN');
                }
            });
        },

        GET_CHAPTER_DETAILS({ commit }, id) {
            commit('SPINER_LOAD');
            axios.get('/api/admin/get/manga/chapters/edit/' + id).then(response => {
                if (response.status === 200) {
                    commit('SET_CHAPTER', response.data.data);
                    commit('SPINER_CLEAN');
                }
            }, error => {
                alertify.logPosition('top right');
                alertify.error(error.response.data.message);
            });
        },


        DELETE_CHAPTERS({ commit }, { id, list }) {
            commit('BUTTON_LOAD_DELETE', true);
            axios.post('/api/admin/update/manga/chapters/' + id + '/delete', { list: list }).then(response => {
                if (response.status === 200) {
                    alertify.logPosition('top right');
                    alertify.success('Successful Delete');
                    commit('DELETE_CHAPTER', list);
                    commit('BUTTON_LOAD_DELETE', false);
                }
            }, error => {
                alertify.logPosition('top right');
                alertify.error(error.response.data.message);
                commit('BUTTON_LOAD_DELETE', false);
            });
        },
    },

    mutations: {

        SET_MANGA(state, data) {
            state.data = data;
        },

        SET_CHAPTER(state, data) {
            state.chapter_data = data;
        },

        SET_SEARCH_MANGA(state, data) {
            state.data_search = data;
        },

        CLEAN_SEARCH_MANGA(state) {
            state.data_search = {};
        },

        DELETE_MANGA(state, key) {
            state.data.manga.data.splice(key, 1);
        },
        DELETE_CHAPTER(state, list) {
            for (let i = 0; i < list.length; i++) {
                state.data.chapters.data.splice(list[i].key, 1);
            }
        },

        BUTTON_LOAD(state, data) {
            state.button_loading = data;
        },

        BUTTON_DELETE_LOADING(state, data) {
            state.button_delete_loading = data;
        },

        BUTTON_CLEAN(state) {
            state.button_loading = false;
        },

        SPINER_LOAD(state) {
            state.spinner_loading = true;
        },

        SPINER_CLEAN(state) {
            state.spinner_loading = false;
        }
    },
    getters: {}
};
export default module;
