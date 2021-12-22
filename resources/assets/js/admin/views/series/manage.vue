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
              Object.keys(data_search).length > 0 && data_search.series !== null
            "
          >
            <div class="table table-hover">
              <thead>
                <th>Cover</th>
                <th>Name</th>
                <th>Year</th>
                <th>Cloud</th>
                <th>Category</th>
                <th>Watch</th>
                <th>Created date</th>
                <th>Updated date</th>
                <th>Control</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in data_search.series" :key="index">
                  <td v-if="item.cloud == 'local'">
                    <img
                      :src="'/storage/posters/300_' + item.poster"
                      :alt="item.name"
                      width="40"
                    />
                  </td>
                  <td v-if="item.cloud == 'aws'">
                    <img
                      :src="sm_poster + item.poster"
                      :alt="item.name"
                      width="40"
                    />
                  </td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.year }}</td>
                  <td v-if="item.cloud == 'local'">Local Server</td>
                  <td v-if="item.cloud == 'aws'">AWS S3</td>
                  <td>{{ item.category }}</td>
                  <td v-if="item.t_users_only">Users</td>
                  <td v-else>All</td>
                  <td>{{ item.created_at }}</td>
                  <td>{{ item.updated_at }}</td>
                  <td>
                    <div class="btn-group" role="group">
                      <router-link
                        class="btn btn-sm btn-warning btn-sm mr-2"
                        :to="{
                          name: 'analysis-series',
                          params: { id: item.id },
                        }"
                        role="button"
                      >
                        Analysis
                      </router-link>
                      <button
                        class="btn btn-sm btn-warning btn-sm mr-2"
                        @click="ADD_TO_TOP(item.id, index)"
                        v-if="item.series_id !== item.id"
                        :id="item.id"
                      >
                        Top
                      </button>
                      <router-link
                        class="btn btn-sm btn-warning btn-sm mr-2"
                        :to="{ name: 'series_edit', params: { id: item.id } }"
                        role="button"
                        >Edit
                      </router-link>
                      <router-link
                        class="btn btn-sm btn-warning btn-sm mr-2"
                        :to="{
                          name: 'series_manage_id',
                          params: { id: item.id },
                        }"
                        role="button"
                        >Show
                      </router-link>
                      <button
                        v-if="!button_loading"
                        class="btn btn-sm btn-danger btn-sm mr-2"
                        @click="DELETE(item.id, index)"
                        :id="item.id"
                      >
                        Delete
                      </button>
                      <button
                        v-if="button_loading === item.id"
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
              data_search.series === null ||
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
                <th>Category</th>
                <th>Watch</th>
                <th>Created date</th>
                <th>Updated date</th>
                <th>Control</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in data.series.data" :key="index">
                  <td style="text-align: center">
                    <input
                      type="checkbox"
                      :id="item.id"
                      @click="ADD_TO_MULITSELECT(item.id, index)"
                    />
                  </td>
                  <td v-if="item.cloud == 'local'">
                    <img
                      :src="'/storage/posters/300_' + item.poster"
                      :alt="item.name"
                      width="40"
                    />
                  </td>
                  <td v-if="item.cloud == 'aws'">
                    <img
                      :src="sm_poster + item.poster"
                      :alt="item.name"
                      width="40"
                    />
                  </td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.year }}</td>
                  <td v-if="item.cloud == 'local'">Local Server</td>
                  <td v-if="item.cloud == 'aws'">AWS S3</td>
                  <td>{{ item.category }}</td>
                  <td v-if="item.t_users_only">Users</td>
                  <td v-else>All</td>
                  <td>{{ item.created_at }}</td>
                  <td>{{ item.updated_at }}</td>
                  <td>
                    <div class="btn-group" role="group">
                      <router-link
                        class="btn btn-sm btn-warning btn-sm mr-2"
                        :to="{
                          name: 'analysis-series',
                          params: { id: item.id },
                        }"
                        role="button"
                      >
                        Analysis
                      </router-link>
                      <button
                        class="btn btn-sm btn-warning btn-sm mr-2"
                        @click="ADD_TO_TOP(item.id, index)"
                        v-if="item.series_id !== item.id"
                        :id="item.id"
                      >
                        Top
                      </button>
                      <router-link
                        class="btn btn-sm btn-warning btn-sm mr-2"
                        :to="{ name: 'series_edit', params: { id: item.id } }"
                        role="button"
                        >Edit
                      </router-link>
                      <router-link
                        class="btn btn-sm btn-warning btn-sm mr-2"
                        :to="{
                          name: 'series_manage_id',
                          params: { id: item.id },
                        }"
                        role="button"
                        >Show
                      </router-link>
                      <button
                        v-if="!button_loading"
                        class="btn btn-sm btn-danger btn-sm mr-2"
                        @click="DELETE(item.id, index)"
                        :id="item.id"
                      >
                        Delete
                      </button>
                      <button
                        v-if="button_loading === item.id"
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
                <a
                  class="page-link"
                  @click="PAGINATION('/api/admin/get/series')"
                  >Begin</a
                >
              </li>
              <li
                class="page-item"
                id="prev"
                :class="{ disabled: data.series.prev_page_url === null }"
              >
                <a
                  class="page-link"
                  @click="PAGINATION(data.series.prev_page_url)"
                  >Previous</a
                >
              </li>
              <li class="page-item">
                <a class="page-link"
                  >{{ data.series.current_page }}/{{ data.series.last_page }}</a
                >
              </li>
              <li
                class="page-item"
                id="next"
                :class="{ disabled: data.series.next_page_url === null }"
              >
                <a
                  class="page-link"
                  @click="PAGINATION(data.series.next_page_url)"
                  >Next</a
                >
              </li>
              <li class="page-item" id="end">
                <a
                  class="page-link"
                  @click="
                    PAGINATION(
                      '/api/admin/get/series?page=' + data.series.last_page
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
    data: (state) => state.series.data,
    data_search: (state) => state.series.data_search,
    button_loading: (state) => state.series.button_loading,
    spinner_loading: (state) => state.series.spinner_loading,
  }),

  created() {
    this.$store.commit("CLEAN_SEARCH_SERIES");
    this.$store.dispatch("GET_ALL_SERIES");
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
          this.$store.dispatch("DELETE_SERIES", {
            id,
            key,
          });
        }
      });
    },

    PAGINATION(path_url) {
      this.$store.dispatch("GET_SERIES_PAGINATION", path_url);
    },

    SEARCH() {
      if (this.query.length > 0) {
        this.$store.dispatch("GET_SERIES_SEARCH", this.query);
      } else {
        this.data_search.series = null;
      }
    },

    ADD_TO_TOP(id, key) {
      this.$store.dispatch("ADD_SERIES_TO_TOP", {
        id,
        key,
      });
    },

    USERS_ONLY(vai) {
      for (let i = 0; i < this.multi_select.length; i++) {
        document.getElementById(this.multi_select[i].id).checked = false;
      }
      axios
        .post("/api/admin/update/series/users-only", {
          list: this.multi_select,
          users_only: vai,
        })
        .then(
          (response) => {
            if (response.status === 200) {
              for (let i = 0; i < response.data.list.length; i++) {
                this.data.series.data[response.data.list[i].key].t_users_only =
                  vai;
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
        for (let i = 0; i < this.data.series.data.length; i++) {
          this.multi_select.push({
            id: this.data.series.data[i].id,
            key: i,
          });
          document.getElementById(this.data.series.data[i].id).checked = true;
        }
      }
    },
  },
};
</script>
