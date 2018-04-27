<template>
  <div>
    <div
      class="sc-gallery__highlighter"
      v-if="code && !this.loading">
      <sc-highlighter
        language="markup"
        :code="code" />
    </div>

    <sc-spinner
      :centered="true"
      v-if="this.loading" />
  </div>
</template>

<script>
  import { Http } from 'secure-providers';
  import ScSpinner from '../sc-spinner/ScSpinner';
  import ScHighlighter from '../sc-highlighter/ScHighlighter';

  export default {
    name: 'sc-files-gallery-highlighter',
    props: {
      selected: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        code: null,
        loading: false,
      };
    },
    watch: {
      selected() {
        this.getContentFile();
      },
    },
    methods: {
      getContentFile() {
        this.code = null;
        this.loading = true;

        return Http.get(this.selected.fileUrl).then((code) => {
          this.loading = false;
          this.code = code;
        }).catch(() => {
          this.loading = false;
        });
      },
    },
    created() {
      this.getContentFile();
    },
    components: {
      ScSpinner,
      ScHighlighter,
    },
  };
</script>

<style lang="scss" scoped>
  .sc-gallery__highlighter{
    position: absolute;
    top: 0;
    width: calc(100% - 150px);
    height: 100%;
    overflow: auto;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
