import VueRouter from 'vue-router';

let themeName = document.body.firstElementChild.className;
console.log(themeName)
let routes = [



    {
        name: 'login',
        path: '/login',
        component: require('../views/' + themeName + '/auth/login'),
        meta: {
            userNotAuth: true,
            title: 'Login'
        }
    },

    {
        name: 'plan',
        path: '/signup/plan',
        component: require('../views/' + themeName + '/auth/plan'),
        meta: {
            userNotAuth: true,
            title: 'Subscriber Plan'
        }
    },
    {
        name: 'signup',
        path: '/signup',
        component: require('../views/' + themeName + '/auth/register'),
        meta: {
            userNotAuth: true,
            title: 'Signup'
        }
    },
    {
        name: 'forget_password',
        path: '/forget',
        component: require('../views/' + themeName + '/auth/forget-password'),
        meta: {
            userNotAuth: true,
            title: 'Forget Password'
        }
    },

    {
        name: 'forget_change',
        path: '/forget/rest/:code',
        component: require('../views/' + themeName + '/auth/forget-rest'),
        meta: {
            userNotAuth: true,
            title: 'Forget Password'

        }
    },

    {
        name: 'privacy',
        path: '/privacy',
        component: require('../views/' + themeName + '/control/footer/privacy'),
        meta: {
            allAuth: true,
            title: 'Privacy'
        }
    },
    {
        name: 'terms',
        path: '/terms',
        component: require('../views/' + themeName + '/control/footer/terms'),
        meta: {
            allAuth: true,
            title: 'Terms'
        }
    },
    {
        name: 'contact-us',
        path: '/contact-us',
        component: require('../views/' + themeName + '/control/footer/contact-us'),
        meta: {
            allAuth: true,
            name: 'Contact Us',
        }
    },
    {
        name: 'about-us',
        path: '/about-us',
        component: require('../views/' + themeName + '/control/footer/about-us'),
        meta: {
            allAuth: true,
            title: 'About Us',
        }
    },



    {
        name: 'payment',
        path: '/signup/payment',
        component: require('../views/' + themeName + '/auth/payment'),
        meta: {
            userPaymentAuth: true,
            title: 'Payment'
        }
    },
    {
        name: 'signup-non-payment',
        path: '/signup',
        component: require('../views/' + themeName + '/auth/register-non-payment.vue'),
        meta: {
            userNotAuth: true,
            title: 'Signup'
        }
    },

    {
        name: '404',
        path: '/404',
        component: require('../views/' + themeName + '/errors/404'),
        meta: {
            title: 'Not Found',
        }
    },



    {
        name: 'discover',
        path: '/',
        component: require('../views/' + themeName + '/control/home'),
        meta: {
            allAuth: true,
            title: 'Discover'
        },
    },

    {
        name: 'movies',
        path: '/movies',
        component: require('../views/' + themeName + '/control/movie/movies'),
        meta: {
            allAuth: true,
            title: 'Movies'
        },
    },
    {
        name: 'show-movie',
        path: '/show/:id',
        component: require('../views/' + themeName + '/control/movie/show'),
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
        component: require('../views/' + themeName + '/control/series/series'),
        meta: {
            allAuth: true,
            title: 'Tv Show'
        },
    },

    {
        name: 'show-series',
        path: '/series/show/:id',
        component: require('../views/' + themeName + '/control/series/show'),
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
        component: require('../views/' + themeName + '/control/kids/kids'),
        meta: {
            allAuth: true,
            title: 'Kids'
        },
    },
    {
        name: 'channels',
        path: '/channels',
        component: require('../views/' + themeName + '/control/channels/channels'),
        meta: {
            allAuth: true,
            title: 'Live Tv'
        }
    },
    {
        name: 'collection',
        path: '/collection/:id',
        component: require('../views/' + themeName + '/control/collection/index.vue'),
        meta: {
            userAuth: true,
            title: 'My Collections'
        },
    },

    {
        name: 'series-player',
        path: '/watch/series/:series_id',
        component: require('../views/' + themeName + '/control/video-player/series-player'),
        meta: {
            userAuth: true,
            title: 'Series Player'
        }
    },
    {
        name: 'series-player-sp',
        path: '/watch/series/:series_id/:episode_id',
        component: require('../views/' + themeName + '/control/video-player/series-player'),
        meta: {
            userAuth: true,
            title: 'Series Player'
        }
    },
    {
        name: 'movie-player',
        path: '/watch/movie/:id',
        component: require('../views/' + themeName + '/control/video-player/movie-player'),
        meta: {
            userAuth: true,
            title: 'Movie Player'

        }
    },


    {
        name: 'tv-player',
        path: '/watch/tv/:id',
        component: require('../views/' + themeName + '/control/video-player/tv-player'),
        meta: {
            userAuth: true,
            title: 'Tv Player'
        }
    },
    {
        name: 'search',
        path: '/search',
        component: require('../views/' + themeName + '/control/search/search'),
        meta: {
            userAuth: true,
            title: 'Search'
        },
    },
    {
        name: 'cast',
        path: '/cast/:id',
        component: require('../views/' + themeName + '/control/search/cast'),
        meta: {
            userAuth: true,
            title: 'Cast'
        },
    },

    {
        name: 'profile',
        path: '/setting/public',
        component: require('../views/' + themeName + '/control/setting/profile'),
        meta: {
            userAuth: true,
            title: 'Profile'
        }
    },
    {
        name: 'security',
        path: '/setting/security',
        component: require('../views/' + themeName + '/control/setting/security'),
        meta: {
            userAuth: true,
            title: 'Security'
        }
    },

    {
        name: 'payment-update',
        path: '/setting/payment-update',
        component: require('../views/' + themeName + '/control/setting/payment-update'),
        meta: {
            userAuth: true,
            title: 'Payment Update'
        }
    },

    {
        name: 'billing-details',
        path: '/setting/billing-details',
        component: require('../views/' + themeName + '/control/setting/billing-details'),
        meta: {
            userAuth: true,
            title: 'Billing Details'
        }
    },
    {
        name: 'change-plan',
        path: '/setting/change-plan',
        component: require('../views/' + themeName + '/control/setting/change-plan'),
        meta: {
            userAuth: true,
            title: 'Change Your Plan'
        }
    },
    {
        name: 'language',
        path: '/setting/language',
        component: require('../views/' + themeName + '/control/setting/language'),
        meta: {
            userAuth: true,
            title: 'Language'
        }
    },

    {
        name: 'adjust-subtitles',
        path: '/setting/adjust-subtitles',
        component: require('../views/' + themeName + '/control/setting/adjust-subtitles'),
        meta: {
            userAuth: true,
            title: 'Adjust subtitles'
        }
    },

    {
        name: 'viewing-history',
        path: '/setting/viewing-history',
        component: require('../views/' + themeName + '/control/setting/viewing-history.vue'),
        meta: {
            userAuth: true,
            title: 'viewing History'
        }
    },

    {
        name: 'support-inbox',
        path: '/setting/support-inbox',
        component: require('../views/' + themeName + '/control/setting/support-inbox.vue'),
        meta: {
            userAuth: true,
            title: 'Support Inbox'
        }
    },

    {
        name: 'support-request',
        path: '/setting/support-request/:id',
        component: require('../views/' + themeName + '/control/setting/support-request.vue'),
        meta: {
            userAuth: true,
            title: 'Support Request'
        }
    },

    {
        name: 'device-activity',
        path: '/setting/device-activity',
        component: require('../views/' + themeName + '/control/setting/device-activity.vue'),
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
            return {x: 0, y: 0};
        }
    }
});
