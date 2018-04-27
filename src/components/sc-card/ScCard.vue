<template>
  <div
    class="card sc-card"
    :class="[{ 'has-image': $slots.image, 'sc-card--link': link }, cardTheme]">
    <sc-page-loading v-if="loading" />

    <header
      class="card-header sc-card__header"
      v-if="title || $slots.header">

      <!-- @slot O conteudo desse slot será renderizado no .card-header. OBS: Sobrescreve o título -->
      <slot name="header">
        <p class="card-header-title sc-card__title">{{ title }}</p>
        <a @click.prevent="$emit('iconClick', $event)"
           v-if="icon"
           class="card-header-icon">
          <b-icon :icon="icon"></b-icon>
        </a>
      </slot>
    </header>

    <div class="card-image sc-card__image" v-if="$slots.image">
      <!-- @slot O conteúdo desse slot será renderizado no .card-image -->
      <slot name="image"></slot>
    </div>

    <div class="card-content sc-card__content" v-if="$slots.body">
      <!-- @slot O conteúdo desse slot será renderizado no .card-content -->
      <slot name="body"></slot>
    </div>

    <footer class="card-footer sc-card__footer" v-if="$slots.footer">
      <!-- @slot O conteúdo desse slot será renderizado no .card-footer -->
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
  import ScPageLoading from '../sc-page-loading/ScPageLoading'; //eslint-disable-line

  export default {
    name: 'sc-card',
    props: {
      /**
       * Texto para ser usado como título do card - p.card-header-title
       */
      title: {
        type: String,
      },
      /**
       * Icone do Font Awesome a ser renderizado no card
       */
      icon: {
        type: String,
      },
      /**
       * Mostra um loading no card inteiro
       */
      loading: {
        type: Boolean,
        default: false,
      },
      /**
       * Tema do card
       */
      theme: {
        type: String,
        default: 'default',
      },
      /**
       * Tema do card
       */
      link: {
        type: Boolean,
        default: false,
      },
    },
    components: {
      ScPageLoading,
    },
    computed: {
      cardTheme() {
        return `sc-card--is-${this.theme}`;
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "~secure-ui/src/scss/variables";

  .sc-card {
    position: relative;
    height: 100%;
  }

  .sc-card__header {
    min-height: 48px;
  }

  .sc-card__title {
    font-size: 1.3rem;
    font-weight: normal;
  }

  .sc-card__image {
    border-bottom: 1px solid $grey-light;

    img {
      object-fit: fill;
    }
  }

  .sc-card--link {
    border: 1px solid $grey-light;
    box-shadow: none;
    transition: all ease .2s;
    transform: translateY(0px);

    &:hover,
    &:focus,
    &:active {
      border: 1px solid $primary;
      transform: translateY(-3px);

      &.sc-card--is-primary {
        .sc-card__content {
          a {
            color: $white;
            background-color: darken($primary, 10);
          }
        }
      }
      &.sc-card--is-default {
        .sc-card__content {
          a {
            color: $white;
            background-color: $primary;
          }
        }
      }
    }

    .sc-card__content {
      a {
        font-weight: bold;
        display: flex;
        height: 56px;
        margin: -1.5rem;
        padding: 1rem;
        justify-content: space-between;
        transition: background ease .2s, color ease .2s;
      }
    }

    &.sc-card--is-default {
      .sc-card__content {
        a {
          color: $grey-dark;
          background-color: $grey-lighter;

          &:focus {
            color: $white;
            background-color: $primary;
          }
        }
      }
    }
    &.sc-card--is-primary {
      border: 1px solid $grey-light;

      .sc-card__content {
        a {
          color: $white;
          background-color: $primary;

          &:focus {
            color: $white;
            background-color: darken($primary, 10);
          }
        }
      }
    }
  }
</style>
