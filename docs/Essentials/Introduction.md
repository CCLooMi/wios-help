# WiOS(Introduction)
---
wios 是一个可以在线实时开发wpp应用的WebOS，与其他前端框架不同的是，所有的开发工作都可以在浏览器中完成，不需要nodejs的编译运行环境。
创建一个新的Wpp是非常简单的事情，你可以运行下面的代码来创建一个新的Wpp。
```javascript inject:wcode.$wpp,wios.$wios
const u = $wios.loginUser();
$wpp.newWpp(`/Users/${u.username}/Desktop`);
```