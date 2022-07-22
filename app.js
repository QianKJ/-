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
    //图书馆信息接口
    urlGetLib:'http:///localhost/iLove/api2/LibSettingApi/GetAreaLib',
    //用户绑定图书馆接口
    getUserUrl:'http://localhost/iLove/api2//WxUserApi/Get?weixinId=',
    //用户绑定接口
    postBindUrl:'http://localhost/iLove/api2/WxUserApi/Bind',
    // userInfo: null,
    getUserInformationUrl:'http://localhost/iLove/api2/PatronApi/GetPatron?',
    patronBarcode:'',//读者证条码号
    bindUsers:{ remark:''},
    libLists: '',//图书馆列表
    checkLib:'点击选择图书馆',//选择的图书馆名字
    checkLibId:'',//选择的图书馆id
    weixinId:'',//微信用户唯一身份认证
    // libraryCode:'',
    bindLibraryCode:'',
    word:'',//输入账号
    password:'',//输入的密码
    prefix:'',//登录方式
    
    // bindLibraryCode:'',//图书馆的code
    
  },
  
})
