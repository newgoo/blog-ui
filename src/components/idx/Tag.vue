<template>
  <div>
    <title>title</title>
    <div>
      <div v-for="tag in TagList" :key="tag.id">
        <router-link :to="{name:'tagdetail',params:{id: tag.id}}">
          <Button v-if="getNum(tag.id)" type="info">{{tag.tag}}</Button>
          <Button v-else type="success">{{tag.tag}}</Button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$store.dispatch('GetTagLsAction').catch(error => {
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

</style>

