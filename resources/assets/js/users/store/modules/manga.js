const module = {
    state: {
        data: [],
        chapter_data: null,
        show: null,
        loading: false,
        one_chapter_loading: false
    },
    actions: {
        GET_MANGA_LIST({ commit }) {
            commit('SPINER_LOAD_MANGA');
            axios.get('/api/v1/get/manga').then(response => {
                if (response.status === 200) {
                    const data = response.data.data;
                    commit('SET_MANGA_LIST', data);
                    commit('SPINER_CLEAN_MANGA');
                }
            });
        },
        GET_MANGA_DETAILS({
            commit
        }, id) {
            commit('SPINER_LOAD_MANGA');
            axios.get('/api/v1/ghost/get/manga/' + id).then((response) => {
                if (response.status === 200) {
                    commit('SET_MANGA_SHOW', response.data.data);
                    commit('SPINER_CLEAN_MANGA');

                }
            }, error => {
                if (error.response.status === 404) {
                    router.push({ name: '404' });
                } else {
                    router.push('/');
                }
                commit('SPINER_CLEAN_MANGA');
            });
        },
        GET_CHAPTER({
            commit
        }, { manga_id, chapter_id }) {
            commit('SPINER_LOAD_MANGA');

            axios.get('/api/v1/get/manga/' + manga_id + '/chapter/' + chapter_id).then((response) => {
                if (response.status === 200) {
                    commit('SET_CHAPTER_SHOW', response.data.data);
                }
                commit('SPINER_CLEAN_MANGA');

            }, error => {
                if (error.response.status === 404) {
                    router.push({ name: '404' });
                } else {
                    router.push('/');
                }
                commit('SPINER_CLEAN_MANGA');
            });
        },
        GET_ONE_CHAPTER({
            commit
        }, { manga_id, chapter_id }) {
            commit('SPINER_LOAD_ONE_CHAPTER', true);

            axios.get('/api/v1/get/manga/' + manga_id + '/chapter/one/' + chapter_id).then((response) => {
                if (response.status === 200) {
                    commit('SET_CHAPTER_UPDATE', response.data.data);
                    commit('SPINER_LOAD_ONE_CHAPTER', false);

                }
            }, error => {
                if (error.response.status === 404) {
                    router.push({ name: '404' });
                } else {
                    router.push('/');
                }
                commit('SPINER_LOAD_ONE_CHAPTER', false);

            });
        },
        GHOST_GET_CHAPTER({
            commit
        }, { manga_id, chapter_id }) {
            commit('SPINER_LOAD_MANGA');

            axios.get('/api/v1/ghost/get/manga/' + manga_id + '/chapter/' + chapter_id).then((response) => {
                if (response.status === 200) {
                    commit('SET_CHAPTER_SHOW', response.data.data);
                }
                commit('SPINER_CLEAN_MANGA');

            }, error => {
                if (error.response.status === 404) {
                    router.push({ name: '404' });
                } else {
                    router.push('/');
                }
                commit('SPINER_CLEAN_MANGA');
            });
        },
        GHOST_GET_ONE_CHAPTER({
            commit
        }, { manga_id, chapter_id }) {
            commit('SPINER_LOAD_ONE_CHAPTER', true);

            axios.get('/api/v1/ghost/get/manga/' + manga_id + '/chapter/one/' + chapter_id).then((response) => {
                if (response.status === 200) {
                    commit('SET_CHAPTER_UPDATE', response.data.data);
                    commit('SPINER_LOAD_ONE_CHAPTER', false);

                }
            }, error => {
                if (error.response.status === 404) {
                    router.push({ name: '404' });
                } else {
                    router.push('/');
                }
                commit('SPINER_LOAD_ONE_CHAPTER', false);

            });
        },
    },
    mutations: {
        SET_MANGA_LIST(state, data) {
            state.data = data;
        },


        SPINER_LOAD_MANGA(state) {
            state.loading = true;
        },

        CLEAR_MANGA_SHOW_DATA(state) {
            state.show = null;
        },

        SET_MANGA_SHOW(state, data) {
            state.show = data;
        },
        SET_CHAPTER_SHOW(state, data) {
            state.chapter_data = data;
        },
        SET_CHAPTER_UPDATE(state, data) {
            state.chapter_data.current = data.current;
        },

        CLEAR_MANGA_CHAPTER_DATA(state) {
            state.chapter_data = null;
        },

        SPINER_CLEAN_MANGA(state) {
            state.loading = false;
        },
        SPINER_LOAD_ONE_CHAPTER(state, status) {
            state.one_chapter_loading = status;
        }
    },
    getters: {}
};
export default module;