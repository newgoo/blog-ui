<template>
  <Row style="min-height: 80vh">
    <keep-alive>
      <Col span="18">
        <router-view class="rtv"></router-view>
      </Col>
    </keep-alive>
    <Col span="6">
      <hot class="ht"></hot>
    </Col>
  </Row>
</template>

<script>
  import Hot from './Hot';

  export default {
    components: {
      Hot
    }
  };
</script>

<style lang="scss" scoped>
  #app {
    padding: 32px;
  }

  .rtv {
    /*height: 300px;*/
    margin-left: 50px;
    margin-top: 30px;
    margin-right: 10px;
    background-color: aliceblue;
  }

  .ht {
    margin-left: 10px;
    margin-top: 30px;
    margin-right: 50px;
    background-color: #0075a8;
  }
</style>


