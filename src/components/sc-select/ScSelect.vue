<script>
  import Buefy from 'buefy';

  export default {
    name: 'sc-select',
    extends: Buefy.Select,
    props: {
      placeholder: {
        type: String,
      },
      multiple: {
        type: Boolean,
      },
      nativeSize: {
        type: [String, Number],
      },
    },
  };
</script>
