<template>
    <div class="create-ad">

        <div class="k1_manage_table">
            <div class="m-2 p-2" id="manage-panel">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <router-link class="btn btn-md btn-warning" role="button" :to="{name: 'ads-manage'}">
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
                                <label>Ad Name</label>
                            </div>
                            <div class="col-12">
                                <input v-validate="'required|max:50|alpha_spaces'" name="name" class="form-control"
                                       v-model="ad_name" type="text" placeholder="Ad name"
                                />
                                <span v-show="errors.has('name')" class="is-danger">{{ errors.first('name') }}</span>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-12">
                                <label for="ad-client">Ad client</label>
                                <select class="form-control" id="ad-client" name="ad-client" v-model="client"
                                        v-validate="'required'">
                                    <option value="googima">Google IMA
                                    </option>
                                    <option value="vast">VAST
                                    </option>
                                </select>

                                <span v-show="errors.has('ad-client')"
                                      class="is-danger">{{ errors.first('ad-client') }}</span>
                            </div>
                        </div>


                        <div class="form-group">
                            <div class="col-12">
                                <label>Ad XML URL</label>
                            </div>
                            <div class="col-12">
                                <input v-validate="'max:400|url'" name="ad-url" class="form-control"
                                       v-model="tags" type="text" placeholder="Ad XML URL"
                                />
                                <span v-show="errors.has('ad-url')" class="is-danger">{{ errors.first('ad-url') }}</span>
                            </div>
                        </div>


                    </div>
                </div>
                <div class="form-group">
                    <div class="col-12">
                        <button class="btn btn-md btn-warning" @click="UPLOAD()" v-if="!loading">Upload</button>
                        <button class="btn btn-md btn-warning" disabled v-else><i  class="fa fa-circle-o-notch fa-spin"></i>  Loading
                        </button>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
    const alertify = require("alertify.js");
    export default {
        data() {
            return {
                ad_name: '',
                client: '',
                tags: '',
                start_on: '',
                frequency: '',
                start_on_seek: '',
                time_between_ads: '',
                loading: false
            };
        },

        methods: {
            UPLOAD() {
                const formData = new FormData();
                formData.append("ad_name", this.ad_name);
                formData.append("client", this.client);
                formData.append("start_on", this.start_on);
                formData.append("frequency", this.frequency);
                formData.append("start_on_seek", this.start_on_seek);
                formData.append("time_between_ads", this.time_between_ads);
                formData.append("tags", this.tags);

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
                        axios.post("/api/admin/create/ads", formData, progress).then(
                            response => {
                                if (response.status === 200) {
                                    this.loading = false;
                                    alertify.logPosition('top right');
                                    alertify.success(response.data.message);
                                    this.$router.push({name: 'ads-manage'})
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
                        txt += "<br><strong>" + (i + 1) + ". file</strong><br>";
                        var file = x.files[i];
                        if ("name" in file) {
                            txt += "name: " + file.name + "<br>";
                        }
                        if ("size" in file) {
                            if (file.size < 1048576)
                                txt += "size:" + (file.size / 1024).toFixed(3) + "KB<br>";
                        }
                    }
                }
                document.getElementById(idDetails).innerHTML = txt;
            },

            readImage(id, outImage) {
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
            },
        }
    };
</script>
