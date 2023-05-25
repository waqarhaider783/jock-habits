<template>
  <div class="mainSection">
    <div class="twoColumnLayout container">
      <div class="firstColumn container-one">
        <div class="productdetail">
          <div class="productReview">
            <div class="inner">
              <h2 class="title">
                {{ this.productReview.productReviews[0].title }}
              </h2>
              <p class="desc">
                {{ this.productReview.productReviews[0].body }}
              </p>
              <div class="ratingContainer">
                <product-review-style1
                  v-for="(rating, index) of this.productReview.productReviews[0]
                    .ratingVariables"
                  :key="index"
                  :title="rating.title"
                  :rating-num="rating.ratings"
                  :text="rating.labelText"
                />
              </div>
            </div>
          </div>
          <!-- <template v-if="this.productReview">
            <div
              v-for="rating of this.productReview.productReviews[0]
                .ratingVariables"
              :key="rating.title"
            >
              {{ JSON.stringify(rating) }}
            </div>
          </template>
          <component :is="'p'">H2 TEST</component> -->
        </div>
        <div class="ratingBox">
          <div class="inner-container">
            <p>
              Have experience with the Microsoft Xbox One S? Share your own
              Microsoft Xbox One S review:
            </p>
            <rating-style1 />
          </div>
        </div>
      </div>
      <div class="secondColumn container-two">
        <div class="productshorDesc">
          <product-review-style2 :product-details="productDetails" />
        </div>
      </div>
    </div>
    <div class="twoColumnLayout reverse container">
      <div class="firstColumn container-one">
        <div class="productDesc">
          <div class="innerContianer">
            <!-- {{ this.productReview.productReviews[0].content }} -->
            <!-- {{ this.productReview.productReviews[0].content.document }} -->
            <div
              v-for="(a, id) in this.productReview.productReviews[0].content
                .document"
              :key="id"
            >
              <h2 v-if="a.type === 'heading' && a.level === 2">
                {{ a.children[0].text }}
              </h2>
              <p v-else-if="a.type === 'paragraph'">
                {{ a.children[0].text }}
              </p>
              <ul v-else-if="a.type === 'unordered-list'">
                <li
                  v-for="listItem in a.children[0].children[0].children[0].text.split(
                    '\n'
                  )"
                  :key="listItem"
                >
                  {{ listItem }}
                </li>
              </ul>
              <span v-else>
                {{ a.children[0].text }}
              </span>
            </div>
          </div>
        </div>
        <!-- <div class="productDesc">
          <div class="innerContianer">
            <h2>Microsoft Xbox One S Review</h2>
            <p>
              Microsoft Xbox One S (view product ) is a gaming console product
              which competes against products like Compared to its peers,
              Microsoft Xbox One S is a mid-range or lower-performing product
              within its category.
            </p>
            <ul>
              <li>Good exclusive game library details</li>
              <li>Good exclusive game library details</li>
              <li>Good exclusive game library details</li>
              <li>Good exclusive game library details</li>
              <li>Good exclusive game library details</li>
            </ul>
            <p>
              Knoji has 46 Microsoft Xbox One S reviews and ratings as of
              November 25, 2021. Knoji editors and the Knoji shopper community
              have reviewed Microsoft Xbox One S and compared it against 0 top
              brands, reviewing Microsoft Xbox One S based on product and store
              features such as , exclusive game library and backwards game
              compatibility. Knoji reviews and ranks Xbox.com and other gaming
              console brands based on how many features each offers and based on
              a 5-star rating scale. Based on these factors and 46 Microsoft
              Xbox One S reviews, Microsoft Xbox One S earns an overall score of
              4.4 out of 5.0 points. Microsoft Xbox One S offers 0 total
              features such as , and . Microsoft's Xbox One S's review score is
              also bolstered by the fact that it is a very popular product with
              high name recognition among consumers.Knoji has 46 Microsoft Xbox
              One S reviews and ratings as of November 25, 2021. Knoji editors
              and the Knoji shopper community have reviewed Microsoft Xbox One S
              and compared it against 0 top brands, reviewing Microsoft Xbox One
              S based on product and store features such as , exclusive game
              library and backwards game compatibility. Knoji reviews.
            </p>
          </div>
        </div> -->
        <div class="productReviews">
          <h2>Microsoft Xbox One S customer Reviews(4)</h2>
          <div class="reviews">
            <review-card-style1
              v-for="index in 4"
              :key="index"
              customer-name="Cathie Saint"
              produtct-title="Microsoft Xbox One S"
              :rating="Number(4)"
              time="17 months"
              review-link="#_"
              review-comment="Highly recommended as device for uploading and watching amusing games all the time, with flexibility of use, variety of game and easiness of telecontroller! There are actually many versions of this kind of device, but this one is highly recommended, mainly if it's your first device for Games. Highly recommended as device for uploading and watching amusing games all the time, Highly recommended as device for uploading and watching amusing games all the time.
              Highly recommended as device for uploading and watching amusing games all the time. Highly recommended as device for uploading and watching amusing games all the time."
            />
          </div>
        </div>
      </div>
      <div class="secondColumn container-two">
        <div class="manufacturer">
          <div class="inner">
            <h2>About the Manufacturer</h2>
            <p>
              Microsoft is a large computers & accessories company operating the
              e-commerce site microsoft.com/en-us. Microsoft sells its products
              and services in the gaming consoles industry. Microsoft offers
              discount codes and coupons to its customers occasionally.
              Microsoft has good ratings among shoppers on Knoji, with 61
              ratings and an average rating of 3.3 stars. Microsoft scores very
              well compared to other brands in the gaming consoles industry,
              providing 20 e-commerce features to better serve its customers.
            </p>
          </div>
        </div>
        <div class="articles">
          <div class="inner">
            <h2 class="title">Articles Mentioning Microsoft Xbox One S</h2>
            <div class="grid-1">
              <blog-card-style3
                v-for="index in 3"
                :key="index"
                source-url="https://images.unsplash.com/photo-1644447381354-662bfd7c78f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                title="The Complete Guide to PowerPoint Templates, Plus the  5 Best Paid Professional Options "
                card-link="#"
              />
            </div>
            <a href="#" class="viewMore">More guides</a>
          </div>
        </div>
        <div class="contactInfo">
          <div class="inner">
            <h2 class="title">Contact Microsoft</h2>
            <ul>
              <li>Microsoft customer service & FAQ page</li>
              <li>Microsoft on Facebook</li>
              <li>Microsoft on Twitter</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="twoColumnLayout container">
      <div class="firstColumn container-one">
        <!-- Recent Blogs Section  Starts here-->
        <div class="recentBlogs">
          <div class="top">
            <h2 class="title">Recent Blogs</h2>
            <nuxt-link to="/post" class="viewBtn">View All</nuxt-link>
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

      <div class="secondColumn container-two"></div>
    </div>
  </div>
