<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  mounted() {
    sessionStorage.setItem("isNotreload", "true");
    window.addEventListener("beforeunload", function() {
      sessionStorage.setItem("isNotreload", "false");
    });
  }
};
</script>
