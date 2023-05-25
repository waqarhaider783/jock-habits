<template>
  <div class="reviewCard">
    <div class="inner-container">
      <div class="reviewDetail">
        <p class="customer">{{ customerName }}</p>
        <p class="product">
          rated {{ productTitle }} {{ rating }} out of 5 stars
        </p>
        <rating-style-2 :rating="rating" />
        <p class="time">{{ time }} ago --</p>
        <nuxt-link :to="reviewLink" class="reviewLink"
          >Read full review</nuxt-link
        >
      </div>
      <div class="review">
        <p>
          {{ reviewComment }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewCardStyle1',
  props: {
    customerName: {
      type: String,
      default: '',
    },
    productTitle: {
      type: String,
      default: '',
    },
    rating: {
      type: Number,
      default: 0,
    },
    time: {
      type: String,
      default: '',
    },
    reviewLink: {
      type: String,
      default: '',
    },
    reviewComment: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
