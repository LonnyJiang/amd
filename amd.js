// define(id ?,dependencies ?,fatory)

// 创建一个名为"alpha"的模块，使用了require，exports，和名为"beta"的模块:

define("alpha",["require","exports","beta"],function (require,exports,beta) {
	exports.verb = function () {
		return beta.verb();
		return require('beta').verb();
	}
});


// 一个返回对象的匿名模块：(匿名模块)

define([alpha],function (alpha) {	
	return{
		verb:function () {
			return alpha.verb()+2;
		}
	};
});


// 一个没有依赖性的模块可以直接定义对象：(独立模块)

   define({
     add: function(x, y){
       return x + y;
     }
   });


// 另一种等价的写法是，把对象写成一个函数，该函数的返回值就是输出的模块。
   define(function () {
    return {
        method1: function() {},
        method2: function() {},
    };
});


// 如果被定义的模块需要依赖其他模块，则define方法必须采用下面的格式。(非独立模块)
define(['module1', 'module2'], function(m1, m2) {
   ...
});



define(['module1', 'module2'], function(m1, m2) {

    return {
        method: function() {
            m1.methodA();
            m2.methodB();
        }
    };

});


// 一个使用了简单CommonJS转换的模块定义：

    define(function (require, exports, module) {
     var a = require('a'),
         b = require('b');

     exports.action = function () {};
   });




    // require方法：调用模块

    require(['foo', 'bar'], function ( foo, bar ) {
        foo.doSomething();
});



        define(function (require) {
        require(['a', 'b'], function (a, b) {
            //modules a and b are now available for use.
        });
    }); 



        // require.toUrl(String)


        //cart.js contents:
    define (function(require) {
        // 模块ID名 './templates/a'
        // 扩展名 '.html'
        // 模板路径大致以这样的形式结尾 'modules/cart/templates/a.html'
        var templatePath = require.toUrl('./templates/a.html');
    });





/**
使用AMD模式开发的简单三层结构（基础库/UI层/应用层）：
**/

// base.js
define(function() {
    return {
        mix: function(source, target) {
        }
    };
});

// ui.js
define(['base'], function(base) {
    return {
        show: function() {
            // todo with module base
        }
    }
});

// page.js
define(['data', 'ui'], function(data, ui) {
    // init here
});


// data.js
define({
    users: [],
    members: []
});


// 以上同时演示了define的三种用法
// 定义无依赖的模块（base.js）
// 定义有依赖的模块（ui.js，page.js）
// 定义数据对象模块（data.js）



define(function(require, exports, module) {
    var base = require('base');
    exports.show = function() {
        // todo with module base
    }
});


// common.jss
var x = 5;
var addX = function (value) {
	return value + x;
}


exports.x = x;
exports.addX = addX;