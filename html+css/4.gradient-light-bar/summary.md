# 一.linear-gradient()
描述：`linear-gradient()`函数用于创建一个表示两种或多种颜色线性渐变的图片。
        其结果属于<gradient>数据类型，是一种特别的<image>数据类型。
用法：
1. linear-gradient([ <angle> | to <side-or-corner> ,]? <color-stop-list>)
                    \---------定义梯度线方向--------/ \---渐变颜色列表---/
示例：
1. linear-gradient(.25turn,red,red 50%,blue 75%,green 90%)
梯度线方向水平向右，red颜色一直渲染到50%，然后渐变过渡到blue的75%，再渐变过渡到green的90%，最后部分由green渲染。

2. 条纹背景
* 根据linear-gradient()如果下一个颜色的开始位置是在上一个颜色结束位置，这意味着浏览器不需要填满两个颜色之余间的空间，可以创建2条颜色条纹；
* 然后通过background-size设置其尺寸；
* 最后由于背景默认情况下是重复平铺的，水平条纹就会被填满整个背景。
```javascript
div {
  width: 200px;
  height: 200px;
  background: linear-gradient(#f6bc50 50%,#6186a7 0);
  background-size: 100% 40px;
}
```

3. 斜向条纹背景
```javascript
div {
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg,red 25%,blue 0,blue 50%,red 0,red 75%,blue 0);
  background-size: 50px 50px;
}
```
思路：先由red渲染到25%，之后转换blue:0取消渐变，再设置blue渲染到50%；

4. 网格背景
```javascript
div {
  width: 200px;
  height: 200px;
  background: #58a;
  background-image: linear-gradient(white 1px,transparent 0),
                    linear-gradient(.25turn,white 1px,transparent 0);
  background-size: 50px 50px;
}
```