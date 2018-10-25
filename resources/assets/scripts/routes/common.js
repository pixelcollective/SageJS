import Vue from 'vue';
import HelloWorld from '../vue/HelloWorld.vue';

export default {
  init() {
    new Vue({
      el: '#app',
      components: {
        HelloWorld,
      },
      props: ['message'],
    });
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
