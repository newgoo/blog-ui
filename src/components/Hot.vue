<template>
  <div>
    <!--<card>-->
    <!--<p slot="title">-->
    <!--热门文章-->
    <!--</p>-->
    <!--<ul>-->
    <!--<li v-for="blog in HotList" :key="blog.id">-->
    <!--<router-link :to="{name:'detail',params:{id: blog.id}}">-->
    <!--{{blog.title}}-->
    <!--</router-link>-->
    <!--<i class="right"></i>-->
    <!--</li>-->
    <!--</ul>-->
    <!--</card>-->

    <div class="container_16">
      <aside class="prefix_1 grid_5">
        <h4>Categories</h4>
        <ul class="categories">
          <li><a href="#">design</a></li>
          <li><a href="#">inspiration</a></li>
          <li><a href="#">tutorials</a></li>
          <li><a href="#">uncategorized</a></li>
          <li><a href="#">updates</a></li>
          <li><a href="#">web</a></li>
        </ul>
        <hr>
        <h4>Blogroll</h4>
        <ul class="blogroll">
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Plugins</a></li>
          <li><a href="#">Suggest Ideas</a></li>
          <li><a href="#">Support Forum</a></li>
          <li><a href="#">Themes</a></li>
          <li><a href="#">WordPress Blog</a></li>
          <li><a href="#">WordPress Planet</a></li>
        </ul>
      </aside>
    </div>


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
      this.$store.dispatch('GetHotListAPI').catch((error) => {
        console.log(error);
        return error;
      });
    },
    methods: {
      // RefreshBlog(id) {
      //   this.$store.dispatch('GetOneBlogAPi', id);
      // }
    },
    computed: {
      HotList() {
        return this.$store.getters.getHotlist;
      }
    },
    components: {}
  };
</script>


<style scoped lang="scss">

  aside {
    background: aliceblue;;
    color: #2d2d2d;
    ul, ul.categories, ul.recent_comments, ul.blogroll {
      font-size: 16px;
      line-height: 30px;
      color: #777;
      list-style: square inside;
    }
     ul, ul.categories, ul.recent_comments, ul.blogroll {
       font-size: 16px;
       line-height: 30px;
       list-style: square inside;
     }
  }

  .container_16 {
    .prefix_1 {
      padding: 20px 20px 20px 20px;
    }
    .grid_5 {
    }
  }

  h4, h5 {
    color: #2d2d2d;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 2.4em;
    text-align: justify;
  }

</style>
