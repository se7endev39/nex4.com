<template>
    <div class="c-update-category">

        <div class="spinner-load" v-if="ProductionEditLoading">
            <Loader></Loader>
        </div>

        <div class="k1_manage_table" v-if="!ProductionEditLoading">
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
                                <input class="form-control" v-model="ProductionInfo.name" type="text" placeholder="Embed site name"/>
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
                                <img :src="'/storage/production/' + ProductionInfo.image" id="imageFileImage" width="200">
                                <span v-show="errors.has('backdrop')"
                                      class=" is-danger">{{ errors.first('image')}}</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="form-group">
                    <div class="col-12">
                        <button class="btn btn-md btn-warning" @click="UPDATE()" v-if="!ButtonLoading">Update</button>
                        <button class="btn btn-md btn-warning" disabled v-else><i class="fa fa-circle-o-notch fa-spin"></i>
                            Loading
                        </button>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
    const alertify = require("alertify.js");

    import LoaderPage from "../components/loader";

    export default {
        data() {
            return {
                ProductionInfo: [],
                ButtonLoading: false,
                ProductionEditLoading: true
            };
        },

        components: {
            'Loader': LoaderPage,
        },
        created() {
            axios
                .get("/api/admin/get/production/" + this.$route.params.id)
                .then(resposne => {
                    if (resposne.status === 200) {
                        this.ProductionInfo = resposne.data.ProductionInfo;
                        this.ProductionEditLoading = false;
                    }
                });
        },

        methods: {
            UPDATE() {
                const image = document.querySelector("#image");
                const formData = new FormData();
                formData.append("Name", this.ProductionInfo.name);
                if (image.files[0] !== undefined) {
                    formData.append("Image", image.files[0]);
                }
                // Progress
                this.ButtonLoading = true;
                const progress = {
                    headers: {
                        "content-type": "multipart/form-data"
                    }
                };
                // Store data
                this.$validator.validateAll().then(result => {
                    if (result) {
                        axios.post("/api/admin/update/production/" + this.$route.params.id, formData, progress).then(
                            response => {
                                if (response.status === 200) {
                                    this.ButtonLoading = false;
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
                                    this.ButtonLoading = false;
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
