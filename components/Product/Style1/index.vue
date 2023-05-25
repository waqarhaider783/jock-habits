<template>
  <div class="productCard">
    <div v-for="prod in productcards" :key="prod.id" class="product">
      <span v-if="prod.catTitle" class="extra">{{ prod.catTitle.value }}</span>
      <div class="product__desc">
        <div v-if="prod.productTitle" class="left">
          <h2 class="title">{{ prod.productTitle.value }}</h2>
          <figure class="image">
            <img :src="prod.imgUrl.value" alt="" />
          </figure>
        </div>
        <div v-if="prod.productDescTitle" class="right">
          <div class="text">
            <h5>{{ prod.productDescTitle.value }}</h5>
            <p>
              {{ prod.productDescText.value }}
            </p>
          </div>
          <div class="listing">
            <h5>
              {{ prod.productListingTitle.value }}
            </h5>

            <ul>
              <li v-for="(listItem, index) in prod.listItems" :key="index">
                <p>{{ listItem }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="cards-button">
        <ul v-if="prod.cards" class="cards">
          <li v-for="(card, index) in prod.cards" :key="index">
            <div class="card">
              <figure>
                <img :src="card.cardImage.value" alt="" />
              </figure>
              <h4>{{ card.title.value }}</h4>
              <p>{{ card.text.value }}</p>
            </div>
          </li>
        </ul>
        <div class="coupon-button">
          <div v-if="prod.couponDesc" class="coupon">
            <span class="code"> {{ prod.couponDesc.value }} </span>
          </div>
          <a
            v-if="prod.shopBtnLink"
            :href="prod.shopBtnLink.value"
            class="shopNow"
            >Shop Now</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductStyle1',
  props: {
    productcards: {
      type: Array,
      required: true,
    },
    cardImage: {
      type: String,
      default:
        'https://cdn2.vectorstock.com/i/1000x1000/69/31/bus-icon-vector-13816931.jpg',
    },
    imgUrl: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1644447381354-662bfd7c78f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
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
