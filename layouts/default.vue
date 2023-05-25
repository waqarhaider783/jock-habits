<template>
  <div id="app">
    <!-- Place Application Loader Here -->
    <div v-if="showLoader" class="loader">
      <loader-style-1 />
    </div>

    <!-- Place Application Snackbar Here -->
    <snackbar-style-1
      v-if="snackbar && snackbar.show"
      :variant="snackbar && snackbar.variant"
      :message="snackbar && snackbar.message"
      :position="snackbar && snackbar.position"
    />

    <!-- Place Header Here -->
    <app-header-style1
      :list-items="listItems"
      logo-link="/"
      :background="false"
      source-url="https://8thloop.com/wp-content/uploads/2022/01/logo-black.webp"
    />

    <!--Header Ends Here -->

    <!-- Page Content Places Here -->
    <Nuxt />

    <!-- Place Footer Here -->
    <app-footer-style1
      :footer-list-one="footerListOne"
      :footer-list-two="footerListTwo"
      source-url="https://8thloop.com/wp-content/uploads/2022/01/logo-white.webp"
    />
    <!-- Footer Ends Here -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'DefaultLayout',
  data() {
    return {
      listItems: [
        {
          title: {
            name: 'Link Name',
            type: 'Text',
            value: 'Shop',
          },
          link: {
            name: 'Link Url',
            type: 'Text',
            value: '/shop',
          },
        },
        {
          title: {
            name: 'Link Name',
            type: 'Text',
            value: 'Deals',
          },
          link: {
            name: 'Link Url',
            type: 'Text',
            value: '/deals',
          },
        },
        {
          title: {
            name: 'Link Name',
            type: 'Text',
            value: 'Category',
          },
          link: {
            name: 'Link Url',
            type: 'Text',
            value: '/categories',
          },
        },
        {
          title: {
            name: 'Link Name',
            type: 'Text',
            value: 'Post',
          },
          link: {
            name: 'Link Url',
            type: 'Text',
            value: '/post',
          },
        },
        {
          title: {
            name: 'Link Name',
            type: 'Text',
            value: 'About Us',
          },
          link: {
            name: 'Link Url',
            type: 'Text',
            value: '/about-us',
          },
        },
        {
          title: {
            name: 'Link Name',
            type: 'Text',
            value: 'Contact Us',
          },
          link: {
            name: 'Link Url',
            type: 'Text',
            value: '/contact-us',
          },
        },
      ],
      footerListOne: [
        {
          title: {
            name: 'Link Name',
            type: 'Text',
            value: 'Post',
          },
          link: {
            name: 'Link Url',
            type: 'Text',
            value: '/post',
          },
        },
        {
          title: {
            name: 'Link Name',
            type: 'Text',
            value: 'About Us',
          },
          link: {
            name: 'Link Url',
            type: 'Text',
            value: '/about-us',
          },
        },
      ],
      footerListTwo: [
        {
          title: {
            name: 'Link Name',
            type: 'Text',
            value: 'Outdoor Clothing',
          },
          link: {
            name: 'Link Url',
            type: 'Text',
            value: '#_',
          },
        },
        {
          title: {
            name: 'Link Name',
            type: 'Text',
            value: 'Outdoor Sports',
          },
          link: {
            name: 'Link Url',
            type: 'Text',
            value: '#_',
          },
        },
        {
          title: {
            name: 'Link Name',
            type: 'Text',
            value: 'Outdoor Accessories',
          },
          link: {
            name: 'Link Url',
            type: 'Text',
            value: '#_',
          },
        },
        {
          title: {
            name: 'Link Name',
            type: 'Text',
            value: 'Sporting Accessories',
          },
          link: {
            name: 'Link Url',
            type: 'Text',
            value: '#_',
          },
        },
      ],
    }
  },
  computed: {
    ...mapState({
      authenticated: (state) => state.app.authenticated,
      showLoader: (state) => state.app.showLoader,
      snackbar: (state) => state.app.snackbar,
    }),
  },
}
</script>

<style lang="scss" scoped src="./default.scss"></style>
