<template>
  <div class="mainSection">
    <div class="twoColumnLayout container">
      <div class="firstColumn container-one">
        <div class="bannerImage">
          <banner-style2
            url-link="#_"
            :source-url="
              postInner[0] &&
              postInner[0].imageUrl &&
              postInner[0].imageUrl.publicUrl
            "
          />
        </div>

        <!-- Blog Details Section Starts here-->
        <div v-for="blog in blogDesc" :key="blog.id" class="blogDesc">
          <nuxt-link to="#_" class="category">{{
            blog.blogCategory.value
          }}</nuxt-link>
          <h2 class="blogtitle">{{ blog.blogTitle.value }}</h2>
          <span class="blogDate">{{ blog.blogDate.value }}</span>
        </div>
        <!-- Blog Details Section Starts here-->

        <!-- Comparison Table Section Starts here-->
        <div class="comTable">
          <div class="top">
            <h2 class="title">Compare the Top Firm Mattresses</h2>
          </div>
          <com-product-table-style2 :products="products" />
        </div>
        <!-- Comparison Table Section Ends here-->

        <!-- Product Card Section Starts here-->
        <div class="products">
          <product-style-1 :productcards="productcards" />
        </div>
        <!-- Product Card Section Starts here-->

        <!-- RichText Section Starts here-->
        <div class="content">
          <rich-text-style1></rich-text-style1>
        </div>
        <!-- RichText Section Starts here-->

        <!-- Subscribe Section  Starts here-->
        <div class="subscribeSection">
          <div class="subscribe-box">
            <subscribe-style1 />
          </div>
        </div>
        <!-- Subscribe Sectio  Starts here-->
        <!-- Recent Blogs Section  Starts here-->
        <div class="recentBlogs">
          <div class="top">
            <h2 class="title">Recent Blogs</h2>
            <nuxt-link to="#_" class="viewBtn">View All</nuxt-link>
          </div>
          <div class="blogs">
            <blog-card-style1
              v-for="(postCard, index) in posts.slice(0, 3)"
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
        <!-- Recent Blogs Section  Ends here-->

        <!-- Coupon Section  Starts here-->
        <div class="couponSection">
          <div class="top">
            <h2 class="title">Popular Deals and Coupons</h2>
            <nuxt-link to="#_" class="viewBtn">View All</nuxt-link>
          </div>
          <div class="coupons">
            <coupon-card-style1
              v-for="(coupon, index) in coupons.slice(0, 3)"
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
        <!-- Coupon Section  Ends here-->
      </div>
      <div class="secondColumn container-two">
        <!--Search Box Sections Start -->
        <div class="searchBox">
          <search-style1></search-style1>
        </div>
        <!--Search Box Sections Start -->

        <!--Related Categories Sections Start -->
        <div class="catTags">
          <div class="top">
            <h2 class="title">Popular Categories</h2>
            <nuxt-link to="#_" class="viewBtn">view all</nuxt-link>
          </div>
          <div class="cat">
            <post-tags-style1
              v-for="(cat, index) in popularCategories[0]"
              :key="index"
              :background="true"
              cat-link="#_"
              :cat-title="cat && cat.name"
            />
          </div>
        </div>
        <!--Related Categories Sections Ends -->
        <!--Trending Topics Sections Start -->
        <div class="topicTags">
          <div class="top">
            <h2 class="title">Trending topics</h2>
          </div>
          <div class="topics">
            <post-tags-style1
              v-for="(tag, index) in trendingTags[0]"
              :key="index"
              :background="true"
              cat-link="#_"
              :cat-title="tag && tag.name"
            />
          </div>
        </div>
        <!--Trending Topics Sections Ends -->
        <!--About Author Sections Start -->
        <div class="aboutAuthor">
          <author-style1
            source-url="https://images.unsplash.com/photo-1644447381354-662bfd7c78f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            author-detail="The KD 14’s traction has been amazing if I contrast it to Nike Air Zoom GT
      Cut although cushion covering in Air Zoom GT Cut was on next level of ease
      with three layers. The shoe performed extremely well outdoors as well as
      indoors. They are my go-to shoe, at least until I get my new Puma Clyde
      All Pro. Although they may not have the same bite as the Air Jordan 1,
      Nike Kobe 9, and Air Jordan XX8 models, the KD 14 is just as reliable as
      the other models."
          />
        </div>
        <!--About Author Sections Ends -->
      </div>
    </div>
  </div>
</template>

