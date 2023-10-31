# $http服务用法
$http服务用于发起http请求，支持链式调用设置请求参数。
$http服务有以下方法
+ post(url):Promise<any>
+ get(url):Promise<any>
+ gets(...urls):Promise<any>
+ request(url,method):Promise<any>

除了gets方法，其他所有方法返回的Promise对象包含以下方法，用于设置请求参数。gets方法返回的Promise对象有一个each(f(Promise<any>))方法用于设置每个请求参数。
+ on(loadstart(Event),loading(Event),loadend(Event)):this
+ progress(progress(Event)):this
+ responseBlob():this
+ responseArraybuffer():this
+ responseJson():this
+ responseText():this
+ responseDocument():this
+ filename(filename):this
+ params(...params):this
+ formUrlencoded(...formdatas):this
+ multipartFormData(...formdatas):this
+ jsonData(data):this
+ configRequestBeforeOpen(f(xhr)):this
+ configRequestBeforeSend(f(xhr)):this
+ onComplete(f):this

# Demo

```javascript inject:$http
$http.get(location.href)
    .responseText()
    .then(
        rsp=>alert(rsp.response),
        console.error
    );
```