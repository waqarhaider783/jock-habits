<template>
  <div class="productReview">
    <div v-for="prod in productDetails" :key="prod.id" class="inner">
      <figure class="image">
        <img :src="prod.imgUrl.value" alt="abc" />
      </figure>
      <h2 class="productTitle">{{ prod.productTitle.value }}</h2>
      <span class="text"
        >Made by
        <p class="company">{{ prod.company.value }}</p></span
      >
      <div class="priceContainer">
        <p class="oldPrice">${{ prod.oldPrice.value }}</p>
        <p class="newPrice">${{ prod.newPrice.value }}</p>
        <p class="desc">Today's lowest price</p>
        <a href="#_" class="deals">See deals --></a>
      </div>
      <div class="ratingContainer">
        <rating-style2 :rating="Number(prod.rating.value)" />
        <p>Rated {{ prod.rating.value }} - 4.6 ratings</p>
        <p>Review this product</p>
      </div>
      <a :href="prod.followBtnLink.value" class="followBtn">Follow</a>
      <p class="question">Work for Microsoft?</p>
      <a :href="prod.shopBtnLink.value" class="shopBtn">{{
        prod.shopBtn.value
      }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductReviewStyle1',
  props: {
    productDetails: {
      type: Array,
      require: true,
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
