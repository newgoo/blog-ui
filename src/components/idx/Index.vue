<template>
  <div>
    <div v-for="blog in Data">
      <blog-small :blog="blog"></blog-small>
    </div>
  </div>
</template>

<script>
import BlogSmall from '../template/BlogSmall';

export default {
  data() {
    return {
      blog: { id: 0, title: '', author: '', add_time: 0, content: '', update_time: 0, views: 0, introduce: '' }
    };
  },
  computed: {
    Data() {
      return this.$store.getters.getBlogList;
    },
    Count() {
      return this.$store.getters.getBLogCount;
    }
  },
  mounted() {
    this.$store.dispatch('GetBlogList').catch((error) => {
      console.error(error);
    });
  },
  components: {
    BlogSmall
  }
};
</script>
