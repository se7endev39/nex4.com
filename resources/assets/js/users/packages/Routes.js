import VueRouter from 'vue-router';

let routes = [
    {
        name: 'login',
        path: '/login',
        component: () => import('../views/default/auth/login'),
        meta: {
            userNotAuth: true,
            title: 'Login'
        }
    },

    {
        name: 'plan',
        path: '/signup/plan',
        component: () => import('../views/default/auth/plan'),
        meta: {
            userNotAuth: true,
            title: 'Subscriber Plan'
        }
    },
    {
        name: 'signup',
        path: '/signup',
        component: () => import('../views/default/auth/register'),
        meta: {
            userNotAuth: true,
            title: 'Signup'
        }
    },
    {
        name: 'forget_password',
        path: '/forget',
        component: () => import('../views/default/auth/forget-password'),
        meta: {
            userNotAuth: true,
            title: 'Forget Password'
        }
    },

    {
        name: 'forget_change',
        path: '/forget/rest/:code',
        component: () => import('../views/default/auth/forget-rest'),
        meta: {
            userNotAuth: true,
            title: 'Forget Password'

        }
    },

    {
        name: 'privacy',
        path: '/privacy',
        component: () => import('../views/default/control/footer/privacy'),
        meta: {
            allAuth: true,
            title: 'Privacy'
        }
    },
    {
        name: 'terms',
        path: '/terms',
        component: () => import('../views/default/control/footer/terms'),
        meta: {
            allAuth: true,
            title: 'Terms'
        }
    },
    {
        name: 'contact-us',
        path: '/contact-us',
        component: () => import('../views/default/control/footer/contact-us'),
        meta: {
            allAuth: true,
            name: 'Contact Us',
        }
    },
    {
        name: 'about-us',
        path: '/about-us',
        component: () => import('../views/default/control/footer/about-us'),
        meta: {
            allAuth: true,
            title: 'About Us',
        }
    },



    {
        name: 'payment',
        path: '/signup/payment',
        component: () => import('../views/default/auth/payment'),
        meta: {
            userPaymentAuth: true,
            title: 'Payment'
        }
    },
    {
        name: 'signup-non-payment',
        path: '/signup',
        component: () => import('../views/default/auth/register-non-payment.vue'),
        meta: {
            userNotAuth: true,
            title: 'Signup'
        }
    },

    {
        name: '404',
        path: '/404',
        component: () => import('../views/default/errors/404'),
        meta: {
            title: 'Not Found',
        }
    },



    {
        name: 'discover',
        path: '/',
        component: () => import('../views/default/control/home'),
        meta: {
            allAuth: true,
            title: 'Discover'
        },
    },

    {
        name: 'movies',
        path: '/movies',
        component: () => import('../views/default/control/movie/movies'),
        meta: {
            allAuth: true,
            title: 'Movies'
        },
    },
    {
        name: 'show-movie',
        path: '/show/:id',
        component: () => import('../views/default/control/movie/show'),
        meta: {
            allAuth: true,
            metaTags: [
                {
                    name: 'description',
                    content: 'The about page of our example app.'
                }
            ]
        }
    },
    {
        name: 'series',
        path: '/series',
        component: () => import('../views/default/control/series/series'),
        meta: {
            allAuth: true,
            title: 'Tv Show'
        },
    },

    {
        name: 'show-series',
        path: '/series/show/:id',
        component: () => import('../views/default/control/series/show'),
        meta: {
            allAuth: true,
            title: 'Show Series',
            metaTags: [
                {
                    name: 'description',
                    content: 'The about page of our example app.'
                }
            ]
        },

    },
    {
        name: 'kids',
        path: '/kids',
        component: () => import('../views/default/control/kids/kids'),
        meta: {
            allAuth: true,
            title: 'Kids'
        },
    },
    {
        name: 'manga',
        path: '/manga',
        component: () => import('../views/default/control/manga/index'),
        meta: {
            allAuth: true,
            title: 'Manga'
        },
    },
    {
        name: 'show-manga',
        path: '/show/manga/:id',
        component: () => import('../views/default/control/manga/show'),
        meta: {
            allAuth: true,
            title: 'Manga'
        },
    },
    {
        name: 'show-chapter',
        path: '/show/manga/:id/chapter/:chapter_id',
        component: () => import('../views/default/control/manga/chapters/index'),
        meta: {
            userAuth: true,
            title: 'Manga'
        },
    },
    {
        name: 'ghost-show-chapter',
        path: '/g/show/manga/:id/chapter/:chapter_id',
        component: () => import('../views/default/control/manga/chapters/index'),
        meta: {
            allAuth: true,
            title: 'Manga'
        },
    },
    {
        name: 'channels',
        path: '/channels',
        component: () => import('../views/default/control/channels/channels'),
        meta: {
            allAuth: true,
            title: 'Live Tv'
        }
    },
    {
        name: 'collection',
        path: '/collection/:id',
        component: () => import('../views/default/control/collection/index.vue'),
        meta: {
            userAuth: true,
            title: 'My Collections'
        },
    },

    {
        name: 'series-player',
        path: '/watch/series/:series_id',
        component: () => import('../views/default/control/video-player/series-player'),
        meta: {
            userAuth: true,
            title: 'Series Player'
        }
    },
    {
        name: 'series-player-sp',
        path: '/watch/series/:series_id/:episode_id',
        component: () => import('../views/default/control/video-player/series-player'),
        meta: {
            userAuth: true,
            title: 'Series Player'
        }
    },

    {
        name: 'movie-player',
        path: '/watch/movie/:id',
        component: () => import('../views/default/control/video-player/movie-player'),
        meta: {
            userAuth: true,
            title: 'Movie Player'

        }
    },

    {
        name: 'tv-player',
        path: '/watch/tv/:id',
        component: () => import('../views/default/control/video-player/tv-player'),
        meta: {
            userAuth: true,
            title: 'Tv Player'
        }
    },

    {
        name: 'ghost-movie-player',
        path: '/g/watch/movie/:id',
        component: () => import('../views/default/control/video-player/ghost/movie-player'),
        meta: {
            userAuth: false,
            title: 'Movie Player'

        }
    },
    {
        name: 'ghost-series-player',
        path: '/g/watch/series/:series_id',
        component: () => import('../views/default/control/video-player/ghost/series-player'),
        meta: {
            userAuth: false,
            title: 'Series Player'
        }
    },
    {
        name: 'ghost-series-player-sp',
        path: '/g/watch/series/:series_id/:episode_id',
        component: () => import('../views/default/control/video-player/ghost/series-player'),
        meta: {
            userAuth: false,
            title: 'Series Player'
        }
    },
    {
        name: 'search',
        path: '/search',
        component: () => import('../views/default/control/search/search'),
        meta: {
            userAuth: true,
            title: 'Search'
        },
    },
    {
        name: 'cast',
        path: '/cast/:id',
        component: () => import('../views/default/control/search/cast'),
        meta: {
            userAuth: false,
            title: 'Cast'
        },
    },

    {
        name: 'profile',
        path: '/setting/public',
        component: () => import('../views/default/control/setting/profile'),
        meta: {
            userAuth: true,
            title: 'Profile'
        }
    },
    {
        name: 'security',
        path: '/setting/security',
        component: () => import('../views/default/control/setting/security'),
        meta: {
            userAuth: true,
            title: 'Security'
        }
    },

    {
        name: 'payment-update',
        path: '/setting/payment-update',
        component: () => import('../views/default/control/setting/payment-update'),
        meta: {
            userAuth: true,
            title: 'Payment Update'
        }
    },

    {
        name: 'billing-details',
        path: '/setting/billing-details',
        component: () => import('../views/default/control/setting/billing-details'),
        meta: {
            userAuth: true,
            title: 'Billing Details'
        }
    },
    {
        name: 'change-plan',
        path: '/setting/change-plan',
        component: () => import('../views/default/control/setting/change-plan'),
        meta: {
            userAuth: true,
            title: 'Change Your Plan'
        }
    },
    {
        name: 'language',
        path: '/setting/language',
        component: () => import('../views/default/control/setting/language'),
        meta: {
            userAuth: true,
            title: 'Language'
        }
    },

    {
        name: 'adjust-subtitles',
        path: '/setting/adjust-subtitles',
        component: () => import('../views/default/control/setting/adjust-subtitles'),
        meta: {
            userAuth: true,
            title: 'Adjust subtitles'
        }
    },

    {
        name: 'viewing-history',
        path: '/setting/viewing-history',
        component: () => import('../views/default/control/setting/viewing-history.vue'),
        meta: {
            userAuth: true,
            title: 'viewing History'
        }
    },

    {
        name: 'support-inbox',
        path: '/setting/support-inbox',
        component: () => import('../views/default/control/setting/support-inbox.vue'),
        meta: {
            userAuth: true,
            title: 'Support Inbox'
        }
    },

    {
        name: 'support-request',
        path: '/setting/support-request/:id',
        component: () => import('../views/default/control/setting/support-request.vue'),
        meta: {
            userAuth: true,
            title: 'Support Request'
        }
    },

    {
        name: 'device-activity',
        path: '/setting/device-activity',
        component: () => import('../views/default/control/setting/device-activity.vue'),
        meta: {
            userAuth: true,
            title: 'Device Activity'
        }
    },


];

export default new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
});
