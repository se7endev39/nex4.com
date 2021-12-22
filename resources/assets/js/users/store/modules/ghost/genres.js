
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
            axios.get('/api/v1/ghost/get/genres').then(response => {
                if(response.status === 200){
                    commit('SET_GENRE', response.data.data);
                    commit('SPINER_CLEAN_GENRE');
                }
            });
        },


    },
    mutations: {

        SET_GENRE(state, data) {
            state.data = data;
        },

        SPINER_CLEAN_GENRE(state) {
            state.spinner_loading_genres = false;
        }
    },
    getters: {}
};
export default module;
