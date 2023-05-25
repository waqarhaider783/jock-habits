<template>
  <div class="brandContainer">
    <div class="brand">
      <div class="logo">
        <figure>
          <img :src="sourceUrl" alt="" />
        </figure>
      </div>
      <div class="desc">
        <h2 class="title">{{ title }}</h2>
        <p class="detail">
          {{ detail }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrandStyle1',
  props: {
    sourceUrl: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    detail: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
