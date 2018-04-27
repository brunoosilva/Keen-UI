<script>
  import ScDecimal from '../sc-decimal/ScDecimal';

  export default {
    name: 'sc-input-percent',
    extends: ScDecimal,
    props: {
      /**
       * Quantas casas decimais
       */
      precision: {
        type: Number,
        default: 0,
      },
      /**
       * Sufixo
       */
      suffix: {
        type: String,
        default: () => '%',
      },
    },
  };
</script>
