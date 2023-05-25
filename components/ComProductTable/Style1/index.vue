<template>
  <div class="brand-highligths" :style="columnCountCSSVariable">
    <div class="comparison-highlights">
      <div class="product head"></div>
      <div v-for="product in products" :key="product.id" class="product">
        <figure class="productImage">
          <img :src="product.sourceUrl.value" alt="image" />
        </figure>
        <h2 class="title">
          {{ product.productTitle.value }}
        </h2>
        <p class="desc">
          {{ product.productDesc.value }}
        </p>
        <span class="check"> {{ product.check.value }}</span>
        <figure class="logo">
          <img :src="product.imgUrl.value" alt="abc" />
        </figure>
      </div>

      <div class="head">Coupon Code</div>
      <div v-for="product in products" :key="product.id" class="couponSection">
        <h2 class="title">{{ product.couponTitle.value }}</h2>
        <p class="code">Code: {{ product.couponCode.value }}</p>
        <a :href="product.shopLink.value" class="shop-link">{{
          product.shopBtn.value
        }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductTable1',
  props: {
    products: {
      type: Array,
      required: true,
    },
  },

  computed: {
    columnCountCSSVariable() {
      return `--column-count: ${(this.products?.length || 0) + 1}`
    },
    // getImage() {
    //   if (this.sourceUrl) {
    //     return require(`../../../../assets/images/${this.sourceUrl}`)
    //   }
    //   return ''
    // },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
