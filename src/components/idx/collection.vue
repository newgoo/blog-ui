<template>
  <div>
    <h2 class="head">
      链接收藏
    </h2>
    <div v-for="l in ls" class="classification">
      <h4 data-v-1c8e9d70="" class="h4">2018年 7月</h4>
      <div class="line">
        <i class="el-icon-edit"></i>
        <a
          href="https://chai2010.gitbooks.io/advanced-go-programming-book/content/?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io">
          golang 高级编程
        </a>
      </div>
      <div class="line">
        <a
          href="https://chai2010.gitbooks.io/advanced-go-programming-book/content/?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io">
          golang 高级编程
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Collection',
    data() {
      return {
        ls: [1, 2, 1, 1, 1]
      };
    }
  };
</script>

<style lang="scss">
  .h4 {
    display: block;
    -webkit-margin-before: 1.33em;
    -webkit-margin-after: 1.33em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
  }

  .classification {
    /*a {*/
    /*font-size: 14px;*/
    /*margin-left: 20px;*/
    /*}*/
    .line {
      font-size: 14px;
      margin-left: 20px;
    }
  }

</style>
