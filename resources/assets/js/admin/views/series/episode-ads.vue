<template>
<div class="create-episode-ads">

    <div class="spinner-load" v-if="spinner_loading">
        <Loader></Loader>
    </div>

    <div class="k1_manage_table" v-if="!spinner_loading">

        <div class="title p-2">Episode Ads</div>

        <div class="col-12 mt-3">

            <div class="row">
                <div class="col-12 col-md-6">

                    <div class="form-group">
                        <div class="col-12 col-md-8">
                            <label for="ad-client">Select ads</label>
                            <select class="form-control" id="ad-client" name="ad-client" v-validate="'required'"
                                        multiple>
                                    <option :value="item" v-for="(item, index) in data.ads" :key="index"
                                            @click="addAdsToDemo(item, index)">
                                        {{item.ad_name}}
                                    </option>
                                </select>
                            <span v-show="errors.has('ad-client')"
                                      class="is-danger">{{ errors.first('ad-client') }}</span>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-12 col-md-8">
                            <label>Schedule Ads</label>

                            <div class="schedule-ads" v-for="(item, index) in ads" :key="index">

                                <div class="header">
                                    <div class="left-text pull-left">
                                        {{item.ad_name}}
                                    </div>

                                    <div class="right-text float-right">
                                        {{item.client}}
                                    </div>
                                </div>

                                <div class="rang m-2 pt-4">
                                    <vue-slider :ref="index" v-model="item.range.value" @callback="updateRange(item.range.value, index)"></vue-slider>
                                </div>

                                <button class="btn btn-sm btn-warning" @click="duplicateAds(item);" v-if="item.type == undefined">Duplicate
                                    </button>
                                <button class="btn btn-sm btn-warning" @click="removeAds(index)">Remove</button>

                            </div>
                        </div>
                    </div>

                </div>

                <div class="col-12 col-md-6">
                    <h4>Videos</h4>
                    <div id="player">Loading the player...</div>

                </div>

            </div>

            <div class="col-12 col-sm-6 mt-2">
                <div class="form-group">
                    <button class="btn btn-md btn-warning" @click="UPDATE()" v-if="!loading">Update</button>
                    <button class="btn btn-md btn-warning" disabled v-else><i  class="fa fa-circle-o-notch fa-spin"></i>  Loading</button>
                </div>
            </div>

        </div>

    </div>

</div>
</template>

<script>
import {
    mapState
} from "vuex";
import Loader from "../components/loader";
import vueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/antd.css'

const alertify = require("alertify.js");

export default {

    data() {
        return {
            ads: [],
            scheduleAds: [],
            deleteAds: [],
            duplicate: [],
            range: '',
            new: false,
            loading: false
        }
    },

    components: {
        Loader,
        vueSlider
    },

    computed: mapState({
        data: state => state.ads.data,
        episode_data: state => state.series.episode_data,
        spinner_loading: state => state.ads.spinner_loading
    }),

    watch: {

        ads() {
            if (this.new) {
                this.ads[this.ads.length - 1].range = {
                    value: 0
                };
            }
        },

        duplicate() {
            this.duplicate[this.duplicate.length - 1].type = 'duplicate';
        },

    },

    created() {

        // schedules ads
        axios
            .get("/api/admin/get/series/episode/schedules/ads/" + this.$route.params.id)
            .then(resposne => {
                if (resposne.status === 200) {

                    if (resposne.data.data !== null) {

                        this.ads = resposne.data.data;
                        for (let i = 0; i < resposne.data.data.length; i++) {
                            this.ads[i].range = {
                                value: resposne.data.data[i].offset
                            };
                            this.scheduleAds.push({
                                tag: resposne.data.data[i].tags,
                                offset: resposne.data.data[i].offset + '%'
                            })
                        }

                        setTimeout(() => {
                            jwplayer("player").setup({
                                "file": this.episode_data.videos[0].video_url,
                                autostart: true,
                                advertising: {
                                    client: 'vast',
                                    adscheduleid: "b6Wd5tsW",
                                    schedule: this.scheduleAds
                                }
                            });
                        }, 1500);

                    } else {
                        setTimeout(() => {
                            jwplayer("player").setup({
                                "file": this.episode_data.videos[0].video_url,
                                autostart: true
                            });
                        }, 1500);
                    }
                }
            });
        this.$store.dispatch("GET_ALL_ADS");
        this.$store.dispatch("GET_EPISODE_DETAILS", this.$route.params.id);
    },

    methods: {

        addAdsToDemo(data, index) {
            this.new = true;
            this.ads.push(data);

            this.scheduleAds.push({
                tag: data.tags,
                offset: 0
            });

            this.data.ads.splice(index, 1);

            jwplayer("player").setup({
                file: this.episode_data.videos[0].video_url,
                autostart: false,
                advertising: {
                    client: 'vast',
                    adscheduleid: "b6Wd5tsW",
                    schedule: this.scheduleAds
                }
            });
        },

        duplicateAds(data) {
            this.ads.push({
                ad_name: data.ad_name,
                ads_id: (data.ads_id !== undefined ? data.ads_id : data.id),
                client: data.client,
                episode_id: data.episode_id,
                offset: data.offset,
                range: {
                    value: data.range.value
                },
                schedules_id: data.schedules_id,
                tags: data.tags,
                type: 'dup'
            });

            this.scheduleAds.push({
                tag: data.tags,
                offset: 0
            });

            jwplayer("player").setup({
                file: this.episode_data.videos[0].video_url,
                autostart: false,
                advertising: {
                    client: 'vast',
                    adscheduleid: "b6Wd5tsW",
                    schedule: this.scheduleAds
                }
            });
        },

        updateRange(value, key) {
            this.scheduleAds[key].offset = value + '%';

            jwplayer("player").setup({
                file: this.episode_data.videos[0].video_url,
                autostart: true,
                advertising: {
                    client: 'vast',
                    adscheduleid: "b6Wd5tsW",
                    schedule: this.scheduleAds
                }
            });
        },

        removeAds(index) {
            this.data.ads.push(this.ads[index]);
            this.deleteAds.push(this.ads[index]);
            this.ads.splice(index, 1);
        },

        UPDATE() {
            this.loading = true;

            axios.post("/api/admin/create/series/episode/schedules/ads/" + this.$route.params.id, {
                update: this.ads,
                delete: this.deleteAds
            }).then(
                response => {
                    if (response.status === 200) {
                        alertify.logPosition('top right');
                        alertify.success(response.data.message);
                        this.loading = false;
                        this.$router.back();
                    }
                },
                error => {
                    this.error_message_api = error.response.data.message;
                    alertify.logPosition('top right');
                    alertify.error(error.response.data.message);
                    setTimeout(() => {
                        this.loading = false;
                    }, 4000);

                });

        }

    }

}
</script>