</template>

<script>
import {
  GET_ALL_POSTS_TOPICS,
  GET_PRODUCT_REVIEW,
  GET_POSTS,
  GET_POPULAR_COUPON,
} from '~/store/types'
export default {
  name: 'ReviewPage',
  middleware: 'authenticated',
  async asyncData({ store, params }) {
    const productReview = await store.dispatch(
      `app/${GET_PRODUCT_REVIEW}`,
      params.id
    )
    const posts = await Promise.all([store.dispatch(`app/${GET_POSTS}`)])
    const coupons = await Promise.all([
      store.dispatch(`app/${GET_POPULAR_COUPON}`),
    ])
    // console.log('checking', productReview)
    return {
      productReview,
      coupons: coupons[0],
      posts: posts[0],
    }
  },
  data() {
    return {
      product: [
        {
          productTitle: {
            name: 'Product Title',
            type: 'Text',
            value: 'Microsoft Xbox One S Review',
          },

          productDesc: {
            name: 'Product Desc',
            type: 'Text',
            value:
              'I am a highly organised and motivated professional Fashion Designer with a wealth of experience in a range of photographic styles and services. Just run your Fashion Store which will be a reflection of you a sexy and confident woman that shines with her unique style. Our goal is to make fashion as easy possible. We bring you the best of glam and sexy clothes while keeping in mind that high quality things arent always too expensive. Our goal is to make fashion as easy as possible, that is why we add carefully selected products on a daily basis,',
          },
          ratings: [
            {
              title: {
                name: 'Product Title',
                type: 'Text',
                value: 'Brand popularity',
              },
              ratingNum: {
                name: 'Rating Number',
                type: 'Number',
                value: 4,
              },
              text: {
                name: 'Rating Text',
                type: 'Text',
                value: '5.0 - Extremely popular brand',
              },
            },
            {
              title: {
                name: 'Product Title',
                type: 'Text',
                value: 'Functionality',
              },
              ratingNum: {
                name: 'Rating Number',
                type: 'Number',
                value: 3,
              },
              text: {
                name: 'Rating Text',
                type: 'Text',
                value: '5.0 - Extremely popular brand',
              },
            },
            {
              title: {
                name: 'Product Title',
                type: 'Text',
                value: 'Build Quality',
              },
              ratingNum: {
                name: 'Rating Number',
                type: 'Number',
                value: 4,
              },
              text: {
                name: 'Rating Text',
                type: 'Text',
                value: '5.0 - Extremely popular brand',
              },
            },
            {
              title: {
                name: 'Product Title',
                type: 'Text',
                value: 'Brand Design',
              },
              ratingNum: {
                name: 'Rating Number',
                type: 'Number',
                value: 5,
              },
              text: {
                name: 'Rating Text',
                type: 'Text',
                value: '5.0 - Extremely popular brand',
              },
            },
            {
              title: {
                name: 'Product Title',
                type: 'Text',
                value: 'Brand popularity',
              },
              ratingNum: {
                name: 'Rating Number',
                type: 'Number',
                value: 4,
              },
              text: {
                name: 'Rating Text',
                type: 'Text',
                value: '5.0 - Extremely popular brand',
              },
            },
            {
              title: {
                name: 'Product Title',
                type: 'Text',
                value: 'Functionality',
              },
              ratingNum: {
                name: 'Rating Number',
                type: 'Number',
                value: 3,
              },
              text: {
                name: 'Rating Text',
                type: 'Text',
                value: '5.0 - Extremely popular brand',
              },
            },
            {
              title: {
                name: 'Product Title',
                type: 'Text',
                value: 'Build Quality',
              },
              ratingNum: {
                name: 'Rating Number',
                type: 'Number',
                value: 4,
              },
              text: {
                name: 'Rating Text',
                type: 'Text',
                value: '5.0 - Extremely popular brand',
              },
            },
            {
              title: {
                name: 'Product Title',
                type: 'Text',
                value: 'Brand Design',
              },
              ratingNum: {
                name: 'Rating Number',
                type: 'Number',
                value: 5,
              },
              text: {
                name: 'Rating Text',
                type: 'Text',
                value: '5.0 - Extremely popular brand',
              },
            },
          ],
        },
      ],
      productDetails: [
        {
          imgUrl: {
            name: 'Image Url',
            type: 'Text',
            value:
              'https://images.unsplash.com/photo-1644447381354-662bfd7c78f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          },
          productTitle: {
            name: 'Product Title',
            type: 'Text',
            value: 'Microsoft Xbox One S Review',
          },

          company: {
            name: 'Product Desc',
            type: 'Text',
            value: 'Microsoft-view',
          },
          oldPrice: {
            name: 'Old Price',
            type: 'Text',
            value: '316',
          },
          newPrice: {
            name: 'New Price',
            type: 'Text',
            value: '152',
          },
          rating: {
            name: 'Rating Value',
            type: 'Text',
            value: '4',
          },
          followBtnLink: {
            name: 'Follow Link',
            type: 'Text',
            value: '#_',
          },
          shopBtn: {
            name: 'Shop Btn Title',
            type: 'Text',
            value: 'Get from Amazon',
          },
          shopBtnLink: {
            name: 'Shop Btn Link',
            type: 'Text',
            value: '#_',
          },
        },
      ],
      productcards: [
        {
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
          productDetailTitle: {
            name: 'Product Desc Title',
            type: 'Text',
            value: 'Product Details',
          },
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
    // console.log(this.productReview.productReviews[0].ratingsVariables.title)
    this.productDetails[0].productTitle.value = this.productReview.title
    this.productDetails[0].imgUrl.value = this.productReview.imageUrl.publicUrl
    this.productDetails[0].company.value = this.productReview.brand.name
    this.productDetails[0].oldPrice.value = this.productReview.price
    this.productDetails[0].newPrice.value = this.productReview.discountedPrice
    this.productDetails[0].rating.value = this.productReview.averageRating
    this.product[0].productTitle.value =
      this.productReview.productReviews[0].title
    this.product[0].productDesc.value =
      this.productReview.productReviews[0].body

    // this.product[0].ratings[0].title.value =
    //   this.productReview.productReviews[0].ratingVarialbles[0].title
    // this.product[0].ratings.ratingNum.value =
    //   this.productReview.productReviews[0].ratingVarialbles.ratings
    // this.product[0].ratings.text.value =
    //   this.productReview.productReviews.ratingVarialbles.labelText
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
