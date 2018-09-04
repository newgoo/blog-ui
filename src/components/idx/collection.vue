<template>
  <div>
    <h2 class="head">
      链接收藏
    </h2>
    <div v-for="l in ls" class="classification">
      <h4 data-v-1c8e9d70="" class="h4">2018年 7月</h4>
      <div class="line">
        <ul>
          <li v-for="d in ls" class="li">
            <a
              href="https://chai2010.gitbooks.io/advanced-go-programming-book/content/?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io">
              《golang 高级编程》
            </a>
            <span>涵盖CGO、Go汇编语言、RPC实现、Web框架实现、分布式系统等高阶主题、Web框架实现、分布式系统等高阶主题、Web框架实现、分布式系统等高阶主题</span>
          </li>
        </ul>
      </div>
      <hr>
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
    .line {
      font-size: 14px;
      margin-left: 20px;
    }
  }

  ul {
    .li {
      list-style: bengali;
      line-height: 30px;
      font-size: 14px;
      a{
        font-size: 14px;
        font-weight: 600;
      }
    }
  }

</style>