<script>
import {
  GET_ALL_POSTS_TOPICS,
  GET_POSTS,
  GET_POPULAR_CATEGORIES,
  GET_POPULAR_COUPON,
  GET_POST_INNER,
  GET_TRENDING_TAGS,
} from '~/store/types'
export default {
  name: 'IndexPage',
  middleware: 'authenticated',
  async asyncData({ store, params }) {
    const popularCategories = await Promise.all([
      store.dispatch(`app/${GET_POPULAR_CATEGORIES}`),
    ])
    const trendingTags = await Promise.all([
      store.dispatch(`app/${GET_TRENDING_TAGS}`),
    ])
    const posts = await Promise.all([store.dispatch(`app/${GET_POSTS}`)])
    const coupons = await Promise.all([
      store.dispatch(`app/${GET_POPULAR_COUPON}`),
    ])
    const postInner = await store.dispatch(`app/${GET_POST_INNER}`, params.id)

    return {
      posts: posts[0],
      coupons: coupons[0],
      postInner,
      popularCategories,
      trendingTags,
    }
  },
  data() {
    return {
      products: [
        {
          productTitle: {
            name: 'Product Title',
            type: 'Text',
            value: 'Loom & leaf ',
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
          sleep: {
            name: 'sleep',
            type: 'Text',
            value: '120 Nights',
          },
          warranty: {
            name: 'warranty',
            type: 'Text',
            value: '10 years',
          },
          price: {
            name: 'Price',
            type: 'Number',
            value: 699,
          },
          shipping: {
            name: 'Shipping',
            type: 'Boolean',
            value: true,
          },
          freeReturn: {
            name: 'Free Return',
            type: 'Boolean',
            value: false,
          },
          couponTitle: {
            name: 'couponTitle',
            type: 'Text',
            value: '25% off ',
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
          sleep: {
            name: 'sleep',
            type: 'Text',
            value: '120 Nights',
          },
          warranty: {
            name: 'warranty',
            type: 'Text',
            value: '10 years',
          },
          price: {
            name: 'Price',
            type: 'Number',
            value: 699,
          },
          shipping: {
            name: 'Shipping',
            type: 'Boolean',
            value: false,
          },
          freeReturn: {
            name: 'Free Return',
            type: 'Boolean',
            value: true,
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
      productcards: [
        {
          catTitle: {
            name: 'Product Title',
            type: 'Text',
            value: 'BEST EXTRA-FIRM MATTRESS',
          },
          imgUrl: {
            name: 'Img Url',
            type: 'Text',
            value:
              'https://images.unsplash.com/photo-1644447381354-662bfd7c78f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          },
          productTitle: {
            name: 'Product Title',
            type: 'Text',
            value: 'Plank',
          },
          productDescTitle: {
            name: 'Product Desc Title',
            type: 'Text',
            value: 'Why its Great',
          },
          productDescText: {
            name: 'Product Desc Text',
            type: 'Text',
            value:
              'Plank is one of the best firm mattresses online. It’s made in the USA and is flippable, so you can experience two different profiles on the same bed.',
          },
          productListingTitle: {
            name: 'Product Desc Title',
            type: 'Text',
            value: ' Best for',
          },
          listItems: [
            'Stomach or back sleepers who like foam beds',
            'Those who are looking for a flippable, firm mattress',
            'Sleepers who weigh under 230 lbs',
          ],

          cards: [
            {
              title: {
                name: ' Title',
                type: 'Text',
                value: 'Free Shipping',
              },
              text: {
                name: ' Text',
                type: 'Text',
                value: 'and Returns',
              },
              cardImage: {
                name: ' Card Image',
                type: 'Text',
                value:
                  'https://cdn2.vectorstock.com/i/1000x1000/69/31/bus-icon-vector-13816931.jpg',
              },
            },
            {
              title: {
                name: ' Title',
                type: 'Text',
                value: 'Trial Period',
              },
              text: {
                name: ' Text',
                type: 'Text',
                value: '120 Nights',
              },
              cardImage: {
                name: ' Card Image',
                type: 'Text',
                value:
                  'https://cdn2.vectorstock.com/i/1000x1000/69/31/bus-icon-vector-13816931.jpg',
              },
            },
            {
              title: {
                name: ' Title',
                type: 'Text',
                value: 'Wrranty',
              },
              text: {
                name: ' Text',
                type: 'Text',
                value: '10 years',
              },
              cardImage: {
                name: ' Card Image',
                type: 'Text',
                value:
                  'https://cdn2.vectorstock.com/i/1000x1000/69/31/bus-icon-vector-13816931.jpg',
              },
            },
            {
              title: {
                name: ' Title',
                type: 'Text',
                value: 'Made in',
              },
              text: {
                name: ' Text',
                type: 'Text',
                value: 'USA',
              },
              cardImage: {
                name: ' Card Image',
                type: 'Text',
                value:
                  'https://cdn2.vectorstock.com/i/1000x1000/69/31/bus-icon-vector-13816931.jpg',
              },
            },
          ],
          couponDesc: {
            name: 'Coupon Descripition',
            type: 'Text',
            value: '25% Off Use code VETERANS25 in cart.',
          },
          shopBtnLink: {
            name: 'Shop Btn',
            type: 'Text',
            value: '#_',
          },
        },
      ],
      blogDesc: [
        {
          blogCategory: {
            name: 'Blog Category',
            type: 'Text',
            value: 'Sporting',
          },
          blogTitle: {
            name: 'Product Title',
            type: 'Text',
            value: 'Nike KD 14 Performance Review',
          },
          blogDate: {
            name: 'Product Title',
            type: 'Text',
            value: 'September 23, 2021',
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
