import Vue from 'vue';
import ScCard from './ScCard';

describe('ScCard.vue', () => {
  let vm;
  let propsData;

  beforeEach(() => {
    propsData = {
      title: 'Teste',
    };

    const Constructor = Vue.extend(ScCard);
    vm = new Constructor({ propsData: propsData }).$mount();
  });

  it('check name component', () => {
    expect(ScCard.name).toEqual('sc-card');
  });

  it('check if value of title is equal in props', () => {
    expect(vm.$el.querySelector('.card-header-title').textContent).toEqual('Teste');
  });
});
