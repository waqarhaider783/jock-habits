<template>
  <div class="">
    <div class="deal-card">
      <div class="inner-box">
        <span href="#" class="image-container">
          <figure>
            <img :src="sourceUrl" alt="adawd" class="couponImage" />
          </figure>
        </span>
        <div class="content">
          <div class="contentText">
            <div class="caption">{{ saleText }}</div>
            <p class="title">{{ title }}</p>
          </div>
          <div v-if="deal" class="deals">
            <div class="coupon-button">
              <a :href="btnLink" class="deal">Get Deal</a>
            </div>
          </div>
          <div v-else class="codes">
            <div class="codeButton">
              <a :href="btnLink" class="flipButton">
                Get Code
                <div class="flipDark"></div>
                <div class="flipLight"></div>
              </a>
            </div>
          </div>
          <div class="used-count">{{ useText }} Views</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CouponCardStyle1',
  props: {
    search: { type: Boolean, default: false },
    // coupon: {
    //   type: Boolean,
    //   default: false,
    // },
    deal: {
      type: Boolean,
      default: false,
    },
    sourceUrl: {
      type: String,
      default: '',
      required: true,
    },
    saleText: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    btnText: {
      type: String,
      default: '',
    },
    btnLink: {
      type: String,
      default: '',
    },
    useText: {
      type: Number,
      default: 0,
    },
  },
  // computed: {
  //   getImage() {
  //     if (this.sourceUrl) {
  //       return require(`~/assets/images/${this.sourceUrl}`)
  //     }
  //     return ''
  //   },
  // },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
