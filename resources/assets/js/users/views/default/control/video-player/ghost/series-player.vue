<template>
  <div>
    <div class="loader" v-if="spinner_load">
      <loader></loader>
    </div>

    <div class="wolf-player" v-if="!spinner_load">
      <div class="col-12 col-md-8 offset-md-2 mt-5">
        <div class="jw-player" v-if="!data.embed">
          <div id="tvshow-player" style="position: relative"></div>
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
                  width="90"
                />
              </div>
            </div>
          </div>
          <div class="embed-player" v-html="EmbedActiveCode.embed_code"></div>
        </div>

        <div class="episode-details d-inline mt-3" v-if="!spinner_load">
          <div class="episode-name mt-1">
            <div class="text d-inline">
              <p>{{ data.current_episode.name }}</p>
            </div>
          </div>

          <div class="list-info">
            <ul class="list-unstyled">
              <li>
                {{ data.series.name }}
              </li>
              <li class="split m-3">|</li>

              <li class="episode-number">
                S{{ data.current_episode.season_number }} E{{
                  data.current_episode.episode_number
                }}
              </li>
            </ul>

            <div class="overview">
              <p>{{ data.current_episode.overview }}</p>
            </div>
          </div>
        </div>

        <div class="episode-list mb-5">
          <div class="dropdown m-2" v-if="!spinner_load">
            <button
              class="btn btn-sm btn-warning"
              data-toggle="dropdown"
              id="dropdownSettings"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ $t("show.season") }}
              {{ season_number_dropdown }}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownSettings">
              <a
                class="dropdown-item"
                v-for="(item, index) in data.seasons"
                :key="index"
                @click="
                  GET_SEASON(item.season_number);
                  season_number_dropdown = item.season_number;
                "
                v-if="data.current_episode.season_number === item.season_number"
                >{{ $t("show.season") }} {{ item.season_number }}</a
              >
              <a
                class="dropdown-item"
                v-for="(item, index) in data.seasons"
                :key="index"
                @click="
                  GET_SEASON(item.season_number);
                  season_number_dropdown = item.season_number;
                "
                v-if="data.current_episode.season_number != item.season_number"
                >{{ $t("show.season") }} {{ item.season_number }}</a
              >
            </div>
          </div>

          <div class="app-slider">
            <div class="item-app-slider" ref="app_episode_slider">
              <div
                v-for="(item, index) in data.current_season"
                :key="index"
                class="col-6 col-md-4 col-lg-3 col-xl-3 m-2 animation"
              >
                <div
                  class="episode"
                  @click="CHANGE_EPISODE(item.id, item.series_id)"
                  style="cursor: pointer"
                >
                  <progressive-img
                    :src="item.backdrop"
                    :alt="item.name"
                    width="100%"
                    :blur="1"
                    v-if="item.cloud === 'local'"
                  />
                  <progressive-img
                    :src="item.backdrop"
                    :alt="item.name"
                    width="100%"
                    :blur="1"
                    v-if="item.cloud === 'aws'"
                  />

                  <div class="title mt-1">
                    <p>
                      <strong
                        >E {{ item.episode_number }} |
                        {{ FORMAT_DATE(item.created_at) }}</strong
                      >
                    </p>
                    <small class="text-muted">{{ item.name }}</small>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="c-app-channel-grid-content__slider-arrow d-none d-md-block"
            >
              <button
                role="button"
                class="slider-arrow-right"
                v-show="HideRight"
                @click="swipeRight"
              >
                <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke-linecap="square"
                    stroke="#fff"
                    stroke-width="8"
                    d="M40 16l43 44m0 0l-43 44"
                  ></path>
                </svg>
              </button>
              <button
                role="button"
                class="slider-arrow-left"
                v-show="HideLeft"
                @click="swipeLeft"
              >
                <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke-linecap="square"
                    stroke="#fff"
                    stroke-width="8"
                    d="M40 16l43 44m0 0l-43 44"
                    transform="translate(120, 0) scale(-1, 1)"
                  ></path>
                </svg>
              </button>
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
import { Carousel, Slide } from "vue-carousel";
import loader from "../../utils/loader";

