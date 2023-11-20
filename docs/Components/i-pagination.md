# i-pagination自定义组件
该组件用于分页查询数据
在组件中支持以下属性设置
+ from,指定分页组件加载数据的来源
+ from-type,用于指定数据来源的类型,支持http,idb,func
+ prev-label(default value:Prev),上一下的label
+ next-label(default value:Next),下一页的label
+ to,将加载的分页数据保存到指定的scope属性中
+ options,指定分页查询条件保存的对象
+ reload,用于设置到scope属性的函数,方便scope中调用该函数刷新分页数据
+ page-size,指定分页大小,默认10

# Demo
```javascript inject:$modal as $m
scope.stringify = JSON.stringify;
scope.detail = function(o){
    $m.alertDetail('Detail',`<pre>${JSON.stringify(o,' ',2)}</pre>`);
}
```

```html
<s-v style="padding:22px;gap:22px">
<table>
  <thead>
    <tr>
        <th>Username</th>
        <th>Nickname</th>
        <th>Operation</th>
    </tr>
  </thead>
  <tbody>
    <tr cc-repeat="u in users">
        <td>{{u.username}}</td>
        <td>{{u.nickname}}</td>
        <td>
            <a class="btn btn-info" cc-click="detail(u)">Detail</a>
        </td>
    </tr>
    </tbody>
</table>
<i-pagination from="wios.user" from-type="idb" to="users" options="opts"></i-pagination>
<pre>options:{{stringify(opts,' ',2)}}</pre>
</s-v>
```