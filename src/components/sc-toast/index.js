import Vue from 'vue';
import Toast from './Toast';

export default {
  open(params) {
    let message;
    if (typeof params === 'string') message = params;

    const defaultParam = {
      message,
      position: 'is-bottom',
    };
    const propsData = Object.assign(defaultParam, params);
    const ToastComponent = Vue.extend(Toast);
    return new ToastComponent({
      el: document.createElement('div'),
      propsData,
    });
  },
  success(message) {
    return this.open({
      message,
      duration: 3000,
      type: 'is-success',
    });
  },
  danger(message) {
    return this.open({
      message,
      duration: 5000,
      type: 'is-danger',
    });
  },
};
