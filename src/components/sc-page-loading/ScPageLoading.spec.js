import Vue from 'vue';
import ScPageLoading from './ScPageLoading';

describe('ScPageLoading.vue', () => {
  let vm;

  beforeEach(() => {
    const Constructor = Vue.extend(ScPageLoading);
    vm = new Constructor().$mount();
  });

  it('check name component', () => {
    expect(ScPageLoading.name).toEqual('sc-page-loading');
  });

  it('check if spinner render', () => {
    expect(vm.$el.querySelector('.page-loading__spinner')).toBeDefined();
  });
});
