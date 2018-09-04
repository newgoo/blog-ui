<template>
  <div>
    <Row class="centent" style="min-height: 80vh">
    <keep-alive>
    <Col span="18">
    <router-view class="rtv"></router-view>
    </Col>
    </keep-alive>
    <Col span="6">
    <hot class="ht"></hot>
    </Col>
    </Row>
  </div>
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
    margin-top: 30px;
    margin-right: 20px;
  }

  .ht {
    margin-top: 30px;
  }
</style>


