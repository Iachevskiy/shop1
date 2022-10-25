<template>
  <div class="entity-product">
    <div class="entity-product__img-wrapper">
      <img
        class="entity-product__img"
        :src="imgUrl"
        alt=""
      >
    </div>
    <div class="entity-product__price">
      {{ props.product.price }}p
    </div>
    <div class="entity-product__title">
      {{ props.product.name }}
    </div>
    <BaseButton
      title="Добавить"
      theme="secondary"
      iconLeft="Add"
      fullWidth
    />
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    default: () => ({}),
  },
});

const imgUrl = computed(() => {
  // console.log('test');
  let url = props.product.picture.uri;
  url = url.replace('{w}', '216');
  url = url.replace('{h}', '188');
  url = `https://eda.yandex${url}`;
  return url;
});

</script>

<style lang="scss" src="./style.scss" />
