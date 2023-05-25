<template>
  <div class="card">
    <h2 class="title">{{ title }}</h2>
    <div class="ratings">
      <rating-style2 :rating="Number(ratingNum)" />
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductReviewStyle1',
  props: {
    text: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    ratingNum: {
      type: Number,
      default: 0,
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
