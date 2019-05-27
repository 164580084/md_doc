---
title: 一、文件命名方式
---

## 1.1、 文件夹、文件名、命名规范
+ 组件的名字应该始终是以连接线（-）连接的单词，一方面可与组件名一致，使项目更加清晰。

```JS{3}
 正: base-button
 反: baseButton
 PS: 文件名不要以中文或人名命名，可以在文件内部注释说明是谁修改或建立的这个文件
```

## 1.2、id、class
+ id: 采用"小驼峰命名法"
```JS{1}
 <view id="bannerId"></view>
```
+ class: 采用"中划线法命名法"
```JS{1}
 <view class="select-banner"></view>
```
::: tip 温馨提示：
id和class名字应越简单越好,前提要让别人理解到这名字的意思。
:::

## 1.3、拒绝使用中文拼音命名
```JS{0}
 * 拒绝使用中文拼音和1、2、3序列等无意义的命名名称

 * 命名注意缩写，但是不能盲目缩写

 * 避免id和class重名

 * id要保持唯一性(指的是整个项目里面)

 * 父子级别class命名应有连带关系

     <view class="list-box">
         <view class="list-box-item"></view>
     </view>
```
## 1.4、组件文件
### *1.4.1、 基础组件命名*
+ 基础类的组件(无状态,展示类的、无逻辑的)应当全部以一个通用前缀开头 无逻辑类
```JS{0}
    如: ( 无逻辑类 )
    base-button.wxml
    base-list.wxml
    base-cell.wxml

    如: ( 逻辑类 )
    business-button.wxml
    business-list.wxml
    business-cell.wxml
```

### *1.4.2、 页面存放规范*
+ 一个模块对应一个文件夹



[[toc]]
