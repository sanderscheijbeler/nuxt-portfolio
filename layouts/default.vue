<template>
  <div class="layout__container">
    <div
      class="layout__col layout__content layout__position"
      :class="{
        'layout__position--left': PosLeft,
        'layout__position--right': !PosLeft,
      }"
    >
      <button v-if="!this.PosLeft" @click.prevent="switchPosition">Switch</button>
      <Nuxt />
    </div>
    <div
      class="layout__col layout__nav layout__position"
      :class="{
        'layout__position--left': !PosLeft,
        'layout__position--right': PosLeft,
      }"
    >
    <button v-if="this.PosLeft" @click.prevent="switchPosition">Switch</button>
      <navigation @switch="switchPosition" />
    </div>
  </div>
</template>

<script>
export default {
  name: "default",
  data() {
    return {
      PosLeft: true,
    };
  },
  watch: {
    $route() {
      this.switchPosition();
    },
  },
  methods: {
    switchPosition() {
      this.PosLeft = !this.PosLeft;
    },
  },
};
</script>
