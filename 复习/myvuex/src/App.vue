<template>
  <div id="app">
    <p>{{num}}</p>
    <vu-ex>{{changeNum}}</vu-ex>
    <button @click="changeN">添加</button>
  </div>
</template>

<script>
  import vuEx from "./components/vuex.vue";
  export default {
    //导入后要注册组件！！！！！！！！！！！！！
    components:{
      vuEx
    },
    data(){
      return{
        num:this.$store.state.n
      }
    },
    methods:{
      changeN(){
        this.$store.commit("changeN",30);
      }
    },
    computed:{
      changeNum(){
        return this.$store.state.n;
      }
    }

  }
</script>

<style>

</style>
