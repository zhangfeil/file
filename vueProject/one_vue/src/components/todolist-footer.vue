<template>
  <footer class="footer" v-show="list.length">
	            <span class="todo-count">
	            	<strong>{{reduceNum}}</strong>
	            	<span>条未选中</span>
	            </span>
    <ul class="filters" >
      <!--在:class="{类名:布尔值}" 布尔值中如果是变量，直接显示，如果是字符串，要加上""包起来,如:a==="a"-->
      <li><a href="#/all" class="">All</a></li>
      <li><a href="#/active" class="">Active</a></li>
      <li><a href="#/completed" class="">Completed</a></li>
    </ul>
  </footer>
</template>
<script>
  export default {
    //获取数据
    props:["reduceNum","list"],


  }
</script>
