# cc-href指令用法
cc-href指令用于路由切换，cc-href="xxx.x"和cc-href="&xxx.x"两种用法，以&开头表示取scope中xxx.x的值作为state，否则state就是xxx.x。
```javascript
const mView = URL.createObjectURL(new Blob([`
<h1>Hi,This main page</h1>
<cc-view></cc-view>
`]));
const aView = URL.createObjectURL(new Blob([`
<h1>Hi,This page A</h1>
`]));
const bView = URL.createObjectURL(new Blob([`
<h1>Hi,This page B</h1>
`]));
const cView = URL.createObjectURL(new Blob([`
<h1>Hi,This page C</h1>
`]));
app.state("main", {
    title: "main",
    url: "/main",
    templateUrl: mView,
}).state("main.a", {
    title: "PageA",
    url: "/a",
    templateUrl: aView,
}).state("main.b", {
    title: "PageB",
    url: "/b",
    templateUrl: bView,
}).state("c", {
    title: "PageC",
    url: "/c",
    templateUrl: cView,
});
scope.menus=[
    {label:"Go to state B",href:'main.b'},
    {label:"Go to state C",href:'c'}
]
```

# 用法

```html
<s-v style="grid-template-columns: 220px 1px 1fr; grid-template-rows: 1fr;">
    <s-v>
      <div class="menus">
        <a class="btn btn-g" cc-href="main.a">Go to state A</a>
        <a class="btn btn-g" cc-repeat="m in menus" cc-href="&m.href">{{m.label}}</a>
      </div>
    </s-v>
    <divider cc-ew-resize="0"></divider>
    <s-v class="content-wrap">
      <cc-view></cc-view>
    </s-v>
</s-v>
<script type="text/less">
.menus{
  display:flex;
  flex-direction: column;
}
.content-wrap{
  padding: 5%;
  min-height: 220px;
}
</script>
```