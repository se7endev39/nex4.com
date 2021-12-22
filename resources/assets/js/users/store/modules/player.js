const module = {
    state: {
        tv_data: [],
        series_data: [],
        movie_data: [],
        player_spinner: true
    },
    actions: {
        LOAD_MOVIE_PLAYER({ commit }, id) {
            commit('SPINER_LOAD')
            axios.post('/api/v1/get/watch/movie', {
                movie_id: id
            }).then(response => {
                if (response.status === 200) {
                    commit('SET_MOVIE', {
                        data: response.data.data
                    });
                    commit('SPINER_CLEAN')
                }
            }, error => {
                // Show Sweetalert if there is problem
                swal({
                    icon: 'error',
                    title: 'There was a problem playing the video, we will fix it soon',
                    dangerMode: true,
                    button: 'Back',
                }).then(() => {
                    window.history.back();
                });
            });
        },

        LOAD_SERIES_PLAYER({ commit }, { episode_id, series_id }) {
            axios.post('/api/v1/get/watch/series', {
                episode_id: episode_id,
                series_id: series_id
            })
                .then(response => {
                    if (response.data.status === 'success') {
                        commit('SET_SERIES', {
                            data: response.data.data
                        });
                        commit('SPINER_CLEAN')
                    }
                }, error => {
                    swal({
                        icon: 'error',
                        title: 'There was a problem playing the video, we will fix it soon',
                        dangerMode: true,
                        button: 'Back',
                    }).then(() => {
                        window.history.back();
                        videojs.dispose();
                    });
                });
        },

        GHOST_LOAD_MOVIE_PLAYER({ commit }, id) {
            commit('SPINER_LOAD')
            axios.post('/api/v1/ghost/get/watch/movie', {
                movie_id: id
            }).then(response => {
                if (response.status === 200) {
                    commit('SET_MOVIE', {
                        data: response.data.data
                    });
                    commit('SPINER_CLEAN')
                }
            }, error => {
                // Show Sweetalert if there is problem
                swal({
                    icon: 'error',
                    title: 'There was a problem playing the video, we will fix it soon',
                    dangerMode: true,
                    button: 'Back',
                }).then(() => {
                    window.history.back();
                });
            });
        },

        GHOST_LOAD_SERIES_PLAYER({ commit }, { episode_id, series_id }) {
            axios.post('/api/v1/ghost/get/watch/series', {
                episode_id: episode_id,
                series_id: series_id
            })
                .then(response => {
                    if (response.data.status === 'success') {
                        commit('SET_SERIES', {
                            data: response.data.data
                        });
                        commit('SPINER_CLEAN')
                    }
                }, error => {
                    swal({
                        icon: 'error',
                        title: 'There was a problem playing the video, we will fix it soon',
                        dangerMode: true,
                        button: 'Back',
                    }).then(() => {
                        window.history.back();
                        videojs.dispose();
                    });
                });
        },

        LOAD_LIVE_TV({ commit }, id) {
            commit('SPINER_LOAD')
            axios.get('/api/v1/get/watch/tv/' + id)
                .then((res) => {
                    commit('SET_DATA_PLAYER_TV', res.data.data);
                    commit('SPINER_CLEAN')
                }, error => {
                    swal({
                        icon: 'error',
                        title: 'There was a problem playing the video, we will fix it soon',
                        dangerMode: true,
                        button: 'Back',
                    }).then(() => {
                        window.history.back();
                    });
                });
        },
    },
    mutations: {

        SET_MOVIE(state, data) {
            state.movie_data = data.data;
        },

        SET_SERIES(state, data) {
            state.series_data = data.data

        },

        SET_DATA_PLAYER_TV(state, data) {
            state.tv_data = data;
        },

        SET_DATA_PLAYER_NEWS(state, data) {
            state.news_data = data;
        },

        CLOSE_REPORT(state) {
            state.show_report = false;
        },

        SPINER_LOAD(state) {
            state.player_spinner = true;
        },

        SPINER_CLEAN(state) {
            state.player_spinner = false;
        }
    }
};
export default module;
