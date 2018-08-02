<template>
  <div>
    <!--<div v-for="blog in Data" :key="blog.id">-->
    <!--<blog-small :blog="blog"></blog-small>-->
    <!--</div>-->
    <div class="home-list">
      <div class="home-list-li fadeIn s">
        <header>
          <h2>
            <a>K8s中请求网络链路的分析与总结</a>
          </h2>
        </header>
        <p class="text-muted views"><span>yulibaozi 发布于 2018/7/22</span></p>
        <p class="focus">
          <a href="/Article/63" class="">
            <img title="K8s中请求网络链路的分析与总结"
                 data-src="http://index.yulibaozi.com/ced9c5fe-4cf6-4212-a472-643b79e907d6yasuko.jpg"
                 src="http://index.yulibaozi.com/ced9c5fe-4cf6-4212-a472-643b79e907d6yasuko.jpg" lazy="loaded">
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
            <img src="http://user.yulibaozi.com/45fa6360-5df1-4967-87b9-5e532442556bQQ20180410-0.jpg">
          </span>
          <span class="post-views"><i class="iconfont icon-yanjing"></i>阅读(74)</span>
          <span class="post-comments"><i class="iconfont icon-chat"></i>评论(5)</span>
        </p>
      </div>
    </div>

    <div class="home-list-li fadeIn s s-left">
      <header>
        <h2>
          <a>K8s中请求网络链路的分析与总结</a>
        </h2>
      </header>
      <p class="text-muted-right views"><span>yulibaozi 发布于 2018/7/22</span></p>
      <p class="img-left">
        <a href="/Article/63" class="">
          <img title="K8s中请求网络链路的分析与总结"
               data-src="http://index.yulibaozi.com/ced9c5fe-4cf6-4212-a472-643b79e907d6yasuko.jpg"
               src="http://index.yulibaozi.com/ced9c5fe-4cf6-4212-a472-643b79e907d6yasuko.jpg" lazy="loaded">
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
          <img src="http://user.yulibaozi.com/45fa6360-5df1-4967-87b9-5e532442556bQQ20180410-0.jpg">
        </span>
        <span class="post-views"><i class="iconfont icon-yanjing"></i>阅读(74)</span>
        <span class="post-comments"><i class="iconfont icon-chat"></i>评论(5)</span>
      </p>
    </div>

  </div>
</template>

<script>
  import BlogSmall from '../template/BlogSmall';

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
    padding: 0 20px;
    background: #fff;
  }

  .home-list-li {
    padding: 25px 0;
    border-bottom: 1px solid #eee;
    position: relative;
    overflow: hidden;
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
        margin: 6px 25.3% 10px 0;
        padding-right: 15px;
        word-break: break-all;
        text-align: justify;
      }
    }
    .text-muted-right {
      font-size: 12px;
      color: #777;
      /*margin-right: 25.3%;*/
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
    }
    .note {
      color: #777;
      line-height: 1.5;
      margin: 6px 26% 0 10px;
      padding-right: 15px;
      word-break: break-all;
      text-align: justify;
    }
    .note-right {
      color: #777;
      line-height: 1.5;
      margin: 6px 25px 0 26.5%;
      padding-right: 15px;
      word-break: break-all;
      text-align: justify;
    }
    .focus {
      float: right;
      width: 25.3%;
      margin-top: -15px;
      overflow: hidden;
      max-height: 140px;
    }
    .img-left {
      float: left;
      width: 25.3%;
      margin-top: -15px;
      overflow: hidden;
      max-height: 140px;
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

</style>
