<template>
  <div>
    <sc-upload
      v-model="dropFiles"
      :multiple="multiple"
      :disabled="disabled"
      :accept="accept"
      :type="type"
      drag-drop
      class="sc-upload-box"
      v-if="!showFiles">

      <section class="section">
        <div class="content has-text-centered">
          <p>
            <sc-icon
              icon="cloud-upload-alt"
              size="is-large">
            </sc-icon>
          </p>
          <p>{{ message }}</p>
        </div>
      </section>

    </sc-upload>

    <div class="tags" v-if="showFiles">
      <div v-for="(file, index) in dropFiles"
           :key="index"
           class="tag is-primary">
        <span>{{ file.name }}</span>
        <button type="button"
                class="delete is-small"
                @click="removeFile(index)"></button>
      </div>
    </div>
  </div>
</template>

<script>
  import ScIcon from '../sc-icon/ScIcon';
  import ScUpload from '../sc-upload/ScUpload';

  export default {
    name: 'sc-upload-box',
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
       * Cria um **label** acima do box de upload.
       */
      label: {
        type: String,
        default: '',
      },
      /**
       * Informação de como o uusário pode usar e suas restrições
       */
      message: {
        type: String,
        default: 'Arraste e solte seus arquivos ou clique aqui',
      },
      /**
       * A cor usada para o box do drag & drop seguinte o padrão do Bulma.
       */
      type: {
        type: String,
        default: 'is-primary',
      },
    },
    data() {
      return {
        dropFiles: [],
      };
    },
    watch: {
      dropFiles(dropFiles) {
        this.$emit('input', dropFiles);
      },
    },
    computed: {
      showFiles() {
        return this.dropFiles.length > 0;
      }
    },
    methods: {
      removeFile(index) {
        this.dropFiles.splice(index, 1);
      },
    },
    components: {
      ScIcon,
      ScUpload,
    },
  };
</script>

<style lang="scss">
  .sc-upload-box .upload-draggable{
    width: 100%;
  }
</style>
