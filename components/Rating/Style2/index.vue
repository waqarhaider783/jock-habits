<template>
  <div class="rating">
    <span
      v-for="(rate, index) in rating && rating"
      :key="index"
      class="rating--rated"
    >
      <icons-base>
        <icons-star />
      </icons-base>
    </span>
    <span v-for="(rate, index) in rating && 5 - rating" :key="index">
      <icons-base>
        <icons-star />
      </icons-base>
    </span>
  </div>
</template>

<script>
export default {
  name: 'RatingStyle2',
  props: {
    rating: {
      type: Number,
      default: 3,
    },
    // postId: {
    //   type: Number,
    //   default: 0,
    // },
  },

  // data() {
  //   // return {
  //   //   localRating: 0,
  //   // }
  // },

  methods: {
    // rateThisPost(updatedRating) {
    //   if (parseInt(updatedRating) <= 5) {
    //     this.localRating = parseInt(updatedRating)
    //     console.log({ rating: this.localRating })
    //     const obj = {
    //       post_id: this.postId,
    //       rating: updatedRating,
    //     }
    //     const formData = new FormData()
    //     for (const key in obj) {
    //       formData.append(key, obj[key])
    //     }
    //     // this.$store.dispatch(`post/${GET_POST_RATING}`)
    //     this.$axios.$post('api/v1/post/rating', formData)
    //     this.localRating = +updatedRating
    //   }
    // },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
