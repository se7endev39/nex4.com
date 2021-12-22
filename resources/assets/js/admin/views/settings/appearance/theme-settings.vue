<template>
  <div class="k1_manage_table">
    <div class="container">
      <div class="col-12 my-3 p-2">
        <h5 class="title p-2">Theme Manage</h5>
        <div class="m-2" id="manage-panel">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <router-link
                class="nav-link btn btn-sm btn-warning"
                role="button"
                :to="{ name: 'themes' }"
                >Themes</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link btn btn-sm btn-warning"
                role="button"
                :to="{ name: 'footer' }"
                >Footer</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link btn btn-sm btn-warning"
                role="button"
                :to="{ name: 'theme-settings' }"
                >Theme Configuration</router-link
              >
            </li>
          </ul>
        </div>
        <hr />
        <div class="col-12">
          <div class="form-group">
            <div class="col-12">
              <label>Register background</label>
            </div>
            <div class="col-12">
              <input
                type="file"
                id="background"
                name="background"
                v-validate="'image'"
                @change="readImage('background', 'backgroundFileImage')"
                class="inputfile"
              />
              <label id="posterLabel" for="background"
                >Choose a background
                <br />
              </label>
              <img
                src="/images/background-people.jpg"
                id="backgroundFileImage"
                width="200"
              />
              <span v-show="errors.has('background')" class="is-danger">{{
                errors.first("background")
              }}</span>
            </div>
          </div>
          <div class="form-group">
            <div class="col-12">
              <label>Logo</label>
            </div>
            <div class="col-12">
              <input
                type="file"
                id="logo"
                name="logo"
                v-validate="'image'"
                @change="readImage('logo', 'logoFileImage')"
                class="inputfile"
              />
              <label id="posterLabel" for="logo"
                >Choose a logo
                <br />
              </label>
              <img src="/images/logo.png" id="logoFileImage" width="200" />
              <span v-show="errors.has('logo')" class="is-danger">{{
                errors.first("logo")
              }}</span>
            </div>
          </div>
          <hr />
          <div class="col-12 mt-2">
            <div class="form-group">
              <div class="col-12">
                <button
                  class="btn btn-md btn-warning"
                  v-if="!disabled_button"
                  @click="UPLOAD()"
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

export default {
  data() {
    return {
      disabled_button: false,
    };
  },

  methods: {
    UPLOAD() {
      const background = document.querySelector("#background");
      const logo = document.querySelector("#logo");
      const formData = new FormData();
      if (typeof background.files[0] !== "undefined") {
        formData.append("background", background.files[0]);
      }
      if (typeof logo.files[0] !== "undefined") {
        formData.append("logo", logo.files[0]);
      }
      // Progress
      this.disabled_button = true;
      const progress = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      // Store data
      this.$validator.validateAll().then((result) => {
        if (result) {
          axios
            .post(
              "/api/admin/update/settings/appearance/theme/configuration",
              formData,
              progress
            )
            .then(
              (response) => {
                if (response.status === 200) {
                  alertify.logPosition("top right");
                  alertify.success(response.data.message);
                }
              },
              (error) => {
                this.error_message_api = error.response.data.message;
                alertify.logPosition("top right");
                alertify.error(error.response.data.message);
              }
            );
        }
      });
      this.disabled_button = false;
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
