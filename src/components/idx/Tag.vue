<template>
  <div>
    <h2 class="head">
      标签
    </h2>
    <div>
      <div class="archive-tags">
        <ul class="clear">
          <li class="archive-tag-list float-left" v-for="i in list">
            <div class="tag-icon  float-left">G</div>
            <div class="tag-con">
              <h3>
                <a href="/">Golang读书笔记</a>
              </h3>
              <p>7 篇文章</p>
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
        list: [1, 2, 3, 4, 2, 2]
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
    font-size: 14px;
    color: #ccc;
  }

  .tag-con h3 a {
    width: 100%;
    background: #eee;
    border-radius: 3px;
    color: #999;
    font-weight: 400;
    line-height: 18px;
    display: inline-block;
    padding: 0 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 87px;
    white-space: nowrap;
    transition: .3s;
    font-size: 14px;
    margin-top: 0;
  }

  .tag-con h3 {
    margin: 0;
    line-height: 14px;
  }

  .tag-con {
    margin-left: 36px;
  }

  ul li {
    display: list-item;
    text-align: -webkit-match-parent;
  }
  p{
    font-size: 12px;
  }

</style>

