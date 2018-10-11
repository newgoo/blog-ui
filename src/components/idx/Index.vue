<template>
  <div>
    <!--<div v-for="blog in Data" :key="blog.id">-->
    <!--<blog-small :blog="blog"></blog-small>-->
    <!--</div>-->
    <div class="home-list">
      <div v-for="d,index in Data">
        <div class="home-list-li fadeIn s" v-if="index%2===0">
          <header>
            <h2>
              <router-link :to="{name:'detail',params:{id: d.id}}">{{d.title}}</router-link>
            </h2>
          </header>
          <p class="text-muted views"><span>{{d.user_name}} 发布于 {{formateDate(d.add_time)}}</span></p>
          <p class="focus">
            <router-link :to="{name:'detail',params:{id: d.id}}" class="">
              <img :src="d.image" lazy="loaded">
            </router-link>
          </p>
          <p class="note">
            {{d.introduce}}
          </p>
          <p class="text-muted views">
          <span>
            <img :src="d.avatar">
          </span>
            <span class="post-views"><i class="iconfont icon-yanjing"></i>阅读({{d.views}})</span>
            <span class="post-comments"><i class="iconfont icon-chat"></i>评论(5)</span>
          </p>
        </div>

        <div class="home-list-li fadeIn s s-left" v-else>
          <header>
            <h2>
              <router-link :to="{name:'detail',params:{id: d.id}}">{{d.title}}</router-link>
            </h2>
          </header>
          <p class="text-muted-right views"><span>{{d.user_name}} 发布于 {{formateDate(d.add_time)}}</span></p>
          <p class="img-left">
            <router-link :to="{name:'detail',params:{id: d.id}}" class="">
              <img :src="d.image" lazy="loaded">
            </router-link>
          </p>
          <p class="note-right">
            {{d.introduce}}
          </p>
          <p class="text-muted-right views">
        <span>
          <img :src="d.avatar">
        </span>
            <span class="post-views"><i class="iconfont icon-yanjing"></i>阅读({{d.views}})</span>
            <span class="post-comments"><i class="iconfont icon-chat"></i>评论(5)</span>
          </p>
        </div>
      </div>
    </div>
    <div class="navigation">
      <div class="align-left"><a href="#">上一页内容</a>
      </div>
      <div class="align-right"><a href="#">下一页内容</a>
      </div>
    </div>
  </div>
</template>

<script>
  import BlogSmall from '../template/BlogSmall';
  import '../../router/index';
  import {dat} from '../../util/date';

  export default {
    computed: {
      Data() {
        return this.$store.getters.getBlogList;
      },
      Count() {
        return this.$store.getters.getBLogCount;
      }
    },
    mounted() {
      this.$store.dispatch('GetBlogListAPI').catch((error) => {
        console.error(error);
        return error;
      });
    },
    methods: {
      formateDate(date) {
        let dt = new Date(date * 1000);
        return dat(dt, 'yyyy-MM-dd');
      }
    },
    components: {
      BlogSmall
    }
  };
</script>

<style lang="scss" scoped="scoped">

  .home-list {
    background: #fff;
    box-shadow: 0 0 5px 5px #ccc;
  }

  .home-list-li {
    /*border: 1px solid cadetblue;*/
    /*box-shadow: 0 0 5px 5px #ccc;*/
    /*padding: 0 25px;*/
    border-bottom: 1px solid #eee;
    position: relative;
    overflow: hidden;
    margin: 15px 15px 15px 15px;
    padding: 25px;
    img {
      width: 100%;
      height: auto;
    }
    .text-muted {
      font-size: 12px;
      color: #777;
      margin-right: 25.3%;
      padding-right: 15px;
      span {
        margin-right: 10px;
        img {
          display: inline-block;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          vertical-align: bottom;
        }
      }
      .note {
        color: #777;
        line-height: 90px;
        margin: 6px 160px 10px 0;
        padding-right: 15px;
        word-break: break-all;
        text-align: justify;
      }
    }
    .text-muted-right {
      font-size: 12px;
      color: #777;
      span {
        img {
          display: inline-block;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          vertical-align: bottom;
        }
      }
    }
    .note {
      color: #777;
      line-height: 1.6;
      height: 90px;
      margin: 6px 160px 0 0;
      text-indent: 30px;
      word-break: break-all;
      text-align: justify;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
    }
    .note-right {
      color: #777;
      line-height: 1.5;
      height: 90px;
      margin: 6px 0 0 160px;
      text-indent: 30px;
      word-break: break-all;
      text-align: justify;
    }
    .focus {
      float: right;
      width: 150px;
      margin-top: 10px;
      overflow: hidden;
      max-height: 100px;
    }
    .img-left {
      float: left;
      width: 150px;
      margin-top: 10px;
      overflow: hidden;
      max-height: 100px;
    }
  }

  .fadeIn {
    animation-name: fadeIn;
  }

  .s {
    visibility: visible;
    animation-name: fadeIn;
  }

  .s-left {
    text-align: right;
    visibility: visible;
    animation-name: fadeIn;
  }

  .navigation {
    color: white;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 1.6em;
    line-height: 30px;
    .align-left {
      /*background: url(http://beike1269-html.demo.smallseashell.com/images/navleft.png) no-repeat top left;*/
      float: left;
      height: 30px;
      width: 141px;
      padding-left: 30px;
      margin: 50px 80px;
    }
    .align-right {
      /*background: url(http://beike1269-html.demo.smallseashell.com/images/navright.png) no-repeat top left;*/
      float: right;
      height: 30px;
      width: 141px;
      padding-left: 30px;
      margin: 50px 80px;
    }
    a {
      font-size: 20px;
      color: white;
      text-decoration: none;
      font-weight: bold;
    }
  }

</style>
