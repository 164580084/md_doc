---
title: 一、js规范
---
## 1. 组件表达式简单化
+ 行内表达式太复杂会导致不能重复利用,且难以阅读。
+ 尽可能保持组件或标签上只做简单的逻辑操作
+ 太复杂太啰嗦的代码使用 onShow 或 onLoad 来替代其功能实现。


```JS{0}
 <!-- 反例： -->
 </template>
    <view>{{getCountArray.slice(0,1)+getNumberArray[1].num}}</view>
 </template>
```
```JS{0}
 <!-- 正例： -->
 </template>
    <view>{{getResult}}</view>
 </template>
<script>

  onLoad() {

    this.data.getResult = this.data.getCountArray.slice(0, 1) + this.getNumberArray[1].num

  }

</script>
```


## 3. wx-for / wx-if / wx-else
### 3.1、wx-for
   + 在执行 wx-for 遍历的时候，总是应该带上 key 值使更新 DOM 时渲染效率更高。
```JS{0}
   // 反例
   <view>
       <view wx-for="{{list}}">
           {{ item.title }}
       </view>
   </view>

   // 正例
   <view>
       <view wx-for="{{list}}" :key="{{item.id}}">
           {{ item.title }}
       </view>
   </view>
```

### 3.2、wx-if / wx-else-if / wx-else
   + 为了避免复用带来的不合理效果，应该在同种元素上加上 key 做标识。
```JS{0}
// 反例
<view wx-if="{{hasData}}">
    <view>{{ mazeyData }}</view>
</view>
<view wx-else>
    <span>无数据</span>
</view>

// 正例
<view wx-if="{{hasData}}" :key="{{item.id}}">
    <view>{{ mazeyData }}</view>
</view>
<view wx-else :key="mazey-none">
    <view>无数据</view>
</view>
```
### 3.3、永远不要把 wx-if 和 wx-for 同时用在同一个元素上。
   + 为了避免复用带来的不合理效果，应该在同种元素上加上 key 做标识。
```JS{0}
// 反例
<view wx-for="{{hasData}}" wx-if="{{hasData}}">
    <view>{{ mazeyData }}</view>
</view>
<view wx-else>
    <span>无数据</span>
</view>

// 正例
<view wx-if="{{hasData}}">
    <view wx-for="{{hasData}}" :key="{{item.id}}">
        <view>{{ mazeyData }}</view>
    </view>
</view>
<view wx-else :key="mazey-none">
    <view>无数据</view>
</view>
```

## 4. 注释
 + 每个函数都必须写上注释,且清晰地注好此函数的名字、作用和参数的类型、名字

 ```JS{0}
      /**
        * 添加金钱
        * @method addMoney
        * @param {Number} currentMoney  当前需要相加的金额
        * @param {Number} count  相加的个数
        * @return {Number} result 返回计算后的结果
        */
       addMoney(currentMoney, count = 1) {
         const result = currentMoney + count
         return result
       }
 ```
