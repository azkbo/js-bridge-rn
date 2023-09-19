/**
 * Author: Meng
 * Date: 2023-03
 * Desc: 老版本
 */

/**
 * 老版本 Api
 * @deprecated 将于下个版本被弃用
 */
declare class RNTool {

  /**
   * 添加配置
   * @param option 
   */
  public static setConfig(option: {dataFormat: (data: unknown) => unknown}): void;

  /**
   * 发送消息
   * @param key    在RN客户端中会根据 key 来进行具体的业务操作
   * @param params 参数
   * 
   * @deprecated 将于下个版本被弃用
   */
  public static sendMessage(key: string, params: unknown, callback: (res: any) => {}): void;

  /**
   * 查询native设备信息
   * @deprecated 弃用，将于下个版本移除
   */
  public static requestDeviceInfo(callback: (res: any) => {}): void;

  /**
   * 查询native设备id
   * @deprecated 弃用，将于下个版本移除
   */
  public static requestDeviceId(callback: (res: any) => {}): void;

  /**
   * 查询native登录信息
   * needLogin ： true 表示如果native端没有登录，则进行登录，并返回登录用户信息。
   * false 表示native端如果登录了则返回登录用户信息，如果没有登录则返回空的用户信息
   * @deprecated 弃用，将于下个版本移除
   * */
  public static requestLoginInfo(needLogin: boolean, callback: (res: any) => {}): void;

  /**
   * 请求native端当前选择城市
   * @deprecated 弃用，将于下个版本移除
   */
  public static requestCurrentCity(callback: (res: any) => {}): void;

  /**
   * 读取native给web端配置的初始化数据
   * @deprecated 弃用，将于下个版本移除
   */
  public static requestWebInitData(callback: (res: any) => {}): void;

  /**
   * 顶部刘海的高度
   * @deprecated 弃用，将于下个版本移除
   */
  public static reqTopSafeInset(callback: (res: any) => {}): void;

  /**
   * 底部刘海的高度
   * @deprecated 弃用，将于下个版本移除
   */
  public static reqBottomSafeInset(callback: (res: any) => {}): void;

  /**
   * 查询native设备信息
   * @deprecated 弃用，将于下个版本移除
   */
  public static useWebViewSafeBottom(callback: (res: any) => {}): void;

  /**
   * push到一个新的native界面
   * routerName native端的 routerName。（不知道routerName，请咨询app端开发）
   * param native router需要的参数
   * @deprecated 弃用，将于下个版本移除
   */
  public static pushToRouter(pname: any, param: any, callback: (res: any) => {}): void;

  /**
   * redirect到一个新的native界面
   * @deprecated 弃用，将于下个版本移除
   */
  public static redirectToRouter(
    pname: any,
    param: any,
    callback: (res: any) => {}
  ): void;

  /**
   * 退出当前webView原生界面
   * @deprecated 弃用，将于下个版本移除
   */
  public static nativeBackPage(callback: (res: any) => {}): void;

  /**
   * 将native导航栏上的返回按钮设置为：点击即退出当前webView。（该按钮功能默认是：优先返回前一个网页，当没有前一个网页时才会退出当前webView）
   * @deprecated 弃用，将于下个版本移除
   */
  public static closeRouterOnBack(callback: (res: any) => {}): void;

  /**
   设置native导航栏样式
    option: {
        hideNav: false, // 隐藏导航栏
        navibarStyle: 'dark', // 目前仅支持两种 'light' 'dark'
        transparent: false, // 导航栏是否支持透明
        supportShare: true, // 是否支持分享
        transparentOnDrag:true, //导航栏渐变
    }
   * @deprecated 弃用，将于下个版本移除
   */
  public static setH5NavBarStyle(option: any, callback: (res: any) => {}): void;

