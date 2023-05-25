<template>
  <div class="ratBtn">
    <div class="rating">
      <span
        v-for="rate in 5"
        :key="rate"
        :class="rate <= localRating ? 'rating--rated' : ''"
        @click="() => rateThisPost(rate)"
      >
        <icons-base>
          <icons-star />
        </icons-base>
      </span>

      <!-- <icons-base
        v-for="(rate, index) in 5 - localRating"
        :key="localRating - rate"
        @click="rateThisPost(index + 5)"
      >
        <icons-star />
      </icons-base> -->
      <!-- <template v-for="rate in 5">
        <span
        
        >
          <i class="uil uil-star"></i>
        </span>
      </template> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'RatingStyle1',
  props: {
    rating: {
      type: Number,
      default: 0,
    },
    postId: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      localRating: 0,
    }
  },

  methods: {
    rateThisPost(updatedRating) {
      if (parseInt(updatedRating) <= 5) {
        this.localRating = parseInt(updatedRating)

        console.log({ rating: this.localRating })

        const obj = {
          post_id: this.postId,
          rating: updatedRating,
        }

        const formData = new FormData()
        for (const key in obj) {
          formData.append(key, obj[key])
        }
        // this.$store.dispatch(`post/${GET_POST_RATING}`)
        this.$axios.$post('api/v1/post/rating', formData)

        this.localRating = +updatedRating
      }
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
