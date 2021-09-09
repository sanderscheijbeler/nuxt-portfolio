<template>
  <div class="page">
    <h1>About</h1>

    <div class="text">
      <p>
        My name is Sander and I'm {{ myAge }} old. Since 2018 I'm working as a Front-end developer. Before
        that I was a police officer in the centre of Rotterdam. And before that I was in training to become an
        NCO in the dutch armed force. As a result I have learned under unique circumstances what teamwork,
        dedication and responsibility is.
      </p>
      <p>
        I'm known for my open and honest personality. And because of that i thought it would be fun to, at your
        own risk, give you a random fact about me.
      </p>
      <a href="#" v-on:click="randomFactHandler" class="link">Give me a random fact</a>
      <div class="quoteblock">
        <span>
            I...
        </span>
        <transition name="fade">
          <span v-for="(item, index) in wordsList" :key="index" v-if="index === wordIndex">
            {{ item }}
          </span>
        </transition>

        <div v-if="this.clicks >= wordsList.length" class="popup">
          You really want to know so much more about me? Why not send an <a href="mailto:sanderscheijbeler@gmail.com">
          email</a>? Or give me you phonenumber, I'll call you!

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: "about",
  data() {
    return {
      clicks: 0,
      wordIndex: 0,
      wordsList: [
        '',
        'am a sucker for speculaas.',
        'know all the words to the dutch version of the musical "Les Miserable".',
        'own a kilt. (Its the Mckenzie modern color tartan). And no im not Scottish.',
        'own a bagpipe. I was learning to play in 2013 but quit because of lack of free time. No im not Scottish.',
        'know the words to a lot of disney songs. Dont ask =]',
        'enjoy special beers. At this time I really enjoy Leffe Triple.',
        'learned webdevelopment while working full time as a police officer.',
      ]
    }
  },
  methods: {
    randomFactHandler() {
      this.clicks++
      const oldVal = this.wordIndex;
      const newVal = this.randomize();
      if (oldVal !== newVal) {
        this.wordIndex = newVal
      }
    },
    randomize() {
      return Math.floor(Math.random() * (this.wordsList.length - 1)) + 1
    }
  },
  computed: {
    myAge() {
      return moment("19870214", "YYYYMMDD").fromNow(true);
    },
  },
}
</script>
<style lang="scss">
.popup {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: red;
  width: 60%;
  padding: 1rem 1.3rem;
  z-index: 10;

  &:before {
    content: "";
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 20px;
    height: 20px;
    display: inline-block;
  }
}
</style>
