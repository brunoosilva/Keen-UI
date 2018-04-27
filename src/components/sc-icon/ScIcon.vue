<script>
  import Buefy from 'buefy';

  export default {
    name: 'sc-icon',
    extends: Buefy.Icon,
    props: {
      type: String,
      pack: {
        type: String,
        default: 'fa',
      },
      icon: String,
      size: String,
      customSize: String,
      customClass: String,
      both: Boolean,
    },
  };
</script>
