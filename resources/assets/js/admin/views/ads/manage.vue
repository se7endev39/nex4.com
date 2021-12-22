<template>
    <div class="categories">
        <div class="spinner-load" v-if="spinner_loading">
            <Loader></Loader>
        </div>

        <!-- END spinner load -->
        <div class="k1_manage_table" v-if="!spinner_loading">
            <h5 class="title p-2">Ads</h5>

            <div class="m-2 p-2" id="manage-panel">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <router-link class="btn btn-md btn-warning" role="button" :to="{name: 'create-ad'}">Create</router-link>
                    </li>
                </ul>
            </div>


            <div class="table-responsive mt-2" v-if="data.ads !== null">
                <div class="table table-hover">
                    <thead>
                    <th>Name</th>
                    <th>Client</th>
                    <th>URL</th>
                    <th>Created date</th>
                    <th>Updated date</th>
                    <th>Control</th>
                    </thead>
                    <tbody>
                    <tr v-for="(item, index) in data.ads" :key="index">
                        <td>{{item.ad_name}}</td>
                        <td>{{item.client}}</td>
                        <td>{{item.tags}}</td>
                        <td>{{item.created_at}}</td>
                        <td>{{item.updated_at}}</td>
                        <td>
                            <div class="btn-group" role="group">
                                <router-link class="btn btn-sm btn-warning btn-sm mr-2" role="buttton" :to="{ name:'edit-ad', params: {id: item.id}}">
                                    Edit
                                </router-link>
                                <button class="btn btn-sm btn-danger btn-sm mr-2" @click="DELETE(item.id,index)" :id="item.id">
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </div>
            </div>
            <div v-else class="text-center">
                <h4>No result were found</h4>
            </div>

        </div>
    </div>
</template>

<script>
    const alertify = require("alertify.js");
    import { mapState } from "vuex";
    import Loader from "../components/loader";

    export default {
        data() {
            return {
                kind: 'movie'
            };
        },
        components: {
            Loader
        },
        computed: mapState({
            data: state => state.ads.data,
            button_loading: state => state.ads.button_loading,
            spinner_loading: state => state.ads.spinner_loading
        }),
        created() {
            this.$store.dispatch("GET_ALL_ADS");
        },
        methods: {
            DELETE(id, key) {
                swal({
                    title: "Are you sure to delete ?",
                    icon: "warning",
                    text: "All videos and subtitles will removed!",
                    buttons: true,
                    dangerMode: true
                }).then(willDelete => {
                    if (willDelete) {
                        this.$store.dispatch("DELETE_AD", {
                            id,
                            key
                        });
                    }
                });
            },
        }
    };
</script>
