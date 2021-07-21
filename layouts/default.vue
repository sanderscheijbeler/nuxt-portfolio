<template>
  <div class="container">
<!--    <button @click="switchPosition" style="position: fixed; top: 1rem; left: 1rem;z-index: 10;">-->
<!--      KLIK-->
<!--    </button>-->
    <div class="left col position" :class="{'position--left': PosLeft, 'position--right': !PosLeft}">
      <Nuxt/>
    </div>
    <div class="right col position" :class="{'position--left': !PosLeft, 'position--right': PosLeft}">
      <navigation @switch="PosLeft = !PosLeft" />
    </div>
  </div>
</template>

<script>
export default {
  name: "default",
  data() {
    return {
      PosLeft: true
    }
  },
  watch: {
    $route() {
      this.PosLeft = !this.PosLeft
    },
  },
  methods: {
    // switchPosition() {
    //   this.PosLeft = !this.PosLeft
    // }
  }
}
</script>

<style>
.container {
  display: flex;
  position: relative;
  min-height: 100vh;
}

.col {
  width: 50vw;
  height: 100vh;
}

.left {
  background-color: pink;
}

.right {
  background-color: aqua;
}

.position {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate3d(50%,0,0);
  transition: all .4s ease;
}

.position--left {
  transform: translate3d(0%,0,0);
  transition: all .4s ease;
}

.position--right {
  transform: translate3d(100%,0,0);
  transition: all .4s ease;
}
</style>
