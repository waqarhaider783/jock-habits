<template>
  <div class="mainSection">
    <div class="mainWrapper">
      <div class="container">
        <div class="categoriesSection">
          <div class="top">
            <h2 class="title">Categories</h2>
            <p class="desc">
              The KD 14’s traction has been amazing if I contrast it to Nike Air
              Zoom GT Cut although cushion covering in Air Zoom GT Cut was on
              next level of ease with three layers. The shoe performed extremely
              well outdoors as well as indoors. They are my go-to shoe, at least
              until I get my new Puma Clyde All Pro.
            </p>
          </div>
          <div class="categories">
            <category-style-1
              v-for="(cat, index) in categories"
              :key="index"
              :title="cat && cat.name"
              :cat-link="cat && cat.id"
              :source-url="
                (cat && cat.imageUrl && cat.publicUrl && cat.publicUrl) ||
                (cat &&
                  cat.imageUrl &&
                  cat.publicUrlTransformed &&
                  cat.publicUrlTransformed)
              "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  GET_ALL_POSTS_TOPICS,
  GET_CATEGORIES,
  GET_RECOMMENDED_BLOGS,
  GET_POSTS,
  GET_POPULAR_COUPON,
} from '~/store/types'
export default {
  name: 'IndexPage',
  middleware: 'authenticated',
  async asyncData({ store }) {
    const categories = await Promise.all([
      store.dispatch(`app/${GET_CATEGORIES}`),
    ])

    const posts = await Promise.all([store.dispatch(`app/${GET_POSTS}`)])

    const recommendedBlogs = await Promise.all([
      store.dispatch(`app/${GET_RECOMMENDED_BLOGS}`),
    ])

    const coupons = await Promise.all([
      store.dispatch(`app/${GET_POPULAR_COUPON}`),
    ])

    return {
      categories: categories[0],
      posts: posts[0],
      recommendedBlogs: recommendedBlogs[0],
      coupons: coupons[0],
    }
  },
  mounted() {
    this.$store.dispatch(`app/${GET_ALL_POSTS_TOPICS}`, {
      showLoader: true, // to show loader
      slug: 'abcd', // actual payload
    })
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
