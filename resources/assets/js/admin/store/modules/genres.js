
const alertify = require('alertify.js');

const module = {
    state: {
        data: [],
        button_loading: false,
        spinner_loading_genres: true,
    },
    actions: {

        /**
         * Get all channels
         *
         * @param {*} commit object
         * @param id int id
         */
        GET_ALL_GENRES({commit}) {
            axios.get('/api/admin/get/genres').then(response => {
                if(response.status === 200){
                    commit('SET_GENRE', response.data.data);
                    commit('SPINER_CLEAN_GENRE');
                }
            });
        },

        /**
         * Delete channels
         *
         * @param {*} id  uuid
         * @param {*} key int
         */
        DELETE_GENRE({commit}, {id, key}) {
            axios.delete('/api/admin/delete/genres/' + id).then(response => {
                if (response.status === 200) {
                    alertify.logPosition('top right');
                    alertify.success('Successful Delete');
                    commit('DELETE_GENRE', key);
                }
            },error => {
                alertify.logPosition('top right');
                alertify.error(error.response.data.message);
            });
        },


    },
    mutations: {

        SET_GENRE(state, data) {
            state.data = data;
        },

        DELETE_GENRE(state, key) {
            state.data.splice(key, 1);
        },


        BUTTON_LOAD(state, data) {
            state.button_loading = data;
        },

        BUTTON_CLEAN(state) {
            state.button_loading = false;
        },


        SPINER_CLEAN_GENRE(state) {
            state.spinner_loading_genres = false;
        }
    },
    getters: {}
};
export default module;