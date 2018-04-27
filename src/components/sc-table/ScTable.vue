<script>
  import Buefy from 'buefy';
  import ScIcon from '../sc-icon/ScIcon';
  import ScCheckbox from '../sc-checkbox/ScCheckbox';
  import ScTableColumn from '../sc-table-column/ScTableColumn';
  import ScPagination from '../sc-pagination/ScPagination';

  export default {
    name: 'sc-table',
    extends: Buefy.Table,
    props: {
      striped: {
        type: Boolean,
        default: true,
      },
      /**
       * Linhas são destacadas ao passar o mouse
       */
      hoverable: {
        type: Boolean,
        default: true,
      },
      /**
       * Linhas aparecem como cartões no celular (linhas de recolhimento)
       */
      mobileCards: {
        type: Boolean,
        default: true,
      },
    },
    components: {
      bIcon: ScIcon,
      bCheckbox: ScCheckbox,
      bTableColumn: ScTableColumn,
      BPagination: ScPagination,
    },
  };
</script>
