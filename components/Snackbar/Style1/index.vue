<template>
  <div class="snackbar" :class="[variant, position]">
    <div class="snackbar__wrapper">
      <div class="snackbar__icon">
        <i v-if="variant === 'success'" class="uil uil-check-circle"></i>
        <i v-if="variant === 'info'" class="uil uil-info-circle"></i>
        <i
          v-if="variant === 'warning'"
          class="uil uil-exclamation-triangle"
        ></i>
        <i v-if="variant === 'error'" class="uil uil-exclamation-octagon"></i>
      </div>
      <div class="snackbar__message">{{ message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SnackbarStyle1',

  props: {
    variant: {
      type: String,
      default: 'info',
    },

    message: {
      type: String,
      default: '',
    },

    position: {
      type: String,
      default: 'bottomLeft',
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
