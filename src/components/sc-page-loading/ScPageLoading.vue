<template>
  <div
    class="page-loading"
    :class="{'page-loading--overlay': overlay}">
    <sc-spinner :centered="true" />
  </div>
</template>

<script>
  import ScSpinner from '../sc-spinner/ScSpinner'; //eslint-disable-line

  export default {
    name: 'sc-page-loading',
    props: {
      /**
       * Coloca uma class no page background transparent como overlay
       */
      overlay: {
        type: Boolean,
        default: true,
      },
    },
    components: {
      //ScSpinner,
    },
  };
</script>

<style scoped>
  .page-loading{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 9;
  }

  .page-loading--overlay{
    background-color: rgba(255, 255, 255, 0.7);
  }
</style>
