**### 一.inset用法**

描述：`inset`属性是`top`、`right`、`bottom`、`left`的简写形式。<br/>

用法：

1. <长度值><br/>

`inset`: 10px; 应用于所有边缘的值<br/>

`inset`: 4px 8px; 上下/左右<br/>

`inset`: 5px 15px 10px; 上/左右/下<br/>

`inset`: 2.4em 3em 3em 3em; 上/右/下/左<br/>



2. <百分比值><br/>

`inset`: 10% 5% 5% 5%;<br/>



3. 关键字值

`inset`: `auto`; 自动<br/>



4. 全局值

`inset`: `inherit`; 继承<br/>

`inset`: `initial`; 初始<br/>

`inset`: `revert`; 还原<br/>

`inset`: `revert-layer`; 还原层<br/>

`inset`: `unset`; 未设置<br/>

**----------------**

**### 二.zoom用法**

描述：对元素进行缩放，功能与`scale`相同，但除兼容性外还有另外一些区别。<br/>

用法：

1. 关键字值<br/>

`zoom`: `normal`; 默认<br/>

`zoom`: `reset`; 重置<br/>



2. 百分比值<br/>

`zoom`: 50%;<br/>

`zoom`: 200%;<br/>



3. 数值

`zoom`: 1.1;

`zoom`: 0.7;



4. 全局值

`zoom`: `inherit`; 继承

`zoom`: `initial`; 初始

`zoom`: `revert`; 还原

`zoom`: `revert-layer`; 还原层

`zoom`: `unset`; 未设置

**--------------**

**### 三.filter用法**

描述：`filter`将模糊或颜色偏移等图形效果应用于元素，滤镜通常用于调整图像、背景和边框的渲染。

用法：

1. 给svg元素引用`filter`

`filter`: url("filters.svg#filter-id");



2. 设置一种函数

`filter`: `blur`(5px); 模糊

`filter`: `brightness`(0.4); 亮度

`filter`: `contrast`(200%); 对比度

`filter`: `drop-shadow`(16px 16px 20px blue); 阴影

`filter`: `grayscale`(50%); 灰度

`filter`: `hue-rotate`(90deg); 色相旋转

`filter`: `invert`(75%); 反转

`filter`: `opacity`(25%); 不透明度

`filter`: `saturate`(30%); 饱和

`filter`: `sepia`(60%); 棕褐色



3. 多个`filter`

`filter`: contrast(175%) brightness(3%);



4. 关键字

`filter`: `none`;



5. 全局值

`filter`: `inherit`; 继承

`filter`: `initial`; 初始

`filter`: `revert`; 还原

`filter`: `unset`; 未设置