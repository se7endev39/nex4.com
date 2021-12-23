<template>
  <div>
    <div class="spinner-load" v-if="spinner_loading">
      <Loader></Loader>
    </div>

    <div class="k1_manage_table" v-if="!spinner_loading">
      <h5 class="title p-2">{{ data.manga.mangas_name }}</h5>

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

          <li class="nav-item">
            <router-link
              class="btn btn-md btn-warning ml-1"
              role="button"
              :to="{
                name: 'new-manga-chapter',
                params: { id: this.$route.params.id },
              }"
            >
              Upload chapter
            </router-link>
          </li>
        </ul>
      </div>

      <!-- END Control Panel -->
      <div class="col-12">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="form-group">
              <div class="col-2">
                <label>Name</label>
              </div>
              <div class="col-12">
                <input
                  v-validate="'required|max:60'"
                  name="name"
                  class="form-control"
                  v-model="data.manga.mangas_name"
                  type="text"
                  placeholder="Name"
                />
                <span v-show="errors.has('name')" class="is-danger">{{
                  errors.first("name")
                }}</span>
              </div>
            </div>
            <div class="form-group">
              <div class="col-2">
                <label>Years</label>
              </div>
              <div class="col-12">
                <input
                  v-validate="'required|numeric|max:4'"
                  name="year"
                  class="form-control"
                  v-model="data.manga.mangas_year"
                  type="text"
                  placeholder="Years"
                />
                <span v-show="errors.has('year')" class="is-danger">{{
                  errors.first("year")
                }}</span>
              </div>
            </div>

            <div class="form-group">
              <div class="col-2">
                <label>Genres</label>
              </div>
              <div class="col-12">
                <select
                  multiple
                  class="form-control"
                  name="genres"
                  v-model="genres"
                  id="exampleSelect2"
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
            </div>

            <div class="form-group">
              <div class="col-2">
                <label>Overview</label>
              </div>
              <div class="col-12">
                <textarea
                  v-validate="'required'"
                  name="overview"
                  class="form-control"
                  v-model="data.manga.mangas_desc"
                  type="text"
                  placeholder="Overview"
                />
                <span v-show="errors.has('overview')" class="is-danger"
                  >{{ errors.first("overview") }}
                </span>
              </div>
            </div>
            <div class="form-group">
              <div class="col-2">
                <label>Rate</label>
              </div>
              <div class="col-12">
                <input
                  v-validate="'required|decimal|max:5'"
                  name="rate"
                  class="form-control"
                  v-model="data.manga.mangas_rate"
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
              <div class="col-12 col-sm-12">
                <input
                  type="file"
                  id="poster"
                  name="poster"
                  v-validate="'image'"
                  @change="readImage('poster', 'posterFileImage')"
                  class="inputfile"
                />
                <label id="posterLabel" for="poster"
                  >Choose a poster
                  <br />
                </label>
                <img
                  :src="'/storage/posters/300_' + data.manga.mangas_poster"
                  id="posterFileImage"
                  width="100%"
                  v-if="data.manga.mangas_cloud == 'local'"
                />
                <img
                  :src="md_poster + data.manga.mangas_poster"
                  :alt="data.manga.mangas_poster"
                  id="posterFileImage"
                  width="300px"
                  v-if="data.manga.mangas_cloud == 'aws'"
                />
                <span v-show="errors.has('poster')" class="is-danger">{{
                  errors.first("poster")
                }}</span>
              </div>
            </div>

            <div class="form-group">
              <div class="col-12 col-sm-4">
                <label>Backdrop</label>
              </div>
              <div class="col-12 col-sm-12">
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
                <div v-if="data.manga.mangas_backdrop !== null">
                  <img
                    :src="
                      '/storage/backdrops/300_' + data.manga.mangas_backdrop
                    "
                    id="backdropFileImage"
                    width="100%"
                    v-if="data.manga.mangas_cloud == 'local'"
                  />
                  <img
                    :src="md_backdrop + data.manga.mangas_backdrop"
                    :alt="data.manga.mangas_backdrop"
                    id="backdropFileImage"
                    width="100%"
                    v-if="data.manga.mangas_cloud == 'aws'"
                  />
                </div>
                <div v-else>
                  <img
                    src=""
                    id="backdropFileImage"
                    width="100%"
                    style="display: none"
                  />
                </div>
                <span v-show="errors.has('backdrop')" class="is-danger">{{
                  errors.first("backdrop")
                }}</span>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="form-group">
              <div class="col-6">
                <button class="btn btn-md btn-warning" @click="UPDATE()">
                  Update
                </button>
              </div>
            </div>
          </div>

          <div class="upload-modal" v-if="showProgress">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-body p-4">
                  <div class="seriesapi" v-if="seriesedit">
                    <div class="progress mt-2">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        :style="{
                          width: percentCompleted + '%',
                          height: '6px',
                        }"
                        :aria-valuenow="percentCompleted"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p class="is-danger">{{ error_message_edit }}</p>
                    <p class="is-success">{{ success_message_edit }}</p>
                    <hr />
                  </div>

                  <!-- END seriespai -->
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
const alertify = require("alertify.js");
import { mapState } from "vuex";
import Loader from "../components/loader";
export default {
  data() {
    return {
      video_link: null,
      genres: [],
      search_query: "",
      showProgress: false,
      seriesedit: false,
      percentCompleted: 0,
      selectedCast3: null,
      error_message_edit: "",
      success_message_edit: "",
    };
  },

  components: {
    Loader,
  },
  computed: mapState({
    data: (state) => state.manga.data,
    genre_list: (state) => state.genres.data,
    button_loading: (state) => state.manga.button_loading,
    spinner_loading: (state) => state.manga.spinner_loading,
  }),

  mounted() {
    this.$store.dispatch("GET_MANGA", this.$route.params.id);
    this.$store.dispatch("GET_ALL_GENRES");
  },
  methods: {
    UPDATE() {
      const poster = document.querySelector("#poster");
      const backdrop = document.querySelector("#backdrop");
      const formData = new FormData();
      formData.append("id", this.data.manga.mangas_id);
      formData.append("name", this.data.manga.mangas_name);
      formData.append("year", this.data.manga.mangas_year);
      formData.append("genres", this.genres);
      formData.append("overview", this.data.manga.mangas_desc);
      formData.append("rate", this.data.manga.mangas_rate);
      formData.append("poster", poster.files[0]);
      formData.append("backdrop", backdrop.files[0]);
      this.$validator.validateAll().then(
        (result) => {
          if (result) {
            this.showProgress = true;
            this.seriesedit = true;
            var progress = {
              headers: {
                "content-type": "multipart/form-data",
              },
              onUploadProgress: (progressEvent) => {
                this.percentCompleted = Math.round(
                  (progressEvent.loaded * 100.0) / progressEvent.total
                );
              },
            };
            const _self = this;
            axios
              .post("api/admin/update/manga", formData, progress)
              .then((response) => {
                if (response.status === 200) {
                  this.success_message_edit = response.data.message;
                  setTimeout(() => {
                    this.$router.go(-1);
                  }, 2000);
                }
              });
          }
        },
        (error) => {
          this.error_message_edit = response.data.message;
        }
      );
    },

    ADD_ACTOR(key, type) {
      if (type === "default") {
        this.data.cast.push(this.data_actors.actors.data[key]);
        alertify.logPosition("top right");
        alertify.success(
          this.data_actors.actors.data[key].name + " has been added to cast"
        );
      } else if (type === "search") {
        this.data.cast.push(this.data_actors_search.actors[key]);
        alertify.logPosition("top right");
        alertify.success(
          this.data_actors_search.actors[key].name + " has been added to cast"
        );
      }
    },

    DELETE_ACTOR(key) {
      this.data.cast.splice(key, 1);
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
