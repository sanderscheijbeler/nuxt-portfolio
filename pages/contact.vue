<template>
  <div class="page">
    <div>
      <h1>Contact me</h1>
      <a class="full-width" href="mailto:sanderscheijbeler@gmail.com">Send me an e-mail</a>
    </div>
  </div>
</template>

<script>
import fitty from 'fitty';
export default {
  name: "contact",
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
