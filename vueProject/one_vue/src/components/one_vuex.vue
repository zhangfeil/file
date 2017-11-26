<template>
  <div>
  {{num}}
  </div>
</template>
<script>
 export default{
   data(){
     return{
       num:this.$store.state.n
     }
   },
   methods:{
     changeStateN(){
       this.$store.state.n=3000;
     }
   },
   computed:{
     miaov(){
       return this.$store.state.n;
     }
   }
 }
</script>
