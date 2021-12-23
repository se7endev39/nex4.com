<template>
  <div>
    <div class="sidebarBtn" @click="toggle"> 
      <img
        src="/images/menu-options.svg"
        width="25px"
        height="25px"
        alt="menu"
      />
    </div>
    <div class="sidebar" v-if="sidebarStatus" >
      <div class="logoWrapper">
        <img class="logo"
          src="/images/logo.png"
          alt="logo"/>
      </div>
      <div class="sidebarItems">
        <div class="item">
          <img src="/images/home_side.png" width="25px" height="25px" alt="logo">
          <div class='item-title'>On Demand</div>
        </div>
        <div class="item">
          <img src="/images/film-roll.png" width="25px" height="25px" alt="logo">
          <div class='item-title'>Movies</div>
        </div>
        <div class="item">
          <img src="/images/spotlight.png" width="25px" height="25px" alt="logo">
          <div class='item-title'>Shows</div>
        </div>
        <div class="item">
          <img src="/images/clown.png" width="25px" height="25px" alt="logo">
          <div class='item-title'>Kids</div>
        </div>
        <div class="item">
          <img src="/images/tv.png" width="25px" height="25px" alt="logo">
          <div class='item-title'>Live TV</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      sidebarStatus:true,
        isAuth: null,
        search_query: "",
        email_confirmed: false,
        username: "",
        active_login: false,
        active: null,
        activeMenu: null,
        activeGenre: 0,
        activeTrending: 1,
        show_phone_meuu: false,
        show_profile_dropdown: ""
    };
  },

  computed: mapState({
      collections: state => state.collections.collections
  }),

  watch: {
      search_query(val) {
          if (val !== "") {
              this.$router.push({
                  name: "search",
                  params: {
                      search: val
                  }
              });
          }
      }
  },

  methods: {
    toggle(){
      this.sidebarStatus=!this.sidebarStatus;
    },

      SORT_BY(type, trending, genre) {
          this.activeGenre = genre;
          this.activeMenu = this.$route.name;
          this.$parent.SORT_BY(type, this.$parent.activeTrending, genre);
      },

      SHOW_PHONE_MENU() {
          this.show_phone_meuu = !this.show_phone_meuu;
      },

      GO_TO_COLLECTION(id) {
          this.show_phone_meuu = false;
          this.$router.push({
              name: "collection",
              params: {
                  id: id
              }
          });
      },

      LOGOUT() {
          this.$store.dispatch("LOGOUT_AUTH");
      }
  }
};
</script>

<style lang="scss" scoped>
  .sidebarItems{
    // display: flex;
    justify-content: center;
  }

  .item{
    display: flex;
    align-items: center;
    padding-top: 30px;
    padding-left: 30px
  }

  .item-title{
    margin-left:10px;
    font-size: 22px;
    transform: scale(1);
    transform-origin: left;
    transition: transform .3s ease;
    &:hover{
      transform: scale(1.1)
    }
  }
  .logoWrapper{
    display:flex;
    justify-content: flex-end;
    padding-right:10px;
  }
  .logo{
    width:100px;
  }

  .sidebar {
    width: 250px;
    height:100vh;
    background: #0a0f23  0% 0% no-repeat padding-box
  }

  .sideBarBTN {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 83px;
    height: 83px;
    margin-left: -15px;
    -webkit-border-radius: 0px 0px 30px 0px;
    background:transparent linear-gradient(135deg, #F76C12 0%, #F6453F 25%, #F51B6F 100%) 0% 0% no-repeat padding-box;
  }
</style>
