<script>
  import Buefy from 'buefy';
  import ScIcon from '../sc-icon/ScIcon';

  export default {
    name: 'sc-pagination',
    extends: Buefy.Pagination,
    components: {
      bIcon: ScIcon,
    },
  };
</script>
