<template>
  <div>
    <h2 class="head">
      时间轴
    </h2>
    <div>
      <span>
        <div v-for="y in timeLine" id="archives">
          <h4 class="h4">2018年 7月</h4>
          <ul>
            <li v-for="d in ls">
              <span>22日</span>
              <a>K8s中请求网络链路的分析与总结</a>
              <span class="read">(74 阅读量)</span>
            </li>
          </ul>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Archive',
    data() {
      return {
        ls: [1, 2, 3],
        timeLine: [2018, 2017, 2016]
      };
    },
    mounted() {
      this.$store.dispatch('GetTimeLineAPI').catch(error => {
        return error;
      });
    },
    computed: {
      TimeLine() {
        return this.$store.getters.GetTimeLine;
      }
    }

  };
</script>

<style scoped>
  .h4 {
    display: block;
    -webkit-margin-before: 1.33em;
    -webkit-margin-after: 1.33em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
  }

  .archives-fixed .h4 {
    padding: 0 10px;
    font-size: 14px;
    border-left: 30px solid #ddd;
    line-height: 1;
    font-weight: inherit;
  }

  /*h4.h4.archive-month {*/
  /*}*/

  ul {
    margin: 20px;
    padding-left: 20px;
    list-style: square;
  }

  ul li {
    list-style-type: none;
  }

  #archives a {
    margin-left: 20px;
  }

  #archives li {
    line-height: 36px;
    font-size: 14px;
  }

  #archives .read {
    float: right;
  }
</style>
