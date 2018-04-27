<template>
  <button class="button is-small is-primary" @click="toggleFullScreen">
    <b-icon v-show="isFullScreen" icon="compress"></b-icon>
    <b-icon v-show="!isFullScreen" icon="expand-arrows-alt"></b-icon>
    <span>{{ isFullScreen ? 'Sair tela cheia' : 'Tela cheia' }}</span>
  </button>
</template>

<script>
  export default {
    name: 'sc-fullscreen',
    data() {
      return {
        isFullScreen: false,
      };
    },
    methods: {
      /**
       * Alterna entre o modo tela cheia e o modo padrão.
       * @public
       */
      toggleFullScreen() {
        if (!this.isFullScreen) {
          this.requestFullScreen();
        } else {
          this.exitFullScreen();
        }

        this.isFullScreen = !this.isFullScreen;
      },
      /**
       * Ativa o modo tela cheia
       * @public
       */
      requestFullScreen() {
        const docElm = document.documentElement;

        if (docElm.requestFullscreen) {
          docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
          docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
          docElm.webkitRequestFullScreen();
        } else if (docElm.msRequestFullscreen) {
          docElm.msRequestFullscreen();
        }
      },
      /**
       * Desativa o modo tela cheia
       * @public
       */
      exitFullScreen() {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      },
    },
  };
</script>