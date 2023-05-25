<template>
  <div class="category" :class="{ background }">
    <nuxt-link :to="catLink" class="category__title">
      {{ catTitle }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'PostTagsStyle2',
  props: {
    catTitle: {
      type: String,
      default: '#',
    },
    catLink: {
      type: String,
      default: '#_',
    },
    background: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
