// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  
  
  globalData: {
    weixinidurl:'https://dp2003.com/i/api2//WxUserApi/GetGuid',
    //图书馆信息接口
    urlGetLib:'https://demo30.ilovelibrary.cn/i/api2/LibSettingApi/GetAreaLib',
    //用户绑定图书馆接口
    getUserUrl:'https://demo30.ilovelibrary.cn/i/api2//WxUserApi/Get?weixinId=',
    //用户绑定接口
    postBindUrl:'https://demo30.ilovelibrary.cn/i/api2/WxUserApi/Bind',
    // userInfo: null,
    getUserInformationUrl:'https://demo30.ilovelibrary.cn/i/api2/PatronApi/GetPatron?',
    delbindurl:'https://demo30.ilovelibrary.cn/i/api2/wxuserApi/Delete?bindUserId=',
    // weixinidurl:'https://dp2003.com/i/api2//WxUserApi/GetGuid',
    // //图书馆信息接口
    // urlGetLib:'https://dp2003.com/i/api2/LibSettingApi/GetAreaLib',
    // //用户绑定图书馆接口
    // getUserUrl:'https://dp2003.com/i/api2//WxUserApi/Get?weixinId=',
    // //用户绑定接口
    // postBindUrl:'https://dp2003.com/i/api2/WxUserApi/Bind',
    // // userInfo: null,
    // getUserInformationUrl:'https://dp2003.com/i/api2/PatronApi/GetPatron?',
    patronBarcode:'',//读者证条码号
    bindUsers:{ remark:''},
    libLists: '',//图书馆列表
    checkLib:'点击选择图书馆',//选择的图书馆名字
    checkLibId:'',//选择的图书馆id
    weixinId:'',//微信用户唯一身份认证
   
    bindLibraryCode:'',
    word:'',//输入账号
    mima:'',//输入的密码
    prefix:'',//登录方式
    
   
    
  },
  
})
