<template>
  <div class="sc-gallery__header">
    <div class="sc-gallery__header-content">
      <div class="sc-gallery__title is-size-6">{{ selected.fileName }}</div>

      <div class="sc-gallery__controls">
        <sc-tooltip
          label="Baixar"
          position="is-bottom">
          <a
            :href="selected.fileUrl"
            role="button"
            class="button sc-gallery__btn-controls"
            download>
            <sc-icon icon="download" />
          </a>
        </sc-tooltip>

        <sc-tooltip
          label="Fechar"
          position="is-bottom">
          <button
            type="button"
            role="button"
            class="button sc-gallery__btn-controls"
            @click="$emit('close')">
            <sc-icon icon="times" />
          </button>
        </sc-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
  import ScIcon from '../sc-icon/ScIcon';
  import ScTooltip from '../sc-tooltip/ScTooltip';

  export default {
    name: 'sc-files-gallery-header',
    props: {
      selected: {
        type: Object,
        required: true,
      },
    },
    components: {
      ScIcon,
      ScTooltip,
    },
  };
</script>

<style lang="scss" scoped>
  @import "~secure-ui/src/scss/variables"; //eslint-disable-line

  .sc-gallery__header{
    background-color: $primary;
    padding-left: 10px;
  }

  .sc-gallery__header-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.15rem;
  }

  .sc-gallery__title{
    color: #fff;
    max-width: 70%;
    white-space: nowrap;
    overflow: hidden;
  }

  .sc-gallery__controls{
    display: flex;
  }

  .sc-gallery__btn-controls{
    width: 3.15rem;
    height: 3.15rem;
    border-radius: 0;
    border: 0;
    background-color: transparent;
    color: $white;
    &:hover{
      color: $white;
      background-color: darken($primary, 10);
    }
  }
</style>
