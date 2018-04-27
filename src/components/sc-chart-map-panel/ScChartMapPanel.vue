<template>

  <aside
    class="sc-map-panel sc-map-panel--fade"
    :class="{ 'sc-map-panel--visible': fade, 'sc-map-panel--hidden': !fade }">
    <header class="sc-map-panel__header">
      <h3 class="sc-map-panel__title">{{ info.state_name }}</h3>
      <span
        class="sc-map-panel__value"
        v-show="info">
        Total: {{ info.amount }} ({{ percentage | percent }})
      </span>
    </header>

    <ul class="sc-map-panel__list">
      <li
        v-for="(method, index) in getMethods"
        :key="index"
        class="sc-map-panel__list-item">
        <h4>{{ method[0] }}</h4>
        <sc-progress-bar
          size="small"
          :fillColor="colors[index%colors.length]"
          :isPercent="true"
          :showPartial="true"
          :name="method.delivery_method_name"
          :partial="method.amount"
          :total="info.amount" />
      </li>
    </ul>

  </aside>
</template>

<script>
  import ScProgressBar from '../sc-progress-bar/ScProgressBar';

  export default {
    name: 'sc-chart-map-panel',
    props: {
      total: {
        type: Number,
      },
      info: {
        type: Object,
        required: true,
      },
      fade: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        colors: [
          '#39c',
          '#5933cc',
          '#d65cd6',
          '#c3c',
          '#bdadeb',
          '#5cd699',
          '#7f33cc',
          '#a6cc33',
          '#cc3380',
        ],
      };
    },
    computed: {
      percentage() {
        return this.total ? (this.info.amount / this.total) * 100 : 0;
      },
      getMethods() {
        const { by_delivery_method = [] } = this.info || {};

        return [...by_delivery_method].sort((methodA, methodB) => methodB.amount - methodA.amount);
      },
    },
    components: {
      ScProgressBar,
    },
  };
</script>

<style lang="scss" scoped>
  .sc-map-panel {
    width: 220px;
    padding: 0.75rem;
    background: #fff;
    border: 1px solid #CCC;
    border-radius: 5px;
    position: absolute;
    z-index: 10;
    top: 75px;
    left: 180px;
    box-shadow: 2px 2px 20px 0 rgba(0, 0, 0, 0.25);

    &:before {
      content: '';
      position: absolute;
      z-index: 1;
      left: -10px;
      top: 50%;
      width: 0;
      height: 0;
      margin-top: -10px;
      border-width: 10px 10px 10px 0;
      border-style: solid;
      border-color: transparent #fff transparent transparent;
    }

    &--fade {
      transition: opacity 0.2s ease;
    }

    &--visible {
      opacity: 1;
    }

    &--hidden {
      opacity: 0;
    }

    &__header {
      font-size: 12px;
      font-weight: 700;
      line-height: 20px;
      margin: 0 0 -5px;
      padding: 0;
      border: none;

      .sc-map-panel__title {
        font-size: 12px;
        margin-bottom: 0;
        font-weight: 700;
      }

      .sc-map-panel__value {
        display: block;
        font-size: 10px;
        margin-top: -5px;
      }
    }

    &__list {
      display: block;
      list-style: none;
      margin: 0;
      padding: 0;
      line-height: 14px;
      font-size: 10px;
    }

    &__list-item {
      margin-bottom: -7px;
    }
  }
</style>
