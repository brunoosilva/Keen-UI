import Vue from 'vue';
import ScSpinner from './ScSpinner';

describe('ScSpinner.vue', () => {
  let vm;

  beforeEach(() => {
    const Constructor = Vue.extend(ScSpinner);
    vm = new Constructor().$mount();
  });

  it('check name component', () => {
    expect(ScSpinner.name).toEqual('sc-spinner');
  });

  it('check if spinner render', () => {
    expect(vm.$el.querySelector('.spinner')).toBeDefined();
    expect(vm.$el.querySelector('.spinner--item.spinner--item-rect1')).toBeDefined();
    expect(vm.$el.querySelector('.spinner--item.spinner--item-rect2')).toBeDefined();
    expect(vm.$el.querySelector('.spinner--item.spinner--item-rect3')).toBeDefined();
    expect(vm.$el.querySelector('.spinner--item.spinner--item-rect4')).toBeDefined();
    expect(vm.$el.querySelector('.spinner--item.spinner--item-rect5')).toBeDefined();
  });
});
