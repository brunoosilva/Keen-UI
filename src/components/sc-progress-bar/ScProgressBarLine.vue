<template>
  <span class="sc-progress-bar__wrapper-line">
    <span
      :class="`sc-progress-bar__line progress ${barSize} ${barTheme}`">
      <span
        class="sc-progress-bar__fill"
        :class="[
          `sc-progress-bar__fill--${this.theme}`,
          { 'sc-progress-bar__fill--percent': isPercent }
        ]"
        :style="{
          'width': `${percentage}%`,
          'background-color': fillColor,
        }">
        <label
          class="sc-progress-bar__label"
          :class="[
            `sc-progress-bar__label--${this.size}`,
            {
              'sc-progress-bar__label--dark': percentage < 9,
              'sc-progress-bar__label--light': percentage >= 9,
            }
          ]"
          v-if="isPercent">{{ percentage | percent }}</label>
      </span>
      <span
        v-if="showPartial && !isPercent"
        class="sc-progress-bar__partial"
        :class="`sc-progress-bar__partial--${this.size}`">
        {{ partial }}
      </span>
    </span>
    <span
      v-if="showPartial && isPercent"
      class="sc-progress-bar__partial-line">
      {{ partial }}
    </span>
  </span>
</template>

<script>
  export default {
    name: 'sc-progress-bar-line',
    props: {
      size: {
        type: String,
        required: true,
      },
      theme: {
        type: String,
        required: true,
      },
      percentage: {
        type: Number,
        required: true,
      },
      fillColor: {
        type: String,
      },
      showPartial: {
        type: Boolean,
        required: true,
      },
      partial: {
        type: Number,
        required: true,
      },
      isPercent: {
        type: Boolean,
        required: true,
      },
    },
    computed: {
      barSize() {
        return this.size ? `sc-progress-bar__line--${this.size}` : '';
      },
      barTheme() {
        return this.theme ? `sc-progress-bar__line--${this.theme}` : '';
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "~secure-ui/src/scss/variables"; //eslint-disable-line

  .sc-progress-bar__wrapper-line{
    display: flex;
    align-items: center;
  }

  .sc-progress-bar__partial-line{
    margin: -5px .75rem;
  }

  .sc-progress-bar__line {
    width: 100%;
    display: inline-block;
    background-color: #EEE;
    position: relative;
    transition: background ease-in-out .2s;
    margin-bottom: 0;

    &:hover {
      background-color: darken(#EEE, 5);
    }

    &--small {
      height: 0.8rem;
      font-size: 0.6rem;
      line-height: 0.9rem;
    }

    &--medium {
      height: 16px;
      font-size: 12px;
      line-height: 18px;
    }

    &--large {
      height: 22px;
      font-size: 15px;
      line-height: 22px;
    }

    &--primary {
      &:hover {
        .sc-progress-bar__fill--primary {
          background-color: darken($primary, 10);
        }
      }
    }

    &--danger {
      &:hover {
        .sc-progress-bar__fill--danger {
          background-color: darken($danger, 10);
        }
      }
    }

    &--info {
      &:hover {
        .sc-progress-bar__fill--info {
          background-color: darken($info, 10);
        }
      }
    }

    &--success {
      &:hover {
        .sc-progress-bar__fill--success {
          background-color: darken($success, 10);
        }
      }
    }
  }

  .sc-progress-bar__fill {
    height: 100%;
    min-width: 3%;
    max-width: 85%;
    display: inline-block;
    border-radius: 30px;
    transition: ease 1s width, background 0.3s ease;

    &--percent{
      min-width: 5%;
    }

    &--primary{
      background-color: $primary;
    }

    &--danger{
      background-color: $danger;
    }

    &--info{
      background-color: $info;
    }

    &--success{
      background-color: $success;
    }
  }

  .sc-progress-bar__label {
    text-align: center;
    font-weight: 700;
    display: block;
    margin: 0 5px;
    transition: ease 1s width;

    &--small{
      font-size: 9px;
      line-height: 14px;
    }

    &--dark{
      color: #000;
    }

    &--light{
      color: #fff;
    }
  }

  .sc-progress-bar__partial {
    color: #555;
    font-size: 0.6rem;
    font-weight: 300;
    line-height: 0.9rem;
    display: inline-block;
    margin-left: 5px;
    position: relative;

    &--small{
      font-size: 9px;
      line-height: 14px;
      position: relative;
      top: -2px;
    }

    &--medium{
      font-size: 13px;
      top: -3px;
    }

    &--large{
      font-size: 15px;
      line-height: 16px;
    }
  }
</style>
