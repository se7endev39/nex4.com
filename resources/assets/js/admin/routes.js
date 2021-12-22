import VueRouter from 'vue-router';

let routes = [
    {
        name: 'dashboard',
        path: '/',
        component: () => import('./views/dashboard')
    },
    {
        name: 'movies-manage',
        path: '/movies/manage',
        component: () => import('./views/movies/movies-manage')
    },

    {
        name: 'movie-api',
        path: '/movies/new-movie-api',
        component: () => import('./views/movies/new-movie-api.vue')
    },

    {
        name: 'movie-custom',
        path: '/movies/new-movie-custom',
        component: () => import('./views/movies/new-movie-custom.vue')
    },
    {
        path: '/movies/movie-edit/:id',
        name: 'movie_edit',
        component: () => import('./views/movies/movie-edit.vue')
    },
    {
        name: 'analysis-movie',
        path: '/movies/analysis/:id',
        component: () => import('./views/movies/analysis-movie.vue')
    },
    //manga
    {
        name: 'manga-manage',
        path: '/manga/manage',
        component: () => import('./views/manga/manage')
    },
    {
        name: 'manga-api',
        path: '/manga/new-manga-api',
        component: () => import('./views/manga/new-manga-api.vue')
    },

    {
        name: 'manga-custom',
        path: '/manga/new-manga-custom',
        component: () => import('./views/manga/new-manga-custom.vue')
    },

    {
        name: 'manga-edit',
        path: '/manga/manga-edit/:id',
        component: () => import('./views/manga/manga-edit.vue')
    },
    {
        name: 'chapters-manage',
        path: '/manga/manga-manage/chapters/:id',
        component: () => import('./views/manga/chapters-manage.vue')
    },
    {
        name: 'new-manga-chapter',
        path: '/manga/manga-manage/chapters/:id/new-manga-chapter',
        component: () => import('./views/manga/new-manga-chapter.vue')
    },
    {
        name: 'chapter-edit',
        path: '/manga/manga-manage/chapters/:id/update',
        component: () => import('./views/manga/chapter-edit.vue')
    },


    //Series
    {
        name: 'series-manage',
        path: '/series/manage',
        component: () => import('./views/series/manage')
    },
    {
        name: 'series-api',
        path: '/series/new-series-api',
        component: () => import('./views/series/new-series-api.vue')
    },

    {
        name: 'series-custom',
        path: '/series/new-series-custom',
        component: () => import('./views/series/new-series-custom.vue')
    },
    {
        name: 'series_manage_id',
        path: '/series/series-manage/:id',
        component: () => import('./views/series/series-manage.vue')
    },
    {
        name: 'new_series_episode',
        path: '/series/series-manage/:id/new-series-episode',
        component: () => import('./views/series/new-series-episode.vue')
    },

    {
        name: 'new_series_episode_custome',
        path: '/series/series-manage/:id/new-series-episode-custome',
        component: () => import('./views/series/new-series-episode-custome.vue')
    },
    {
        name: 'episode_edit',
        path: '/series/series-manage/:id/episode-edit',
        component: () => import('./views/series/episode-edit.vue')
    },

    {
        name: 'episode-ads',
        path: '/series/series-manage/:id/update-ads',
        component: () => import('./views/series/episode-ads.vue')
    },

    {
        name: 'series_edit',
        path: '/series/series-edit/:id',
        component: () => import('./views/series/series-edit.vue')
    },
    {
        name: 'analysis-series',
        path: '/series/analysis-series/:id',
        component: () => import('./views/series/analysis-series.vue')
    },
    {
        name: 'movie-ads',
        path: '/movie/movies-manage/:id/update-ads',
        component: () => import('./views/movies/movie-ads.vue')
    },
    {
        path: '/top/manage',
        name: 'top-manage',
        component: () => import('./views/tops.vue')
    },


    {
        path: '/actors/manage',
        name: 'actors-manage',
        component: () => import('./views/actors/manage.vue')
    },

    {
        path: '/report/manage',
        name: 'report-manage',
        component: () => import('./views/reports/manage.vue')
    },
    {
        path: '/report/show/:id',
        name: 'report-show',
        component: () => import('./views/reports/report.vue')
    },

    {
        path: '/profile/manage',
        name: 'profile',
        component: () => import('./views/profile/profile.vue')
    },
    {
        path: '/profile/security',
        name: 'security',
        component: () => import('./views/profile/security.vue')
    },
    {
        path: '/users/manage',
        name: 'users-manage',
        component: () => import('./views/users/manage.vue')
    },
    {
        path: '/users/edit/:id',
        name: 'edit-user',
        component: () => import('./views/users/edit.vue')
    },
    {
        path: '/users/create',
        name: 'create-user',
        component: () => import('./views/users/create.vue')
    },
    {
        path: '/tv/manage',
        name: 'tv-manage',
        component: () => import('./views/tv/manage.vue')
    },

    {
        path: '/tv/create',
        name: 'tv-create',
        component: () => import('./views/tv/create.vue')
    },

    {
        path: '/tv/edit/:id',
        name: 'tv-edit',
        component: () => import('./views/tv/edit.vue')
    },

    {
        path: '/braintree/subscribe',
        name: 'braintree-subscribe',
        component: () => import('./views/braintree/subscribe.vue')
    },


    {
        path: '/settings/users/manage',
        name: 'admins-users-manage',
        component: () => import('./views/settings/users/manage.vue')
    },
    {
        path: '/settings/users/edit/:id',
        name: 'admins-user-edit',
        component: () => import('./views/settings/users/edit.vue')
    },

    {
        path: '/settings/users/create',
        name: 'admins-user-create',
        component: () => import('./views/settings/users/create.vue')
    },

    {
        path: '/settings/appearance/themes',
        name: 'themes',
        component: () => import('./views/settings/appearance/themes.vue')
    },

    {
        path: '/settings/appearance/themes/settings',
        name: 'theme-settings',
        component: () => import('./views/settings/appearance/theme-settings.vue')
    },
    {
        path: '/settings/appearance/footer',
        name: 'footer',
        component: () => import('./views/settings/appearance/footer.vue')
    },

    {
        path: '/settings/tmdb',
        name: 'tmdb-manage',
        component: () => import('./views/settings/tmdb/manage.vue')
    },
    {
        path: '/settings/transcoder/watermark',
        name: 'transcoder-watermark',
        component: () => import('./views/settings/transcoder-video/watermark.vue')
    },


    {
        path: '/support/manage',
        name: 'support-manage',
        component: () => import('./views/support/manage.vue')
    },
    {
        path: '/support/manage/request/:id',
        name: 'support-request',
        component: () => import('./views/support/request.vue')
    },
    {
        path: '/file/manager/folder/:link',
        name: 'file-manager',
        component: () => import('./views/filemanager/root.vue')
    },

    {
        path: '/categories/manage',
        name: 'categories-manage',
        component: () => import('./views/categories/manage.vue')
    },

    {
        path: '/category/create',
        name: 'create-category',
        component: () => import('./views/categories/create.vue')
    },
    {
        path: '/category/edit/:id',
        name: 'edit-category',
        component: () => import('./views/categories/edit.vue')
    },
    {
        path: '/ads/manage',
        name: 'ads-manage',
        component: () => import('./views/ads/manage.vue')
    },

    {
        path: '/ad/create',
        name: 'create-ad',
        component: () => import('./views/ads/create.vue')
    },
    {
        path: '/ad/edit/:id',
        name: 'edit-ad',
        component: () => import('./views/ads/edit.vue')
    },

    {
        path: '/embed/manage',
        name: 'embed-management',
        component: () => import('./views/embed-management/manage.vue')
    },

    {
        path: '/embed/create',
        name: 'create-embed',
        component: () => import('./views/embed-management/create.vue')
    },
    {
        path: '/embed/edit/:id',
        name: 'edit-embed',
        component: () => import('./views/embed-management/edit.vue')
    },

    {
        path: '/manage/genre-list',
        name: 'genre-management',
        component: () => import('./views/genre-management/manage')
    },
    {
        path: '/help',
        name: 'help',
        component: () => import('./views/helper/info.vue')
    },
];

export default new VueRouter({
    routes
});

