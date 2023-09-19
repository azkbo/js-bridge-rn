/**
 * Author: Meng
 * Date: 2023-03
 * Desc:
 */

/** 向 RN 发送消息
 * @param msg: '操作事项名' 或者 {event: '操作事项名', params: '参数', mode '类型'}
 * @param params '参数'
 * @param mode '类型' long:长监听 设置长监听停止使用时需要手动移除
 */
export declare function postMessage(
  msg: string | {
    event: string; // API名称
    params?: object | string | number; // 参数
    mode?: string; // 类型  long长监听
  },
  params?: object | string | number,
  mode?: string
): Promise<any>;

/**
 * 监听 Native 消息
 * @param param -{event: '事件名-必传', success: '回调函数-必传', tag: '事件标识-非必传', type: '事件类型1单次2普通-非必转'}
 * @
 */
export declare function eventListener(param: {
  event: string;
  success: (data: any) => void;
  tag?: string;
  type?: number
}): void;

/**
 * 移除长监听
 * @param event '事件名'
 */
export declare function eventRemove(event: string, tag?: string|number): void;
