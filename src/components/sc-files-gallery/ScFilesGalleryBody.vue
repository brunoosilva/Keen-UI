<template>
  <div class="sc-gallery__body">
    <div class="sc-gallery__controls">
      <button
        type="button"
        class="button sc-gallery__controls-btn sc-gallery__controls-btn_left"
        @click="$emit('goLeft')">
        <sc-icon icon="chevron-left" />
      </button>
      <button
        type="button"
        class="button sc-gallery__controls-btn sc-gallery__controls-btn_right"
        @click="$emit('goRight')">
        <sc-icon icon="chevron-right" />
      </button>
    </div>

    <sc-files-gallery-highlighter
      :selected="selected"
      v-if="selected" />

  </div>
</template>

<script>
  import ScIcon from '../sc-icon/ScIcon';
  import ScFilesGalleryHighlighter from './ScFilesGalleryHighlighter';

  export default {
    name: 'sc-files-gallery-body',
    props: {
      selected: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        loading: false,
      };
    },
    components: {
      ScIcon,
      ScFilesGalleryHighlighter,
    },
  };
</script>

<style lang="scss" scoped>
  @import "~secure-ui/src/scss/variables"; //eslint-disable-line

  .sc-gallery__body{
    flex: auto;
    position: relative;
  }

  .sc-gallery__controls-btn{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 65px;
    height: 100px;
    background-color: transparent;
    color: $white;
    font-size: $size-3;
    border: 0;
    padding: 0;
    text-align: center;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    &:hover{
      background-color: $primary;
      color: $white;
    }
  }

  .sc-gallery__controls-btn_left{
    left: 0;
    padding-right: 7px;
  }

  .sc-gallery__controls-btn_right{
    right: 0;
    padding-left: 7px;
  }
</style>
