<template>
  <transition name="fade">
    <div
      :class="$options.name"
      role="dialog"
      v-show="isOpened">

      <sc-files-gallery-header
        :selected="selected"
        @close="close"/>

      <sc-files-gallery-body
        :selected="selected"
        @goLeft="goLeft"
        @goRight="goRight"/>

      <sc-files-gallery-footer
        :selected="selected"
        :files="files"
        @changeFile="changeFile" />
    </div>
  </transition>
</template>

<script>
  import ScFilesGalleryHeader from './ScFilesGalleryHeader';
  import ScFilesGalleryBody from './ScFilesGalleryBody';
  import ScFilesGalleryFooter from './ScFilesGalleryFooter';
  import ScFilesGalleryHighlighter from './ScFilesGalleryHighlighter';

  export default {
    name: 'sc-files-gallery',
    props: {
      /**
       * Arquivo selecionado, mostra na visualização e marca ele na lista de arquivos no footer.
       *
       * Exemplo:
       * ```
       * {
       *  fileName: 'test.xml',
       *  fileUrl: 'https://www.w3schools.com/xml/note.xml',
       *  mimeType: 'text/xml',
       * }
       * ```
       */
      selected: {
        type: Object,
      },
      /**
       * Lista de arquivos para visualizar, a lista tem que seguir o exemplo abaixo:
       *
       * ```
       * {
       *  fileName: 'test.xml',
       *  fileUrl: 'https://www.w3schools.com/xml/note.xml',
       *  mimeType: 'text/xml',
       * }
       * ```
       */
      files: {
        type: Array,
        required: true,
      },
      /**
       * `clip` para remover o scrollbar do `<body>`, `keep` ter uma barra de rolagem não rolável para evitar
       * a mudança de plano de fundo, mas irá definir `<body>` para a posição fixa, pode quebrar alguns layouts.
       */
      scroll: {
        type: String,
        default: () => 'clip',
        validator: value => [
          'clip',
          'keep',
        ].indexOf(value) >= 0,
      },
    },
    data() {
      return {
        isOpened: false,
        savedScrollTop: null,
      };
    },
    watch: {
      isOpened() {
        this.handleScroll();
      },
    },
    methods: {
      changeFile(file) {
        this.selected = file;
      },
      goLeft() {
        const actualIndex = this.files
          .findIndex(file => JSON.stringify(file) === JSON.stringify(this.selected));
        const nextIndex = (actualIndex === 0) ? this.files.length - 1 : actualIndex - 1;

        this.changeFile(this.files[nextIndex]);
      },
      goRight() {
        const actualIndex = this.files
          .findIndex(file => JSON.stringify(file) === JSON.stringify(this.selected));
        const nextIndex = (actualIndex === this.files.length - 1) ? 0 : actualIndex + 1;

        this.changeFile(this.files[nextIndex]);
      },
      close() {
        this.isOpened = false;

        setTimeout(() => {
          this.$destroy();
          const gallery = document.querySelector(`.${this.$options.name}`);

          if (gallery) {
            gallery.remove();
          }
        }, 150);
      },
      handleScroll() {
        if (typeof window === 'undefined') return;

        if (this.scroll === 'clip') {
          document.documentElement.classList.toggle('is-clipped', this.isOpened);
          return;
        }

        this.savedScrollTop = !this.savedScrollTop
          ? document.documentElement.scrollTop
          : this.savedScrollTop;

        document.body.classList.toggle('is-noscroll', this.isOpened);

        if (this.isOpened) {
          document.body.style.top = `-${this.savedScrollTop}px`;
          return;
        }

        document.documentElement.scrollTop = this.savedScrollTop;
        document.body.style.top = null;
        this.savedScrollTop = null;
      },
    },
    created() {
      document.addEventListener('keydown', (event) => {
        if (event.keyCode === 37) {
          this.goLeft();
        }

        if (event.keyCode === 39) {
          this.goRight();
        }
      });
    },
    mounted() {
      const gallery = document.querySelector(`.${this.$options.name}`);

      if (!gallery) {
        document.body.insertAdjacentElement('afterbegin', this.$el);
        this.isOpened = true;
        this.handleScroll();
      }
    },
    components: {
      ScFilesGalleryHeader,
      ScFilesGalleryBody,
      ScFilesGalleryFooter,
      ScFilesGalleryHighlighter,
    },
  };
</script>

<style lang="scss">
  @import "~secure-ui/src/scss/variables"; //eslint-disable-line

  .sc-files-gallery{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-color: rgba(51, 51, 51, 0.95);
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
</style>
