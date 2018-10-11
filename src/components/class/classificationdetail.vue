<template>
  <div>
    <!--<a class="tag-title">分类</a>-->
    <h2 class="head">
      分类信息
    </h2>
    <router-link to="/classification">分类</router-link>
    >
    <a class="tag-title">golang</a>
    <hr class="hr">
    <div>
      <ul class="list-group">
        <li v-for="blog in BlogList" class="list">
          <router-link :to="{name:'detail',params:{id: 1}}">
            {{blog.title}}
          </router-link>
          <span>(2018-9-5)</span>
          <span class="badge">{{blog.views}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$store
        .dispatch('GetClassBlogListAPI', this.$route.params.id)
        .catch(error => {
          console.error(error);
          return error;
        });
    },
    computed: {
      BlogListCount() {
        return this.$store.getters.GetClassBlogListCount;
      },
      BlogList() {
        return this.$store.getters.GetClassBlogList;
      }
    },
    watch: {
      '$route'(to, from) {
        this.$store.dispatch('GetClassBlogListAPI', to.params.id);
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
</style>


