<template>
  <div class="subscribe">
    <form action="submit" class="form">
      <fieldset>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone" />
        <input type="text" placeholder="Subject" />
      </fieldset>
      <textarea placeholder="Additional Details" cols="30" rows="10"></textarea>
      <button type="submit" class="btn-primary left">Submit Request</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SubscribeForm2',
  //   props: {
  //     sourceUrl: {
  //       type: String,
  //       default: '',
  //       required: true,
  //     },

  //     altText: {
  //       type: String,
  //       default: '',
  //     },

  //   },
}
</script>

<style lang="scss" scoped src="./index.scss" />
