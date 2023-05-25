<template>
  <div class="mainSection">
    <div class="mainWrapper">
      <div class="container">
        <div class="brandSection">
          <brand-style-1
            :source-url="brands && brands.logoUrl && brands.logoUrl.publicUrl"
            :title="brands && brands.name"
            :detail="brands && brands.description"
          />
        </div>
        <!-- compare product Section  Starts here-->
        <!-- <com-product-table-style1 :products="products" /> -->
        <com-product-table-style2 :products="products" />

        <!-- compare product Section  Ends here-->

        <!-- Popular Coupoun and Deals Section  Starts here-->
        <div class="couponSection">
          <div class="top">
            <h2 class="title">Popular Deals and Coupons</h2>
            <nuxt-link to="#_" class="viewBtn">View All</nuxt-link>
          </div>
          <div class="coupons">
            <coupon-card-style1
              v-for="(coupon, index) in coupons"
              :key="index"
              :deal="coupon && coupon.type === 'deal' && true"
              :sale-text="coupon && coupon.customTitle"
              :btn-link="coupon && coupon.id"
              :title="coupon && coupon.title"
              :use-text="Number(1400)"
              :source-url="
                coupon &&
                coupon.logo &&
                coupon.logo.publicUrl &&
                coupon.logo.publicUrl
              "
            />
          </div>
        </div>
        <!-- Popular Coupoun and Deals Sectio  Starts here-->
        <!-- Brand logos Section  Starts here-->
        <div class="recommendedBlogs">
          <div class="top">
            <h2 class="title">Brand Blogs</h2>
            <nuxt-link to="#_" class="viewBtn">View All</nuxt-link>
          </div>
          <div class="blogs">
            <blog-card-style1
              v-for="(postCard, index) in brandBlog"
              :key="index"
              :border="true"
              :url-link="postCard && postCard.slug"
              :title="postCard && postCard.title"
              date="28 September, 2020"
              :source-url="
                postCard && postCard.imageUrl && postCard.imageUrl.publicUrl
              "
            />
          </div>
        </div>
        <!-- Brand logos Section  Ends here-->

        <!-- Subscribe Section  Starts here-->
        <div class="subscribeSection">
          <div class="subscribe-box">
            <subscribe-style1 />
          </div>
        </div>
        <!-- Subscribe Sectio  Starts here-->

        <!-- Coupon 1st Section  Starts here-->
        <div class="couponSection">
          <div class="top">
            <h2 class="title">Today's best coupon soundbar deals</h2>
          </div>
          <div class="coupons">
            <coupon-card-style1
              v-for="(coupon, index) in coupons"
              :key="index"
              :deal="coupon && coupon.type === 'deal' && true"
              :sale-text="coupon && coupon.customTitle"
              :btn-link="coupon && coupon.id"
              :title="coupon && coupon.title"
              :use-text="Number(1400)"
              :source-url="
                coupon &&
                coupon.logo &&
                coupon.logo.publicUrl &&
                coupon.logo.publicUrl
              "
            />
          </div>
        </div>
        <!-- Coupon 1st Section  Ends here-->

        <!-- Coupon 2nd Section  Starts here-->
        <div class="couponSection">
          <div class="top">
            <h2 class="title">Today's best coupon headphone deals</h2>
          </div>
          <div class="coupons">
            <coupon-card-style1
              v-for="(coupon, index) in coupons"
              :key="index"
              :deal="coupon && coupon.type === 'deal' && true"
              :sale-text="coupon && coupon.customTitle"
              :btn-link="coupon && coupon.id"
              :title="coupon && coupon.title"
              :use-text="Number(1400)"
              :source-url="
                coupon &&
                coupon.logo &&
                coupon.logo.publicUrl &&
                coupon.logo.publicUrl
              "
            />
          </div>
        </div>
        <!-- Coupon 2nd Section  Ends here-->
        <!-- Coupon 3rd Section  Starts here-->
        <div class="couponSection">
          <div class="top">
            <h2 class="title">Today's best coupon smartwatch deals</h2>
          </div>
          <div class="coupons">
            <coupon-card-style1
              v-for="(coupon, index) in coupons"
              :key="index"
              :deal="coupon && coupon.type === 'deal' && true"
              :sale-text="coupon && coupon.customTitle"
              :btn-link="coupon && coupon.id"
              :title="coupon && coupon.title"
              :use-text="Number(1400)"
              :source-url="
                coupon &&
                coupon.logo &&
                coupon.logo.publicUrl &&
                coupon.logo.publicUrl
              "
            />
          </div>
        </div>
        <!-- Coupon 3rd Section  Ends here-->
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
  GET_BRANDS,
  GET_BRAND_BLOGS,
} from '~/store/types'
export default {
  name: 'IndexPage',
  middleware: 'authenticated',

  async asyncData({ store, params }) {
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
    const brandBlog = await Promise.all([
      store.dispatch(`app/${GET_BRAND_BLOGS}`),
    ])
    const brands = await store.dispatch(`app/${GET_BRANDS}`, params.id)
    // brands.map((a) => {
    //   return console.log('>>>>', a.logoUrl)
    // })
    console.log('checking', brands[0])
    // console.log(brands[0])
    return {
      categories: categories[0],
      posts: posts[0],
      recommendedBlogs: recommendedBlogs[0],
      coupons: coupons[0],
      brands: brands[0],
      brandBlog: brandBlog[0],
    }
  },

  data() {
    return {
      products: [
        {
          productTitle: {
            name: 'Product Title',
            type: 'Text',
            value: 'Loom & leaf',
          },
          sourceUrl: {
            name: 'Source Url',
            type: 'Text',
            value:
              'https://images.unsplash.com/photo-1644447381354-662bfd7c78f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          },
          imgUrl: {
            name: 'Img Url',
            type: 'Text',
            value:
              'http://www.freshersmeet.com/wp-content/uploads/2021/09/Amazon-logo.jpg',
          },
          productDesc: {
            name: 'Product Desc',
            type: 'Text',
            value: 'Evolution Indoor Game Basketball',
          },
          check: {
            name: 'check',
            type: 'Text',
            value: 'Check Price',
          },
          couponTitle: {
            name: 'couponTitle',
            type: 'Text',
            value: '25% off',
          },
          couponCode: {
            name: 'Coupon Code',
            type: 'Text',
            value: 'Veterans25',
          },
          shopLink: {
            name: 'Shop Link',
            type: 'Text',
            value: '#_',
          },
          shopBtn: {
            name: 'Shop Btn',
            type: 'Text',
            value: 'Get from Amazon',
          },
        },
        {
          productTitle: {
            name: 'Product Title',
            type: 'Text',
            value: 'Loom & leaf',
          },
          sourceUrl: {
            name: 'Source Url',
            type: 'Text',
            value:
              'https://images.unsplash.com/photo-1644447381354-662bfd7c78f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          },
          imgUrl: {
            name: 'Img Url',
            type: 'Text',
            value:
              'http://www.freshersmeet.com/wp-content/uploads/2021/09/Amazon-logo.jpg',
          },

          productDesc: {
            name: 'Product Desc',
            type: 'Text',
            value: 'Evolution Indoor Game Basketball',
          },
          check: {
            name: 'check',
            type: 'Text',
            value: 'Check Price',
          },
          couponTitle: {
            name: 'couponTitle',
            type: 'Text',
            value: '25% off',
          },
          couponCode: {
            name: 'Coupon Code',
            type: 'Text',
            value: 'Veterans25',
          },

          shopLink: {
            name: 'Shop Link',
            type: 'Text',
            value: '#_',
          },
          shopBtn: {
            name: 'Shop Btn',
            type: 'Text',
            value: 'Get from Amazon',
          },
        },
        {
          productTitle: {
            name: 'Product Title',
            type: 'Text',
            value: 'Loom & leaf',
          },
          sourceUrl: {
            name: 'Source Url',
            type: 'Text',
            value:
              'https://images.unsplash.com/photo-1644447381354-662bfd7c78f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          },
          imgUrl: {
            name: 'Img Url',
            type: 'Text',
            value:
              'http://www.freshersmeet.com/wp-content/uploads/2021/09/Amazon-logo.jpg',
          },

          productDesc: {
            name: 'Product Desc',
            type: 'Text',
            value: 'Evolution Indoor Game Basketball',
          },
          check: {
            name: 'check',
            type: 'Text',
            value: 'Check Price',
          },
          couponTitle: {
            name: 'couponTitle',
            type: 'Text',
            value: '25% off',
          },
          couponCode: {
            name: 'Coupon Code',
            type: 'Text',
            value: 'Veterans25',
          },

          shopLink: {
            name: 'Shop Link',
            type: 'Text',
            value: '#_',
          },
          shopBtn: {
            name: 'Shop Btn',
            type: 'Text',
            value: 'Get from Amazon',
          },
        },
      ],
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
