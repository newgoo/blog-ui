<template>
  <div style="margin: 0 18%">
    <navigation></navigation>
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
