<template>
  <nuxt-link :to="urlLink" class="banner">
    <div class="banner__figure">
      <img
        :src="sourceUrl"
        alt="altText"
        class="banner__image"
        :class="{ curved }"
      />
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'BannerStyle7',
  props: {
    sourceUrl: {
      type: String,
      default: '',
      required: true,
    },
    curved: {
      type: Boolean,
      default: false,
    },

    urlLink: {
      type: String,
      default: '',
      required: true,
    },
  },
  //  computed: {
  //   getImage() {
  //     if (this.sourceUrl) {
  //       return require(`~/assets/images/${this.sourceUrl}`)
  //     }
  //     return ''
  //   },
  // },
}
</script>

<style lang="scss" scoped src="./index.scss" />
