<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    :aria-labelledby="name"
    role="presentation"
  >
    <!-- <title :id="name" lang="en">{{ name }} icon</title> -->
    <slot></slot>
  </svg>
</template>

<script>
/**
 * @author Gopal Das <gopal.das@va8ivedigital.com>
 */
export default {
  props: {
    name: {
      type: String,
      default: 'box',
    },
  },
}
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px;
  height: 1em;
  width: 1em;
  font-size: 1.5em;
  color: currentColor;
}
</style>
