<script>
  import ScDecimal from '../sc-decimal/ScDecimal';

  export default {
    name: 'sc-input-currency',
    extends: ScDecimal,
    props: {
      prefix: {
        type: String,
        default: () => 'R$',
      },
    },
  };
</script>
