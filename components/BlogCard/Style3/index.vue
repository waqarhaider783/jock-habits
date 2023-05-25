<template>
  <div class="">
    <div class="blog-card">
      <a :href="cardLink">
        <div class="inner-box">
          <h4 class="title">
            {{ title }}
          </h4>
          <figure class="image">
            <img :src="sourceUrl" alt="abc" />
          </figure>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogCardStyle3',
  props: {
    // search: { type: Boolean, default: false },

    sourceUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    cardLink: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
