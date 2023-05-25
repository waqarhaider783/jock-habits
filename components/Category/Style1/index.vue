<template>
  <div>
    <nuxt-link :to="'/category/' + catLink" class="category-link">
      <div class="category-card">
        <div class="overlay">
          <div class="inner-box">
            <div class="image-container">
              <figure>
                <img :src="sourceUrl" alt="adawd" class="couponImage" />
              </figure>
            </div>
          </div>
        </div>

        <p class="text">{{ title }}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'CateogryStyle1',
  props: {
    // search: { type: Boolean, default: false },
    title: {
      type: String,
      default: '',
    },
    catLink: {
      type: String,
      default: '',
    },
    sourceUrl: {
      type: String,
      default: '',
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
