<template>

    <div class="k1_manage_table">

        <div class="spinner-load" v-if="ProductionManagementLoading">
            <Loader></Loader>
        </div>

        <div class="c-full-manage p-2" v-else>
            <h5 class="title p-2">Embed Management</h5>

            <div class="m-2 p-2" id="manage-panel">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <router-link class="btn btn-md btn-warning" role="button" :to="{name: 'create-embed'}">Create</router-link>
                    </li>
                </ul>
            </div>

            <div class="c-body-manage c-white-pa c-shadow-pa" v-if="ListProduction !== null">

            <div class="table-responsive">
                <table class="table">
                    <thead>
                    <th>Logo</th>
                    <th>Name</th>
                    <th>Created date</th>
                    <th>Control</th>
                    </thead>
                    <tbody>
                    <tr v-for="(item, index) in ListProduction" :key="index">
                        <td><img :src="'/storage/production/' + item.image" :alt="item.name" width="40"></td>
                        <td>{{item.name}}</td>
                        <td>{{item.created_at}}</td>
                        <td>
                            <div class="btn-group" role="group">
                                <router-link class="btn btn-sm btn-warning btn-sm mr-2" role="buttton" :to="{ name:'edit-embed', params: {id: item.id}}">
                                    Edit
                                </router-link>
                                <button class="btn btn-sm btn-danger btn-sm mr-2" @click="DELETE(item.id,index)" :id="item.id">
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import { mapState } from "vuex";
    import LoaderPage from "../components/loader";
    export default {

        components: {
            'Loader': LoaderPage,
        },

        computed: mapState({
            ListProduction: state => state.productions.ListProduction,
            ButtonLoading: state => state.productions.ButtonLoading,
            ProductionManagementLoading: state => state.productions.ProductionManagementLoading
        }),

        created() {
            this.$store.dispatch("LIST_PRODUCTION");
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
                        this.$store.dispatch("DELETE_PRODUCTION", {
                            id,
                            key
                        });
                    }
                });
            }
        }
    };
</script>
