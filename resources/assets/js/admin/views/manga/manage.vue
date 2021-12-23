<template>
  <div class="series-manage">
    <div class="k1_manage_table">
      <h5 class="title p-2">Series</h5>
      <div class="m-2" id="manage-panel">
        <div class="float-left mt-3" v-if="showGroupButton">
          <div class="button-group mt-2">
            <button class="btn btn-sm btn-warning" @click="USERS_ONLY(1)">
              Users only
            </button>
            <button class="btn btn-sm btn-warning" @click="USERS_ONLY(0)">
              For all
            </button>
          </div>
        </div>
        <ul class="nav nav-tabs">
          <li class="col col-md-4 offset-md-8">
            <div id="search">
              <input
                class="form-control mr-sm-2"
                type="text"
                v-model="query"
                placeholder="Search"
                @keyup="SEARCH"
              />
            </div>
          </li>
        </ul>
      </div>
      <!-- END Control Panel -->

      <div class="spinner-load" v-if="spinner_loading">
        <Loader></Loader>
      </div>

      <!-- END spinner load -->

      <div v-if="!spinner_loading">
        <div class="text-center" v-if="data.series === null">
          <h4>No result were found</h4>
        </div>

        <div v-else>
          <div
            class="table-responsive mt-2"
            v-if="
              Object.keys(data_search).length > 0 && data_search.manga !== null
            "
          >
            <div class="table table-hover">
              <thead>
                <th>Cover</th>
                <th>Name</th>
                <th>Year</th>
                <th>Cloud</th>
                <th>Watch</th>
                <th>Created date</th>
                <th>Updated date</th>
                <th>Control</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in data_search.manga" :key="index">
                  <td v-if="item.mangas_cloud == 'local'">
                    <img
                      :src="'/storage/posters/300_' + item.mangas_poster"
                      :alt="item.mangas_name"
                      width="40"
                    />
                  </td>
                  <td v-if="item.mangas_cloud == 'aws'">
                    <img
                      :src="sm_poster + item.mangas_poster"
                      :alt="item.mangas_name"
                      width="40"
                    />
                  </td>
                  <td>{{ item.mangas_name }}</td>
                  <td>{{ item.mangas_year }}</td>
                  <td v-if="item.mangas_cloud == 'local'">Local Server</td>
                  <td v-if="item.mangas_cloud == 'aws'">AWS S3</td>
                  <td v-if="item.mangas_users_only">Users</td>
                  <td v-else>All</td>
                  <td>{{ item.created_at }}</td>
                  <td>{{ item.updated_at }}</td>
                  <td>
                    <div class="btn-group" role="group">
                      <router-link
                        class="btn btn-sm btn-warning btn-sm mr-2"
                        :to="{
                          name: 'manga-edit',
                          params: { id: item.mangas_id },
                        }"
                        role="button"
                        >Edit
                      </router-link>
                      <router-link
                        class="btn btn-sm btn-warning btn-sm mr-2"
                        :to="{
                          name: 'chapters-manage',
                          params: { id: item.mangas_id },
                        }"
                        role="button"
                        >Show
                      </router-link>
                      <button
                        v-if="!button_loading"
                        class="btn btn-sm btn-danger btn-sm mr-2"
                        @click="DELETE(item.mangas_id, index)"
                        :id="item.mangas_id"
                      >
                        Delete
                      </button>
                      <button
                        v-if="button_loading === item.mangas_id"
                        class="btn btn-sm btn-danger btn-sm mr-2"
                        disabled
                      >
                        <i id="btn-progress"></i> Loading
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </div>
          </div>

          <!-- END Default Table -->

          <div
            class="table-responsive mt-2"
            v-if="
              data_search.manga === null ||
              Object.keys(data_search).length === 0
            "
          >
            <div class="table table-hover">
              <thead>
                <th style="text-align: center">
                  <input
                    type="checkbox"
                    id="select-all"
                    @click="ADD_ALL_TO_MULITSELECT()"
                  />
                </th>
                <th>Cover</th>
                <th>Name</th>
                <th>Year</th>
                <th>Cloud</th>
                <th>Watch</th>
                <th>Created date</th>
                <th>Updated date</th>
                <th>Control</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in data.manga.data" :key="index">
                  <td style="text-align: center">
                    <input
                      type="checkbox"
                      :id="item.mangas_id"
                      @click="ADD_TO_MULITSELECT(item.mangas_id, index)"
                    />
                  </td>
                  <td v-if="item.mangas_cloud == 'local'">
                    <img
                      :src="'/storage/posters/300_' + item.mangas_poster"
                      :alt="item.mangas_name"
                      width="40"
                    />
                  </td>
                  <td v-if="item.mangas_cloud == 'aws'">
                    <img
                      :src="sm_poster + item.mangas_poster"
                      :alt="item.mangas_name"
                      width="40"
                    />
                  </td>
                  <td>{{ item.mangas_name }}</td>
                  <td>{{ item.mangas_year }}</td>
                  <td v-if="item.mangas_cloud == 'local'">Local Server</td>
                  <td v-if="item.mangas_cloud == 'aws'">AWS S3</td>
                  <td v-if="item.mangas_users_only">Users</td>
                  <td v-else>All</td>
                  <td>{{ item.created_at }}</td>
                  <td>{{ item.updated_at }}</td>
                  <td>
                    <div class="btn-group" role="group">
                      <router-link
                        class="btn btn-sm btn-warning btn-sm mr-2"
                        :to="{
                          name: 'manga-edit',
                          params: { id: item.mangas_id },
                        }"
                        role="button"
                        >Edit
                      </router-link>
                      <router-link
                        class="btn btn-sm btn-warning btn-sm mr-2"
                        :to="{
                          name: 'chapters-manage',
                          params: { id: item.mangas_id },
                        }"
                        role="button"
                        >Show
                      </router-link>
                      <button
                        v-if="!button_loading"
                        class="btn btn-sm btn-danger btn-sm mr-2"
                        @click="DELETE(item.mangas_id, index)"
                        :id="item.mangas_id"
                      >
                        Delete
                      </button>
                      <button
                        v-if="button_loading === item.mangas_id"
                        class="btn btn-sm btn-danger btn-sm mr-2"
                        disabled
                      >
                        <i id="btn-progress"></i> Loading
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </div>
          </div>

          <nav
            aria-label="pagination"
            class="m-4 p-1"
            v-if="
              data_search.series === null ||
              Object.keys(data_search).length === 0
            "
          >
            <ul class="pagination">
              <li class="page-item" id="end">
                <a class="page-link" @click="PAGINATION('/api/admin/get/manga')"
                  >Begin</a
                >
              </li>
              <li
                class="page-item"
                id="prev"
                :class="{ disabled: data.manga.prev_page_url === null }"
              >
                <a
                  class="page-link"
                  @click="PAGINATION(data.manga.prev_page_url)"
                  >Previous</a
                >
              </li>
              <li class="page-item">
                <a class="page-link"
                  >{{ data.manga.current_page }}/{{ data.manga.last_page }}</a
                >
              </li>
              <li
                class="page-item"
                id="next"
                :class="{ disabled: data.manga.next_page_url === null }"
              >
                <a
                  class="page-link"
                  @click="PAGINATION(data.manga.next_page_url)"
                  >Next</a
                >
              </li>
              <li class="page-item" id="end">
                <a
                  class="page-link"
                  @click="
                    PAGINATION(
                      '/api/admin/get/manga?page=' + data.manga.last_page
                    )
                  "
                  >End</a
                >
              </li>
            </ul>
          </nav>

          <!-- END Pagination  -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Loader from "../components/loader";

