<template>
<div class="register">
    <div class="col-12 signup">

        <div class="exit-button" @click="EXIT">
            <exit-button></exit-button>
        </div>

        <!-- END back -->

        <div class="col-12 col-md-8 offset-md-2 p-4 signup-form">

            <div class="title">
                <h3>{{$t('register.stepone')}}</h3>
            </div>

            <div class=" col-lg-10 offset-lg-1 ">
                <div class="form-group">
                    <div class="col-12">
                        <input class="form-control" type="name" name="name"
                                       v-validate="'required|alpha_spaces|min:6|max:24'"
                                       :class="{'input': true, 'input-danger': errors.has('name') }" v-model="name"
                                       :placeholder="$t('setting.name')"
                                       autocomplete="off">
                        <span v-show="errors.has('name')" class="text-danger">{{errors.first('name')}}</span>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-12">
                        <input class="form-control" type="email" name="email" v-validate="'required|email|max:50'"
                                       :class="{'input': true, 'input-danger': errors.has('email') }" v-model="email"
                                       :placeholder="$t('setting.mail')"
                                       autocomplete="off">
                        <span v-show="errors.has('email')" class="text-danger">{{errors.first('email')}}</span>
                    </div>
                </div>

                    <div class="form-group">
                        <div class="col-12">
                            <input class="form-control" type="password" name="password"
                                    ref="passwordRef"
                                        v-validate="'min:8|required'"
                                        :class="{'input': true, 'input-danger': errors.has('password') }" v-model="password"
                                        :placeholder="$t('setting.password')">
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-12">
                            <input class="form-control" type="password" name="password_confirmation"
                                       v-validate="'min:8|required|confirmed:passwordRef'"
                                       :class="{'input': true, 'input-danger': errors.has('password') }" v-model="confirm"
                                       :placeholder="$t('setting.password_confirm')" data-vv-as="password">
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
                        <div class="col-12">
                            <p>{{$t('register.agree_role')}}
                                <router-link :to="{name: 'terms'}" style="color:#3498db;">Terms Of Service
                                </router-link>
                                {{$t('register.and')}}
                                <router-link :to="{name: 'privacy'}" style="color:#3498db;">Privacy Policy
                                </router-link>
                            </p>
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
        if (!this.$Helper.getIntGatewayStatus('int_gateway')) {
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
                                this.$auth.setToken(res.data.access_token, res.data.expires_in, response.data.username, response.data.email, 'en', 'active');
                                this.button_loading = false;
                                window.location.href = '/'
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
