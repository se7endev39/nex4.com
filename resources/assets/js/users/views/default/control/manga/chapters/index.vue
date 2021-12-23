<template>
  <div>
    <div class="spinner-load" v-if="loading">
      <div class="hidden-md-up phone">
        <div id="main">
          <span class="spinner"></span>
        </div>
      </div>

      <div class="hidden-sm-down other">
        <div id="main">
          <span class="spinner"></span>
        </div>
      </div>
    </div>

    <div class="manga-page" v-if="data != null">
      <div class="manga-content-player">
        <div
          class="manga-content-player__sidebar"
          :class="
            active_side_bar ? 'manga-sidebar-active' : 'manga-sidebar-inactive'
          "
        >
          <div class="header">
            <div class="search">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control manga-custom-input"
                  placeholder="Search by number or name"
                  aria-label="search"
                  aria-describedby="basic-addon1"
                  v-model="search_query"
                />
              </div>
            </div>
          </div>
          <div class="body">
            <div class="content e-scroll">
              <div
                class="item"
                v-for="(item, index) in filterChapters"
                :key="index"
              >
                <div
                  class="chapter"
                  :class="
                    item.manga_chapters_id == $route.params.chapter_id
                      ? 'active'
                      : ''
                  "
                  @click="openChapter(item.manga_chapters_id)"
                >
                  <div class="name">
                    <span>{{ item.manga_chapters_number }}</span>
                    <span v-if="item.manga_chapters_name !== null">
                      - {{ item.manga_chapters_name }}</span
                    >
                  </div>
                  <div class="date">
                    <small>
                      {{ new Date(item.created_at) | date("dd MMMM y") }}</small
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="manga-content-player__content"
          :class="
            active_side_bar ? 'manga-content-active' : 'manga-content-inactive'
          "
        >
          <div
            class="header e-scroll"
            :class="
              active_side_bar
                ? 'manga-content-active'
                : 'manga-content-inactive'
            "
          >
            <button
              class="chapter-page-button mr-2 d-none d-md-block"
              @click="zoomInOut('out')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 0 24 24"
                width="20px"
                fill="#FFF"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"
                />
              </svg>
            </button>
            <button
              class="chapter-page-button mr-2"
              v-if="
                active_page_index <= data.chapters.chapters.length - 1 &&
                active_page_index !== 0
              "
              @click="
                openChapter(
                  data.chapters.chapters[active_page_index - 1]
                    .manga_chapters_id
                );
                active_page_index = active_page_index - 1;
              "
            >
              Prev chapter
            </button>

            <paginate
              :pageCount="data.current.images.length"
              :containerClass="'pagination'"
              :clickHandler="paginateButtonCallback"
            >
            </paginate>
            <button
              class="chapter-page-button ml-2"
              v-if="data.chapters.chapters.length - 1 > active_page_index"
              @click="
                openChapter(
                  data.chapters.chapters[active_page_index + 1]
                    .manga_chapters_id
                );
                active_page_index = active_page_index + 1;
              "
            >
              Next chapter
            </button>
            <button
              class="chapter-page-button ml-2 d-none d-md-block"
              @click="zoomInOut('in')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 0 24 24"
                width="20px"
                fill="#FFF"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                />
                <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
              </svg>
            </button>
          </div>
          <div class="body">
            <div class="chapter-loading-content" v-if="one_chapter_loading">
              <div class="spin">
                <div class="lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div class="chapter-content e-scroll">
              <section
                class="chapter-item item"
                :id="'page_' + item.manga_chapters_images_page"
                v-for="(item, index) in data.current.images"
                :key="index"
                :style="'width:' + zoom + '%'"
              >
                <div v-lazy-container="{ selector: 'img' }" class="image">
                  <img
                    :src="item.manga_chapters_images_path"
                    :alt="item.manga_chapters_images_page"
                    :data-src="item.manga_chapters_images_path"
                    width="100%"
                    v-if="item.manga_chapters_images_cloud === 'local'"
                  />
                  <img
                    :src="md_manga + item.manga_chapters_images_path"
                    :alt="item.manga_chapters_images_page"
                    :data-src="md_manga + item.manga_chapters_images_path"
                    width="100%"
                    v-if="item.manga_chapters_images_cloud === 'aws'"
                  />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div
        class="manga-sidebar-button"
        @click="active_side_bar = !active_side_bar"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 612 612"
          style="enable-background: new 0 0 612 612"
          xml:space="preserve"
        >
          <g>
            <g id="_x33__6_">
              <g>
                <path
                  d="M581.4,520.199H30.6c-16.891,0-30.6,13.709-30.6,30.6C0,567.691,13.709,581.4,30.6,581.4h550.8
				c16.891,0,30.6-13.709,30.6-30.602C612,533.908,598.291,520.199,581.4,520.199z M30.6,91.799h550.8
				c16.891,0,30.6-13.708,30.6-30.6c0-16.892-13.709-30.6-30.6-30.6H30.6C13.709,30.6,0,44.308,0,61.2
				C0,78.091,13.709,91.799,30.6,91.799z M581.4,275.399H30.6C13.709,275.399,0,289.108,0,306s13.709,30.6,30.6,30.6h550.8
				c16.891,0,30.6-13.709,30.6-30.6S598.291,275.399,581.4,275.399z"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Paginate from "vuejs-paginate";
