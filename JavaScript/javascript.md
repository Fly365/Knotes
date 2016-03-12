# JavaScript
一切都是对象

**弱类型**

值类型的类型判断用typeof，引用类型的类型判断用instanceof
`typeof(x)`
`var fn = function(){}; console.log(fn instanceof Object);`

对象：**若干属性的集合，已键值对的形式表现**
	
	var obj = {
		a:1,
		b:function(b){
			alert(this.a + b)
		},
		c:{
			name:'kenfo',
			year:1999
		}
	};

	var fn = function(){
		alert(1);
	};
	fn.a = 1;
	fn.b = function(){
		alert(2);
	};

**对象是通过函数来创建的**

	function Fn() {
            this.name = 'kenfo';
            this.year = 1;
        }
    var fn1 = new Fn();

    var obj = {};//语法糖

**函数也是对象**

## 原型

## 作用域

[教程](http://www.cnblogs.com/wangfupeng1988/p/3991151.html)

1. javascript没有块级作用域
2. javascript除了全局作用域之外，只有**函数**可以创建的作用域

**我们在声明变量时，全局代码要在代码前端声明，函数中要在函数体一开始就声明好。除了这两个地方，其他地方都不要出现变量声明。而且建议用“单var”形式。eg: var a=1,b=2,c=function(){},d=3;**


## 闭包

## DOM,BOM操作