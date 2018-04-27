<script>
  import Buefy from 'buefy';

  export default {
    name: 'sc-table-column',
    extends: Buefy.TableColumn,
    props: {
      centered: {
        type: Boolean,
        default: true,
      },
    },
  };
</script>
