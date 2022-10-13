# 一.--*:css变量
描述：带有前缀--的属性名，比如--example--name，
      表示的是带有值的自定义属性，其可以通过 var 函数在全文档范围内复用的。
用法：
1. --defaultcolor:red
    body {
      var(--defaultcolor);
    }
----------
# 二.calc()
描述：`calc()`此CSS函数允许在声明CSS属性值时执行一些计算。
        可以使用的操作符有：+、-、*（乘数中至少有一个是`<nunber>`）、/（除数必须是`<number>`）。
用法：
1. width: calc(50% - 30px); 
