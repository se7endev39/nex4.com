<template>
    <div class="register">
        <div class="background-image">
            <div class="background-color"></div>
        </div>

        <div class="background-logo">
            <img src="/images/logo.png" alt="logo" width="100%">
        </div>
        <transition name="slide-fade">

            <div class="login col-12 col-md-6 col-lg-6 col-xl-6 offset-md-3 offset-lg-3 offset-xl-3">

                <div class="login-box row">
                    <div class="login-image">

                    </div>
                    <div class="login-form" @keyup.enter="login">
                        <div class="header row">
                            <div class="left_homepage row">
                                <router-link :to="{name: 'discover'}">
                                    <div class="row">
                                        <img src="/images/home.png" width="25px" height="25px" alt="logo">
                                        <p>Homepage</p>
                                    </div>
                                </router-link>
                            </div>
                            <div class="right_homepage row">
                                <router-link :to="{name: 'plan'}" v-if="!$Helper.getIntGatewayStatus('int_gateway')">
                                    <div class="row">
                                        <p>Register</p>
                                        <img src="/images/arrow.png" width="25px" height="25px" alt="logo">
                                    </div>
                                </router-link>
                                <router-link :to="{name: 'signup-non-payment'}" v-if="$Helper.getIntGatewayStatus('int_gateway')">
                                    <div class="row">
                                        <p>Register</p>
                                        <img src="/images/arrow.png" width="25px" height="25px" alt="logo">
                                    </div>
                                </router-link>
                            </div>
                        </div>
                        <div class="logo">

                        </div>

                        <div class="form-group">
                            <div class="col-12 col-md-8 offset-md-2">

                                <div class="input-group">

                                    <div class="input-group-addon icon">
                                        <img src="/images/envelope.png" width="33px" height="33px" alt="logo">
                                    </div>

                                    <input class="form-control" name="email" v-validate="'required|email|max:50'"
                                           :class="{'input': true, 'input-danger': errors.has('email') }"
                                           type="email" v-model="email" :placeholder="$t('setting.mail')" autocomplete="off">
                                </div>
                                <span v-show="errors.has('email')" class="text-danger">{{errors.first('email')}}</span>
                            </div>
                        </div>
                        <div class="form-group" v-show="error">
                            <div class="col-12 col-md-8 offset-md-2">
                                <div class="text-danger">E-mail or password is incorrect</div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-12 col-md-8 offset-md-2">
                                <button class="btn btn-warning" @click="CHECK_EMAIL" v-if="!button_loading">RECOVERY</button>
                                <button class="btn btn-warning" v-if="button_loading">
                                    <i id="btn-progress"></i>
                                    {{$t('register.loading')}}
                                </button>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-12 col-md-8 offset-md-2">
                                <p> {{$t('register.password_help')}}
                                    <router-link :to="{name: 'contact-us'}"> {{$t('app_name')}} {{$t('register.support')}}</router-link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import {
        mapState
    } from "vuex";

    export default {
        data() {
            return {
                email: '',
            }
        },

        computed: mapState({
            data: state => state.auth.data,
            button_loading: state => state.auth.button_loading
        }),
        methods: {
            CHECK_EMAIL() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.$store.dispatch('CHECK_EMAIL', this.email)
                    }
                })
            },

        }
    }
</script>
