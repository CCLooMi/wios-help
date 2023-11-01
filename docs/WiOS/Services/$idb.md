# $idb服务
$idb服务用于操作indexdb,provider提供了以下方法
+ createOrUpdateDb(name,tableObj) 创建或更新数据库
$idb服务只提供了以下方法
+ get(name,open) open为true表示若没有数据库则创建一个，get方法返回IDB的实例，该实例有以下方法
+ reopen():Promise<IDBDatabase>
+ get(table,...keys) 返回可链式调用的可配置的Promise对象，该对象有以下配置方法
> + from(table):this
> + key(...keys):this
> + useIndex(name):this
+ range(table,...range) 返回可链式调用的可配置的Promise对象，该对象有以下配置方法
> + from(table):this
> + useIndex(name):this
> + range(...range):this
> + key(key):this
> + esc():this
> + escTopOne():this
> + desc():this
> + descTopOne():this
> + each(func(IDBCursor)):this
+ foreach(table,key) 返回的可配置对象同range方法一样
+ put(table,...ddatas) 返回可链式调用的可配置的Promise对象，该对象有以下配置方法
> + to(table):this
> + data(...datas):this
+ count(table,key) 返回的可配置对象同get方法一样
+ delete(table,...keys) 返回可链式调用的可配置的Promise对象，该对象有以下配置方法
> + from(table):this
> + key(...keys):this
+ byPage(table,pgObj):Promise<{total:number,data:[]}>
+ tables():Promise<DOMStringList>
+ clear(table) 返回可链式调用的可配置的Promise对象，该对象有以下配置方法
> + from(table):this
# Demo
## 创建数据库
```javascript inject:$idbProvider
const dbName='wios-test';
//k:主键，+：主键自增长，u:唯一，[]:数组索引
$idbProvider.createOrUpdateDb(dbName,{
    'users':'id +,name u,tags []',
    'books':'id +,name u,tags []'
})
```
## 打开数据库
```javascript inject:$idb,$modal
const db = $idb.get('wios-test');
if(db){
    const tables=db.db.objectStoreNames;
    const ts = Array.prototype.join.call(tables,',');
    const info = `${db.name}-v${db.db.version},storeNames:[${ts}]`;
    // db.reopen().then(()=>console.log('reopen ok!'),console.error);
    $modal.toastAlertDetail('DB info',info,'i');
}else{
    $modal.toastAlert(`indexdb ${db.name} not exist!`,'w')
}
```
## 写入数据
```javascript inject:$idb,$modal
const idb = $idb.get('wios-test');
idb.put('users',{
    name:"Seemie",
    tags:['admin','user','wios']
}).then(function(e){
    $modal.toastAlert('Put data into idb success','s');
},function(e){
    $modal.toastAlertDetail('Put data error',Atom.formatError(e),'e');
});
```

## 根据key查询数据
```javascript inject:$idb,$modal
const idb = $idb.get('wios-test');
idb.get('users',1)
.then(function(a){
    $modal.toastAlertDetail('Get data success',a[0]||'Data not exist!','s');
},function(e){
    $modal.toastAlertDetail('Get data error',Atom.formatError(e),'e')
    .autoClose(false);
});
```

## 查询所有数据
```javascript inject:$idb,$modal
const idb = $idb.get('wios-test');
idb.range('users')
.each(function(c){
    const v = c.value;
    c.continue();
    return v;
})
.then(function(a){
    const data = a[0]?JSON.stringify(a):0;
    $modal.toastAlertDetail('Get data success',data||'Data not exist!','s');
},function(e){
    $modal.toastAlertDetail('Get data error',Atom.formatError(e),'e')
    .autoClose(false);
});
```

## 删除数据
```javascript inject:$idb,$modal
const idb = $idb.get('wios-test');
idb.delete('users',2)
.then(function(e){
    $modal.toastAlert('Delete data success','s');
},function(e){
    $modal.toastAlertDetail('Delete data error',Atom.formatError(e),'e');
});
```