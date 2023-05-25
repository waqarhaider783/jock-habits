<template>
  <div class="container">
    <div class="error">
      <div class="error__wrapper">
        <div class="count">{{ statusCode }}</div>
        <div class="title">{{ message }}</div>
        <div>
          <span class="link">
            Return to <nuxt-link to="/">Home</nuxt-link> page.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorLayout',

  props: {
    error: {
      type: Object,
      default: null,
    },
  },

  computed: {
    statusCode() {
      return this?.error?.statusCode
    },
    message() {
      return this?.error?.message
    },
  },
}
</script>

<style lang="scss" scoped>
.error {
  height: 100vh;

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 15px;

    & > *:not(:last-child) {
      padding-bottom: 15px;
    }
  }
}

.count {
  font-size: 60px;
  font-weight: 600;
  text-transform: capitalize;

  @media screen and (max-width: 480px) {
    font-size: 44px;
  }
}

.title {
  font-size: 26px;
  font-weight: 500;
  text-transform: capitalize;

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
}

.link {
  & a {
    text-decoration: none;
    display: inline;
    font-size: 16px;
    color: var(--primaryColor);
    transition: color 0.3s linear;

    &:active,
    &:focus,
    &:hover {
      outline: none;
      color: var(--secondaryColor);
    }
  }
}
</style>
