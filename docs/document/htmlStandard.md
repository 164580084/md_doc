---
title: 三、html规范
---

## 1. 代码注释习惯
- 代码浏览不雅观。
- 使用container 包裹所有 dom。
```JS{1}
 <!-- 反例：-->
<view>
  <view class="asd"></view>
 </view>
```
```JS{1}
 <!-- 正例：-->
<view>
   //容器
  <view class='container'>
    // 头部
    <view class="header">
     我这里太阳很大，你那里大不大。
    <view>
  </view>
</view>

```
