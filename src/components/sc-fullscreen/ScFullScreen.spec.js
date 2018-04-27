import Vue from 'vue';
import ScFullScreen from './ScFullScreen';
import '../../../test/unit/__mocks__/fullscreen';

describe('ScFullScreen.vue', () => {
  let vm;

  beforeEach(() => {
    vm = new Vue(ScFullScreen).$mount();
  });

  it('check name component', () => {
    expect(ScFullScreen.name).toEqual('sc-fullscreen');
  });

  it('default fullscreen is false', () => {
    expect(vm.isFullScreen).toBeFalsy();
  });

  it('enable and disable fullscreen', () => {
    vm.toggleFullScreen();

    expect(document.documentElement.webkitRequestFullScreen).toHaveBeenCalled();
    expect(vm.isFullScreen).toBeTruthy();

    vm.toggleFullScreen();

    expect(document.webkitCancelFullScreen).toHaveBeenCalled();
    expect(vm.isFullScreen).toBeFalsy();
  });
});
