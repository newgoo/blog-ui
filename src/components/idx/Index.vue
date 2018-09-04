<template>
  <div>
    <!--<div v-for="blog in Data" :key="blog.id">-->
    <!--<blog-small :blog="blog"></blog-small>-->
    <!--</div>-->
    <div class="home-list">
      <div class="home-list-li fadeIn s">
        <header>
          <h2>
            <router-link :to="{name:'detail',params:{id: '1'}}">K8s中请求网络链路的分析与总结</router-link>
          </h2>
        </header>
        <p class="text-muted views"><span>yulibaozi 发布于 2018/7/22</span></p>
        <p class="focus">
          <a href="/Article/63" class="">
            <img title="K8s中请求网络链路的分析与总结"
                 data-src="http://img02.tooopen.com/images/20160509/tooopen_sy_161967094653.jpg"
                 src="http://img02.tooopen.com/images/20160509/tooopen_sy_161967094653.jpg" lazy="loaded">
          </a>
        </p>
        <p class="note">
          k8s中请求网络链路的分析与总结

          前要
          这篇文章，你能明白那些问题？
          1. 从集群外部请求的时候，整个请求的走向是怎么样的？
          2. 在service中port,targetPort和nodePort的区别是什么？
          3. iptables是怎样工作的？
          4. 谁来维护了数据的正确性，及时性和稳定性？

          基础知识:

          port指当使用ClusterIP访问这个服务所使用的port
          target...
        </p>
        <p class="text-muted views">
          <span>
            <img src="http://img02.tooopen.com/images/20160509/tooopen_sy_161967094653.jpg">
          </span>
          <span class="post-views"><i class="iconfont icon-yanjing"></i>阅读(74)</span>
          <span class="post-comments"><i class="iconfont icon-chat"></i>评论(5)</span>
        </p>
      </div>

      <div class="home-list-li fadeIn s s-left">
        <header>
          <h2>
            <router-link :to="{name:'detail',params:{id: 1}}">K8s中请求网络链路的分析与总结</router-link>
          </h2>
        </header>
        <p class="text-muted-right views"><span>yulibaozi 发布于 2018/7/22</span></p>
        <p class="img-left">
          <a href="/Article/63" class="">
            <img title="K8s中请求网络链路的分析与总结"
                 data-src="http://img02.tooopen.com/images/20160509/tooopen_sy_161967094653.jpg"
                 src="http://img02.tooopen.com/images/20160509/tooopen_sy_161967094653.jpg" lazy="loaded">
          </a>
        </p>
        <p class="note-right">
          k8s中请求网络链路的分析与总结

          前要
          这篇文章，你能明白那些问题？
          1. 从集群外部请求的时候，整个请求的走向是怎么样的？
          2. 在service中port,targetPort和nodePort的区别是什么？
          3. iptables是怎样工作的？
          4. 谁来维护了数据的正确性，及时性和稳定性？

          基础知识:

          port指当使用ClusterIP访问这个服务所使用的port
          target...
        </p>
        <p class="text-muted-right views">
        <span>
          <img src="http://img02.tooopen.com/images/20160509/tooopen_sy_161967094653.jpg">
        </span>
          <span class="post-views"><i class="iconfont icon-yanjing"></i>阅读(74)</span>
          <span class="post-comments"><i class="iconfont icon-chat"></i>评论(5)</span>
        </p>
      </div>

      <div class="home-list-li fadeIn s">
        <header>
          <h2>
            <router-link :to="{name:'detail',params:{id: 1}}">K8s中请求网络链路的分析与总结</router-link>
          </h2>
        </header>
        <p class="text-muted views"><span>yulibaozi 发布于 2018/7/22</span></p>
        <p class="focus">
          <a href="/Article/63" class="">
            <img title="K8s中请求网络链路的分析与总结"
                 data-src="http://img02.tooopen.com/images/20160509/tooopen_sy_161967094653.jpg"
                 src="http://img02.tooopen.com/images/20160509/tooopen_sy_161967094653.jpg" lazy="loaded">
          </a>
        </p>
        <p class="note">
          k8s中请求网络链路的分析与总结

          前要
          这篇文章，你能明白那些问题？
          1. 从集群外部请求的时候，整个请求的走向是怎么样的？
          2. 在service中port,targetPort和nodePort的区别是什么？
          3. iptables是怎样工作的？
          4. 谁来维护了数据的正确性，及时性和稳定性？

          基础知识:

          port指当使用ClusterIP访问这个服务所使用的port
          target...
        </p>
        <p class="text-muted views">
          <span>
            <img src="http://img02.tooopen.com/images/20160509/tooopen_sy_161967094653.jpg">
          </span>
          <span class="post-views"><i class="iconfont icon-yanjing"></i>阅读(74)</span>
          <span class="post-comments"><i class="iconfont icon-chat"></i>评论(5)</span>
        </p>
      </div>

      <div class="home-list-li fadeIn s s-left">
        <header>
          <h2>
            <router-link :to="{name:'detail',params:{id: 1}}">K8s中请求网络链路的分析与总结</router-link>
          </h2>
        </header>
        <p class="text-muted-right views"><span>yulibaozi 发布于 2018/7/22</span></p>
        <p class="img-left">
          <a href="/Article/63" class="">
            <img title="K8s中请求网络链路的分析与总结"
                 data-src="http://img02.tooopen.com/images/20160509/tooopen_sy_161967094653.jpg"
                 src="http://img02.tooopen.com/images/20160509/tooopen_sy_161967094653.jpg" lazy="loaded">
          </a>
        </p>
        <p class="note-right">
          k8s中请求网络链路的分析与总结

          前要
          这篇文章，你能明白那些问题？
          1. 从集群外部请求的时候，整个请求的走向是怎么样的？
          2. 在service中port,targetPort和nodePort的区别是什么？
          3. iptables是怎样工作的？
          4. 谁来维护了数据的正确性，及时性和稳定性？

          基础知识:

          port指当使用ClusterIP访问这个服务所使用的port
          target...
        </p>
        <p class="text-muted-right views">
        <span>
          <img src="http://img02.tooopen.com/images/20160509/tooopen_sy_161967094653.jpg">
        </span>
          <span class="post-views"><i class="iconfont icon-yanjing"></i>阅读(74)</span>
          <span class="post-comments"><i class="iconfont icon-chat"></i>评论(5)</span>
        </p>
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
        line-height: 1.5;
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
      line-height: 1.5;
      margin: 6px 160px 0 0;
      text-indent: 30px;
      word-break: break-all;
      text-align: justify;
    }
    .note-right {
      color: #777;
      line-height: 1.5;
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
      background: url(http://beike1269-html.demo.smallseashell.com/images/navleft.png) no-repeat top left;
      float: left;
      height: 30px;
      width: 141px;
      padding-left: 30px;
      margin: 50px 80px;
    }
    .align-right {
      background: url(http://beike1269-html.demo.smallseashell.com/images/navright.png) no-repeat top left;
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
