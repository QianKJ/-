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
    // userInfo: null,
    libLists: [],//图书馆列表
    checkLib:'点击选择图书馆',//选择的图书馆名字
    checkLibId:'',//选择的图书馆id
    weixinId:'',//微信用户唯一身份认证
    libraryCode:'',
  },
  
})
