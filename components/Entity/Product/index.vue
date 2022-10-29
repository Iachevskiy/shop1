<template>
  <div
    :class="`entity-product__theme-${props.theme}`"
    class="entity-product"
  >
    <div class="entity-product__img-wrapper">
      <img
        class="entity-product__img"
        :src="imgUrl"
        alt=""
      >
    </div>
    <div class="entity-product__price">
      {{ product.price }}p
    </div>
    <div class="entity-product__title">
      {{ product.name }}
    </div>
    <div class="entity-product__btn-buy">
      <BaseButton
        v-if="!count"
        title="Добавить"
        theme="secondary"
        iconLeft="Add"
        fullWidth
        @click="addToCart(product.id, 1)"
      />
      <BaseCounter
        v-else
        v-model="count"
        :theme="props.theme === 'row' ? 'row' : ''"
      />
    </div>
  </div>
</template>

<script setup>
import { useCart, useCatalog } from '@/composables';

const { products } = useCatalog();

const { addToCart, cartItems } = useCart();

const props = defineProps({
  productId: {
    type: [
      String,
      Number,
    ],
    default: '',
  },

  theme: {
    type: String,
    default: '',
  },
});

const product = products.value.find((product) => product.id === props.productId);

const imgUrl = computed(() => {
  let url = product.picture.uri;
  url = url.replace('{w}', '216');
  url = url.replace('{h}', '188');
  url = `https://eda.yandex${url}`;
  return url;
});

const count = computed(
  {
    get() {
      return cartItems.value.find((item) => item.id === props.productId)?.count || 0;
    },
    set(val) {
      addToCart(props.productId, val);
    },
  },
);

</script>

<style lang="scss" src="./style.scss" />
