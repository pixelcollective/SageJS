<template>
  <div class="hello-world__message">
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted() {
    this.helloWorld();
  },
  props: ['message'],
  methods: {
    helloWorld() {
      console.log("{{message}}");
    },
  },
}
</script>