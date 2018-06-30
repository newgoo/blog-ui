<template>
  <div>
    <div style="background:#eee;padding: 20px">
      <Card :bordered="false" class="ct">
        <div slot="title" style="height:40px">
          <p class="tit">{{BlogDetail.title}}</p>
          <i class="layer">{{formateDate(blog.add_time)}}</i>
          <i></i>
          <i class="layer">{{blog.author}}</i>
          <i class="fa fa-eye" aria-hidden="true"></i>
          <i>{{blog.views}}</i>
        </div>
        <vue-markdown :source="blog.content" style="font-size: 14px"></vue-markdown>
      </Card>
    </div>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown';
  import {dat} from '../../util/date';

  export default {
    data() {
      return {
        blog: {id: 0, title: '', author: '', add_time: 0, content: '', update_time: 0, views: 0, introduce: ''}
      };
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
        return dat(dt, 'yyyy-MM-dd hh:mm');
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
  .ct {
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .tit {
    font-size: 20px;
    height: 30px;
  }

  .layer {
    width: 50px;
  }
</style>

