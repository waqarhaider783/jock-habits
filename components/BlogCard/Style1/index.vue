<template>
  <div class="">
    <div class="blog-card">
      <div class="inner-box" :class="{ border: border }">
        <nuxt-link :to="urlLink" class="image-container">
          <figure>
            <img :src="sourceUrl" alt="adawd" class="couponImage" />
          </figure>
        </nuxt-link>
        <div class="content">
          <p class="title">{{ title }}</p>
          <div class="text">
            <p class="date">{{ date }}</p>
            <nuxt-link :to="urlLink" class="card-link">Read More</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogCardStyle1',
  props: {
    // search: { type: Boolean, default: false },
    urlLink: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    border: { type: Boolean, default: false },
    sourceUrl: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
