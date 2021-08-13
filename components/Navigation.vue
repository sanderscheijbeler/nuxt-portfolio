<template>
  <div>
    <h1>Navigation</h1>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/work">Work</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navigation",
};
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;

  li {
    margin: 0;
    padding: 5px 0;
    list-style: none;
    text-align: center;

    a {
      font-size: 4vw;
      line-height: 1.4em;
      text-decoration: none;
      position: relative;
      transition: all 0.6s;

      &:before {
        content: "";
        width: 0;
        height: 0.1em;
        position: absolute;
        bottom: 0;
        right: 0;
        background: #000;
        transition: all 0.3s;
      }
      &:hover {
        &:before {
          width: 100%;
          left: 0;
          background: #000;
        }
      }
    }
  }
}
</style>
