<template>
<div>
  <h1 class="head">
    分类信息
  </h1>
  <br>
  <Row>
    <Col span="8" class="list-group" v-for="BClass in ClassList" :key="BClass.id">
    <!-- <div class="list-group-item active" style="margin-left: 5px;margin-right: 5px"> -->
    <div class="list-group-item" style="margin-left: 5px;margin-right: 5px">
      <router-link :to="{name:'classificationdetail',params:{id: BClass.id}}">
        <h4 class="list-group-item-heading" style="height:19px">{{BClass.class}}<span class="badge"></span></h4>
        <div class="list-group-item-text" style="height:36px">{{BClass.description}}</div>
      </router-link>
    </div>
    </Col>
  </Row>
</div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     class: { id: 0, class: '', count: 0, description: '', picture: '', add_time: 0 }
  //   };
  // },
  mounted() {
    this.$store.dispatch('GetClassListAPI').catch((error) => {
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
</style>
