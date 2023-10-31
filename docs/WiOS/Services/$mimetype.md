# $mimetype服务
$mimetype服务用于获取文件类型的图片，也支持手动注册文件类的图片，该服务有以下方法
+ regTypeIcon(type,icon)
+ getTypeIcon(type)

```javascript inject:$mimetype as mt,$modal as m
const img = document.createElement('img');
img.src=mt.getTypeIcon('text');
m.alert(img).width(666);
```