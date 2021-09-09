<template>
  <div class="page">
    <div>
      <h1>Contact me</h1>
      <a class="full-width" @resize="onResize" href="mailto:sanderscheijbeler@gmail.com">Send me an e-mail</a>
    </div>
  </div>
</template>

<script>
import fitty from 'fitty';

export default {
  name: "contact",
  components: {
  },
  methods: {
    onResize(e) {
      console.log('resizing?!')
    },
  },
  mounted() {
    fitty('.full-width')
  }
}
</script>

<style scoped>
  .full-width {
    margin-top: 4rem;
  }
</style>
