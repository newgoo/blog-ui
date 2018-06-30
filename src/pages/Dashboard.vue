<template>
  <div>
    <navigation></navigation>
    <!-- <router-view></router-view> -->
    <Midle></Midle>
    <down-gation></down-gation>
  </div>
</template>

<script>
  import Navigation from '../components/Navigation';
  import DownGation from '../components/DownGation';
  import Midle from '../components/Midle';

  export default {
    components: {
      Navigation,
      DownGation,
      Midle
    }
  };
</script>
