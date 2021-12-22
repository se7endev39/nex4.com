<template>
  <div>
    <div class="k1_manage_table">
      <div class="m-2 p-3" id="manage-panel">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <router-link
              class="btn btn-md btn-warning"
              role="button"
              :to="{
                name: 'chapters-manage',
                params: { id: this.$route.params.id },
              }"
              >Manage
            </router-link>
          </li>
        </ul>
      </div>

      <!-- END Manage Panel -->

      <div class="col-12">
        <div class="row">
          <div class="col-12 col-lg-6">
            <div class="form-group">
              <div class="col-12">
                <div class="alert alert-info" role="alert">
                  <strong>Important ! </strong> <br />
                  <ol>
                    <li>
                      Re-name the chapter page image by number (1-20) exm
                      (1.png) and put all images in zip file rename the zip file
                      to (chpatername number) exm: (gold de roger_512.zip), you
                      can also upload only number of chapter, the chapter number
                      is required.
                      <br />
                    </li>
                    <li>You can upload multi zip file</li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="col-12">
                <label>Choose Cloud </label>
              </div>
              <div class="col-12 cloud-upload">
                <div class="row">
                  <div
                    class="col-12 col-sm-6 image"
                    @click="cloud_type = 'local'"
                  >
                    <div
                      class="local-cloud-logo"
                      :class="{ active: cloud_type === 'local' }"
                    >
                      <img
                        src="/themes/default/img/local-cloud.svg"
                        alt="local-cloud"
                        width="90px"
                      />
                    </div>
                  </div>
                  <div
                    class="col-12 col-sm-6 image"
                    @click="cloud_type = 'aws'"
                  >
                    <div
                      class="aws-cloud-logo"
                      :class="{ active: cloud_type === 'aws' }"
                    >
                      <img
                        src="/themes/default/img/aws-cloud.svg"
                        alt="aws-cloud"
                        width="120px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="cloud_type">
              <div class="form-group">
                <div class="col-12 col-sm-4">
                  <label>Chapter zip file</label>
                </div>
                <div class="col-12 col-sm-12">
                  <input
                    type="file"
                    id="chapters"
                    name="chapters"
                    @change="infoShow('chapters', 'chapterFileDetails')"
                    class="inputfile"
                    multiple
                  />
                  <label id="backdropLabel" for="chapters"
                    >Choose a chapters
                    <br />
                    <p id="chapterFileDetails"></p>
                  </label>
                </div>
              </div>

              <div class="col-12 mt-2">
                <div class="form-group">
                  <button
                    class="btn btn-md btn-warning"
                    v-if="!disabled_button"
                    @click="MOVIEDB_API()"
                  >
                    Upload
                  </button>
                  <button
                    class="btn btn-md btn-warning"
                    v-if="disabled_button"
                    disabled
                  >
                    Loading
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
import { mapState } from "vuex";

const alertify = require("alertify.js");
export default {
  data() {
    return {
      upload_type_is: false,
      disabled_button: false,
      upload_data: {
        id: null,
        api: {
          show: false,
          progress: 0,
          success_message: null,
          error_message: null,
        },
        upload: {
          show: false,
          progress: 0,
          success_message: null,
          error_message: null,
          message: null,
        },
        subtitle: {
          progress: 0,
          success_message: null,
          error_message: null,
        },
      },
      uploadFormData: new FormData(),
      apiFormData: new FormData(),
      cloud_type: false,
    };
  },

  computed: mapState({
    button_loading: (state) => state.manga.button_loading,
    spinner_loading: (state) => state.manga.spinner_loading,
    countUploadData: (state) => state.event.data_count,
    uploadData: (state) => state.event.upload_data,
  }),

  mounted() {
    // Listen for the 'NewBlogPost' event in the 'team.1' private channel
    Echo.channel("progress").listen("EventTrigger", (payload) => {
      if (payload.progress.progress < 2) {
        this.$store.commit("UPDATE_PROGRESS_DATA", {
          key: this.countUploadData,
          id: payload.progress.tmdb_id,
          parameter: "message",
          object: "upload",
          value: payload.progress.message,
        });
        this.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA", {
          key: this.countUploadData,
          data: this.uploadData[this.countUploadData],
        });
      }

      this.$store.commit("UPDATE_PROGRESS_DATA", {
        key: this.countUploadData,
        id: payload.progress.tmdb_id,
        parameter: "progress",
        object: "upload",
        value: payload.progress.progress,
      });

      this.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA", {
        key: this.countUploadData,
        data: this.uploadData[this.countUploadData],
      });
    });
  },

  methods: {
    MOVIEDB_API() {
      //  this.disabled_button = true;

      // Check count of upload data
      this.$store.commit("COUNT_UPLOAD_PROGRESS");

      // Cloud Type
      this.apiFormData.append("cloud_type", this.cloud_type);

      // API form data
      const chapters = document.querySelector("#chapters");
      for (let i = 0; i < chapters.files.length; i++) {
        console.log(chapters.files[i]);
        this.apiFormData.append("chapters[]", chapters.files[i]);
      }
      // Store data
      this.upload_data.api.show = true;
      this.upload_data.id = this.$route.params.id;

      this.$store.commit("SET_PROGRESS_DATA", this.upload_data);
      this.$store.commit(
        "SET_UPLOAD_PROGRESS",
        this.uploadData[this.countUploadData]
      );
      this.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA", {
        key: this.countUploadData,
        data: this.uploadData[this.countUploadData],
      });

      axios
        .post(
          "/api/admin/new/manga/chapters/" + this.$route.params.id + "/upload",
          this.apiFormData
        )
        .then(
          (response) => {
            if (response.status === 200) {
              this.$store.commit("UPDATE_PROGRESS_DATA", {
                key: this.countUploadData,
                parameter: "success_message",
                object: "api",
                value: response.data.message,
              });
              this.$store.commit("UPDATE_PROGRESS_DATA", {
                key: this.countUploadData,
                parameter: "progress",
                object: "api",
                value: 100,
              });
              this.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA", {
                key: this.countUploadData,
                data: this.uploadData[this.countUploadData],
              });

              //  this.$router.back();
            }
          },
          (error) => {
            this.disabled_button = false;
            if (error.response.status == 422) {
              alertify.logPosition("top right");
              alertify.error(error.response.data.errors);
              alertify.error(error.response.data.message);
            } else {
              this.$store.commit("UPDATE_PROGRESS_DATA", {
                key: this.countUploadData,
                parameter: "error_message",
                object: "api",
                value: error.response.data.message,
              });
              this.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA", {
                key: this.countUploadData,
                data: this.uploadData[this.countUploadData],
              });
            }
          }
        );
    },

    // Show file name and size
    infoShow(idFiles, idDetails) {
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
  },
};
</script>
