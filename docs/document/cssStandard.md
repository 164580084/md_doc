---
title: 二、css规范
---

## 1. 减少行内样式的书写习惯
- 没有复用性。
- 代码优先级高到变态,选择器样式无法修改。
- 代码浏览不雅观。
- 使用class去书写样式。
```JS{1}
 <!-- 反例：-->
<view>
  <view style="width:200px;height:200px;background:red;border-radius:50%;"></view>
 </view>
```
```JS{1}
 <!-- 正例：-->
<view>
  <view class='content'>view>
</view>

 <style>
     .content {
         width: 200px;
         height: 200px;
         background: red;
         border-radius: 50%;
     }
 </style>
```