export default {
  name: "series-player",
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
      season_number_dropdown: null,
      jwPlayer: null,
      EmbedActiveCode: {},
      HideLeft: 0,
      HideRight: 1,
    };
  },

  computed: mapState({
    data: (state) => state.player.series_data,
    spinner_load: (state) => state.player.player_spinner,
    season_playlist_active: (state) => state.player.season_playlist_active,
  }),

  mounted() {
    if (
      this.$route.params.episode_id !== undefined &&
      this.$route.params.series_id !== undefined
    ) {
      this.$store.dispatch("GHOST_LOAD_SERIES_PLAYER", {
        episode_id: this.$route.params.episode_id,
        series_id: this.$route.params.series_id,
      });
    } else if (this.$route.params.series_id !== undefined) {
      this.$store.dispatch("GHOST_LOAD_SERIES_PLAYER", {
        series_id: this.$route.params.series_id,
      });
    } else {
      this.$route.push("404");
    }
  },

  watch: {
    data() {
      // dropdown season number
      this.season_number_dropdown = this.data.current_episode.season_number;

      if (!this.data.embed) {
        this.loadPlayer = true;

        // Mute change on episode
        if (this.jwPlayer !== null) {
          jwplayer().setMute(true);
        }

        if (!this.loadPlayerChange) {
          this.loadPlayerFirst = true;
        }

        setTimeout(() => {
          this.jwPlayer = jwplayer("tvshow-player").setup({
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

               if (this.$auth.isAuthenticated()) {
            this.jwPlayer.once("play", () => {
              if (this.data.current_movie.current_time != null) {
                this.jwPlayer.seek(this.data.current_movie.current_time);
              }
            });

            this.jwPlayer.on("time", () => {
              if (jwplayer().getPosition().toFixed() == this.timeRequest) {
                this.timeRequest = this.timeRequest + 20;
                axios.post("/api/v1/create/watch/movie/recently", {
                  current_time: jwplayer().getPosition().toFixed(),
                  duration_time: jwplayer().getDuration().toFixed(),
                  movie_id: this.data.current_movie.id,
                });
              }
            });

            // Check subtitle
            if (
              localStorage.getItem("caption") !== "" &&
              localStorage.getItem("caption") != "undefined"
            ) {
              const parsedCaption = JSON.parse(localStorage.getItem("caption"));
              jwplayer().setCaptions(parsedCaption);
            }

            // OnSeek
            this.jwPlayer.on("seek", () => {
              alert('sda')
              setTimeout(() => {
                this.timeRequest =
                  parseInt(jwplayer().getPosition().toFixed()) + 20;
              }, 200);
            });
          }

          // Load custom video file on error
          this.jwPlayer.on("error", () => {
            this.jwPlayer.load({
              file: "//content.jwplatform.com/videos/7RtXk3vl-52qL9xLP.mp4",
              image: "//content.jwplatform.com/thumbs/7RtXk3vl-480.jpg",
            });
          });

          if (this.episode_changed) {
            jwplayer().playlistItem(0);
          }

          // Check subtitle
          this.jwPlayer.on("ready", () => {
            this.loadPlayerFirst = false;
            this.loadPlayerChange = false;
            jwplayer().setMute(false);
          });
        }, 500);
      } else {
        this.EmbedActiveCode = this.data.playlist[0];
      }
    },
  },

  methods: {
    CHANGE_SERIES(episode_id) {
      this.$store.dispatch("GHOST_LOAD_SERIES_PLAYER", {
        episode_id: episode_id,
      });
    },

    CHANGE_EPISODE(episode_id, series_id) {
      this.episode_changed = true;
      this.loadPlayerChange = true;
      this.$store.dispatch("GHOST_LOAD_SERIES_PLAYER", {
        episode_id: episode_id,
        series_id: series_id,
      });
    },

    FORMAT_DATE(date) {
      var date = new Date(date.replace(/-/g, "/"));
      var monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();

      return day + " " + monthNames[monthIndex] + " " + year;
    },

    GET_SEASON(season_number) {
      axios
        .post("/api/v1/ghost/get/series/season", {
          series_id: this.data.current_episode.series_id,
          season_number: season_number,
        })
        .then(
          (response) => {
            if (response.status == 200) {
              this.data.current_season = response.data.data;
            }
          },
          (error) => {
            console.log("error in request");
          }
        );
    },

    ChangeEmbed(item) {
      this.EmbedActiveCode = item;
    },

    scrollTo(element, scrollPixels, duration) {
      const scrollPos = element.scrollLeft;
      // Condition to check if scrolling is required
      if (
        !(
          (scrollPos === 0 || scrollPixels > 0) &&
          (element.clientWidth + scrollPos === element.scrollWidth ||
            scrollPixels < 0)
        )
      ) {
        // Get the start timestamp
        const startTime =
          "now" in window.performance
            ? performance.now()
            : new Date().getTime();

        function scroll(timestamp) {
          //Calculate the timeelapsed
          const timeElapsed = timestamp - startTime;
          //Calculate progress
          const progress = Math.min(timeElapsed / duration, 1);
          //Set the scrolleft
          element.scrollLeft = scrollPos + scrollPixels * progress;
          //Check if elapsed time is less then duration then call the requestAnimation, otherwise exit
          if (timeElapsed < duration) {
            //Request for animation
            window.requestAnimationFrame(scroll);
          } else {
            return;
          }
        }

        //Call requestAnimationFrame on scroll function first time
        window.requestAnimationFrame(scroll);
      }
    },

    swipeLeft() {
      const content = this.$refs.app_episode_slider;
      this.scrollTo(content, -content.offsetWidth, 500);
      const container = document.querySelector(".item-app-slider");
      if (
        container.scrollLeft === 0 ||
        container.scrollLeft <= window.innerWidth
      ) {
        this.HideLeft = false;
        this.$store.commit("HIDE_SIDEBAR", true);
      }
    },
    swipeRight() {
      const content = this.$refs.app_episode_slider;
      this.scrollTo(content, content.offsetWidth, 800);
      const container = document.querySelector(".item-app-slider");
      if (container.scrollLeft >= 0) {
        this.HideLeft = true;
        this.$store.commit("HIDE_SIDEBAR", false);
      }
    },
  },
};
</script>
