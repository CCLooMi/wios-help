# $wppManager服务
该服务用于管理wpp,该服务有以下方法
+ installWpp(dir,onprogress(completeSize,totalSize),...files) 将应用安装到dir目录
+ install(dir,callback) 弹出wpp-install组件的对话框，可通过拖动文件到组件中或者点击组件选择文件进行应用安装

# Demo

```javascript inject:$wppManager
$wppManager.install('/');
```
