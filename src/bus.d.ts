/**
 * Author: Meng
 * Date: 2023-03
 * Desc:
 */

/**
 * 消息体
 */
type EventDto = {
  event: string; // API名称
  params?: object | string | number; // 参数
  mode?: string; // 类型  long长监听
}

// 老版本类型 {key: type, requestId: id, data: message || {}, bridgev: "v2"}
type Event2Dto = {
  key: string; // API名称
  requestId: string; // 事件id
  data?: object | string | number; // 参数
  bridgev: string; // 版本
  mode?: string; // 类型  long长监听
}

/**
 * 向原生发送消息
 * @param msg: -{event: '操作事项名', params: '参数', mode: '类型-long｜short' }
 */
declare function postEventToNative(msg: EventDto|Event2Dto): Promise<any>;

/**
 * 消息订阅类
 */
declare class Bus {
  private static event_list: Array<EventDto>; // 事件集合
  /**
   * 事件注册
   * @param param -{key: '事件名次', callback: '事件回调函数', tag: '事件标识',type: '事件类型1单次2普通'}
   */
  public static add(
    key: string,
    callback: (data: any) => void,
    tag?: string | number,
    type?: string
  ): void;

  /**
   * 订阅单次事件
   * @param param -{key, callback, tag}
   */
  public static once(
    key: string,
    callback: (data: any) => void,
    tag?: string | number
  ): void;

  /**
   * 发送消息
   * @param param -{key, data, delay}
   */
  public static send(key: string, data: any, delay: number): void;

  /**
   * 移除消息
   * @param param -{key, tag, callback}
   */
  public static remove({
    key,
    tag,
    callback,
  }: {
    key: string;
    tag?: string | number;
    callback?: (data: any) => void;
  }): void;

  /**
   * 清除所有
   */
  public static clear(): void;
}

export { Bus, postEventToNative, EventDto };
