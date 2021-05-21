<template>
  <div class="login-box">
    {{ mgs }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      mgs: "Hello world"
    };
  },
  created() {
    //this.$test();
  }
};
</script>

<style lang="scss">
.login-box {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
</style>
