<script>
  import Buefy from 'buefy';
  import ScIcon from '../sc-icon/ScIcon';

  export default {
    name: 'sc-input',
    extends: Buefy.Input,
    props: {
      type: {
        type: String,
        default: 'text',
      },
      passwordReveal: {
        type: Boolean,
      },
      hasCounter: {
        type: Boolean,
        default: true,
      },
    },
    components: {
      bIcon: ScIcon,
    },
  };
</script>
