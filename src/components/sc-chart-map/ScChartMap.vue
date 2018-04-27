<template>
  <div id="chart-map"
    @mousemove="menagePanelPosition('chart-map', $event)">

    <sc-chart-map-svg
      @currentState="setCurrentState"
      @leavingUf="resetPanel()"
      :data="info"
    />

    <template v-show="panelVisibility">
      <sc-chart-map-panel
        :fade="panelVisibility"
        :info="panelInfo"
        :total="total"
      />
    </template>

  </div>
</template>

<script>
  import ScChartMapSvg from '../sc-chart-map-svg/ScChartMapSvg'; //eslint-disable-line
  import ScChartMapPanel from '../sc-chart-map-panel/ScChartMapPanel'; //eslint-disable-line

  export default {
    name: 'sc-chart-map',
    components: {
      ScChartMapSvg,
      ScChartMapPanel,
    },
    props: {
      info: {
        type: Object,
        required: true,
      },
      total: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        currentState: null,
      };
    },
    methods: {
      menagePanelPosition(elementId, event) {
        const targetArea = document.getElementById(elementId);
        const targetElement = document.querySelector(`#${elementId} .sc-map-panel`);
        const area = targetArea.getBoundingClientRect();

        if (targetElement) {
          targetElement.style.left = `${(event.clientX - area.left) + 45}px`;
          targetElement.style.top = `${((event.clientY - area.top) + 64) - (targetElement.getBoundingClientRect().height / 2)}px`;
        }
      },
      setCurrentState(state) {
        this.currentState = state;
      },
      resetPanel() {
        this.currentState = null;
      },
    },
    computed: {
      panelVisibility() {
        return !!this.currentState;
      },
      panelInfo() {
        return this.currentState ? this.info[this.currentState] : {};
      },
      renderPanel() {
        return !!this.currentState;
      },
    },
  };
</script>

<style lang="scss" scoped>

</style>
