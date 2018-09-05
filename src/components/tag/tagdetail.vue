<template>
  <div>
    <!--<div v-for="blog in BlogLsByTag" :key="blog.id">-->
    <!--<blog-small :blog="blog"></blog-small>-->
    <!--</div>-->
    <a class="tag-title">标签</a>
    >
    <a class="tag-title">golang</a>
    <hr class="hr">
    <div>
      <ul class="list-group">
        <li v-for="blog in BlogLsByTag" class="list">
          <router-link :to="{name:'detail',params:{id: blog.id}}">
            {{blog.title}}
          </router-link>
          <span class="time">(2018-9-5)</span>
          <span class="badge">{{blog.views}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BlogSmall from '../template/BlogSmall';

  export default {
    name: 'tagdetail',
    mounted() {
      this.$store.dispatch('GetTagBlogAPI', this.$route.params.id).catch((error) => {
        console.error(error);
        return error;
      });
    },
    computed: {
      BlogLsByTag() {
        return this.$store.getters.GetTagBlogLs;
      }
    },
    components: {
      BlogSmall
    },
    watch: {
      '$route'(to, from) {
        this.$store.dispatch('GetTagBlogAPI', to.params.id);
      }
    }
  };
</script>

<style lang="scss" scoped="scoped">
  .tag-title {
    font-size: 16px;
    font-weight: 500;
  }

  .hr {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .list-group {
    margin: 10px 15px 10px 40px;
  }

  .badge {
    float: right;
  }

  .list {
    font-size: 14px;
    font-weight: 500;
    line-height: 25px;
    list-style: bengali;
  }

  .time{
    font-size: 12px;
    font-weight: 400;
    font-style: italic;
  }
</style>