  /**
   * 设置分享内容
   * @param shareData : {
        // title:'分享标题，不传则默认使用网页title',
        // content:'分享副标题，默认为空',
        // iconUrl:'分享缩略图，默认使用百安居logo'
        // url: '', 分享的链接，默认使用当前网页地址
        // miniProgramId: '', 小程序原始ID 非必填需要分享小程序需要传递
        // miniProgramPageUrl: '',  小程序页面 非必填需要分享小程序需要传递
        // isFriendNeedMiniProgram: false, 分享微信是否是需要小程序
        // isFriendCircleNeedMinProgram: false, 分享朋友圈是否是需要小程序
        // withoutShareBoard: false, 如果为true，不弹出分享面板，直接调用分享
        // shareChannel: '', 分享面板的分享渠道 数组可包含 分享的类型 0,新浪 1,微信 2,朋友圈  4,qq  5,Qzone     100,复制链接 101,海报分享
        // posterShareJS:{ 若有海报分享，则需要传递海报分享的对象
            //             price:0,价格
            //             title:'', 标题
            //             qrcodeUrl:'', 小程序二维码
            //             mainImgUrl:'', 海报图片
            //             shareChannel: [1,2],//数组可包含 分享的类型 0,新浪 1,微信 2,朋友圈  4,qq  5,Qzone
            //             // 100,复制链接 101,海报分享
            //           }
   *       }
   * @deprecated 弃用，将于下个版本移除
   */
  public static sendShareData(shareData: any, callback: (res: any) => {}): void;

  /**
   * 调用native支付能力
   * payload: 1:支付宝 2,微信
   * orderInfo 网关返回的订单信息
   * @deprecated 弃用，将于下个版本移除
   */
  public static payByNative(
    payload: number,
    orderInfo: any,
    callback: (res: any) => {}
  ): void;

  /**
   * 调用native端埋点能力
   * pageId: 页面id
   * eventId: 事件id
   * param: 埋点需要携带的其它参数
   * @deprecated 弃用，将于下个版本移除
   */
  public static touchEvent(
    pageId: string,
    eventId: string,
    param: any,
    callback: (res: any) => {}
  ): void;

  /**
   * 调用native打电话的能力
   * mobile 电话号码
   * title alert标题
   * @deprecated 弃用，将于下个版本移除
   */
  public static tellMobile(
    mobile: string,
    title: string,
    callback: (res: any) => {}
  ): void;

  /**
   * 调用native端在线咨询的能力
   * data: 留资那一套数据：渠道号、cityCode 等等，用于埋点
   * @deprecated 弃用，将于下个版本移除
   */
  public static onlineConsult(data: any, callback: (res: any) => {}): void;

  /**
   * 调用native留资能力
   * @deprecated 弃用，将于下个版本移除
   */
  public static appointServices(data: any, callback: (res: any) => {}): void;

  /**
   跳转bnq小程序
    appId:  小程序id
    path:	跳转的页面路径
    downloadUrl: 小程序下载地址（如果App内还没有安装此小程序，则会通过downloadUrl下载）
   * @deprecated 弃用，将于下个版本移除
   */
  public static launchBnqApp(
    appId: string,
    path: string,
    downloadUrl: string,
    version: string,
    callback: (res: any) => {}
  ): void;

  /**
   * 跳转微信小程序
   * @param userName
   * @param path
   * @deprecated 弃用，将于下个版本移除
   */
  public static launchWechatApp(
    userName: string,
    path: string,
    callback: (res: any) => {}
  ): void;

  /**
   * 跳转工地直播
   * data : {
        token,
        serial,
        channel,
        verifyCode,
        HIDE_FUNCTION:'1,2',//1;//分享,2;//解除绑定,3;//投诉建议,4;//联系人
        shareUrl
    }
   * @deprecated 弃用，将于下个版本移除
   */
  public static launchLivePhoto(dat: any, callback: (res: any) => {}): void;

  /**
   * 调用扫码能力
   * @deprecated 弃用，将于下个版本移除
   */
  public static gotoScan(callback: (res: any) => {}): void;
}

export {RNTool};
