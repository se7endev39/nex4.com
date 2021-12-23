<template>
  <div>
    <div class="k1_manage_table">
      <div class="title p-2">Series Custom Upload</div>
      <div class="col-12">
        <div class="form-group">
          <div class="col-12">
            <label>Choose Cloud </label>
          </div>
          <div class="col-12 col-md-8 cloud-upload">
            <div class="row">
              <div class="col-12 col-md-6 image" @click="cloud_type = 'local'">
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
              <div class="col-12 col-md-6 image" @click="cloud_type = 'aws'">
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

        <div class="row">
          <div class="col-12 col-lg-6">
            <div v-if="cloud_type">
              <div class="form-group">
                <div class="col-12">
                  <label>Name</label>
                </div>
                <div class="col-12">
                  <input
                    v-validate="'required|max:30'"
                    name="name"
                    class="form-control"
                    v-model="name"
                    type="text"
                    placeholder="Name"
                  />
                  <span v-show="errors.has('name')" class="is-danger">{{
                    errors.first("name")
                  }}</span>
                </div>
              </div>
              <div class="form-group">
                <div class="col-12">
                  <label>Years</label>
                </div>
                <div class="col-12">
                  <input
                    v-validate="'required|numeric|max:4'"
                    name="year"
                    class="form-control"
                    v-model="year"
                    type="text"
                    placeholder="Years"
                  />
                  <span v-show="errors.has('year')" class="is-danger">{{
                    errors.first("year")
                  }}</span>
                </div>
              </div>

              <div class="form-group">
                <div class="col-12">
                  <label>Genres</label>
                </div>
                <div class="col-12">
                  <div class="form-control-feedback" v-if="name === false">
                    Manga name
                  </div>
                  <select
                    multiple
                    class="form-control"
                    v-validate="'required'"
                    name="genres"
                    v-model="genres"
                  >
                    <option
                      v-for="(item, index) in genre_list"
                      :value="item.name"
                      :key="index"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
                <span v-show="errors.has('genres')" class="is-danger">{{
                  errors.first("genres")
                }}</span>
              </div>

              <div class="form-group">
                <div class="col-12">
                  <label>Overview</label>
                </div>
                <div class="col-12">
                  <textarea
                    v-validate="'required|max:2000'"
                    name="overview"
                    class="form-control"
                    v-model="overview"
                    type="text"
                    placeholder="Overview"
                  />
                  <span v-show="errors.has('overview')" class="is-danger"
                    >{{ errors.first("overview") }}
                  </span>
                </div>
              </div>
              <div class="form-group">
                <div class="col-12">
                  <label
                    >Rate
                    <small>(From 1 - 10)</small>
                  </label>
                </div>
                <div class="col-12">
                  <input
                    v-validate="'required|decimal:1|max:3'"
                    name="rate"
                    class="form-control"
                    v-model="rate"
                    type="text"
                    placeholder="Rate"
                  />
                  <span v-show="errors.has('rate')" class="is-danger">{{
                    errors.first("rate")
                  }}</span>
                </div>
              </div>

              <div class="form-group">
                <div class="col-12 col-sm-4">
                  <label>Poster</label>
                </div>
                <div class="col-12">
                  <input
                    type="file"
                    id="poster"
                    name="poster"
                    v-validate="'image|required'"
                    @change="readImage('poster', 'posterFileImage')"
                    class="inputfile"
                  />
                  <label id="posterLabel" for="poster"
                    >Choose a poster
                    <br />
                  </label>
                  <img
                    src=""
                    id="posterFileImage"
                    width="40%"
                    style="display: none"
                  />
                  <span v-show="errors.has('poster')" class="is-danger"
                    >{{ errors.first("poster") }}
                  </span>
                </div>
              </div>

              <div class="form-group">
                <div class="col-12 col-sm-4">
                  <label>Backdrop (optional)</label>
                </div>
                <div class="col-12">
                  <input
                    type="file"
                    id="backdrop"
                    name="backdrop"
                    v-validate="'image'"
                    @change="readImage('backdrop', 'backdropFileImage')"
                    class="inputfile"
                  />
                  <label id="backdropLabel" for="backdrop"
                    >Choose a backdrop
                    <br />
                  </label>
                  <img
                    src=""
                    id="backdropFileImage"
                    width="100%"
                    style="display: none"
                  />
                  <span v-show="errors.has('backdrop')" class="is-danger">{{
                    errors.first("backdrop")
                  }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12" v-if="cloud_type">
            <div class="form-group">
              <div class="col-12">
                <button
                  class="btn btn-md btn-warning"
                  v-if="!disabled_button"
                  @click="SERIES_CUSTOM()"
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
</template>

<script>
const alertify = require("alertify.js");
import { mapState } from "vuex";

export default {
  data() {
    return {
      name: "",
      year: "",
      genres: [],
      overview: "",
      runtime: "",
      rate: "",
      count: "",
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
      apiFormData: new FormData(),
      cloud_type: false,
    };
  },

  computed: mapState({
    countUploadData: (state) => state.event.data_count,
    genre_list: (state) => state.genres.data,
    uploadData: (state) => state.event.upload_data,
  }),

  created() {
    this.$store.dispatch("GET_ALL_GENRES");
  },

  methods: {
    SERIES_CUSTOM() {
      const poster = document.querySelector("#poster");
      const backdrop = document.querySelector("#backdrop");
      this.apiFormData.append("name", this.name);
      this.apiFormData.append("year", this.year);
      this.apiFormData.append("genres", this.genres);
      this.apiFormData.append("overview", this.overview);
      this.apiFormData.append("rate", this.rate);

      if (typeof backdrop.files[0] !== "undefined") {
        this.apiFormData.append("backdrop", backdrop.files[0]);
      }

      if (typeof poster.files[0] !== "undefined") {
        this.apiFormData.append("poster", poster.files[0]);
      }

      // Cloud Type
      this.apiFormData.append("cloud_type", this.cloud_type);

      // Check count of upload data
      this.$store.commit("COUNT_UPLOAD_PROGRESS");

      this.$validator.validateAll().then((result) => {
        if (result) {
          this.disabled_button = true;

          this.upload_data.api.show = true;
          this.upload_data.id = this.name;

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
            .post("/api/admin/new/manga/custom-upload", this.apiFormData)
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

                  setTimeout(() => {
                    this.$router.push({
                      name: "manga-manage",
                    });
                    alertify.logPosition("top right");
                    alertify.success("Successful upload");
                  }, 1500);
                }
              },
              (error) => {
                this.disabled_button = false;

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
            );
        }
      });
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
  },
};
</script>
