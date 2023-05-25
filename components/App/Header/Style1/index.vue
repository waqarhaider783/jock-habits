<template>
  <header class="header" :class="{ background }">
    <div class="container">
      <div class="header__main">
        <nuxt-link :to="logoLink">
          <figure class="header__logo bgLogo">
            <img :src="sourceUrl" alt="logo" />
          </figure>
        </nuxt-link>
        <nav
          class="header__navigation bgNavigation"
          :class="{
            'header__navigation--open bgNavigation--open': mobileSideNavOpen,
          }"
        >
          <div
            class="header__navigation__closeBtn bgCloseBtn"
            @click="toggleSideNav"
          >
            <span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4803 9.00049L17.0953 2.39599C17.2931 2.19827 17.4041 1.9301 17.4041 1.65049C17.4041 1.37087 17.2931 1.10271 17.0953 0.904988C16.8976 0.707269 16.6295 0.596191 16.3498 0.596191C16.0702 0.596191 15.8021 0.707269 15.6043 0.904988L8.99984 7.51999L2.39534 0.904988C2.19762 0.707269 1.92946 0.596192 1.64984 0.596192C1.37022 0.596192 1.10206 0.707269 0.904338 0.904988C0.706619 1.10271 0.595542 1.37087 0.595542 1.65049C0.595542 1.9301 0.706619 2.19827 0.904338 2.39599L7.51934 9.00049L0.904338 15.605C0.805923 15.7026 0.72781 15.8187 0.674503 15.9467C0.621195 16.0746 0.59375 16.2119 0.59375 16.3505C0.59375 16.4891 0.621195 16.6263 0.674503 16.7543C0.72781 16.8822 0.805923 16.9984 0.904338 17.096C1.00195 17.1944 1.11808 17.2725 1.24603 17.3258C1.37398 17.3791 1.51123 17.4066 1.64984 17.4066C1.78845 17.4066 1.92569 17.3791 2.05364 17.3258C2.1816 17.2725 2.29773 17.1944 2.39534 17.096L8.99984 10.481L15.6043 17.096C15.702 17.1944 15.8181 17.2725 15.946 17.3258C16.074 17.3791 16.2112 17.4066 16.3498 17.4066C16.4885 17.4066 16.6257 17.3791 16.7536 17.3258C16.8816 17.2725 16.9977 17.1944 17.0953 17.096C17.1938 16.9984 17.2719 16.8822 17.3252 16.7543C17.3785 16.6263 17.4059 16.4891 17.4059 16.3505C17.4059 16.2119 17.3785 16.0746 17.3252 15.9467C17.2719 15.8187 17.1938 15.7026 17.0953 15.605L10.4803 9.00049Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
          <ul>
            <li v-for="(listItem, index) in listItems" :key="index">
              <nuxt-link :to="listItem.link.value">{{
                listItem.title.value
              }}</nuxt-link>
            </li>
          </ul>
        </nav>
        <span
          class="header__icons header__icons--bars bgIcons"
          @click="toggleSideNav"
        >
          <figure>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="18"
              viewBox="0 0 27 18"
            >
              <path
                id="Icon_ionic-md-menu"
                data-name="Icon ionic-md-menu"
                d="M4.5,27h27V24H4.5Zm0-7.5h27v-3H4.5ZM4.5,9v3h27V9Z"
                transform="translate(-4.5 -9)"
                fill="#561ed4"
              />
            </svg>
          </figure>
        </span>
      </div>
    </div>
  </header>
</template>

<script>
// import { GET_LOGO, GET_MENU } from '~/store/types'
export default {
  name: 'HeaderStyle1',
  props: {
    // search: { type: Boolean, default: false },
    listItems: {
      type: Array,
      default() {},
    },
    background: {
      type: Boolean,
      default: false,
    },
    sourceUrl: {
      type: String,
      required: true,
    },
    logoLink: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      mobileSideNavOpen: false,

      categories: [],
      logo: {},
      menu: {},
    }
  },

  // async fetch() {
  //   const [logo, menu] = await Promise.all([
  //     this.$store.dispatch(`home/${GET_LOGO}`),
  //     this.$store.dispatch(`home/${GET_MENU}`),
  //   ])

  //   this.logo = logo
  //   this.menu = menu
  // },
  // computed: {
  //   getImage() {
  //     if (this.sourceUrl) {
  //       return require(`../../../../assets/images/${this.sourceUrl}`)
  //     }
  //     return ''
  //   },
  // },
  methods: {
    // getPath(url) {
    //   const slug = url && url.split('/')[3]
    //   if (slug) {
    //     return `/${slug}/`
    //   }
    //   return '/'
    // },

    navigateTo() {
      this.toggleSideNav()
    },

    toggleSideNav() {
      this.mobileSideNavOpen = !this.mobileSideNavOpen
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
