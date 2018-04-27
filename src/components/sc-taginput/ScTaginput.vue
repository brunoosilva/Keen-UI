<script>
  import Buefy from 'buefy';
  import ScAutocomplete from '../sc-autocomplete/ScAutocomplete';
  import ScTag from '../sc-tag/ScTag';

  export default {
    name: 'sc-taginput',
    extends: Buefy.Taginput,
    components: {
      bAutocomplete: ScAutocomplete,
      bTag: ScTag,
    },
  };
</script>
