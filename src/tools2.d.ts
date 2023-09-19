/**
 * Author: Meng
 * Date: 2023-
 * Desc: 老版本
 */

/**
 * 老版本 Api
 * @deprecated 将于下个版本被弃用
 */
declare class RNTool2 {

  /**
   * 添加配置
   * @param option 
   */
  public static setConfig(option: {dataFormat: (data: unknown) => unknown}): void;


  public static initRNListener(callback: (res: any) => {}): void;

  /**
   * 添加原生navbar的点击事件监听
   * @param eventType 
   * @deprecated 将于下个版本被弃用
   */
  public static addClickListener(eventType: string, callback: (res: any) => {}): void;

  public static addListener(eventType: string, callback: (res: any) => {}): void;

  public static emit(eventType: string, params: any): void;

  /**
   * @param key    在RN客户端中会根据 key 来进行具体的业务操作
   * @param params 参数
   * 
   * @deprecated 将于下个版本被弃用
   */
  public static sendMsgToRN(
    key: string,
    params: unknown,
    callback: (res: any) => {}
  ): void;

  /**
   * @param key    在RN客户端中会根据 key 来进行具体的业务操作
   * @param params 参数
   * 
   * @deprecated 将于下个版本被弃用
   */
  public static postMessageToRN(
    id: string,
    key: string,
    params: unknown,
    callback: (res: any) => {}
  ): void;

  /**
   *
   * @param routeName
   * @param {*} param  {routeName:'',param}
   * @deprecated 将于下个版本被弃用
   */
  public static push(routeName: string, param: any, callback: (res: any) => {}): void;

  public static replace(
    routeName: string,
    param: unknown,
    callback: (res: any) => {}
  ): void;

  public static back(message: any): void;

  ////////////// 提供扩展功能 //////////////

  /**
   * 获取上一个页面传递过来的参数
   * @param callback
   * @deprecated 将于下个版本被弃用
   */
  public static getInitData(callback: (res: any) => {}): void;

  /**
   * 修改app原生标题栏
   * @param navbar
   * @param rights
   * @deprecated 将于下个版本被弃用
   */
  public static setNavbar(navbar: any, rights: any): void;

  public static setTitle(title: string): void;

  /**
   * 获取用户信息
   * @param message
   * @param callback: (res: any) => {}
   * @deprecated 将于下个版本被弃用
   */
  public static getUserInfo(message: any, callback: (res: any) => {}): void;

  /**
   * 重新加载url
   * @deprecated 将于下个版本被弃用
   */
  public static reloadWebpage(): void;
}

export {RNTool2};
