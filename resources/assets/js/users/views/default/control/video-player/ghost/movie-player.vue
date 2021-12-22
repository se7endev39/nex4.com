<template>
  <div>
    <div class="loader" v-if="spinner_load">
      <loader></loader>
    </div>

    <div class="wolf-player" v-if="!spinner_load">
      <div class="col-12 col-md-8 offset-md-2 mt-5">
        <div class="jw-player" v-if="!data.embed">
          <div id="movie-player" style="position: relative"></div>
          <div class="firstLoader" v-if="loadPlayerFirst">
            <loader
              style="
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              "
            ></loader>
          </div>
          <div class="changeLoader" v-if="loadPlayerChange">
            <loader
              style="
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              "
            ></loader>
          </div>
        </div>

        <div class="emebd-section" v-if="data.embed">
          <div class="embed-provider-list">
            <div class="row">
              <div
                class="provider-item col-auto ml-3"
                v-for="(item, index) in data.playlist"
                :key="index"
                @click="ChangeEmbed(item)"
                :class="{ active: EmbedActiveCode.embed_id === item.embed_id }"
              >
                <img
                  :src="item.embed_provider_logo"
                  :alt="item.embed_provider_name"
                  width="45"
                />
              </div>
            </div>
          </div>
          <div class="embed-player" v-html="EmbedActiveCode.embed_code"></div>
        </div>

        <div class="episode-details d-inline mt-3">
          <div class="episode-name mt-1">
            <div class="text">
              <p>{{ data.current_movie.name }}</p>
            </div>
          </div>

          <div class="list-info">
            <ul class="list-unstyled">
              {{
                data.current_movie.genre
              }}

              <li class="split m-3">|</li>

              <li class="movie-genre">
                {{ data.current_movie.year }}
              </li>
              <li class="split m-3">|</li>
              <li class="movie-runtime">
                {{ data.current_movie.runtime }}
              </li>
            </ul>

            <div class="overview">
              <p>{{ data.current_movie.overview }}</p>
            </div>
          </div>
        </div>

        <div class="suggestion mb-5" v-if="data.suggestion !== null">
          <h5>
            {{ $t("show.similar") }}
          </h5>
          <carousel
            class="list-carousel"
            navigationPrevLabel='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 129 129" enable-background="new 0 0 129 129" width="100%" class="arrow-right-svg"><g><g>
                                                                <path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z" data-original="#000000" class="active-path" data-old_color="#ffffff" fill="#ffffff"/>
                                                              </g></g> </svg>'
            navigationNextLabel='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 129 129" enable-background="new 0 0 129 129" width="100%" class="arrow-left-svg"><g transform="matrix(-1 1.22465e-16 -1.22465e-16 -1 129 129)"><g>
                                                                <path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z" data-original="#000000" class="active-path" data-old_color="#ffffff" fill="#ffffff"/>
                                                              </g></g> </svg>'
            :navigationEnabled="true"
            :paginationEnabled="false"
            :autoplay="false"
            easing="linear"
            :scrollPerPage="true"
            :perPageCustom="[
              [220, 1],
              [520, 2],
              [768, 3],
              [1024, 4],
              [1300, 4],
            ]"
          >
            <slide
              v-for="(item, index) in data.suggestion"
              :key="index"
              class="col-6 col-md-4 col-lg-2 col-xxl-1-5 m-2 animation"
            >
              <div
                class="movie"
                @click="CHANGE_MOVIE(item.id)"
                style="cursor: pointer"
              >
                <progressive-img
                  :src="item.poster"
                  :alt="item.name"
                  width="100%"
                  :blur="1"
                  v-if="item.cloud === 'local'"
                />
                <progressive-img
                  :src="item.poster"
                  :alt="item.name"
                  width="100%"
                  :blur="1"
                  v-if="item.cloud === 'aws'"
                />

                <div class="title mt-1">
                  <h6>
                    <strong> {{ item.name }} </strong>
                  </h6>
                  <small class="text-muted">{{ item.genre }}</small>
                </div>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Carousel, Slide } from "vue-carousel";
import loader from "../../utils/loader";

export default {
  name: "movie-player",
  components: {
    Carousel,
    Slide,
    loader,
  },
  data() {
    return {
      episode_title: "",
      series_title: "",
      url_subtitle: "",
      seasonHide: true,
      active: "",
      activeSeason: "",
      episode_changed: false,
      timeRequest: 20,
      loadPlayerFirst: true,
      loadPlayerChange: false,
      stop_player: false,
      jwPlayer: null,
      EmbedActiveCode: {},
    };
  },

  computed: mapState({
    data: (state) => state.player.movie_data,
    spinner_load: (state) => state.player.player_spinner,
  }),

  mounted() {
    this.$store.dispatch("GHOST_LOAD_MOVIE_PLAYER", this.$route.params.id);
  },

  watch: {
    data() {
      if (!this.data.embed) {
        // Runtime format
        if (this.data.current_movie.runtime <= 60) {
          this.data.current_movie.runtime =
            this.data.current_movie.runtime + "m";
        } else if (this.data.current_movie.runtime >= 60) {
          const minutes = this.data.current_movie.runtime % 60;
          const hours = Math.floor(this.data.current_movie.runtime / 60);
          this.data.current_movie.runtime = hours + "h " + minutes + "m";
        }

        // Replice special characters
        this.data.current_movie.genre = this.data.current_movie.genre.replace(
          /-/g,
          ", "
        );

        if (!this.loadPlayerChange) {
          this.loadPlayerFirst = true;
        }

        // Mute change on movie
        if (this.jwPlayer !== null) {
          jwplayer().setMute(true);
        }

        setTimeout(() => {
          this.jwPlayer = jwplayer("movie-player").setup({
            playlist: this.data.playlist,
            cast: {},
            autostart: true,
            advertising: {
              client: "vast",
            },
            sharing: {
              sites: ["reddit", "facebook", "twitter"],
            },
          });

          // Load custom video file on error
          this.jwPlayer.on("error", () => {
            this.jwPlayer.load({
              file: "//content.jwplatform.com/videos/7RtXk3vl-52qL9xLP.mp4",
              image: "//content.jwplatform.com/thumbs/7RtXk3vl-480.jpg",
            });
            player.play();
          });

          // Check subtitle
          this.jwPlayer.on("ready", () => {
            jwplayer().setMute(false);
            this.loadPlayerFirst = false;
            this.loadPlayerChange = false;
          });
        }, 500);
      } else {
        this.EmbedActiveCode = this.data.playlist[0];
      }
    },
  },

  methods: {
    CHANGE_MOVIE(id) {
      this.loadPlayerChange = true;
      this.$store.dispatch("GHOST_LOAD_MOVIE_PLAYER", id);
    },
    ChangeEmbed(item) {
      this.EmbedActiveCode = item;
    },
  },
};
</script>
