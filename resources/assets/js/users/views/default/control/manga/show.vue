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

    <div class="show_item" v-if="data != null">
      <!-- END Collection component -->

      <div class="exit-icon" @click="$Helper.back()">
        <exit-button></exit-button>
      </div>

      <!-- Exit Button -->

      <div class="show_item__body p-md-5">
        <!-- END Control Panel -->

        <div class="hidden-sm-down body__background-sm-up">
          <img
            :src="'/storage/backdrops/original_' + data.mangas_backdrop"
            :alt="data.mangas_name"
            class="backdrop"
            width="100%"
            v-if="data.mangas_cloud === 'local'"
          />
          <img
            :src="lg_backdrop + data.mangas_backdrop"
            :alt="data.mangas_name"
            class="backdrop"
            width="100%"
            v-if="data.mangas_cloud === 'aws'"
          />
        </div>

        <div class="hidden-md-up body__background-sm-down">
          <img
            :src="'/storage/backdrops/original_' + data.mangas_backdrop"
            :alt="data.mangas_name"
            class="backdrop"
            width="100%"
            v-if="data.mangas_cloud === 'local'"
          />
          <img
            :src="lg_backdrop + data.mangas_backdrop"
            :alt="data.mangas_name"
            class="backdrop"
            width="100%"
            v-if="data.mangas_cloud === 'aws'"
          />
        </div>

        <!-- END Background image -->

        <div class="col-12 show_item__overview">
          <div class="row">
            <div class="col-5 col-md-3 col-xl-2 mt-3 poster-sm-down">
              <div class="poster">
                <progressive-img
                  :src="'/storage/posters/600_' + data.mangas_poster"
                  placeholder="/themes/default/img/loader-image.png"
                  :alt="data.mangas_name"
                  width="100%"
                  :aspect-ratio="1.5"
                  :blur="0"
                  v-if="data.mangas_cloud === 'local'"
                />
                <progressive-img
                  :src="md_poster + data.mangas_poster"
                  placeholder="/themes/default/img/loader-image.png"
                  :alt="data.mangas_name"
                  width="100%"
                  :aspect-ratio="1.5"
                  :blur="0"
                  v-if="data.mangas_cloud === 'aws'"
                />
              </div>
            </div>

            <div class="col-12 col-md-8 mt-3 content-sm-down">
              <div class="__title">
                <div class="col-12 p-0">
                  <h5>
                    <strong>{{ data.mangas_name }}</strong>
                  </h5>

                  <div class="year-genre mb-2">
                    <p class="genre">{{ data.mangas_genre }}</p>
                    <span class="dot">|</span>
                    <p class="year">{{ data.mangas_year }}</p>
                  </div>

                  <!-- END Name -->
                  <p>{{ data.mangas_desc }}</p>
                  <!-- END Overview -->
                </div>
              </div>

              <div class="__more-details">
                <div class="col-12 p-0 rate">
                  <h1>
                    {{ data.mangas_rate }}
                    <small>/10</small>
                  </h1>
                </div>

                <!-- END Rate -->
              </div>
              <div
                class="col-12 p-0 mt-5 hidden-xs-down __btn-control"
                v-if="data.chapters.length > 0"
              >
                <div class="btn-group">
                  <router-link
                    :to="{
                      name: data.mangas_users_only
                        ? 'show-chapter'
                        : 'ghost-show-chapter',
                      params: {
                        id: data.mangas_id,
                        chapter_id: data.chapters[0].manga_chapters_id,
                      },
                    }"
                    class="btn btn-md-up btn-primary btn-play"
                    role="button"
                  >
                    {{ data.chapters[0].manga_chapters_number }} chapters
                  </router-link>
                </div>
              </div>
              <div
                class="col-12 p-0 mt-5 hidden-sm-up __btn-control"
                v-if="data.chapters.length > 0"
              >
                <div class="btn-group">
                  <router-link
                    :to="{
                      name: data.mangas_users_only
                        ? 'show-chapter'
                        : 'ghost-show-chapter',
                      params: {
                        id: data.mangas_id,
                        chapter_id: data.chapters[0].manga_chapters_id,
                      },
                    }"
                    class="btn btn-primary btn-play"
                    role="button"
                  >
                    {{ data.chapters[0].manga_chapters_number }} chapters
                  </router-link>
                </div>
              </div>

              <div
                class="show_item__chapters mt-20"
                v-if="data.chapters.length > 0"
              >
                <div class="header">
                  <h3>Latest chapters</h3>
                </div>
                <div class="body">
                  <div class="row">
                    <div
                      class="col-6 col-lg-3 col-xl-2"
                      v-for="(item_chapter, index_chapter) in data.chapters"
                      :key="index_chapter"
                    >
                      <router-link
                        :to="{
                          name: data.mangas_users_only
                            ? 'show-chapter'
                            : 'ghost-show-chapter',
                          params: {
                            id: data.mangas_id,
                            chapter_id: item_chapter.manga_chapters_id,
                          },
                        }"
                        class="item"
                      >
                        <div class="poster">
                          <img
                            :src="item_chapter.manga_chapters_poster"
                            :alt="item_chapter.manga_chapters_name"
                            width="100%"
                            v-if="item_chapter.manga_chapters_cloud == 'local'"
                          />
                          <img
                            :src="md_manga + item_chapter.manga_chapters_poster"
                            :alt="item_chapter.manga_chapters_name"
                            width="100%"
                            v-if="item_chapter.manga_chapters_cloud == 'aws'"
                          />
                        </div>
                        <div class="title">
                          <h6>
                            {{ item_chapter.manga_chapters_number }}
                            {{ item_chapter.manga_chapters_name }}
                          </h6>
                        </div>
                      </router-link>
                    </div>
                  </div>
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
import exitButton from "../utils/exit-button.vue";
export default {
  data() {
    return {
      animation: false,
    };
  },

  components: {
    "exit-button": exitButton,
  },

  computed: mapState({
    data: (state) => state.manga.show,
    loading: (state) => state.manga.loading,
    showSearchPageEvent: (state) => state.event.show_search_page,
  }),

  beforeDestroy() {
    this.$store.commit("CLEAR_MANGA_SHOW_DATA");
  },

  mounted() {
    this.$store.dispatch("GET_MANGA_DETAILS", this.$route.params.id);
  },

  watch: {
    data() {
      if (this.data.mangas_genre !== null) {
        // Replice special characters
        this.data.mangas_genre = this.data.mangas_genre.replace(/-/g, ", ");
      }
      // Set title
      document.title = this.data.mangas_name;
    },
    showSearchPageEvent() {
      if (!this.showSearchPageEvent) {
        this.$store.commit("SHOW_SEARCH_PAGE");
      }
    },
  },
};
</script>
