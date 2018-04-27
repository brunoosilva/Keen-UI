<script>
  import Buefy from 'buefy';

  export default {
    name: 'sc-checkbox',
    extends: Buefy.Checkbox,
    props: {
      value: [String, Number, Boolean, Function, Object, Array, Symbol],
      nativeValue: [String, Number, Boolean, Function, Object, Array, Symbol],
      disabled: Boolean,
      name: String,
      size: String,
      trueValue: {
        type: [String, Number, Boolean, Function, Object, Array, Symbol],
        default: true,
      },
      falseValue: {
        type: [String, Number, Boolean, Function, Object, Array, Symbol],
        default: false,
      },
    },
  };
</script>
