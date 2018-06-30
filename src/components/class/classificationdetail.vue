<template>
  <div>
    <div>title</div>
    <div>
      <ul class="list-group">
        <div class="list-group-item" v-for="blog in BlogList" :key="blog.id">
          <span class="badge">{{blog.views}}</span>
          <router-link :to="{name:'detail',params:{id: blog.id}}">
            {{blog.title}}
          </router-link>
        </div>
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

<style scoped>

</style>


