<template>
  <VmMarkdown width="1000px" height="600px" v-on:getHtml="showHtml"></VmMarkdown>
</template>

<script>
  import VmMarkdown from 'vm-markdown';

  export default {
    components: {
      VmMarkdown
    },
    methods: {
      showHtml(data) {
        console.log(data);
      }
    }
  };
</script>

<style scoped>

</style>
