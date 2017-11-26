<template>
  <section class="main">
    <!--没有数据的时候，全选按钮处于消失状态-->
    <input class="toggle-all" type="checkbox" v-show="list.length" v-model="checkAll"/>
    <ul class="todo-list">
      <li v-for="(item,i) in list" :class="{completed:item.checked,editing:i===showIndex}" >
        <div class="view">
          <input class="toggle" type="checkbox" v-model="item.checked"/>
          <label @dblclick="double(i)">{{item.title}}</label>
          <button class="destroy" @click="remove(i)"></button>
        </div>
        <input class="edit"
               v-model="item.title"
               @keydown.13="update"
               @blur="update"
               @keydown.esc="noupdate(item)"
        />
      </li>
    </ul>
  </section>
</template>
<script>
  export default {
    props:["list","showIndex"],
    methods:{
      //删除
      remove(i){
        this.$emit("remove",i);
      },
      //双击
      double(i){
        this.$emit("double",i);
      },
      //修改
      update(){
        this.$emit("update");
      },
      //取消修改
      noupdate(item){
        this.$emit("noupdate",item)
      }
    },
    computed:{
      //全选
      checkAll:{
        get(){
          let newArr=this.list.filter(function(item){
            return item.checked;
          });
          return newArr.length===this.list.length;
        },
        set(val){
          this.list.forEach((item)=>{
            return item.checked=val;
          })
        }
      }
    }

  };

</script>
