<template>
  <div>
    <h2 class="head">
      链接收藏
    </h2>
    <div v-for="d in Data" class="classification">
      <h4 data-v-1c8e9d70="" class="h4">{{d.classification}}</h4>
      <div class="line">
        <ul>
          <li v-for="one in d.list" class="li">
            <a
              :href="one.url">{{one.title}}</a>
            <span>{{one.recommend}}</span>
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
      return {};
    },
    computed: {
      Data() {
        return this.$store.getters.getCollection;
      }
    },
    mounted() {
      this.$store.dispatch('GetCollectionListAPI').catch((error) => {
        console.error(error);
        return error;
      });
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
      a {
        font-size: 14px;
        font-weight: 600;
      }
    }
  }

</style>
