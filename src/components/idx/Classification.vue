<template>
  <div>
    <h2 class="head">
      分类信息
    </h2>
    <div class="archive-classify">
      <ul class="clear">
        <li class="float-left archive-classify-list" v-for="c in ClassList">
          <router-link :to="{name:'classificationdetail',params:{id: c.id}}" class="tag-name">{{c.class}}</router-link>
          <br/>
          <span>{{formateDate(c.add_time)}}</span>
          <br/>
          <router-link :to="{name:'classificationdetail',params:{id: c.id}}" class="spot">{{c.description}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {dat} from '../../util/date';

  export default {
    data() {
      return {};
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
    },
    methods: {
      formateDate(date) {
        let dt = new Date(date * 1000);
        return dat(dt, 'yyyy-MM-dd');
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
    color: teal;
    padding: 2px 7px;
    margin-bottom: 4px;
    transition: .3s;
    font-size: 14px;
    font-weight: 500;
  }

</style>
