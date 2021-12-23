<template>
    <div class="register">
        <div class="background-image">
            <div class="background-color"></div>
        </div>

        <div class="background-logo">
            <img src="/images/logo.png" alt="logo" width="100%">
        </div>
        <div class="col-12 signup login">

            <div class="exit-button" @click="EXIT">
                <exit-button></exit-button>
            </div>

            <!-- END back -->


            <div class="col-12 col-md-8 offset-md-2  p-md-4  signup-form">

                <div class="col-8 offset-2">
                    <div class="steps hidden-xs-down">
                        <div class="step-1">
                            <div class="circle-1 active-circle ">
                                <span>1</span>
                            </div>
                            <strong>{{$t('register.choose_plan')}}</strong>

                            <div class="line-1 active-line">
                                <svg width="160" height="140" xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    <line x1="40" x2="180" y1="100" y2="100" stroke="url(#grecya)" stroke-width="3"
                                          stroke-linecap="round"></line>
                                </svg>
                            </div>

                        </div>
                        <div class="step-2">
                            <div class="circle-2 active-circle">
                                <span>2</span>
                            </div>
                            <strong>{{$t('register.signup')}} </strong>
                            <div class="line-2">
                                <svg width="160" height="140" xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    <line x1="40" x2="180" y1="100" y2="100" stroke="url(#grecya)" stroke-width="3"
                                          stroke-linecap="round"></line>
                                </svg>
                            </div>
                        </div>
                        <div class="step-3">
                            <div class="circle-3">
                                <span>3</span>
                            </div>
                            <strong>{{$t('register.payment')}}</strong>
                        </div>
                    </div>
                </div>
                <div class="login-box plane-box row">
                        <div class="signup-image">
                        </div>
                        <div class="login-form signups-form">
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
                                    <router-link :to="{name: 'login'}" v-if="!$Helper.getIntGatewayStatus('int_gateway')">
                                        <div class="row">
                                            <p>Login</p>
                                            <img src="/images/arrow.png" width="25px" height="25px" alt="logo">
                                        </div>
                                    </router-link>
                                    <router-link :to="{name: 'signup-non-payment'}" v-if="$Helper.getIntGatewayStatus('int_gateway')">
                                        <div class="row">
                                            <p>Login</p>
                                            <img src="/images/arrow.png" width="25px" height="25px" alt="logo">
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                        <div class="mt-sm-5 col-lg-10 offset-lg-1 ">
                            <div class="form-group">
                                <div class="col-12">
                                    <div class="input-group">
                                        <div class="input-group-addon icon">
                                            <img src="/images/envelope.png" width="33px" height="33px" alt="logo">
                                        </div>
                                        <input class="form-control" type="name" name="name"
                                            v-validate="'required|alpha_spaces|min:6|max:24'"
                                            :class="{'input': true, 'input-danger': errors.has('name') }" v-model="name"
                                            :placeholder="$t('setting.name')"
                                            autocomplete="off">
                                    </div>
                                    <span v-show="errors.has('name')" class="text-danger">{{errors.first('name')}}</span>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-12">
                                    <div class="input-group">
                                        <div class="input-group-addon icon">
                                            <img src="/images/users.png" width="33px" height="33px" alt="logo">
                                        </div>
                                        <input class="form-control" type="email" name="email" v-validate="'required|email|max:50'"
                                        :class="{'input': true, 'input-danger': errors.has('email') }" v-model="email"
                                        :placeholder="$t('setting.mail')"
                                        autocomplete="off">
                                    </div>

                                    <span v-show="errors.has('email')" class="text-danger">{{errors.first('email')}}</span>
                                </div>
                            </div>


                            <div class="form-group">
                                <div class="col-12">
                                    <div class="input-group">
                                        <div class="input-group-addon icon">
                                            <img src="/images/key.png" width="33px" height="33px" alt="logo">
                                        </div>
                                        <input class="form-control" type="password" name="password"
                                            ref="passwordRef"
                                                v-validate="'min:8|required'"
                                                :class="{'input': true, 'input-danger': errors.has('password') }" v-model="password"
                                                :placeholder="$t('setting.password')">
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-12">
                                    <div class="input-group">
                                        <div class="input-group-addon icon">
                                            <img src="/images/key.png" width="33px" height="33px" alt="logo">
                                        </div>
                                        <input class="form-control" type="password" name="password_confirmation"
                                            v-validate="'min:8|required|confirmed:passwordRef'"
                                            :class="{'input': true, 'input-danger': errors.has('password') }" v-model="confirm"
                                            :placeholder="$t('setting.password_confirm')" data-vv-as="password">
                                    </div>
                                    <span v-show="errors.has('password_confirmation')"
                                        class="text-danger">{{ errors.first('password_confirmation') }}</span>
                                </div>
                            </div>


                            <div class="form-group">
                                <div class="col-12">
                                    <span v-show="msgShow" class="text-danger">{{msg}}</span>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-12 col-md-6 offset-md-3">
                                    <button v-if="!button_loading" class="btn btn-warning" @click="NEXT">{{$t('register.signup')}}</button>
                                    <button v-if="button_loading" class="btn btn-warning" disabled><i id="btn-progress"></i>
                                        {{$t('register.loading')}}
                                    </button>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    import exitButton from "../control/utils/exit-button.vue";

    export default {
        name: 'register',

        data() {
            return {
                name: '',
                email: '',
                password: '',
                confirm: '',
                msgShow: false,
                msg: '',
                button_loading: false,
            };
        },

        components: {
            'exit-button': exitButton
        },

        mounted() {

            if(this.$Helper.getIntGatewayStatus('int_gateway')) {
                this.$router.push({
                    name: 'signup-non-payment'
                });
            }

            if (localStorage.getItem('_plan') === undefined || localStorage.getItem('_plan') === null) {
                this.$router.push({
                    name: 'plan'
                });
            }
        },

        methods: {
            NEXT() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.button_loading = true;
                        axios.post('/api/v1/create/register', {
                            name: this.name,
                            email: this.email,
                            password: this.password,
                            password_confirmation: this.confirm,
                        }).then((response) => {
                            if (response.status === 200) {
                                // Login
                                var data = {
                                    grant_type: 'password',
                                    client_id: 2,
                                    client_secret: this.$Helper.client_secret(),
                                    username: this.email,
                                    password: this.password,
                                    scope: '',
                                };
                                axios.post('/oauth/token', data).then(res => {
                                    this.$auth.setToken(res.data.access_token, res.data.expires_in, response.data.username, response.data.email, 'en', 'payment_step');
                                    this.button_loading = false;
                                    window.location.href = '/signup/payment'
                                });
                            }
                        }, error => {
                            this.loading = false;
                            this.msgShow = true;
                            this.msg = error.response.data.message;
                            this.button_loading = false;
                        })
                    }
                });
            },
            EXIT() {
                this.$router.go(-1);
            }
        }
    }
</script>
