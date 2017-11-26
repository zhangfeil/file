<template>
  <div>
    {{num}}

  </div>
</template>
<script>
  export default {
    data(){
      return{
        num:this.$store.state.n
      }
    }
  }
</script>
