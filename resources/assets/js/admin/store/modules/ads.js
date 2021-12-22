
const alertify = require('alertify.js');

const module = {
    state: {
        data: [],
        button_loading: false,
        spinner_loading: false,
    },
    actions: {

        /**
         * Get all channels
         *
         * @param {*} commit object
         * @param id int id
         */
        GET_ALL_ADS({commit}, kind) {
            commit('SPINER_LOAD');
            axios.get('/api/admin/get/ads').then(response => {
                if(response.status === 200){
                    commit('SET_ADS', response.data.data);
                    commit('SPINER_CLEAN');
                }
            });
        },

        /**
         * Delete channels
         *
         * @param {*} id  uuid
         * @param {*} key int
         */
        DELETE_AD({commit}, {id, key}) {
            commit('BUTTON_LOAD', id);
            axios.delete('/api/admin/delete/ads/' + id).then(response => {
                if (response.status === 200) {
                    alertify.logPosition('top right');
                    alertify.success('Successful Delete');
                    commit('DELETE_AD', key);
                    commit('BUTTON_CLEAN');
                }
            },error => {
                alertify.logPosition('top right');
                alertify.error(error.response.data.message);
                commit('BUTTON_CLEAN');
            });
        },


    },
    mutations: {

        SET_ADS(state, data) {
            state.data = data;
        },

        DELETE_AD(state, key) {
            state.data.ads.splice(key, 1);
        },


        BUTTON_LOAD(state, data) {
            state.button_loading = data;
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