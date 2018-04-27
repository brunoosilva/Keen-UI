<template>
  <section>
    <sc-page-loading v-if="loading" />

    <button
      class="button page-base__btn-back"
      @click="back"
      v-if="showBack">
      <sc-icon
        icon="chevron-circle-left"
        size="is-medium" />
    </button>

    <h1
      class="title page-base__title has-text-primary"
      v-if="title">{{ title }}</h1>
    <h2
      class="subtitle"
      v-if="subTitle">{{ subTitle }}</h2>

    <div class="page-content"
         :class="{'box': box}">
      <slot></slot>
    </div>
  </section>
</template>

<script>
  import ScIcon from '../sc-icon/ScIcon';
  import ScPageLoading from '../sc-page-loading/ScPageLoading'; //eslint-disable-line

  export default {
    name: 'sc-page-base',
    props: {
      /**
       * Título da página, usando a tag **h1**
       */
      title: {
        type: String,
      },
      /**
       * SubTítulo da página, usando a tag **h2**
       */
      subTitle: {
        type: String,
      },
      /**
       * Mostra um loading no bloco da página
       */
      loading: {
        type: Boolean,
        default: false,
      },
      /**
       * Coloca a class **box** no content da página, assim cria um box com fundo branco e padding
       */
      box: {
        type: Boolean,
        default: false,
      },
      /**
       * Mostrar botão de voltar
       */
      showBack: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      /**
       * Evento clique do botão voltar
       * @event back
       */
      back() {
        this.$emit('back');
      },
    },
    components: {
      ScPageLoading,
      ScIcon,
    },
  };
</script>

<style lang="scss" scoped>
  @import "~secure-ui/src/scss/variables"; //eslint-disable-line

  .page-base__title{
    display: inline-block;
  }

  .page-base__btn-back{
    display: inline-block;
    background-color: transparent;
    border-color: transparent;
    color: $primary;
  }

  .page--loading{
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
