<template>
  <div class="modal">
    <div @click="showModal=true">
      <slot name="togler">
        <button>
          test
        </button>
      </slot>
    </div>

    <NModal v-model:show="showModal">
      <div class="modal__wrapper">
        <BaseTitle
          class="modal__title"
          :title="props.title"
        />
        <BaseButton
          class="modal__btn-close"
          iconLeft="Close"
          @onClick="showModal=false"
        />

        <div class="modal__content">
          <slot name="content">
            content
          </slot>
        </div>

        <BaseButton
          v-show="!hideBtnChancel"
          class="modal__btn-chancel"
          :title="props.chancelTitle"
          theme="secondary"
          @onClick="showModal=false"
        />
        <BaseButton
          v-show="!hideBtnSubmit"
          class="modal__btn-submit"
          :title="props.submitTitle"
          theme="primary"
        />
      </div>
    </NModal>
  </div>
</template>

<script setup>
import { NModal } from 'naive-ui';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },

  chancelTitle: {
    type: String,
    default: 'Отмена',
  },

  submitTitle: {
    type: String,
    default: 'Сохранить',
  },

  hideBtnChancel: {
    type: Boolean,
    default: false,
  },

  hideBtnSubmit: {
    type: Boolean,
    default: false,
  },

});

const showModal = ref(false);

</script>

<style lang="scss" src="./style.scss" />
