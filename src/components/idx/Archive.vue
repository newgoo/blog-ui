<template>
  <div>
    <div v-for="year in TimeLine">
      <div class="year">{{year.year}}</div>
      <div v-for="blog in year.ylist" class="tt">
        <router-link :to="{name:'detail',params:{id: blog.id}}">
          <i class="fas fa-arrow-circle-right"></i>
          {{blog.title}}
        </router-link>
      </div>
      <br/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Archive',
    mounted() {
      this.$store.dispatch('GetTimeLineAPI').catch(error => {
        console.error(error);
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
  .year{
    font-weight: bold;
    font-size: 16px;
    height: 25px;
  }
  .tt{
    text-indent: 20px;
    height: 20px;
  }

</style>
