<template>
  <section class="section">
    <div class="content has-text-grey has-text-centered">
      <p>
        <sc-icon
          :icon="icon"
          size="is-large">
        </sc-icon>
      </p>
      <p v-html="message"></p>
    </div>
  </section>
</template>

<script>
  import ScIcon from '../sc-icon/ScIcon';

  export default {
    name: 'sc-table-empty',
    props: {
      /**
       * Icone mostrado acima da mensagem
       */
      icon: {
        type: String,
        default: 'exclamation-triangle',
      },
      /**
       * Mensagem de erro
       */
      message: {
        type: String,
        default: 'Nenhum resultado encontrado',
      },
    },
    components: {
      ScIcon,
    },
  };
</script>
