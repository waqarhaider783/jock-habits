<template>
  <div class="brand-highligths" :style="columnCountCSSVariable">
    <div class="comparison-highlights">
      <div class="product head"></div>
      <div v-for="product in products" :key="product.id" class="product">
        <figure class="productImage">
          <img :src="product.sourceUrl.value" alt="image" />
        </figure>
        <h2 v-if="product.productTitle.value" class="title">
          {{ product.productTitle.value }}
        </h2>
        <p v-if="product.productDesc.value" class="desc">
          {{ product.productDesc.value }}
        </p>
        <span v-if="product.check.value" class="check">
          {{ product.check.value }}</span
        >
        <figure v-if="product.imgUrl.value" class="logo">
          <img :src="product.imgUrl.value" alt="abc" />
        </figure>
      </div>
      <template v-for="(product, index) in products">
        <div v-if="index === 0 && product.sleep" :key="product.id" class="head">
          Sleep Trail
        </div>
        <div v-if="product.sleep" :key="product.id" class="sleepCount">
          {{ product.sleep.value }}
        </div>
      </template>
      <template v-for="(product, index) in products">
        <div
          v-if="index === 0 && product.shipping"
          :key="product.id"
          class="head"
        >
          Free Shipping
        </div>
        <div v-if="product.shipping" :key="product.id" class="free">
          <svg
            v-if="product.shipping.value == true"
            xmlns="http://www.w3.org/2000/svg"
            width="15.458"
            height="12.005"
            viewBox="0 0 15.458 12.005"
          >
            <path
              id="Path_5026"
              data-name="Path 5026"
              d="M871.873-550.645a1.8,1.8,0,0,1-.567.883q-4.455,4.445-8.9,8.9a.791.791,0,0,1-.828.264.924.924,0,0,1-.37-.218q-2.216-2.2-4.42-4.416a1.175,1.175,0,0,1,.008-1.724q.249-.252.5-.5a1.177,1.177,0,0,1,1.723,0q1.322,1.314,2.635,2.636a1.235,1.235,0,0,1,.116.178,2.046,2.046,0,0,1,.144-.193q3.648-3.651,7.3-7.3a1.191,1.191,0,0,1,1.831-.006c.082.082.161.167.246.245a1.692,1.692,0,0,1,.582.891Z"
              transform="translate(-856.415 552.57)"
              fill="#561ed4"
            />
          </svg>

          <svg
            v-if="product.shipping.value == false"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4803 9.00049L17.0953 2.39599C17.2931 2.19827 17.4041 1.9301 17.4041 1.65049C17.4041 1.37087 17.2931 1.10271 17.0953 0.904988C16.8976 0.707269 16.6295 0.596191 16.3498 0.596191C16.0702 0.596191 15.8021 0.707269 15.6043 0.904988L8.99984 7.51999L2.39534 0.904988C2.19762 0.707269 1.92946 0.596192 1.64984 0.596192C1.37022 0.596192 1.10206 0.707269 0.904338 0.904988C0.706619 1.10271 0.595542 1.37087 0.595542 1.65049C0.595542 1.9301 0.706619 2.19827 0.904338 2.39599L7.51934 9.00049L0.904338 15.605C0.805923 15.7026 0.72781 15.8187 0.674503 15.9467C0.621195 16.0746 0.59375 16.2119 0.59375 16.3505C0.59375 16.4891 0.621195 16.6263 0.674503 16.7543C0.72781 16.8822 0.805923 16.9984 0.904338 17.096C1.00195 17.1944 1.11808 17.2725 1.24603 17.3258C1.37398 17.3791 1.51123 17.4066 1.64984 17.4066C1.78845 17.4066 1.92569 17.3791 2.05364 17.3258C2.1816 17.2725 2.29773 17.1944 2.39534 17.096L8.99984 10.481L15.6043 17.096C15.702 17.1944 15.8181 17.2725 15.946 17.3258C16.074 17.3791 16.2112 17.4066 16.3498 17.4066C16.4885 17.4066 16.6257 17.3791 16.7536 17.3258C16.8816 17.2725 16.9977 17.1944 17.0953 17.096C17.1938 16.9984 17.2719 16.8822 17.3252 16.7543C17.3785 16.6263 17.4059 16.4891 17.4059 16.3505C17.4059 16.2119 17.3785 16.0746 17.3252 15.9467C17.2719 15.8187 17.1938 15.7026 17.0953 15.605L10.4803 9.00049Z"
              fill="red"
              stroke="red"
            />
          </svg>
        </div>
      </template>
      <template v-for="(product, index) in products">
        <div
          v-if="index === 0 && product.freeReturn"
          :key="product.id"
          class="head"
        >
          Free Return
        </div>
        <div v-if="product.freeReturn" :key="product.id" class="free">
          <svg
            v-if="product.freeReturn.value == true"
            xmlns="http://www.w3.org/2000/svg"
            width="15.458"
            height="12.005"
            viewBox="0 0 15.458 12.005"
          >
            <path
              id="Path_5026"
              data-name="Path 5026"
              d="M871.873-550.645a1.8,1.8,0,0,1-.567.883q-4.455,4.445-8.9,8.9a.791.791,0,0,1-.828.264.924.924,0,0,1-.37-.218q-2.216-2.2-4.42-4.416a1.175,1.175,0,0,1,.008-1.724q.249-.252.5-.5a1.177,1.177,0,0,1,1.723,0q1.322,1.314,2.635,2.636a1.235,1.235,0,0,1,.116.178,2.046,2.046,0,0,1,.144-.193q3.648-3.651,7.3-7.3a1.191,1.191,0,0,1,1.831-.006c.082.082.161.167.246.245a1.692,1.692,0,0,1,.582.891Z"
              transform="translate(-856.415 552.57)"
              fill="#561ed4"
            />
          </svg>

          <svg
            v-if="product.freeReturn.value == false"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4803 9.00049L17.0953 2.39599C17.2931 2.19827 17.4041 1.9301 17.4041 1.65049C17.4041 1.37087 17.2931 1.10271 17.0953 0.904988C16.8976 0.707269 16.6295 0.596191 16.3498 0.596191C16.0702 0.596191 15.8021 0.707269 15.6043 0.904988L8.99984 7.51999L2.39534 0.904988C2.19762 0.707269 1.92946 0.596192 1.64984 0.596192C1.37022 0.596192 1.10206 0.707269 0.904338 0.904988C0.706619 1.10271 0.595542 1.37087 0.595542 1.65049C0.595542 1.9301 0.706619 2.19827 0.904338 2.39599L7.51934 9.00049L0.904338 15.605C0.805923 15.7026 0.72781 15.8187 0.674503 15.9467C0.621195 16.0746 0.59375 16.2119 0.59375 16.3505C0.59375 16.4891 0.621195 16.6263 0.674503 16.7543C0.72781 16.8822 0.805923 16.9984 0.904338 17.096C1.00195 17.1944 1.11808 17.2725 1.24603 17.3258C1.37398 17.3791 1.51123 17.4066 1.64984 17.4066C1.78845 17.4066 1.92569 17.3791 2.05364 17.3258C2.1816 17.2725 2.29773 17.1944 2.39534 17.096L8.99984 10.481L15.6043 17.096C15.702 17.1944 15.8181 17.2725 15.946 17.3258C16.074 17.3791 16.2112 17.4066 16.3498 17.4066C16.4885 17.4066 16.6257 17.3791 16.7536 17.3258C16.8816 17.2725 16.9977 17.1944 17.0953 17.096C17.1938 16.9984 17.2719 16.8822 17.3252 16.7543C17.3785 16.6263 17.4059 16.4891 17.4059 16.3505C17.4059 16.2119 17.3785 16.0746 17.3252 15.9467C17.2719 15.8187 17.1938 15.7026 17.0953 15.605L10.4803 9.00049Z"
              fill="red"
              stroke="red"
            />
          </svg>
        </div>
      </template>
      <template v-for="(product, index) in products">
        <div
          v-if="index === 0 && product.warranty"
          :key="product.id"
          class="head"
        >
          Wraranty
        </div>
        <div v-if="product.warranty" :key="product.id" class="productPrice">
          <p v-if="product.warranty.value">${{ product.warranty.value }}</p>
        </div>
      </template>
      <template v-for="(product, index) in products">
        <div v-if="index === 0 && product.price" :key="product.id" class="head">
          Twin Price
        </div>
        <div v-if="product.price" :key="product.id" class="productPrice">
          <p v-if="product.price.value">${{ product.price.value }}</p>
        </div>
      </template>

      <template v-for="(product, index) in products">
        <div
          v-if="index === 0 && product.couponTitle"
          :key="product.id"
          class="head"
        >
          Coupon Code
        </div>
        <div v-if="product.couponTitle" :key="product.id" class="couponSection">
          <h2 v-if="product.couponTitle.value" class="title">
            {{ product.couponTitle.value }}
          </h2>
          <p v-if="product.couponCode.value" class="code">
            Code: {{ product.couponCode.value }}
          </p>
          <a
            v-if="product.shopBtn.value"
            :href="product.shopLink.value"
            class="shop-link"
            >{{ product.shopBtn.value }}</a
          >
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductTable',
  props: {
    products: {
      type: Array,
      required: true,
    },
  },

  computed: {
    columnCountCSSVariable() {
      return `--column-count: ${(this.products?.length || 0) + 1}`
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
