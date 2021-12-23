import Vue from 'vue';
import router from '../../../packages/Routes';

const module = {
    state: {
        data: [],
        loading: false,
    },
    actions: {

        // This function get cast details and cast  filmography
        /**
         * Get cast details and cast filmography
         * 
         * @param {*} commit object 
         * @param {*} id cast id 
         */
        GET_GHOST_CAST_DETAILS({ commit }, id) {
            // Start spinner load 
            commit('SPINER_CAST_LOAD');

            // Send request 
            axios.get('/api/v1/ghost/get/cast/' + id).then(response => {
                if (response.status === 200) {
                    commit('SET_CAST_DETAILS', response.data.data);
                    commit('SPINER_CAST_CLEAN');
                }

            }, error => {
                if (error.response.status === 404) {
                    router.push({ name: '404' });
                } else {
                    router.push('/');
                }
            });
        },
    },
    mutations: {
        SET_CAST_DETAILS(state, data) {
            state.data = data;
        },

        SPINER_CAST_LOAD(state) {
            state.loading = true;
        },

        SPINER_CAST_CLEAN(state) {
            state.loading = false;
        }
    },
    getters: {}
};
export default module;