<template>
  <div class="productCard">
    <div v-for="prod in productcards" :key="prod.id" class="product">
      <span v-if="prod.catTitle.value" class="extra">{{
        prod.catTitle.value
      }}</span>
      <div class="product__desc">
        <div class="top">
          <h2 class="title">{{ prod.productTitle.value }}</h2>
          <figure class="image">
            <img :src="prod.imgUrl.value" alt="" />
          </figure>
          <div class="text">
            <h5>{{ prod.productDescTitle.value }}</h5>
            <p>
              {{ prod.productDescText.value }}
            </p>
          </div>
        </div>

        <div class="listing">
          <h5>{{ prod.productListingTitle.value }}</h5>
          <ul>
            <li v-for="(listItem, index) in prod.listItems" :key="index">
              <p>{{ listItem }}</p>
            </li>
          </ul>
        </div>

        <div class="coupon-button">
          <div class="coupon">
            <span class="code"> {{ prod.couponDesc.value }} </span>
          </div>
          <a :href="prod.shopBtnLink" class="shopNow">Shop Now</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductStyle2',
  props: {
    productcards: {
      type: Array,
      required: true,
    },
    imgUrl: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1644447381354-662bfd7c78f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
  },

  //   computed: {
  //     getImage() {
  //       if (this.sourceUrl) {
  //         return require(`../../../../assets/images/${this.sourceUrl}`)
  //       }
  //       return ''
  //     },
  //   },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
