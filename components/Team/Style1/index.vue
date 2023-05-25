<template>
  <div>
    <div class="teamCard">
      <figure class="image">
        <img
          :src="data && data.sourceUrl && data.sourceUrl.value"
          :alt="data && data.sourceUrl && data.sourceUrl.name"
        />
      </figure>
      <h3 class="title">{{ data && data.title && data.title.value }}</h3>
      <p class="designation">
        {{ data && data.designation && data.designation.value }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamCardStyle1',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
