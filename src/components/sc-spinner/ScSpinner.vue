<template>
  <div
    class="spinner"
    :class="{'spinner--centered': centered}">
    <div class="spinner--item spinner--item-rect1"></div>
    <div class="spinner--item spinner--item-rect2"></div>
    <div class="spinner--item spinner--item-rect3"></div>
    <div class="spinner--item spinner--item-rect4"></div>
    <div class="spinner--item spinner--item-rect5"></div>
  </div>
</template>

<script>
  export default {
    name: 'sc-spinner',
    props: {
      /**
       * Centraliza o loading dentro de um elemento com ***position: relative***.
       */
      centered: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "~secure-ui/src/scss/variables";

  .spinner {
    width: 50px;
    height: 40px;
    text-align: center;
  }

  .spinner--centered{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
  }

  .spinner--item {
    background-color: $primary;
    height: 100%;
    width: 6px;
    display: inline-block;

    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
    animation: sk-stretchdelay 1.2s infinite ease-in-out;
  }

  .spinner--item-rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  .spinner--item-rect3 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  .spinner--item-rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  .spinner--item-rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }

  @-webkit-keyframes sk-stretchdelay {
    0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
    20% { -webkit-transform: scaleY(1.0) }
  }

  @keyframes sk-stretchdelay {
    0%, 40%, 100% {
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }
    20% {
       transform: scaleY(1.0);
       -webkit-transform: scaleY(1.0);
    }
  }
</style>