import { dateFilter } from "vue-date-fns";

export default {
  data() {
    return {
      animation: false,
      search_query: "",
      search_data: [],
      chapter_active_page: 1,
      active_side_bar: false,
      active_page_index: 0,
      zoom: "none",
    };
  },
  filters: {
    date: dateFilter,
  },
  components: {
    Paginate,
  },

  computed: {
    ...mapState({
      data: (state) => state.manga.chapter_data,
      loading: (state) => state.manga.loading,
      one_chapter_loading: (state) => state.manga.one_chapter_loading,
    }),
    filterChapters() {
      return this.data.chapters.chapters.filter((chapter) =>
        `${chapter.manga_chapters_name} ${chapter.manga_chapters_number}`.includes(
          this.search_query
        )
      );
    },
  },

  watch: {
    $route: function () {
      if (this.$auth.isAuthenticated()) {
        this.$store.dispatch("GET_ONE_CHAPTER", {
          manga_id: this.$route.params.id,
          chapter_id: this.$route.params.chapter_id,
        });
      } else {
        this.$store.dispatch("GHOST_GET_ONE_CHAPTER", {
          manga_id: this.$route.params.id,
          chapter_id: this.$route.params.chapter_id,
        });
      }
    },
    data() {
      for (var i = 0; i < this.data.chapters.chapters.length; i++) {
        if (
          this.data.chapters.chapters[i].manga_chapters_number ===
          this.data.current.manga_chapters_number
        ) {
          this.active_page_index = i;
        }
      }
    },
  },
  beforeDestroy() {
    this.$store.commit("CLEAR_MANGA_CHAPTER_DATA");
  },

  mounted() {
    if (this.$auth.isAuthenticated()) {
      this.$store.dispatch("GET_CHAPTER", {
        manga_id: this.$route.params.id,
        chapter_id: this.$route.params.chapter_id,
      });
    } else {
      this.$store.dispatch("GHOST_GET_CHAPTER", {
        manga_id: this.$route.params.id,
        chapter_id: this.$route.params.chapter_id,
      });
    }
  },
  methods: {
    moveToPage(id) {
      let pidel = document.getElementById(id);
      if (pidel) {
        pidel.scrollIntoView({ behavior: "smooth" });
      }
    },
    openChapter(chapter_id) {
      document.getElementById("page_1").scrollIntoView();
      this.$router
        .push({
          name: this.data.chapters.mangas_users_only
            ? "show-chapter"
            : "ghost-show-chapter",
          params: {
            id: this.data.chapters.mangas_id,
            chapter_id: chapter_id,
          },
        })
        .catch(() => {});
    },
    paginateButtonCallback(page) {
      document
        .getElementById("page_" + page)
        .scrollIntoView({ behavior: "smooth" });
    },
    zoomInOut(type) {
      if (type === "out") {
        if (this.zoom !== "none") {
          this.zoom = this.zoom <= 40 ? "none" : this.zoom - 20;
        }
      } else {
        if (this.zoom !== "none") {
          this.zoom =
            this.zoom >= 40 && this.zoom < 100 ? this.zoom + 20 : this.zoom;
        } else {
          this.zoom = 60;
        }
      }
    },
  },
};
</script>
