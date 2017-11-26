<template>
  <div id="app">
    <section class="todoapp">
      <div>
        <todo-header  @add="addList"></todo-header>
        <todo-content
          :list="list"
          :showIndex="showIndex"
          @remove="removeList"
          @double="dbClick"
          @update="Update"
          @noupdate="noUpdate"
        ></todo-content>
        <todo-footer :reduceNum="reduceNum" :list="list"></todo-footer>
      </div>
    </section>
  </div>

</template>

<script>
  //引入组件
  import TodoHeader from "./components/todolist-header.vue";
  import TodoContent from "./components/todolist-content.vue";
  import TodoFooter from "./components/todolist-footer.vue";
  //添加数据
  let data=JSON.parse(localStorage.getItem("List"))||[];
  export default{
    watch:{
      "list":{
        deep:true,
        handler:function(){
          localStorage.setItem("List",JSON.stringify(this.list))
        }
      }
    },
   //数据
    data(){
      return{
        list:data,
        showIndex:-1,
        oldText:""
      }
    },
    //添加组件
    components:{
      TodoHeader,
      TodoContent,
      TodoFooter
    },
    methods:{
      //添加数据
      addList(message){
        this.list.push({
          id:Math.random(),
          title:message,
          checked:false
        })
      },
      //删除数据
      removeList(index){
        this.list.splice(index,1);
      },
      //双击打开编辑框
      dbClick(i){
        this.showIndex=i;
        this.oldText=this.list[i].title;
      },
      //编辑完毕关闭编辑框
      Update(){
        this.showIndex=-1;
      },
      //按esc键取消编辑
      noUpdate(v) {
        v.title = this.oldText;
        this.showIndex = -1;
      }
    },
    computed:{
      reduceNum(){
        return this.list.filter(function(item){
          return !item.checked;
        }).length;
      }

    }

  }
</script>
<style>
@import "./assets/app.css";
</style>
