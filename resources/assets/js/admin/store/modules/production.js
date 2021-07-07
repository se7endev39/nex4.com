const alertify = require('alertify.js');
const module = {
    state: {
        ListProduction: [],
        ProductionManagementLoading: true,
    },
    actions: {

        /**
         * Get all production
         *
         * @param {*} commit object
         * @param id int id
         */
        LIST_PRODUCTION({ commit }, kind) {
            commit('PRODUCTION_MANAGE_LOADING', true);
            axios.get('/api/admin/get/production').then(response => {
                if (response.status === 200) {
                    commit('SET_LIST_PRODUCTION', response.data.ListProduction);
                    commit('PRODUCTION_MANAGE_LOADING', false);
                }
            });
        },


        /**
         * Delete production
         *
         * @param {*} id  uuid
         * @param {*} key int
         */
        DELETE_PRODUCTION({ commit }, { id, key }) {
            commit('BUTTON_LOAD', id);
            axios.delete('/api/admin/delete/production/' + id).then(response => {
                if (response.status === 200) {
                    alertify.logPosition('top right');
                    alertify.success('Successful Delete');
                    commit('DELETE_PRODUCTION', key);
                }
            }, error => {
                alertify.logPosition('top right');
                alertify.error(error.response.data.message);
            });
        },

    },
    mutations: {

        SET_LIST_PRODUCTION(state, data) {
            state.ListProduction = data;
        },

        DELETE_PRODUCTION(state, key) {
            state.ListProduction.splice(key, 1);
        },


        PRODUCTION_MANAGE_LOADING(state, data) {
            state.ProductionManagementLoading = data;
        },


    },
    getters: {}
};
export default module;
