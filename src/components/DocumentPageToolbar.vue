<template>
  <button type="button" title="Print" @click="printLetter">Printaj</button>
</template>

<script>
export default {
  methods: {
    printLetter() {
      /**
       * The print method opens a new window
       * with the url of a document to be printed (e.g Letter1).
       * Right now, it is just a static route '/print-letter'
       */
      window.open(
        "/print-letter",
        "",
        "menubar=no, location=yes,rel=noreferrer, left=200,top=200, status=0"
      );
    },
  },
};
</script>
