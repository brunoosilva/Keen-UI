<script>
  import Switches from 'vue-switches';

  export default {
    name: 'sc-switch',
    extends: Switches,
    props: {
      /**
      * @model
      * Variavel responsável pela mudança de estado do switch, se true ou false.
      */
      value: {
        type: Boolean,
        required: true,
        default: false,
      },
      /**
       * Renderiza uma tag **label** acima do switch.
       * Substitui as props 'textEnabled' e 'textDisabled'.
      */
      label: {
        type: String,
        required: false,
        default: '',
      },
      /**
      * Texto que será renderizado na tag label se o switch estiver **ativo**.
      */
      textEnabled: {
        type: String,
        required: false,
        default: '',
      },
      /**
      * Texto que será renderizado na tag label se o switch estiver **inativo**.
      */
      textDisabled: {
        type: String,
        required: false,
        default: '',
      },
      /**
      * Tema utilizado para renderizar o componente. Aceita as opções 'bulma' ou 'bootstrap'
      */
      theme: {
        type: String,
        required: false,
        default: 'default',
      },
      /**
      * O modificador de cor dos switches, aceitando `default`, `primary`, `red`, `blue`,
      * `green` e `yellow` para o tema **bulma**
      */
      color: {
        type: String,
        required: false,
        default: 'default',
      },
      /**
      * Renderiza um switch no formato **bold**, um pouco mais destacado.
      */
      typeBold: {
        type: Boolean,
        required: false,
        default: false,
      },
      /**
       * Por padrão o swhitch emite um evento "changed" quando o componente 'monta' (mount).
       * Para desabilitar passe a boleana `false`;
      */
      emitOnMount: {
        type: Boolean,
        required: false,
        default: true,
      },
    },
  };
</script>
