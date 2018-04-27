<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title has-text-primary">{{ title }}</p>
    </header>

    <section class="modal-card-body" v-if="$slots.body">
      <slot name="body"></slot>
    </section>

    <footer class="modal-card-foot buttons is-right" v-if="$slots.footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'sc-modal',
    props: {
      /**
       * Titulo do modal, renderizado no p.modal-card-title
       */
      title: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .modal-card{
    width: auto;
  }
</style>
