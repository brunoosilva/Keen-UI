<template>
  <div class="sc-progress-bar__wrapper">
    <p v-if="name"
       class="sc-progress-bar__name is-marginless">{{ name }}</p>

    <template v-if="hasLink">
      <a :href="link">
        <sc-progress-bar-line
          :size="size"
          :theme="theme"
          :percentage="finalPercentage"
          :fillColor="fillColor"
          :showPartial="showPartial"
          :partial="partial"
          :isPercent="isPercent" />
      </a>
    </template>
    <template v-else>
      <sc-progress-bar-line
        :size="size"
        :theme="theme"
        :percentage="finalPercentage"
        :fillColor="fillColor"
        :showPartial="showPartial"
        :partial="partial"
        :isPercent="isPercent" />
    </template>
  </div>
</template>

<script>
  import ScProgressBarLine from './ScProgressBarLine';

  export default {
    name: 'sc-progress-bar',
    props: {
      /**
       * Label que será renderizada acima da barra de progresso.
      */
      name: {
        type: String,
        default: '',
      },
      /**
       * Valor total que será a base do calculo de porcentagem da barra de progresso.
      */
      total: {
        type: Number,
        default: 0,
      },
      /**
       * Valor parcial que será a base do calculo de porcentagem da barra de progresso.
      */
      partial: {
        type: Number,
        default: 0,
      },
      /**
       * Caso informe a porcentagem direto, é ignorado o calculo de total e partial
       */
      percentage: {
        type: Number,
        default: 0,
      },
      /**
       * Temas padrão para a barra de progresso. As opções são:
       * `primary`, `danger`, `info`, `success`
       */
      theme: {
        type: String,
        default: 'primary',
      },
      /**
       * Se verdadeiro renderiza o valor como porcentagem.
       */
      isPercent: {
        type: Boolean,
        default: true,
      },
      /**
       * Mostra o valor parcial ao lado da barra de progresso.
      */
      showPartial: {
        type: Boolean,
        default: false,
      },
      /**
       * Tamanhos possíveis para a barra de progresso:
       * `small`, `medium`, `large`
      */
      size: {
        type: String,
        default: 'medium',
      },
      /**
       * Opção de fornecer a cor manualmente da barra de progresso.
      */
      fillColor: {
        type: String,
      },
      /**
       * Opção de fornecer um link
      */
      link: {
        type: String,
      },
    },
    computed: {
      finalPercentage() {
        if (this.percentage) return this.percentage;

        return this.total > 0 && this.partial <= this.total ?
          (this.partial / this.total) * 100 : 0;
      },
      hasLink() {
        return !!this.link;
      },
    },
    components: {
      ScProgressBarLine,
    },
  };
</script>

<style lang="scss" scoped>
  .sc-progress-bar {
    &__wrapper {
      margin-bottom: 5px;
    }

    &__name {
      margin-bottom: 0;
    }
  }
</style>
