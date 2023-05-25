import {
  SET_LOADER,
  SET_SNACKBAR,
  SET_ALL_POSTS_TOPICS,
  SET_CATEGORIES,
  SET_POSTS,
  SET_POPULAR_COUPON,
  SET_RECOMMENDED_BLOGS,
  SET_BRANDS,
  SET_BRAND_BLOGS,
  SET_PRODUCT_REVIEW,
  SET_POST_INNER,
  SET_POPULAR_CATEGORIES,
  SET_TRENDING_TAGS,
  // SET_COUPON_ID,
} from '@/store/types'

export default {
  [SET_LOADER](state, payload) {
    state.showLoader = payload
  },
  // [SET_LOADER](state, payload) {
  //   state.couponId = payload
  // },

  [SET_SNACKBAR](state, payload) {
    Object.keys(payload).forEach((key) => {
      state.snackbar[key] = payload[key]
    })
  },

  // Below Mutation Only For API Fetch Demonstration
  [SET_ALL_POSTS_TOPICS](state, payload) {
    state.allPostsTopics = payload
  },
  [SET_CATEGORIES](state, payload) {
    state.categories = payload
  },
  [SET_POSTS](state, payload) {
    state.posts = payload
  },
  [SET_POPULAR_COUPON](state, payload) {
    state.popularCoupon = payload
  },

  [SET_RECOMMENDED_BLOGS](state, payload) {
    state.recommendedBlogs = payload
  },
  [SET_BRANDS](state, payload) {
    state.brands = payload
  },
  [SET_BRAND_BLOGS](state, payload) {
    state.brandBlog = payload
  },
  [SET_PRODUCT_REVIEW](state, payload) {
    state.productReview = payload
  },
  [SET_POST_INNER](state, payload) {
    state.postInner = payload
  },
  [SET_POPULAR_CATEGORIES](state, payload) {
    state.popularCategories = payload
  },
  [SET_TRENDING_TAGS](state, payload) {
    state.trendingTags = payload
  },
}
