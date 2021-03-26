<template>
  <card class="flex flex-col items-center justify-center h-screen" height="100vh">
    <iframe
      :src="card.url"
      frameborder="1"
      width="100%"
      class="h-screen"
    />
  </card>
</template>

<script>
export default {
  name: "kibana-dashboard",
  props: [
    "card",
  ],

  mounted() {
    //
  },
};
</script>
