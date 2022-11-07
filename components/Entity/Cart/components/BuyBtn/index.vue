<template>
  <BaseButton
    v-if="cartTotal"
    size="large"
    fullWidth
    theme="primary"
    class="entity-cart-buy-btn__wrapper"
    @click="router.push({ path: '/checkout' })"
  >
    <div class="entity-cart-buy-btn">
      <!--      <NuxtLink-->
      <!--        to="/checkout"-->
      <!--        class="entity-cart-buy-btn__title"-->
      <!--      >-->
      <!--       -->
      <!--      </NuxtLink>-->
      Верно, далее
      <div class="entity-cart-buy-btn__total">
        {{ cartTotal }} p
      </div>
    </div>
  </BaseButton>
</template>

<script setup>
import { useCart } from '@/composables';

const { cartTotal } = useCart();

const router = useRouter();

</script>

<style lang="scss" src="./style.scss" />
