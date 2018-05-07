<template>
  <div>
    <div v-for="blog in BlogLsByTag" :key="blog.id">
      <blog-small :blog="blog"></blog-small>
    </div>
  </div>
</template>

<script>
  import BlogSmall from '../template/BlogSmall';

  export default {
    name: 'tagdetail',
    mounted() {
      this.$store.dispatch('GetTagBlog', this.$route.params.id).catch((error) => {
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
        this.$store.dispatch('GetTagBlog', to.params.id);
      }
    }
  };
</script>

<style scoped>

</style>
