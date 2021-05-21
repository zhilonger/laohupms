<template>
  <div class="account">
  adfsdf
    <router-view />
  </div>
</template>

<script>
import service from "src/api/api";
export default {
  name: "account",
  created() {
    console.log(this.globalData.title);
    this.$axios.get('/api/index.php?c=acorrect&a=ajax_getpackage_price').then(function(res){
      console.log(res);
    }).catch(function(){});
  }
};
</script>

<style scoped>
.account {
  position: relative;
  height: 100vh;
  width: 100vw;
}
</style>