export default {
  data() {
    return {
      query: "",
      multi_select: [],
      showGroupButton: false,
    };
  },
  components: {
    Loader,
  },
  computed: mapState({
    data: (state) => state.manga.data,
    data_search: (state) => state.manga.data_search,
    button_loading: (state) => state.manga.button_loading,
    spinner_loading: (state) => state.manga.spinner_loading,
  }),

  created() {
    this.$store.commit("CLEAN_SEARCH_MANGA");
    this.$store.dispatch("GET_ALL_MANGA");
  },

  watch: {
    multi_select(item) {
      if (this.multi_select.length > 0) {
        this.showGroupButton = true;
      } else {
        this.showGroupButton = false;
        document.getElementById("select-all").checked = false;
      }
    },
  },

  methods: {
    DELETE(id, key) {
      swal({
        title: "Are you sure to delete ?",
        icon: "warning",
        text: "All videos and subtitles will removed!",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          this.$store.dispatch("DELETE_MANGA", {
            id,
            key,
          });
        }
      });
    },

    PAGINATION(path_url) {
      this.$store.dispatch("GET_MANGA_PAGINATION", path_url);
    },

    SEARCH() {
      if (this.query.length > 0) {
        this.$store.dispatch("GET_MANGA_SEARCH", this.query);
      } else {
        this.data_search.manga = null;
      }
    },

    USERS_ONLY(vai) {
      for (let i = 0; i < this.multi_select.length; i++) {
        document.getElementById(this.multi_select[i].id).checked = false;
      }
      axios
        .post("/api/admin/update/manga/users-only", {
          list: this.multi_select,
          users_only: vai,
        })
        .then(
          (response) => {
            if (response.status === 200) {
              for (let i = 0; i < response.data.list.length; i++) {
                this.data.manga.data[
                  response.data.list[i].key
                ].mangas_users_only = vai;
              }
              this.multi_select = [];
            }
          },
          (error) => {
            this.multi_select = [];
          }
        );
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
        for (let i = 0; i < this.data.manga.data.length; i++) {
          this.multi_select.push({
            id: this.data.manga.data[i].mangas_id,
            key: i,
          });
          document.getElementById(
            this.data.manga.data[i].mangas_id
          ).checked = true;
        }
      }
    },
  },
};
</script>
