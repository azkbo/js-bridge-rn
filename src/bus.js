/**
 * Author: Meng
 * Date: 2023-03
 * Desc: 事件订阅
 * { event: '', mode: 订阅模式, tag: 标签, }
 */

let isIos = false;
let isMobile = true;
let last_event = '';
let last_time = 0;
let min_interval = 300;
let event_list = []; // 事件集合

// 获取手机平台
function getPlatform() {
  let u = window.navigator.userAgent;
  isMobile = !!u.match(/AppleWebKit.*Mobile.*/);
  isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  // console.log({ mobile, ios })
  // return { mobile, ios };
}

/** 
 * 向原生发送消息
 * @param msg: -{event: '操作事项名', params: '参数', mode: '类型' long长监听}
 */
function postEventToNative(msg) {
  const curEvent = msg.event || msg.key;
  if (last_event == curEvent && Date.now() - last_time < min_interval) {
    console.warn('---> postEventToNative repeat add key:', last_event);
    return;
  }
  last_event = curEvent;
  last_time = Date.now();
  return new Promise((resolve) => {
    if (msg.mode == 'long') {
      Bus.add(curEvent, (data) => { resolve(data) });
    } else {
      Bus.once(curEvent, (data) => { resolve(data) });
    }
    console.log('---> postMessage: ', msg);
    if (isMobile) {
      try {
        if (window.ReactNativeWebView) {
          window.ReactNativeWebView.postMessage(JSON.stringify(msg));
        } else {
          // if (isIos) {
            window.postMessage(JSON.stringify(msg), '*');
          // } else {
            // document.postMessage(JSON.stringify(msg), '*');
          // }
        }
      } catch (error) {
        console.log('---> bridge postMessage error:', error);
      }
    } else {
      console.log('---> bridge init error: not a handheld device');
    }
  });
}

// 监听原生消息
function initListener() {
  getPlatform();
  Bus.clear();
  
  if (isMobile) {
    if (isIos) {
      window.addEventListener('message', (msg = {}) => {
        handlerNativeMsg(msg.data);
      });
    } else {
      document.addEventListener('message', (msg = {}) => {
        handlerNativeMsg(msg.data);
      });
    }
    console.log('---> addEventListener message init !');
  } else {
    console.log('---> bridge init error: not a handheld device');
  }
}

// 解析 Rn 端的消息
function handlerNativeMsg(event) {
  console.log('---> handlerNativeMsg: ', event);
  let data = null
  try {
    data = JSON.parse(event)
  } catch (e) {
    console.log(e);
    try {
      data = JSON.parse(decodeURIComponent(event))
    } catch (error) {
      console.warn(error);
    }
  }
  if (data != null) {
    const eventKey = data.event || data.key;
    Bus.send(eventKey, data.data);
  }
}

// 消息订阅类
class Bus {

  // 事件注册 {key: '事件名次', callback: '事件回调函数', tag: '事件标识',type: '事件类型1单次2普通'}
  static add(key, callback, tag, type) {
    if (!key || !callback) {
      console.warn('---> bus add error key:', key);
      return;
    }
    event_list = event_list.filter(e => e.key != key || e.tag != tag)
    event_list.push({ key, callback, tag, type })
  }

  // 订阅单次事件
  static once(key, callback, tag) {
    Bus.add(key, callback, tag, 1)
  }

  // 发送消息
  static send(key, data, delay = 0) {
    if (delay > 0) {
      const timer = setTimeout(() => {
        clearTimeout(timer)
        Bus._sendMsg(key, data)
      }, delay)
    } else {
      Bus._sendMsg(key, data)
    }
  }
  // 具体发送
  static _sendMsg(key, data) {
    let tag = '';
    try {
      event_list.forEach(e => {
        if (e.key == key) {
          tag = e.tag;
          e.callback && e.callback(data)
        }
      });
      event_list = event_list.filter(e => e.key != key || e.type != 1);
    } catch (error) {
      event_list = event_list.filter(e => e.key != key || e.tag != tag);
      console.log('bus sendMsg error;', error);
      Bus._sendMsg(key, data)
    }
  }

  // 移除消息
  static remove({ key, tag, callback } = {}) {
    if (key) {
      event_list = event_list.filter(e => e.key != key || e.tag != tag)
    } else {
      event_list = event_list.filter(e => e.callback != callback)
    }
  }
  // 清除
  static clear() {
    event_list = [];
  }
}

// 初始化监听
// initListener();
window.onload = initListener;

export { Bus, postEventToNative }