import Blazy from 'blazy';

export default {
  data() {
    return {
      bLazy: null,
    }
  },
  methods: {
    Blazy() {
      this.bLazy = new Blazy({
        breakpoints: [{
          width: 0,
          src: 'data-src-small'
        }, {
          width: 640,
          src: 'data-src-medium'
        }, {
          width: 1024,
          src: 'data-src-large'
        }, {
          width: 1200,
          src: 'data-src-xlarge'
        }, {
          width: 1440,
          src: 'data-src-xxlarge'
        }]
      })
    },
  },
  created() {
    this.Blazy();
  },
}
