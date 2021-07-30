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
            <button v-on:click="randomize()">Give me a random fact</button>
            <div>
                <span>
                    I...
                </span>
                <transition name="bounce">
                <span>
                    {{ wordsList[wordIndex] }}
                </span>
                </transition>
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
            wordIndex: 0,
            wordsList: [
                '',
                '... am a sucker for speculaas.',
                '... know all the words to the dutch version of the musical "Les Miserable".',
                '... own a kilt. (Its the Mckenzie modern color tartan). No im not Scottish.',
                '... own a bagpipe. I was learning to play in 2013 but quit because of lack of free time. No im not Scottish.',
                '... know the words to alot of disney songs. Dont ask =]',
                '... enjoy special beers. At this time I really like Leffe Triple.',
                '... learned webdevelopment while working fulltime as a policeofficer.',
            ]
        }
    },
    methods: {
        randomize() {
            this.wordIndex = Math.floor(Math.random() * (this.wordsList.length));
        }
    },
    computed: {
        myAge() {
            return moment("19870214", "YYYYMMDD").fromNow(true);
        },
    },
}
</script>

<style scoped>
h1 {
    color: yellow;
}

</style>
