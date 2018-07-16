<template>
  <div>
    <h2 class="head">
      分类信息
    </h2>
    <br>
    <!--<Row>-->
    <!--<Col span="8" class="list-group" v-for="BClass in ClassList" :key="BClass.id">-->
    <!--<div class="list-group-item" style="margin-left: 5px;margin-right: 5px">-->
    <!--<router-link :to="{name:'classificationdetail',params:{id: BClass.id}}">-->
    <!--<h4 class="list-group-item-heading" style="height:19px">{{BClass.class}}<span class="badge"></span></h4>-->
    <!--<div class="list-group-item-text" style="height:36px">{{BClass.description}}</div>-->
    <!--</router-link>-->
    <!--</div>-->
    <!--</Col>-->
    <!--</Row>-->
    <div class="archive-classify">
      <ul class="clear">
        <li class="float-left archive-classify-list" v-for="l in list">
          <a href="/" class="tag-name">Golang</a>
          <br/>
          <span>2018-04-18</span>
          <br/>
          <a class="spot">微信开发中一些经典的坑总结(持续更新)</a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    // data() {
    //   return {
    //     class: { id: 0, class: '', count: 0, description: '', picture: '', add_time: 0 }
    //   };
    // },
    data() {
      return {
        list: [1, 2, 3, 4, 5, 7, 7, 8, 8, 8]
      };
    },
    mounted() {
      this.$store.dispatch('GetClassListAPI').catch(error => {
        console.error(error);
        return error;
      });
    },
    computed: {
      ClassList() {
        return this.$store.getters.GetClasslist;
      },
      ClassCount() {
        return this.$store.getters.GetClasslistCount;
      }
    }
  };
</script>


<style lang="scss">
  .lineheigh {
    max-height: 40px;
    margin-left: 5px;
  }

  .archive-classify {

  }

  .archive-classify-list {
    width: 33%;
    font-size: 12px;
    height: 90px;
    overflow: hidden;
    color: #999;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
  }

  .tag-name {
    display: inline-block;
    margin-right: 5px;
    background-color: #e6e6e6;
    color: #666;
    padding: 2px 7px;
    margin-bottom: 4px;
    transition: .3s;
  }

</style>
