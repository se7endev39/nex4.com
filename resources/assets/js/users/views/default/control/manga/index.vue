<template>
  <div class="xjkax">
    <div class="col-12">
      <div class="loader" v-if="loading">
        <loader></loader>
      </div>

      <div class="col-12" v-if="data.manga !== null">
        <div class="row">
          <div
            class="col-6 col-md-4 col-lg-3 col-xl-1-5 col-xxl-1-5 p-2 p-md-4"
            v-for="(item, index) in data.manga"
            :key="index"
          >
            <transition name="slide-down-fade">
              <div class="animation" v-show="showSlideUpAnimation">
                <div
                  class="poster"
                  @mouseover="ACTIVE_SLELECTED_MOVIE(item.mangas_id)"
                >
                  <router-link
                    :to="{ name: 'show-manga', params: { id: item.mangas_id } }"
                  >
                    <div class="poster__backdrop-image">
                      <progressive-img
                        :src="'/storage/posters/600_' + item.mangas_poster"
                        placeholder="/themes/default/img/loader-image.png"
                        :alt="item.mangas_nmae"
                        width="100%"
                        :aspect-ratio="1.5"
                        :blur="0"
                        v-if="item.mangas_cloud === 'local'"
                      />

                      <progressive-img
                        :src="md_poster + item.mangas_poster"
                        placeholder="/themes/default/img/loader-image.png"
                        :alt="item.mangas_nmae"
                        width="100%"
                        :aspect-ratio="1.5"
                        :blur="0"
                        v-if="item.mangas_cloud === 'aws'"
                      />

                      <transition name="fade">
                        <div
                          class="poster__backdrop_overlay-info"
                          v-if="active_manga === item.mangas_id"
                        ></div>
                      </transition>
                    </div>
                  </router-link>
                </div>

                <!-- END Poster -->

                <div class="mt-2">
                  <b> {{ item.mangas_name }} </b> <br />
                  <small class="text-muted" v-if="item.mangas_genre != null">{{
                    item.mangas_genre
                  }}</small>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>

      <div v-else>
        <div class="mt-5 text-center notfound">
          <h4>
            <notfound></notfound>

            <strong>{{ $t("home.sorry_no_result") }}</strong>
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { Carousel, Slide } from "vue-carousel";
import loader from "../utils/loader";
import notfound from "../utils/notfound";

export default {
  name: "kids",
  components: {
    Carousel,
    Slide,
    loader,
    notfound,
  },
  data() {
    return {
      active: null,
      active_manga: null,
      active_series: null,
      show_item: null,
      collection: {
        id: null,
        poster: null,
        name: null,
        type: null,
        index: null,
      },
      showSlideUpAnimation: false,
    };
  },
  computed: mapState({
    data: (state) => state.manga.data,
    loading: (state) => state.manga.loading,
  }),

  beforeRouteUpdate(to, from, next) {
    this.name = to.params.name;
    next();
  },
  mounted() {
    if (this.data.length == 0 || this.data === null) {
      this.$store.dispatch("GET_MANGA_LIST");
    }
    setTimeout(() => {
      this.showSlideUpAnimation = true;
    }, 100);
  },

  methods: {
    ACTIVE_SLELECTED_MOVIE(id) {
      this.active_manga = id;
    },
    ACTIVE_SLELECTED_SERIES(id) {
      this.active_series = id;
    },
  },
};
</script>
