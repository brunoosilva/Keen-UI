import Vue from 'vue';
import ScModal from './ScModal';

describe('ScModal.vue', () => {
  let vm;
  let propsData;

  beforeEach(() => {
    propsData = {
      title: 'Teste',
    };

    const Constructor = Vue.extend(ScModal);
    vm = new Constructor({ propsData: propsData }).$mount();
  });

  it('check name component', () => {
    expect(ScModal.name).toEqual('sc-modal');
  });

  it('check if value of title is equal in props', () => {
    expect(vm.$el.querySelector('.modal-card-title').textContent).toEqual('Teste');
  });
});
