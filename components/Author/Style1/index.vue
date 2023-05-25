<template>
  <div class="author">
    <figure class="author__image">
      <img :src="sourceUrl" alt="abc" />
    </figure>
    <div class="authorDetail">

    <h2 class="heading">About Author</h2>
    <p class="desc">
      {{ authorDetail }}
    </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthorStyle1',
  props: {
    sourceUrl: {
      type: String,
      default: '',
      required: true,
    },

    authorDetail: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
