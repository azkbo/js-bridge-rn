# 项目介绍

一套React Native 与 H5交互的规范及API

React Naitve端也要实现相应的代码

### 安装

```js
// yarn安装
yarn add js-bridge-rn
// npm安装
npm install js-bridge-rn
```

### 使用
```js
import RnBridge, {RNTool, RNTool2, RnBridgeApi} from 'js-bridge-rn';

// H5 与 ReactNative 交互
> `使用前建议先维护一个 Key 管理的对象。如:`

const ApiKey = {
  userInfo: 'userInfo',
  shopAndCity: 'shopAndCity',
}

// 1.H5端：
import RnBridge, { RnBridgeApi } from 'js-bridge-rn';

{ RnBridgeApi } // 中包含全部可用的API方法

// RnBridge.postMessage() 返回的是 Promise

// 写法一
const res = await RnBridge.postMessage('你的想调用的API名', '参数', '事件类型 long表示长连接');
// 写法二
const res = await RnBridge.postMessage({event: '你的想掉用的API名', params: '参数', mode: '事件类型 long表示长连接'});

// 以上两种写法都可以 返回的都是 Promise对象


/**
 * 监听 Native 消息
 * param -{event: '事件名-必传', success: '回调函数-必传', tag: '事件标识-非必传', type: '事件类型1单次2普通-非必转'}
 */
RnBridge.eventListener(param: {
  event: '事件名';
  success: '回调函数';
  tag: '事件标识';
  type: '事件类型1单次2普通'
}): void;

/**
 * 移除长监听
 * event: '要移除的API名', taf: '要移除的API标识'
 */
RnBridge.eventRemove('要移除的API名', '要移除的API标识');

//  2.React Native 端 bridge 中添加对应event的具体实现
// this.web_view.postMessage(JSON.stringify({event: 'your event type', data: 'return data', code: '状态: 0成功，其他失败'}));
```

- [h5与ReactNative 交互](./src/bridge_api.d.ts)  使用前请先看  [-使用文档](./doc/rn_bridge.md)

- 更新中...

