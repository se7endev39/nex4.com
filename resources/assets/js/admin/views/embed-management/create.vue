<template>
    <div class="c-create-upcoming">

        <div class="k1_manage_table">
            <div class="m-2 p-2" id="manage-panel">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <router-link class="btn btn-md btn-warning" role="button" :to="{name: 'embed-management'}">
                            Manage
                        </router-link>
                    </li>
                </ul>
            </div>

            <div class="col-12">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <div class="form-group">
                            <div class="col-12">
                                <label>Name</label>
                            </div>
                            <div class="col-12">
                                <input class="form-control" v-model="name" type="text" placeholder="Embed site name"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-12">
                                <label>Logo</label>
                            </div>

                            <div class="col-12">

                                <input type="file" id="image" name="image" v-validate="'image'"
                                       @change="READ_IMAGE('image','imageFileImage')"
                                       class="inputfile">
                                <label id="backdropLabel" for="image">Choose a Image
                                    <br>
                                </label>
                                <img src="" id="imageFileImage" width="200" style="display: none;">

                                <span v-show="errors.has('backdrop')"
                                      class=" is-danger">{{ errors.first('image')}}</span>

                            </div>


                        </div>

                        <div class="form-group">
                            <div class="col-12">
                                <button class="btn btn-md btn-warning" @click="UPLOAD()" v-if="!loading">Upload</button>
                                <button class="btn btn-md btn-warning" disabled v-else><i class="fa fa-circle-o-notch fa-spin"></i>
                                    Loading
                                </button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
    const alertify = require("alertify.js");

    import {mapState} from "vuex";

    export default {
        data() {
            return {
                name: '',
                category_section: '',
                channel_id: '',
                loading: false
            };
        },

        computed: mapState({
            CHANNELS: state => state.channels.data,
        }),

        created() {
            this.$store.dispatch("GET_ALL_CHANNELS");
        },
        methods: {
            UPLOAD(name) {
                const image = document.querySelector("#image");
                const formData = new FormData();
                formData.append("Name", this.name);
                formData.append("Image", image.files[0]);
                // Progress
                this.loading = true;
                const progress = {
                    headers: {
                        "content-type": "multipart/form-data"
                    }
                };
                // Store data
                this.$validator.validateAll().then(result => {
                    if (result) {
                        axios.post("/api/admin/create/production", formData, progress).then(
                            response => {
                                if (response.status === 200) {
                                    this.loading = false;
                                    alertify.logPosition('top right');
                                    alertify.success(response.data.Message);
                                    this.$router.push({name: 'embed-management'})
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
                });
            },

            SHOW_FILES_INFO(idFiles, idDetails) {
                var x = document.getElementById(idFiles);
                var txt = "";
                if ("files" in x) {
                    for (var i = 0; i < x.files.length; i++) {
                        var file = x.files[i];
                        if ("name" in file) {
                            txt += "name: " + file.name + "<br>";
                        }
                    }
                }
                document.getElementById(idDetails).innerHTML = txt;
            },

            READ_IMAGE(id, outImage) {
                var img = document.getElementById(id);
                var tgt = img.target || window.event.srcElement,
                    files = tgt.files;

                // FileReader support
                if (FileReader && files && files.length) {
                    var fr = new FileReader();
                    fr.onload = function () {
                        var srcImage = document.getElementById(outImage);
                        srcImage.style.display = "block";
                        srcImage.src = fr.result;
                    };
                    fr.readAsDataURL(files[0]);
                } else {
                    // Not supported
                    // fallback -- perhaps submit the input to an iframe and temporarily store
                    // them on the server until the user's session ends.
                }
            }
        }
    };
</script>
