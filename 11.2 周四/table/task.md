1. react 运行原理
*2. 声明 react 的组件
    继承了 React.Component 的类就是一个组件
    至少有一个 render 方法
        这个方法应该 return 一份 jsx 的对象,
        这就是这个组件的样子

    答: class App extends React.Component{
          constructor(props){
                super(props)
          },
          render(){
               return(
                  <div>
                      React
                  </div>
               )
          }
    }

*3. jsx 语法
    回去复习今天的 jsx 的语法 , 写到下面
    答：(1).jsx将代码写在括号里面,并且引入的组件要用标签的形式写入
            如: render(){
                  return(
                     <section>
                        <Header></Header>
                        <Content></Content>
                     </section>
                  )
                }

                RectDOM.render(
                    <App>,
                    document.getElementById("root")
                )

         (2).在jsx中要用{}来包住js的表达式
            如：render(){
                return(
                    <section>
                        {this.props.children}
                    </section>
                )
            }

         (3).在jsx中标签的class属性名要用className来代替


4. 把 jsx 渲染到页面
    reactDOM.render
    答:ReactDom.render({
        <App>,//页面的组件
        document.getElementById("root")//装页面的容器
    })

5. virtual DOM 的概念 怎么来的
    答：virtual是一个虚拟的DOM

6. this.props.children
    答:this.props.children可以获取组件之间的内容。在jsx中使用的时候要用{this.props.children},不然会被当成字符串解析

关于 webpack
    html-webpack-plugin 自动创建 html 文件
    clean-webpack-plugin 清理某一个文件夹在打包之前


预告
    react 更新视图
    react 组件之间的交流
    使用 webpack 打包图片
    使用 webpack 打包 css
