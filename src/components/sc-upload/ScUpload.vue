<script>
  import Buefy from 'buefy';

  export default {
    name: 'sc-upload',
    extends: Buefy.Upload,
    props: {
      /**
       * Lista de arquivos selecionados, mesmo que seja um único arquivo
       * @model
       */
      value: {
        type: Array,
        default: [],
      },
      /**
       * O mesmo que nativo **multiple**
       */
      multiple: {
        type: Boolean,
        default: false,
      },
      /**
       * O mesmo que nativo **disabled**
       */
      disabled: {
        type: Boolean,
        default: false,
      },
      /**
       * O mesmo que nativo **required**
       */
      required: {
        type: Boolean,
        default: false,
      },
      /**
       * O mesmo que nativo **accept**
       *
       * @see Opções [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Limiting_accepted_file_types)
       */
      accept: {
        type: String,
      },
      /**
       * Aceita drag & drop e muda estilo do component
       */
      dragDrop: {
        type: Boolean,
        default: false,
      },
      /**
       * Caso o **dragDrop** seja `false`, será a cor usada para o
       * botão de upload, seguinte o padrão do Bulma.
       */
      type: {
        type: String,
        default: 'is-primary',
      },
      /**
       * Substitua os últimos arquivos escolhidos todas as vezes
       */
      native: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>
