<template>
  <div
    class="sc-gallery__footer"
    :class="{ 'sc-gallery__footer--opened': isShowThumbnails }">
    <div class="sc-gallery__footer-info">
      <button
        type="button"
        class="button is-link"
        @click="toggleThumbnails">
        <span>Mostrar todos arquivos</span>
        <sc-icon
          icon="angle-up"
          class="sc-gallery__btn-link"
          :class="{ 'sc-gallery__btn-link--opened': isShowThumbnails }" />
      </button>
    </div>

    <div class="sc-gallery__footer-thumbnails">

      <transition name="sc-gallery__thumbnails--transition">
        <ol
          class="sc-gallery__thumbnails"
          v-if="isShowThumbnails">
          <li
            class="sc-gallery__thumbnail"
            v-for="(file, index) in files"
            :key="index">

            <figure
              role="group"
              class="sc-gallery__thumbnail-group">
              <a
                href
                class="sc-gallery__thumbnail-figure"
                :class="{
                  'sc-gallery__thumbnail-figure--active': file.fileName === selected.fileName
                }"
                role="button"
                @click.prevent="$emit('changeFile', file)">
                <img
                  :src="img"
                  :alt="`Visualizar uma versão larga de ${file.fileName}`"
                  class="sc-gallery__thumbnail-img"
                  v-if="img"/>

                <sc-icon
                  :icon="icon"
                  size="is-large"
                  v-if="icon" />
              </a>

              <figcaption
                class="sc-gallery__thumbnail-title"
                :aria-label="file.fileName">{{ file.fileName }}</figcaption>
            </figure>
          </li>
        </ol>
      </transition>

    </div>
  </div>
</template>

<script>
  import ScIcon from '../sc-icon/ScIcon';
  import { Dom } from 'secure-providers'; //eslint-disable-line

  export default {
    name: 'sc-files-gallery-footer',
    props: {
      selected: {
        type: Object,
        required: true,
      },
      files: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        isShowThumbnails: false,
      };
    },
    computed: {
      icon() {
        const { mimeType } = this.selected;
        return mimeType.indexOf('image/') < 0 ? 'file-code' : null;
      },
      img() {
        const { mimeType, fileUrl } = this.selected;
        return mimeType.indexOf('image/') >= 0 ? fileUrl : null;
      },
    },
    watch: {
      selected() {
        setTimeout(() => {
          const elemThumbnails = document.querySelector('.sc-gallery__footer-thumbnails');
          const elemSelected = document.querySelector('.sc-gallery__thumbnail-figure--active');

          if (elemThumbnails && elemSelected) {
            const extraSize = Dom.getElementHeightExtraSize(elemThumbnails);
            const thumbnails = elemThumbnails.getBoundingClientRect();
            const selected = elemSelected.getBoundingClientRect();

            elemThumbnails.scrollTo(
              0,
              (selected.top - thumbnails.top - extraSize) + elemThumbnails.scrollTop,
            );
          }
        }, 0);
      },
    },
    methods: {
      toggleThumbnails() {
        this.isShowThumbnails = !this.isShowThumbnails;
      },
    },
    components: {
      ScIcon,
    },
  };
</script>

<style lang="scss" scoped>
  @import "~secure-ui/src/scss/variables"; //eslint-disable-line

  .sc-gallery__footer{
    width: 100%;
    height: 36px;
    transition: cubic-bezier(0.4, 0.03, 0, 1.12) 1s;
  }

  .sc-gallery__footer--opened{
    height: 196px;
  }

  .sc-gallery__footer-info{
    background-color: $primary;
  }

  .sc-gallery__btn-link{
    transform: rotate(0deg);
    transition: cubic-bezier(0.4, 0.03, 0, 1.12) 1s transform;
  }

  .sc-gallery__btn-link--opened{
    transform: rotate(180deg);
  }

  .sc-gallery__footer-thumbnails{
    height: 10rem;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0.63rem 0 1.26rem 0;
    scroll-behavior: smooth;
  }

  .sc-gallery__thumbnails{
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }

  .sc-gallery__thumbnail{
    text-align: center;
    margin: 0 .4rem 0 .4rem;
    width: 140px;
  }

  .sc-gallery__thumbnail-figure{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #565555;
    margin: 10px auto 0 auto;
    padding: 0.6rem 0.12rem;
    border: 2px solid #565555;
    height: 90px;
    &:hover{
      background-color: #888787;
    }
  }

  .sc-gallery__thumbnail-figure--active{
    border-color: $primary;
  }

  .sc-gallery__thumbnail-img{
    height: 60px;
    animation: fadein 2s;
  }

  .sc-gallery__thumbnail-title{
    color: $white;
    font-size: $size-7;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .sc-gallery__thumbnails--transition-leave-active {
    transition: all 1s;
  }

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
</style>
