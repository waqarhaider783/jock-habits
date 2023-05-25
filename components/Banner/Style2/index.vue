<template>
  <nuxt-link to="#_" class="banner">
    <div class="banner__figure">
      <img :src="sourceUrl" alt="altText" class="banner__image" />
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'BannerStyle2',
  props: {
    sourceUrl: {
      type: String,
      default: '',
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

<style lang="scss" scoped src="./index.scss" />
