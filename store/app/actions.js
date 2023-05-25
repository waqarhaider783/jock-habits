import categoryQuery from '@/apollo/queries/categories.gql'
import postsQuery from '@/apollo/queries/posts.gql'
import popularCouponQuery from '@/apollo/queries/coupons.gql'
import recommendedBlogQuery from '@/apollo/queries/recommendedBlogs.gql'

import brandQuery from '@/apollo/queries/brands.gql'
import brandBlog from '@/apollo/queries/brandBlogs.gql'

import productReview from '@/apollo/queries/productReview.gql'

import postInner from '@/apollo/queries/postInner.gql'

import popularCategories from '@/apollo/queries/popularCategories.gql'

import trendingTags from '@/apollo/queries/trendingTags.gql'

import {
  GET_LOADER,
  SET_LOADER,
  GET_SNACKBAR,
  SET_SNACKBAR,
  GET_ALL_POSTS_TOPICS,
  SET_ALL_POSTS_TOPICS,
  GET_CATEGORIES,
  SET_CATEGORIES,
  GET_POSTS,
  SET_POSTS,
  GET_POPULAR_COUPON,
  SET_POPULAR_COUPON,
  GET_RECOMMENDED_BLOGS,
  SET_RECOMMENDED_BLOGS,
  GET_BRANDS,
  SET_BRANDS,
  GET_BRAND_BLOGS,
  SET_BRAND_BLOGS,
  GET_PRODUCT_REVIEW,
  SET_PRODUCT_REVIEW,
  GET_POST_INNER,
  SET_POST_INNER,
  GET_POPULAR_CATEGORIES,
  SET_POPULAR_CATEGORIES,
  GET_TRENDING_TAGS,
  SET_TRENDING_TAGS,

  // GET_COUPON_ID,
  // SET_COUPON_ID,
} from '@/store/types'
export default {
  [GET_LOADER]({ commit }, payload) {
    try {
      commit(SET_LOADER, payload)
    } catch (error) {
      console.log(error)
    }
  },

  [GET_SNACKBAR]({ commit }, payload) {
    try {
      commit(SET_SNACKBAR, payload)
      setTimeout(() => {
        commit(SET_SNACKBAR, {
          show: false,
          variant: 'info',
          position: 'bottomLeft',
          message: '',
        })
      }, 5000)
    } catch (error) {
      console.log(error)
    }
  },
  // [GET_COUPON_ID]({ commit }, payload) {
  //   const clientApollo = this.app.apolloProvider.defaultClient
  //   return new Promise((resolve) => {
  //     clientApollo

  //       .then((RESPONSE) => {
  //         // for (let i = 0; i <= RESPONSE.data.categories.length(); i++)
  //         //   console.log(RESPONSE.data.categories[i])
  //         // console.log(RESPONSE.data)

  //         commit(SET_COUPON_ID, RESPONSE)
  //         resolve(RESPONSE)
  //       })
  //       .catch((err) => {
  //         resolve(err)
  //       })
  //   })
  // },

  // Below Action Is Only For API Fetch Demonstration
  async [GET_ALL_POSTS_TOPICS]({ commit }, payload) {
    try {
      await this.$axios.$get('/api/v1/topics', payload).then((RESPONSE) => {
        commit(SET_ALL_POSTS_TOPICS, RESPONSE.data)
      })
    } catch (error) {
      console.log(error)
    }
  },

  [GET_CATEGORIES]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: categoryQuery,
        })
        .then((RESPONSE) => {
          // for (let i = 0; i <= RESPONSE.data.categories.length(); i++)
          //   console.log(RESPONSE.data.categories[i])
          // console.log(RESPONSE.data)

          commit(SET_CATEGORIES, RESPONSE.data.categories)
          resolve(RESPONSE.data.categories)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  [GET_POSTS]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: postsQuery,
        })
        .then((RESPONSE) => {
          // for (let i = 0; i <= RESPONSE.data.categories.length(); i++)
          //   console.log(RESPONSE.data.categories[i])
          // console.log(RESPONSE.data)
          // const ax = RESPONSE.data
          // Object.keys(ax).map((key) => ax[key])
          // commit(SET_POSTS, ax)
          // resolve(ax)
          commit(SET_POSTS, RESPONSE.data.posts)
          resolve(RESPONSE.data.posts)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  [GET_POPULAR_COUPON]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: popularCouponQuery,
        })
        .then((RESPONSE) => {
          commit(SET_POPULAR_COUPON, RESPONSE.data.coupons)
          resolve(RESPONSE.data.coupons)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  [GET_RECOMMENDED_BLOGS]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: recommendedBlogQuery,
        })
        .then((RESPONSE) => {
          commit(SET_RECOMMENDED_BLOGS, RESPONSE.data.posts)
          resolve(RESPONSE.data.posts)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  [GET_BRANDS]({ commit }, id) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: brandQuery,
          variables: { id },
        })
        .then((RESPONSE) => {
          commit(SET_BRANDS, RESPONSE.data.brands)
          resolve(RESPONSE.data.brands)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  [GET_BRAND_BLOGS]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: brandBlog,
          // variables: { brand_name },
        })
        .then((RESPONSE) => {
          commit(SET_BRAND_BLOGS, RESPONSE.data.posts)

          resolve(RESPONSE.data.posts)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  [GET_PRODUCT_REVIEW]({ commit }, id) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: productReview,
          variables: { id },
        })
        .then((RESPONSE) => {
          // console.log(RESPONSE.data.product)
          commit(SET_PRODUCT_REVIEW, RESPONSE.data.product)
          resolve(RESPONSE.data.product)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  [GET_POST_INNER]({ commit }, id) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: postInner,
          variables: { id },
        })
        .then((RESPONSE) => {
          console.log(RESPONSE.data.posts)
          commit(SET_POST_INNER, RESPONSE.data.posts)
          resolve(RESPONSE.data.posts)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  [GET_POPULAR_CATEGORIES]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: popularCategories,
        })
        .then((RESPONSE) => {
          // for (let i = 0; i <= RESPONSE.data.categories.length(); i++)
          //   console.log(RESPONSE.data.categories[i])
          // console.log(RESPONSE.data)

          commit(SET_POPULAR_CATEGORIES, RESPONSE.data.categories)
          resolve(RESPONSE.data.categories)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  [GET_TRENDING_TAGS]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: trendingTags,
        })
        .then((RESPONSE) => {
          commit(SET_TRENDING_TAGS, RESPONSE.data.tags)
          resolve(RESPONSE.data.tags)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
}
