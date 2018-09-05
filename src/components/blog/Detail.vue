<template>
  <div>
    <div>
      <div class="ivu-card-body">
        <h3>{{BlogDetail.title}}</h3>
        <br/>
        <div>
          <span class="layer">{{formateDate(BlogDetail.add_time)}}</span>
          <span>标签:
            <a class="tag" v-for="one in BlogDetail.classes">{{one}}</a>
          </span>
          <span>阅读({{BlogDetail.views}})</span>
        </div>
        <hr/>
        <vue-markdown v-highlight :source="BlogDetail.content" class="md-detail markdown"></vue-markdown>
      </div>
      <div class="announce">未经允许不得转载</div>
    </div>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown';
  import {dat} from '../../util/date';

  export default {
    data() {
      return {};
    },
    components: {
      'vue-markdown': VueMarkdown
    },
    mounted() {
      this.$store.dispatch('GetOneBlogAPi', this.$route.params.id).catch((error) => {
        console.error(error);
        return error;
      });
      this.blog = this.$store.getters.getBlogDetail;
    },
    computed: {
      BlogDetail() {
        this.blog = this.$store.getters.getBlogDetail;
        return this.$store.getters.getBlogDetail;
      }
    },
    methods: {
      formateDate(date) {
        let dt = new Date(date * 1000);
        return dat(dt, 'yyyy-MM-dd');
      }
    },
    watch: {
      '$route'(to, from) {
        this.$store.dispatch('GetOneBlogAPi', to.params.id);
      }
    }
    // activated() {
    //   this.$store.dispatch('GetOneBlogAPi', this.$route.params.id);
    // }
  };
</script>

<style lang="scss" scoped>
  .tit {
    font-size: 20px;
    height: 30px;
  }

  .layer {
    width: 50px;
  }

  .tag {
    font-size: 14px;
    font-weight: 600;
  }

  .announce {
    margin-bottom: 20px;
    padding: 15px;
    font-size: 14px;
    font-weight: 500;
    color: #337ab7;
    word-wrap: normal;
    word-break: break-word !important;
    word-break: break-all;
    white-space: pre;
    overflow: auto;
    border-radius: 0;
    background: #f6f6f6;
    -webkit-text-size-adjust: none;
    display: block;
    line-height: 1.5;
    border: 1px solid #DADADA;
  }

  .ivu-card-body {
    padding: 10px 35px 10px 35px;
    background: #fff;
    box-shadow: 0 0 5px 5px #ccc;
    margin-bottom: 25px;
  }

</style>

