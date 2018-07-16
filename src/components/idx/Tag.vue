<template>
  <div>
    <h2 class="head">
      标签
    </h2>
    <div>
      <!--<div v-for="tag in TagList" :key="tag.id">-->
      <!--<router-link :to="{name:'tagdetail',params:{id: tag.id}}">-->
      <!--<Button v-if="getNum(tag.id)" type="info">{{tag.tag}}</Button>-->
      <!--<Button v-else type="success">{{tag.tag}}</Button>-->
      <!--</router-link>-->
      <!--</div>-->
      <div class="archive-tags">
        <ul class="clear">
          <li class="clear archive-tag-list float-left" v-for="i in list">
            <div class="tag-icon  float-left">G</div>
            <div class="tag-con">
              <h3>
                <a href="/">Golang读书笔记</a>
                <p>7 篇文章</p>
              </h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [1, 2, 3, 4, 5, 5, 5]
      };
    },
    mounted() {
      this.$store.dispatch('GetTagLsAPI').catch(error => {
        console.error(error);
        return error;
      });
    },
    methods: {
      getNum: function (num) {
        return num % 2 === 0;
      }
    },
    computed: {
      TagList() {
        return this.$store.getters.GetTagLs;
      },
      TagCount() {
        return this.$store.getters.GetTagCount;
      }
    }
  };
</script>

<style scoped>
  .archive-tags {

  }

  .archive-tag-list {
     width: 18%;
     margin: 10px 1%;
   }

  .tag-icon {
    height: 32px;
    width: 32px;
    overflow: hidden;
    border-radius: 3px;
    background: #eee;
    text-align: center;
    line-height: 32px;
    font-size: 18px;
    color: #ccc;
  }

  .tag-con {
    margin-left: 36px;
  }

  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }

</style>

