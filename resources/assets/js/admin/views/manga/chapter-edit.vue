<template>
  <div class="episode-edit">
    <div class="spinner-load" v-if="spinner_loading">
      <Loader></Loader>
    </div>

    <div class="k1_manage_table" v-if="!spinner_loading">
      <h5 class="title p-2">{{ data.name }}</h5>

      <div class="col-12">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6">
            <div class="col-12 col-sm-12">
              <div class="form-group">
                <label>Name</label>
                <input
                  v-validate="'required|max:30'"
                  name="name"
                  class="form-control"
                  v-model="data.manga_chapters_name"
                  type="text"
                  placeholder="Name"
                />
                <span v-show="errors.has('name')" class="is-danger">{{
                  errors.first("name")
                }}</span>
              </div>
            </div>
            <div class="col-12 col-sm-12">
              <div class="form-group">
                <label>Number</label>
                <input
                  v-validate="'required|max:30'"
                  name="name"
                  class="form-control"
                  v-model="data.manga_chapters_number"
                  type="text"
                  placeholder="Name"
                />
                <span v-show="errors.has('name')" class="is-danger">{{
                  errors.first("name")
                }}</span>
              </div>
            </div>

            <div class="col-12 col-sm-6 mt-2">
              <div class="form-group" v-if="!button_loading">
                <button class="btn btn-md btn-warning" @click="UPDATE()">
                  Update
                </button>
              </div>
              <div class="form-group" v-else>
                <button class="btn btn-md btn-warning">Loading</button>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6">
            <div class="list row">
              <div
                class="col-sm-12 col-md-2 col-lg-3"
                v-for="(item, index) in data.images"
                :key="index"
              >
                <img
                  :src="item.manga_chapters_images_path"
                  alt="chapter"
                  width="100%"
                  v-if="item.manga_chapters_images_cloud === 'local'"
                />
                <img
                  :src="md_manga + item.manga_chapters_images_path"
                  alt="chapter"
                  width="100%"
                  v-if="item.manga_chapters_images_cloud === 'aws'"
                />
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
import Loader from "../components/loader";
export default {
  data() {
    return { button_loading: false };
  },
  components: {
    Loader,
  },
  computed: mapState({
    data: (state) => state.manga.chapter_data,
    spinner_loading: (state) => state.manga.spinner_loading,
  }),
  created() {
    this.$store.dispatch("GET_CHAPTER_DETAILS", this.$route.params.id);
  },

  methods: {
    UPDATE() {
      const formData = new FormData();
      formData.append("name", this.data.manga_chapters_name);
      formData.append("number", this.data.manga_chapters_number);
      const progress = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      // Store data
      this.button_loading = true;
      axios
        .post(
          "/api/admin/update/manga/chapters/" + this.$route.params.id,
          formData,
          progress
        )
        .then(
          (response) => {
            if (response.status === 200) {
              alertify.logPosition("top right");
              alertify.success("Successful upload");
              this.button_loading = false;
              this.$router.go(-1);
            }
          },
          (error) => {
            alertify.logPosition("top right");
            alertify.error(error.response.data.message);
            this.button_loading = false;
          }
        );
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
