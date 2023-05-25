<template>
  <div>
    <footer class="footer">
      <div class="footer__container container">
        <div class="footer__main">
          <div class="footer__main__top">
            <div class="left">
              <nuxt-link to="#_">
                <figure class="logo">
                  <img :src="sourceUrl" alt="logo" />
                </figure>
              </nuxt-link>
              <p class="description">
                The ultimate guide and report to your favorite sport from their
                attire to their sports equipment we cover each and everything on
                Jock Habits.
              </p>
            </div>
            <div class="center">
              <h2 class="title">Information</h2>
              <ul>
                <li v-for="(listItem, index) in footerListOne" :key="index">
                  <nuxt-link :to="listItem.link.value" class="link">{{
                    listItem.title.value
                  }}</nuxt-link>
                </li>
              </ul>
            </div>
            <div class="right">
              <h2 class="title">Information</h2>
              <ul>
                <li v-for="(listItem, index) in footerListTwo" :key="index">
                  <nuxt-link :to="listItem.link.value" class="link">{{
                    listItem.title.value
                  }}</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer__main__bottom">
            <p class="copyRights">
              Copyright &copy; JockHabits All rights reserved
            </p>
            <div class="dropdown">
              <select>
                <option value="1">United States</option>
                <option value="2">United Kingdom</option>
                <option value="3">Australia</option>

                <option value="4">Albania</option>
                <option value="5">Pakistan</option>
                <option value="6">India</option>
                <option value="7">France</option>
                <option value="8">Germany</option>
                <option value="9">Wales</option>

                <option value="10">Ireland</option>
                <option value="11">Canada</option>
                <option value="12">Italy</option>
              </select>
            </div>
            <div class="contact-social">
              <nuxt-link to="#_">Contact Us</nuxt-link>
              <ul class="socialIcons">
                <li>
                  <a href="#_" class="social-link">
                    <icons-base>
                      <icons-facebook />
                    </icons-base>
                  </a>
                </li>
                <li>
                  <a href="#_" class="social-link">
                    <icons-base> <icons-twitter /> </icons-base
                  ></a>
                </li>
                <li>
                  <a href="#_" class="social-link">
                    <icons-base> <icons-insta /> </icons-base
                  ></a>
                </li>
                <li>
                  <a href="#_" class="social-link">
                    <icons-base> <icons-linkedin /> </icons-base>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FooterStyle1',
  props: {
    sourceUrl: {
      type: String,
      required: true,
    },
    footerListOne: {
      type: Array,
      default() {},
    },
    footerListTwo: {
      type: Array,
      default() {},
    },
    socialIconsList: {
      type: Array,
      default() {},
    },
  },
  // data() {
  //   return {
  //     expandDropdown: false,
  //   }
  // },
  // computed: {
  //   // filtering data which does not have post
  //   ...mapState({
  //     categories: (state) => this.footer1.thirdColumn.menuItems,
  //     // state.posts.categories.filter(
  //     //   ({ posts: { edges } }) => edges && edges.length
  //     // ),
  //     logo: (state) => state.home.logo,
  //   }),
  // },
  computed: {
    getImage() {
      if (this.sourceUrl) {
        return require(`../../../../assets/images/${this.sourceUrl}`)
      }
      return ''
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
