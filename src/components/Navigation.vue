<template>
  <div class="catalog">
    <ul>
      <li class="logo">
        <router-link to="/">lives</router-link>
      </li>
      <li class="menu">
        <router-link to="/classification">分类</router-link>
      </li>
      <li class="menu">
        <router-link to="/tag">标签</router-link>
      </li>
      <li class="menu">
        <router-link to="/archive">归档</router-link>
      </li>
      <li class="menu">
        <router-link to="/collection">收藏</router-link>
      </li>
      <li class="menu">
        <router-link to="/aboutme">关于</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped lang="scss">
  @import "../assets/stylesheets/variable";

  .catalog {
    width: 100%;
    background-color: $menu_background_color;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 45px;
    min-height: 45px;
    /*font-weight: 400;*/
    font-weight: bold;
    .active {
      background-color: $menu_active_background_color;
    }
    ul {
      list-style-type: none;
      height: 50px;
      padding: 0;
    }
    #toplog {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
    .menu {
      display: inline;
      float: left;
      position: relative;
      margin-top: 3px;
      img {
        padding: 0;
        margin: 0;
        border: none;
      }
    }
    .logo {
      background-color: $logo_background_color;
      float: left;
      width: 165px;
      height: 50px;
    }
    .user-wrapper {
      color: $username_font_color;
      position: absolute;
      top: 0;
      right: 0px;
      p {
        padding-right: 20px;
      }
      &:hover {
        .logout {
          display: block;
        }
      }
      .admin {
        color: $yellow_color;
      }
    }
    .logout {
      display: none;
      .logout_btn {
        background-color: $logout_btn_background_color;
        cursor: pointer;
        padding: 5px 20px;
        &:hover {
          background-color: $menu_background_color;
        }
      }
    }
  }

  li a {
    color: $menu_font_color;
    display: block;
    padding-left: 25px;
    padding-right: 25px;
    min-width: 100px;
    text-align: center;
  }

  .log > a:hover {
    color: $menu_haver_font_color;
    background-color: $menu_haver_background_color;
  }

  .log a:active {
    color: $menu_active_font_color;
    font-weight: bold;
  }
</style>

