<template>
    <div class="page">
        <h1>About</h1>

        <div class="text">
            <p>
                My name is Sander and I'm {{ myAge }} old. Since April 2018 I'm working as a Front-end developer. Before
                that I was a police officer in the centre of Rotterdam. And before that I was in training to become an
                NCO in the dutch armed force. As a result I have learned under unique circumstances what teamwork,
                dedication and responsibility is.
            </p>
            <p>
                I'm known for my open and honest personality. And because of that i thought it would be fun to, at your
                own risk, give you a random fact about me.
            </p>
            <button v-on:click="randomFactHandler">Give me a random fact</button>
            <div>
                <span>
                    I...
                </span>
                <transition name="fade">
                  <span v-for="(item, index) in wordsList" :key="index" v-if="index === wordIndex">
                    {{ item }}
                  </span>
                </transition>

              <div v-if="this.clicks >= wordsList.length">
                You really want to know so much more about me? Why not send an email? Give me you phonenumber, I'll call you!
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
                '... am a sucker for speculaas.',
                '... know all the words to the dutch version of the musical "Les Miserable".',
                '... own a kilt. (Its the Mckenzie modern color tartan). And no im not Scottish.',
                '... own a bagpipe. I was learning to play in 2013 but quit because of lack of free time. No im not Scottish.',
                '... know the words to a lot of disney songs. Dont ask =]',
                '... enjoy special beers. At this time I really enjoy Leffe Triple.',
                '... learned webdevelopment while working full time as a police officer.',
            ]
        }
    },
    methods: {
      randomFactHandler() {
            this.clicks++
            const oldVal = this.wordIndex;
            const newVal = this.randomize();
            if ( oldVal !== newVal ) {
              this.wordIndex = newVal
            }
        },
      randomize() {
        return Math.floor(Math.random() * (this.wordsList.length)) + 1
      }
    },
    computed: {
        myAge() {
            return moment("19870214", "YYYYMMDD").fromNow(true);
        },
    },
}
</script>
