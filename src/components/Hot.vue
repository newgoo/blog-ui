<template>
<div>
  <card>
    <p slot="title">
      热门文章
    </p>
    <ul>
      <li v-for="blog in HotList" :key="blog.id">
        <router-link :to="{name:'detail',params:{id: blog.id}}">
          {{blog.title}}
        </router-link>
        <i class="right"></i>
      </li>
    </ul>
    <!-- <div> -->
      <!-- <router-link :to="{name:'detail',params:{id: blog.id}}">
        {{blog.title}}
      </router-link> -->
      <!-- <span class="right">fdas</span> -->
    <!-- </div> -->
  </card>
</div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        id: 0,
        title: '',
        author: '',
        add_time: 0,
        content: '',
        update_time: 0,
        views: 0,
        introduce: ''
      }
    };
  },
  mounted() {
    this.$store.dispatch('GetHotlistAPI').catch((error) => {
      console.log(error);
      return error;
    });
  },
  methods: {
    // RefreshBlog(id) {
    //   this.$store.dispatch('SetOneBlog', id);
    // }
  },
  computed: {
    HotList() {
      return this.$store.getters.getHotlist;
    }
  },
  components: {

  }
};
</script>


<style scoped lang="scss">

</style>
