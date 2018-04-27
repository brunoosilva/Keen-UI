import Vue from 'vue';
import ScPageBase from './ScPageBase';

describe('ScPageBase.vue', () => {
  let vm;
  let propsData;

  beforeEach(() => {
    propsData = {
      title: 'Teste',
    };

    const Constructor = Vue.extend(ScPageBase);
    vm = new Constructor({ propsData: propsData }).$mount();
  });

  it('check name component', () => {
    expect(ScPageBase.name).toEqual('sc-page-base');
  });

  it('check if value of h1 is equal in props', () => {
    expect(vm.$el.querySelector('h1').textContent).toEqual('Teste');
  });

  it('check if value of h2 is equal in props', () => {
    const Constructor = Vue.extend(ScPageBase);
    const vm = new Constructor({
      propsData: Object.assign(propsData, {
        subTitle: 'Teste 2'
      }),
    }).$mount();

    expect(vm.$el.querySelector('h2').textContent).toEqual('Teste 2');
  });
});
