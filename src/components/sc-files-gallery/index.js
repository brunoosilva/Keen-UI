import Vue from 'vue';
import ScFilesGallery from './ScFilesGallery';

export default {
  open({ files = [], selected = null }) {
    const ScFilesGalleryComponent = Vue.extend(ScFilesGallery);

    return new ScFilesGalleryComponent({
      el: document.createElement('div'),
      propsData: {
        files,
        selected: !selected ? files[0] : selected,
      },
    });
  },
};
