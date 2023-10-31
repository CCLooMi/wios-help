# $modal服务
$modal服务可以弹出对话框、窗口、通知、提示,该服务有以下方法,所有方法返回一个支持链式调用配置的对象。
+ alert(content,type,scope) 参数type可以为s,success,i,info,e,error,w,warning
+ alertDetail(title,detail,type,scope) 参数type同上
+ window(title,content,scope)
+ dialog(title,content,scope)
+ panel(content,scope)
+ createModal(content,scope)
+ toast(content,scope)
+ toastAlert(content,type,scope) 参数type同alert
+ toastAlertDetail(title,detail,type,scope) 参数type同上

以上所有方法中的content支持http链接,字符串,NodeList和Promise对象

非toast开头的方法返回的都是modal的配置对象，该对象有以下配置方法
+ title(title):this
+ content(content):this
+ scope(scope):this
+ context(ctx):this
+ wppState(state):this
+ width(width):this
+ height(height):this
+ container(container):this
+ okValue(okValue):this
+ beforeOk(beforeOk):this
+ ok(okFunc):this
+ cancel(cancelFunc):this
+ cancelValue(cancelValue):this
+ resizable(resizable):this
+ bgBlur(blur):this
+ role(role):this
+ showFooterBtn(showFooterBtn):this
+ canceldOnTouchOutSide(canceldOnTouchOutSide):this
+ minimisable(minimisable):this
+ minimise(minimise):this
+ active(active):this
+ fullscreenable(fullscreenable):this
+ ui(ui):this
+ parent(modal):this
+ ftBtns(...ftBtns):this
+ beforeShow(beforeShow):this
+ getModal(getModalFunc):this
+ afterOpen(afterOpenFunc):this
+ onDestroy(destroyFunc):this
+ fromOptions(obj):this

以toast开头的方法返回toast的配置对象,该对象有以下方法
+ content(content):this
+ scope(scope):this
+ context(ctx):this
+ wppState(state):this
+ container(container):this
+ okValue(okValue):this
+ ok(okFunc):this
+ cancel(cancelFunc):this
+ cancelValue(cancelValue):this
+ showFooterBtn(showFooterBtn):this
+ ui(ui):this
+ transitionIn(transitionIn):this
+ transitionOut(transitionOut):this
+ autoClose(autoClose,timeout):this
+ updateProgress(updateProgress):this
+ type(type):this
+ onClick(onClick):this
+ ftBtns(...ftBtns):this
+ beforeShow(beforeShow):this
+ fromOptions(obj):this

# Alert demo
default alert
```javascript inject:$modal as m
m.alert('hi');
```
success alert

```javascript inject:$modal as m
m.alert('ok','s');
```
alert detail
```javascript inject:$modal as m
m.alertDetail(
    'Are you sure to delete [test.txt]?','You can not undo this action!','w')
    .cancel(()=>0)
    .ok(()=>{
        m.alert('Delete success!','s');
    })
    .okValue('delete');
```

# Toast demo

```javascript inject:$modal as m
m.toastAlert('Hello World.','i');
```

# Dialog demo
```javascript inject:$modal as m
m.dialog('Dialog Demo')
.width(555)
.height(320)
.content('Hello World.')
.canceldOnTouchOutSide(true);
```
return false to ignore close

```javascript inject:$modal as m
m.dialog('Dialog Demo')
.width(555)
.height(320)
.content('Hello World.')
.canceledOnTouchOutside(true)
.ok(()=>false);
```

# Window demo

```javascript inject:$modal as m
m.window('Window Demo')
.width(555)
.height(320)
.content('Hello World.');
```

windows style

```javascript inject:$modal as m
m.window('Window Demo')
.ui('windows')
.width(555)
.height(320)
.content('Hello World.');
```