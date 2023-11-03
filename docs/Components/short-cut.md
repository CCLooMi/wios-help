# short-cut自定义元素组件
short-cut自定义组件的构造方法需要以下参数
+ label
+ name
+ type 如果没有设置iconSrc的，内部的$mimetype服务会根据type或者name的后缀获取iconsSrc
+ iconSrc 图标地址
该组件定义了以下方法
+ init(label, name, type, iconSrc)
该组件有一个属性isShortcut=true可以用来快速判断元素是否是short-cut。