<template>
  <div>
    <div class="spinner-load" v-if="spinner_loading">
      <Loader></Loader>
    </div>

    <!-- END spinner load -->
    <div class="k1_manage_table" v-else>
      <div class="m-2 p-3" id="manage-panel">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <router-link
              class="btn btn-md btn-warning"
              role="button"
              :to="{
                name: 'manga-manage',
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
              >Upload Chapter
            </router-link>
          </li>
        </ul>

        <div class="mt-3" v-if="showGroupButton">
          <div class="button-group">
            <button class="btn btn-sm btn-warning" @click="AVAILABLE_IT()">
              Available / Unavailable
            </button>
            <button
              class="btn btn-sm btn-warning"
              @click="DELETE()"
              v-if="!button_delete_loading"
            >
              Delete
            </button>
            <button class="btn btn-sm btn-warning" v-if="button_delete_loading">
              Loading
            </button>
          </div>
        </div>
      </div>

      <!-- END Control Panel -->
      <div v-if="data.chapters !== null">
        <div class="table-responsive mt-2">
          <div class="table table-hover">
            <thead>
              <th style="text-align: center">
                <input
                  type="checkbox"
                  id="select-all"
                  @click="ADD_ALL_TO_MULITSELECT()"
                />
              </th>
              <th>Poster</th>
              <th>Name</th>
              <th>Number</th>
              <th>Cloud</th>
              <th>Status</th>
              <th>Created date</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in data.chapters.data" :key="index">
                <td style="text-align: center">
                  <input
                    type="checkbox"
                    :id="item.manga_chapters_id"
                    @click="ADD_TO_MULITSELECT(item.manga_chapters_id, index)"
                  />
                </td>
                <td v-if="item.manga_chapters_cloud == 'local'">
                  <img
                    :src="item.manga_chapters_poster"
                    :alt="item.manga_chapters_name"
                    width="40"
                  />
                </td>
                <td v-if="item.manga_chapters_cloud == 'aws'">
                  <img
                    :src="md_manga + item.manga_chapters_poster"
                    :alt="item.manga_chapters_name"
                    width="40"
                  />
                </td>
                <td>{{ item.manga_chapters_name }}</td>
                <td>{{ item.manga_chapters_number }}</td>
                <td v-if="item.manga_chapters_cloud == 'local'">
                  Local Server
                </td>
                <td v-if="item.manga_chapters_cloud == 'aws'">AWS S3</td>
                <td v-if="item.show === 0">Unavailable</td>
                <td v-if="item.show === 1">Available</td>
                <td>{{ item.created_at }}</td>
                <td>
                  <div class="btn-group" role="group">
                    <router-link
                      class="btn btn-sm btn-warning btn-sm mr-2"
                      :to="{
                        name: 'chapter-edit',
                        params: { id: item.manga_chapters_id },
                      }"
                      role="button"
                      >Edit
                    </router-link>
                  </div>
                </td>
              </tr>
            </tbody>
          </div>
        </div>

        <!-- END Table -->

        <nav aria-label="pagination" class="m-4 p-1">
          <ul class="pagination">
            <li class="page-item" id="end">
              <a
                class="page-link"
                @click="
                  PAGINATION(
                    '/api/admin/get/manga/chapters/' + $route.params.id
                  )
                "
                >Begin</a
              >
            </li>
            <li
              class="page-item"
              id="prev"
              :class="{ disabled: data.chapters.prev_page_url === null }"
            >
              <a
                class="page-link"
                @click="PAGINATION(data.chapters.prev_page_url)"
                >Previous</a
              >
            </li>
            <li class="page-item">
              <a class="page-link"
                >{{ data.chapters.current_page }}/{{
                  data.chapters.last_page
                }}</a
              >
            </li>
            <li
              class="page-item"
              id="next"
              :class="{ disabled: data.chapters.next_page_url === null }"
            >
              <a
                class="page-link"
                @click="PAGINATION(data.chapters.next_page_url)"
                >Next</a
              >
            </li>
            <li class="page-item" id="end">
              <a
                class="page-link"
                @click="
                  PAGINATION(
                    '/api/admin/get/manga/chapters/' +
                      $route.params.id +
                      '?page=' +
                      data.chapters.last_page
                  )
                "
                >End</a
              >
            </li>
          </ul>
        </nav>

        <!-- END Nav -->
      </div>
      <div v-else>
        <div class="text-center mt-5 mr-5">
          <h4>Sorry no result were found</h4>
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
      error_message_subtitle: "",
      success_message_subtitle: "",
      disable_button: false,
      btn_delete: "",
      multi_select: [],
      showGroupButton: false,
    };
  },

  components: {
    Loader,
  },

  computed: mapState({
    data: (state) => state.manga.data,
    button_loading: (state) => state.manga.button_loading,
    spinner_loading: (state) => state.manga.spinner_loading,
    button_delete_loading: (state) => state.button_delete_loading,
  }),

  watch: {
    multi_select() {
      if (this.multi_select.length > 0) {
        this.showGroupButton = true;
      } else {
        this.showGroupButton = false;
        document.getElementById("select-all").checked = false;
      }
    },
  },

  created() {
    this.$store.dispatch("GET_ALL_CHAPTERS", this.$route.params.id);
  },

  methods: {
    DELETE() {
      swal({
        title: "Are you sure to delete ?",
        icon: "warning",
        text: "All videos and subtitles will removed!",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          for (let i = 0; i < this.multi_select.length; i++) {
            document.getElementById(this.multi_select[i].id).checked = false;
          }
          this.$store.dispatch("DELETE_CHAPTERS", {
            list: this.multi_select,
            id: this.$route.params.id,
          });
          this.multi_select = [];
        }
      });
    },

    PAGINATION(path_url) {
      this.$store.dispatch("GET_MANGA_PAGINATION", path_url);
    },

    AVAILABLE_IT() {
      for (let i = 0; i < this.multi_select.length; i++) {
        document.getElementById(this.multi_select[i].id).checked = false;
      }
      axios
        .post(
          "/api/admin/update/manga/chapters/" +
            this.$route.params.id +
            "/available",
          {
            list: this.multi_select,
          }
        )
        .then(
          (response) => {
            if (response.status === 200) {
              for (let i = 0; i < response.data.list.length; i++) {
                console.log(
                  this.data.chapters.data[response.data.list[i].key].show
                );
                this.data.chapters.data[response.data.list[i].key].show =
                  response.data.list[i].show;
              }
              this.multi_select = [];
            }
          },
          (error) => {
            this.multi_select = [];
          }
        );
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

    ADD_TO_MULITSELECT(item, key) {
      if (this.multi_select.length > 0) {
        for (let i = 0; i < this.multi_select.length; i++) {
          if (this.multi_select[i].id == item) {
            this.multi_select.splice(i, 1);
            return;
          }
        }
        this.multi_select.push({
          id: item,
          key: key,
        });
      } else {
        this.multi_select.push({
          id: item,
          key: key,
        });
      }
    },

    ADD_ALL_TO_MULITSELECT() {
      if (this.multi_select.length > 0) {
        for (let i = 0; i < this.multi_select.length; i++) {
          document.getElementById(this.multi_select[i].id).checked = false;
        }
        this.multi_select = [];
      } else {
        console.log(this.data.chapters.data);
        for (let i = 0; i < this.data.chapters.data.length; i++) {
          this.multi_select.push({
            id: this.data.chapters.data[i].manga_chapters_id,
            key: i,
          });
          document.getElementById(
            this.data.chapters.data[i].manga_chapters_id
          ).checked = true;
        }
      }
    },
  },
};
</script>
