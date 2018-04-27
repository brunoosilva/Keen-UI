<script>
  import Buefy from 'buefy';

  export default {
    name: 'sc-field',
    extends: Buefy.Field,
    props: {
      type: String,
      label: String,
      labelFor: String,
      message: [String, Array],
      grouped: Boolean,
      groupMultiline: Boolean,
      position: String,
      expanded: Boolean,
      horizontal: Boolean,
      addons: {
        type: Boolean,
        default: true,
      },
      customClass: String,
    },
  };
</script>
