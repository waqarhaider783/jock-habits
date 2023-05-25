<template>
  <div class="blog-card">
    <div class="inner-box">
      <figure class="image-container">
        <img :src="sourceUrl" alt="adawd" class="couponImage" />
      </figure>
      <div class="content">
        <h2 class="title">{{ title }}</h2>
        <p class="desc">{{ desc }}</p>
        <div class="text">
          <p class="date">{{ time }}</p>
          <p class="author">By {{ author }}</p>
        </div>
        <a :href="storeLink" class="extra-link"
          ><p>Visit Site</p>
          at {{ store }} ></a
        >
        <nuxt-link :to="readLink" class="card-link"><p>Read More</p></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogCardStyle2',
  props: {
    sourceUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    store: {
      type: String,
      required: true,
    },
    storeLink: {
      type: String,
      required: true,
    },
    readLink: {
      type: String,
      required: true,
    },
  },
  computed: {
    getImage() {
      if (this.sourceUrl) {
        return require(`~/assets/images/${this.sourceUrl}`)
      }
      return ''
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
