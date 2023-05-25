<template>
  <div class="mainSection">
    <div class="mainWrapper">
      <div class="container">
        <!-- Page Top Section  Starts here-->
        <div class="desc">
          <h2 class="title">
            Unique & Stylist Fashion We Are An Awesome Agency.
          </h2>
          <p class="text">
            I am a highly organised and motivated professional Fashion Designer
            with a wealth of experience in a range of photographic styles and
            services. Just run your Fashion Store which will be a reflection of
            you a sexy and confident woman that shines with her unique style.
            Our goal is to make fashion as easy possible. We bring you the best
            of glam and sexy clothes while keeping in mind that high quality
            things arent always too expensive. Our goal is to make fashion as
            easy as possible, that is why we add carefully selected products on
            a daily basis, and this is essential for us. This is how you keep up
            with the times in style! We ship worldwide & space!
          </p>
          <nuxt-link to="#_" class="explore">Explore More</nuxt-link>
        </div>
        <!-- Page Top Section  Ends here-->

        <!-- Full width Banner Section  Starts here-->
        <div class="fullBanner">
          <div class="banner">
            <figure class="banner__image">
              <img
                src="https://images.unsplash.com/photo-1644447381354-662bfd7c78f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </figure>
          </div>
        </div>
        <!-- Full Width Banner Section  Ends here-->

        <!-- Team Section  Starts here-->
        <div class="teamSection">
          <div class="top">
            <h2 class="title">Meet our team</h2>
            <p class="text">
              Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo,
              tortor mauris condimentum nibh, ut fermentum massa justo.
              condimentum nibh.
            </p>
          </div>
          <div class="bottom">
            <slider-style1
              child-component="team-style1"
              :data="teamData"
              attr-key="data"
              v-bind="$attrs"
            />

            <!-- <team-style1
              v-for="index in 4"
              :key="index"
              source-url="https://bidinnovacion.org/economiacreativa/wp-content/uploads/2014/10/speaker-3.jpg"
              title="Karen Ryan"
              designation="Project Manager"
            /> -->
          </div>
        </div>
        <!-- Team Section  Ends here-->

        <!-- Store Section  Starts here-->
        <div class="storeSection">
          <div class="top">
            <h2 class="title">Store In The World</h2>
            <p class="text">
              Quisque vitae nibh iaculis neque blandit hendrerit
              euismod.Maecenas sit amet purus eget ipsum elementum venenatis.
              Aenean maximus urna magna, quis rutrum mi semper non. Cras rhoncus
              elit non arcu hendrerit rhoncus sit amet purus eget ipsum.
            </p>
          </div>
          <div class="bottom">
            <banner-style1
              v-for="index in 3"
              :key="index"
              :curved="true"
              url-link="#_"
              source-url="https://images.unsplash.com/photo-1644447381354-662bfd7c78f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
          </div>
        </div>
        <!-- Store Section  Ends here-->

        <!-- Subscribe Section  Starts here-->
        <div class="subscribeSection">
          <div class="subscribe-box">
            <subscribe-style1 />
          </div>
        </div>
        <!-- Subscribe Section  Ends here-->
      </div>
    </div>
  </div>
</template>

<script>
import { GET_ALL_POSTS_TOPICS } from '~/store/types'
export default {
  name: 'IndexPage',
  middleware: 'authenticated',
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
      teamData: [
        {
          sourceUrl: {
            name: 'source url',
            type: 'Text',
            value:
              'https://bidinnovacion.org/economiacreativa/wp-content/uploads/2014/10/speaker-3.jpg',
          },
          title: {
            name: 'Title',
            type: 'Text',
            value: 'Ammar Ali',
          },
          designation: {
            name: 'Title',
            type: 'Text',
            value: 'Laravel Developer',
          },
        },
        {
          sourceUrl: {
            name: 'source url',
            type: 'Text',
            value:
              'https://bidinnovacion.org/economiacreativa/wp-content/uploads/2014/10/speaker-3.jpg',
          },
          title: {
            name: 'Title',
            type: 'Text',
            value: 'Ammar Ali',
          },
          designation: {
            name: 'Title',
            type: 'Text',
            value: 'Laravel Developer',
          },
        },
        {
          sourceUrl: {
            name: 'source url',
            type: 'Text',
            value:
              'https://bidinnovacion.org/economiacreativa/wp-content/uploads/2014/10/speaker-3.jpg',
          },
          title: {
            name: 'Title',
            type: 'Text',
            value: 'Obaid-ul-Qadir',
          },
          designation: {
            name: 'Title',
            type: 'Text',
            value: 'Business Analyst',
          },
        },
        {
          sourceUrl: {
            name: 'source url',
            type: 'Text',
            value:
              'https://bidinnovacion.org/economiacreativa/wp-content/uploads/2014/10/speaker-3.jpg',
          },
          title: {
            name: 'Title',
            type: 'Text',
            value: 'Ammar Ali',
          },
          designation: {
            name: 'Title',
            type: 'Text',
            value: 'Laravel Developer',
          },
        },
        {
          sourceUrl: {
            name: 'source url',
            type: 'Text',
            value:
              'https://bidinnovacion.org/economiacreativa/wp-content/uploads/2014/10/speaker-3.jpg',
          },
          title: {
            name: 'Title',
            type: 'Text',
            value: 'Obaid-ul-Qadir',
          },
          designation: {
            name: 'Title',
            type: 'Text',
            value: 'Business Analyst',
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
