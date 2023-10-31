# 标题
---
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
# 字体
---
*斜体文本*
_斜体文本_
**粗体文本**
__粗体文本__
***粗斜体文本***
___粗斜体文本___
# 分割线
***

* * *

*****

- - -

----------
# 删除线
---
WIOS.CLOUD
GOOGLE.COM
~~BAIDU.COM~~

# 下划线
---
<u>带下划线文本</u>

# 列表
---
* 第一项
* 第二项
* 第三项

+ 第一项
+ 第二项
+ 第三项

- 第一项
- 第二项
- 第三项
# 有序列表
---
1. 第一项
2. 第二项
3. 第三项
# 列表嵌套
---
1. 第一项：
    - 第一项嵌套的第一个元素
    - 第一项嵌套的第二个元素
2. 第二项：
    - 第二项嵌套的第一个元素
    - 第二项嵌套的第二个元素
# 区块
---
> 区块引用
>> WIOS教程
>>> 区块嵌套
# 区块中使用列表
---
> 区块列表
> 1. 第一项
> 2. 第二项
> + 第一项
> + 第二项
> + 第三项
# 列表中使用区块
---
* 第一项
    > WiOS教程
    > Hello World.
* 第二项
# 代码
---
这是一个行内函数`System.out.println()`。

# 代码块
---
```javascript
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= n; i++) {
    let temp = curr;
    curr = prev + curr;
    prev = temp;
  }
  return curr;
}
console.log(fibonacci(10)); // 输出：55
```
<style>
pre{
  font-size: 20px;
  font-family: monospace;
  padding: 20px;
  border-radius: 6px;
  background-image: radial-gradient( circle 369px at -2.9% 12.9%,  rgba(247,234,163,1) 0%, rgba(236,180,238,0.56) 46.4%, rgba(163,203,247,1) 100.7% );
}
</style>
# 链接
---
这是一个链接 [WiOS](https://wios.cloud)

<https://wios.cloud>

这个链接用 1 作为网址变量 [Google][1]

这个链接用 wios 作为网址变量 [WiOS][wios]

然后在文档的结尾为变量赋值（网址）

[1]: http://www.google.com/
[wios]: http://wios.cloud/

# 图片
---
![插画](http://illustrain.com/img/work/2016/illustrain10-eto-syumi02.png)

![插画](http://illustrain.com/img/work/2016/illustrain04-kouyou03.png "kouyou")

![插画](https://vectorshelf.com/wp-content/uploads/2022/10/dr075_2.png)
<style>
img {
  max-width: 100%;
  max-height: 220px;
}
</style>

# 表格
---
| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |
<style>
table {
	width: 100%;
  border-radius: 6px;
	border-collapse: collapse;
	overflow: hidden;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background-color: #8BC6EC;
  background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
}
thead {
   background-color: rgba(0,0,0,0.1);
}
</style>

# 公式
---
$$
\begin{Bmatrix}
   a & b \newline
   c & d
\end{Bmatrix}
$$

$$
\begin{CD}
   A @>a>> B \newline
@VbVV @AAcA \newline
   C @= D
\end{CD}
$$
