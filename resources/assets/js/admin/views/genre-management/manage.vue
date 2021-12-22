<template>
<div>

    <div class="spinner-load" v-if="spinner_loading">
        <Loader></Loader>
    </div>

    <div class="k1_manage_table" v-if="!spinner_loading">
        <h5 class="title p-2">Genre</h5>

        <div class="col-12 col-sm-6 col-md-4 ">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Genre name" v-model="name">
                <span class="input-group-btn">
                    <button class="btn btn-sm btn-warning" type="button" v-if="! btn_loading" @click="CREATE()">Create</button>
                    <button class="btn btn-sm btn-warning" disabled v-else><i  class="fa fa-circle-o-notch fa-spin"></i>  Loading </button>
                </span>
            </div>
        </div>

        <div class="col-12">

            <div class="table-responsive mt-2 " v-if="data.length > 0">
                <div class="table table-hover">
                    <thead>
                        <th>Name</th>
                        <th>Created date</th>
                        <th>Control</th>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in data" :key="index">
                            <td>{{item.name}}</td>
                            <td>{{item.created_at}}</td>
                            <td>
                                <div class="btn-group" role="group">
                                    <button class="btn btn-sm btn-danger btn-sm mr-2"  @click="DELETE(item.id,index)" :id="item.id">
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
</div>
</template>

<script>
const alertify = require("alertify.js");
import {
    mapState
} from "vuex";
import Loader from "../components/loader";
export default {
    data() {
        return {
            name: null,
            btn_loading: false
        };
    },

    computed: mapState({
        data: state => state.genres.data,
        spinner_loading: state => state.genres.spinner_loading_genres
    }),

    components: {
        Loader
    },

    created() {
        this.$store.dispatch("GET_ALL_GENRES");
    },

    methods: {
        DELETE(id, key) {
            swal({
                title: "Are you sure to delete ?",
                icon: "warning",
                buttons: true,
                dangerMode: true
            }).then(willDelete => {
                if (willDelete) {
                    this.$store.dispatch("DELETE_GENRE", {
                        id,
                        key
                    });
                }
            });
        },

        CREATE() {
            this.btn_loading = true;
            axios.post("/api/admin/create/genres", {
                name: this.name
            }).then(
                response => {
                    if (response.status === 200) {
                        this.btn_loading = false;
                        this.data.push(response.data.data);

                        alertify.logPosition('top right');
                        alertify.success(response.data.message);
                    }
                },
                error => {
                    alertify.logPosition('top right');
                    alertify.error(error.response.data.message);
                    setTimeout(() => {
                        this.btn_loading = false;
                    }, 500);

                });
        }
    }
};
</script>
