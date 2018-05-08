<template>
  <div>
    <div v-for="year in TimeLine">
      <div>{{year.year}}</div>
      <div v-for="blog in year.ylist">
        <router-link :to="{name:'detail',params:{id: blog.id}}">
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

</style>
