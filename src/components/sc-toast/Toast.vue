<template>
    <transition
        :enter-active-class="transition.enter"
        :leave-active-class="transition.leave">
        <div
            v-show="isActive"
            class="toast"
            :class="[type, position]">
            <div v-html="message"></div>
            <button @click="close"
                    class="delete"></button>
        </div>
    </transition>
</template>

<script>
  import config from 'buefy/src/utils/config';
  import NoticeMixin from 'buefy/src/utils/NoticeMixin';

  export default {
    name: 'sc-toast',
    mixins: [NoticeMixin],
    data() {
      return {
        newDuration: this.duration || config.defaultToastDuration,
      };
    },
  };
</script>
