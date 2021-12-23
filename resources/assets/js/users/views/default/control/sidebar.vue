<template>
    <div>
        <div class="sidebar">
            <div class="sidebar__log">
                <div class="background-logo">
                    <img src="/images/logo.png" alt="logo" width="100%">
                </div>
            </div>

            <div class="sidebar__list">

                <ul
                    class="list-unstyled text-center"
                    v-if="
                        $route.name === 'profile' ||
                        $route.name === 'security' ||
                        $route.name === 'payment-update' ||
                        $route.name === 'billing-details' ||
                        $route.name === 'change-plan' ||
                        $route.name === 'language' ||
                        $route.name === 'adjust-subtitles' ||
                        $route.name === 'viewing-history' ||
                        $route.name === 'support-inbox' ||
                        $route.name === 'support-request' ||
                        $route.name === 'device-activity'
                            ? true
                            : false
                    "
                >
                <div class="side_bar">
                    <li class="mt-md-4 mt-lg-4 mt-xl-4 m-xl-1">
                        <router-link :to="{ name: 'profile' }">
                            <div class="left_homepage row">
                                    <div class="row">
                                        <img
                                            src="/images/profile.png"
                                            width="25px"
                                            height="25px"
                                            alt="logo"
                                        />
                                        <p>Profile</p>
                                    </div>
                            </div>
                        </router-link>
                    </li>
                    <li class="mt-md-4 mt-lg-4 mt-xl-4 m-xl-1">
                        <router-link :to="{ name: 'security' }">
                            <div class="left_homepage row">
                                    <div class="row">
                                        <img
                                            src="/images/profile.png"
                                            width="25px"
                                            height="25px"
                                            alt="logo"
                                        />
                                        <p>Security</p>
                                    </div>
                            </div>
                        </router-link>
                    </li>
                    <li class="mt-md-4 mt-lg-4 mt-xl-4 m-xl-1">
                        <router-link :to="{ name: 'support-inbox' }">
                            <div class="left_homepage row">
                                    <div class="row">
                                        <img
                                            src="/images/inbox.png"
                                            width="25px"
                                            height="25px"
                                            alt="logo"
                                        />
                                        <p>Inbox</p>
                                    </div>
                            </div>
                        </router-link>
                    </li>
                    <li class="mt-md-4 mt-lg-4 mt-xl-4 m-xl-1">
                        <router-link :to="{ name: 'payment-update' }">
                            <div class="left_homepage row">
                                    <div class="row">
                                        <img
                                            src="/images/payment.png"
                                            width="25px"
                                            height="25px"
                                            alt="logo"
                                        />
                                        <p>Payment</p>
                                    </div>
                            </div>
                        </router-link>
                    </li>
                    <li class="mt-md-4 mt-lg-4 mt-xl-4 m-xl-1">
                        <router-link :to="{ name: 'language' }">
                            <div class="left_homepage row">
                                    <div class="row">
                                        <img
                                            src="/images/language.png"
                                            width="25px"
                                            height="25px"
                                            alt="logo"
                                        />
                                        <p>Languages</p>
                                    </div>
                            </div>
                        </router-link>
                    </li>
                    <li class="mt-md-4 mt-lg-4 mt-xl-4 m-xl-1">
                        <router-link :to="{ name: 'viewing-history' }">
                            <div class="left_homepage row">
                                    <div class="row">
                                        <img
                                            src="/images/history.png"
                                            width="25px"
                                            height="25px"
                                            alt="logo"
                                        />
                                        <p>History</p>
                                    </div>
                            </div>
                        </router-link>
                    </li>
                    <li class="mt-md-4 mt-lg-4 mt-xl-4 m-xl-1">
                        <router-link :to="{ name: 'device-activity' }">
                            <div class="left_homepage row">
                                    <div class="row">
                                        <img
                                            src="/images/activity.png"
                                            width="25px"
                                            height="25px"
                                            alt="logo"
                                        />
                                        <p>Activity</p>
                                    </div>
                            </div>
                        </router-link>
                    </li>
                    <li class="mt-md-4 mt-lg-4 mt-xl-4 m-xl-1">
                        <router-link :to="{ name: 'adjust-subtitles' }">
                            <div class="left_homepage row">
                                    <div class="row">
                                        <img
                                            src="/images/subtitle.png"
                                            width="25px"
                                            height="25px"
                                            alt="logo"
                                        />
                                        <p>Subtitle Adjust</p>
                                    </div>
                            </div>
                        </router-link>
                    </li>
                </div>
                </ul>
                <ul
                    class="list-unstyled text-center margin-left-3"
                    v-if="
                        $route.name === 'profile' ||
                        $route.name === 'security' ||
                        $route.name === 'payment-update' ||
                        $route.name === 'billing-details' ||
                        $route.name === 'change-plan' ||
                        $route.name === 'language' ||
                        $route.name === 'adjust-subtitles' ||
                        $route.name === 'viewing-history' ||
                        $route.name === 'support-inbox' ||
                        $route.name === 'support-request' ||
                        $route.name === 'device-activity'
                            ? false
                            : true
                    "
                >
                    <li class="mt-md-4 mt-lg-4 mt-xl-4 m-xl-1">
                        <router-link :to="{ name: 'discover' }">
                            <div class="left_homepage row">
                                    <div class="row">
                                        <img
                                            src="/images/home_side.png"
                                            width="25px"
                                            height="25px"
                                            alt="logo"
                                        />
                                        <p>On Demand</p>
                                    </div>
                            </div>
                        </router-link>
                    </li>
                    <li class="mt-md-4 mt-lg-4 mt-xl-4 m-xl-1">
                        <router-link :to="{ name: 'movies' }">
                            <div class="left_homepage row">
                                    <div class="row">
                                        <img
                                            src="/images/film-roll.png"
                                            width="25px"
                                            height="25px"
                                            alt="logo"
                                        />
                                        <p>Movies</p>
                                    </div>
                            </div>
                        </router-link>
                    </li>
                    <li class="mt-md-4 mt-lg-4 mt-xl-4 m-xl-1">
                        <router-link :to="{ name: 'series' }">
                            <div class="left_homepage row">
                                    <div class="row">
                                        <img
                                            src="/images/spotlight.png"
                                            width="25px"
                                            height="25px"
                                            alt="logo"
                                        />
                                        <p>Shows</p>
                                    </div>
                            </div>
                        </router-link>
                    </li>
                    <li class="mt-md-4 mt-lg-4 mt-xl-4 m-xl-1">
                        <router-link :to="{ name: 'kids' }">
                            <div class="left_homepage row">
                                    <div class="row">
                                        <img
                                            src="/images/clown.png"
                                            width="25px"
                                            height="25px"
                                            alt="logo"
                                        />
                                        <p>Kids</p>
                                    </div>
                            </div>
                        </router-link>
                    </li>
                    <li class="mt-md-4 mt-lg-4 mt-xl-4 m-xl-1">
                        <router-link :to="{ name: 'channels' }">
                            <div class="left_homepage row">
                                    <div class="row">
                                        <img
                                            src="/images/tv.png"
                                            width="25px"
                                            height="25px"
                                            alt="logo"
                                        />
                                        <p>Live TV</p>
                                    </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    data() {
        return {
            isAuth: null,
            search_query: "",
            email_confirmed: false,
            username: "",
            active_login: false,
            active: null,
            activeMenu: null,
            activeGenre: 0,
            activeTrending: 1,
            show_phone_meuu: false,
            show_profile_dropdown: ""
        };
    },
    computed: mapState({
        collections: state => state.collections.collections
    }),
    watch: {
        search_query(val) {
            if (val !== "") {
                this.$router.push({
                    name: "search",
                    params: {
                        search: val
                    }
                });
            }
        }
    },
    methods: {
        SORT_BY(type, trending, genre) {
            this.activeGenre = genre;
            this.activeMenu = this.$route.name;
            this.$parent.SORT_BY(type, this.$parent.activeTrending, genre);
        },

        SHOW_PHONE_MENU() {
            this.show_phone_meuu = !this.show_phone_meuu;
        },

        GO_TO_COLLECTION(id) {
            this.show_phone_meuu = false;
            this.$router.push({
                name: "collection",
                params: {
                    id: id
                }
            });
        },

        LOGOUT() {
            this.$store.dispatch("LOGOUT_AUTH");
        }
    }
};
</script>
