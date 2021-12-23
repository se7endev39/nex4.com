<template>
    <div class="register">
        <div class="background-image">
            <div class="background-color"></div>
        </div>

        <!-- <div class="nav-list">
            <router-link :to="{name: 'discover'}">{{$t('register.discover')}}</router-link>
            <router-link :to="{name: 'privacy'}">{{$t('register.privacy')}}</router-link>
            <router-link :to="{name: 'about-us'}">{{$t('register.aboutus')}}</router-link>
            <router-link :to="{name: 'contact-us'}">{{$t('register.contactus')}}</router-link>
        </div> -->
        <div class="background-logo">
            <img src="/images/logo.png" alt="logo" width="100%">
        </div>
        <transition name="slide-fade">

            <div class="login col-12 col-md-6 col-lg-6 col-xl-6 offset-md-3 offset-lg-3 offset-xl-3" v-show="loginShow">

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
                        <div class="form-group">
                            <div class="col-12 col-md-8 offset-md-2">
                                <div class="input-group">
                                    <div class="input-group-addon icon">
                                        <img src="/images/key.png" width="33px" height="33px" alt="logo">
                                    </div>

                                    <input class="form-control" type="password" name="password"
                                           v-validate="'required|min:6|max:100'"
                                           :class="{'input': true, 'input-danger': errors.has('password') }"
                                           v-model="password" :placeholder="$t('setting.password')" autocomplete="off">
                                </div>
                                <span v-show="errors.has('password')"
                                      class="text-danger">{{errors.first('password')}}</span>

                            </div>
                        </div>
                        <div class="form-group" v-show="error">
                            <div class="col-12 col-md-8 offset-md-2">
                                <div class="text-danger">E-mail or password is incorrect</div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-12 col-md-8 offset-md-2">
                                <button class="btn btn-warning" @click="login" v-if="!button_loading">{{$t('register.login')}}</button>
                                <button class="btn btn-warning" v-if="button_loading">
                                    <i id="btn-progress"></i>
                                    {{$t('register.loading')}}
                                </button>
                            </div>
                        </div>
                        <div class="form-group text-center dark-text">
                            {{$t('register.forget_password')}}
                            <router-link :to="{name: 'forget_password'}">Click Here</router-link>
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
    } from 'vuex';

    export default {
        data() {
            return {
                email: '',
                password: '',
                loginShow: false
            };
        },
        computed: mapState({
            error: state => state.auth.error,
            button_loading: state => state.auth.button_loading
        }),
        mounted() {
            setTimeout(() => {
                this.loginShow = true;
            }, 200);
        },
        methods: {
            login() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.$store.dispatch('LOGIN', {
                            'email': this.email,
                            'password': this.password
                        });
                    }
                })
            }
        }
    }
</script>
