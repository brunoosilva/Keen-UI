<script>
  import Buefy from 'buefy';
  import ScInput from '../sc-input/ScInput';

  export default {
    name: 'sc-autocomplete',
    extends: Buefy.Autocomplete,
    components: {
      bInput: ScInput,
    },
  };
</script>
