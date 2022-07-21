// pages/Binding/Binding.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shows: false, //控制下拉列表的显示隐藏，false隐藏、true显示
    selectDatas: ['姓名', '证条码', '电话','工作人员账户'], //下拉列表的数据
    indexs: 0, //选择的下拉列 表下标,
   checkLib:'',//选择的图书馆
   word:'',//输入账号
   password:'',//输入的密码
   prefix:'NB',//登录方式
   bindLibraryCode:'',//图书馆的code
   weixinId:''//微信用户唯一ID
  },
  getWeixinId:function(){
    var that = this;
    wx.login({
      success: function(res) {
          console.log(res)
          if (res.code) {
              // 获取用户信息
              wx.getUserInfo({
                  success: function(res) {
                      var objz = {};
                      objz.avatarUrl = res.userInfo.avatarUrl;
                      objz.nickName = res.userInfo.nickName;
                      console.log("info", objz);
                  }
              });
              console.log('通过login接口的code换取openid')
              wx.request({
                  url: 'https://api.weixin.qq.com/sns/jscode2session',
                  data: {
                      //填上自己的小程序唯一标识
                      appid: 'wxa5ef9c3d959a9bb1',
                      //填上自己的小程序的 app secret
                      secret: 'ca0cc9275c1c15b9d0cc256da76ab5a2',
                      grant_type: 'authorization_code',
                      js_code: res.code
                  },
                  method: 'GET',
                  header: {
                      'content-type': 'application/json'
                  },
                  success: (openIdRes)=>{
                    
                      console.info("登录成功返回的openId：" + openIdRes.data.openid);
                      console.log(openIdRes.data.openid)
                      app.globalData.weixinId = '!!'+openIdRes.data.openid
                      console.log(app.globalData.weixinId)


                  },
                  fail: function(error) {
                      console.info("获取用户openId失败");
                      console.info(error);
                  }
                  
              })
          }
      }
      
  })



  },


  
  getWord: function(e) {
    
    this.setData({
      word:e.detail.value
    })
    app.globalData.word = this.data.word
  },
  getPassWord: function(e) {
    
    this.setData({
      password:e.detail.value
    })
    app.globalData.password = this.data.password
   
  },
  // getPassWord:function(e) {
    
  //   this.setData({
  //     password:e.datail.value,
  //   })
   
  // },

  getForm(e) {
    this.formdata = e.detail.value
    

    if (this.word=="1") {
      wx.navigateTo({
        url: '../Pim/Pim'
      })
    } else {
      console.log('用户信息不正确')

      console.log(this.data.word)
      console.log(this.data.password)
      console.log(app.globalData)
    }
  },
  gotoLibraryPage: function (options) {
    wx.navigateTo({
    url: '../library/library',
    })
    },
  // 点击下拉显示框
  selectTaps() {
    this.setData({
      shows: !this.data.shows,
    });
  },
  // 点击下拉列表
  optionTaps(e) {
    let Indexs = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
    console.log(Indexs)
    this.setData({
      indexs: Indexs,
      shows: !this.data.shows
    });
    if(Indexs==0){
    
      this.setData({
      
        prefix:'NB',
        
      })
    }else if(Indexs==1){
      this.setData({
      
        prefix:'',
        
      })
    }else if(Indexs==2){
      this.setData({
      
        prefix:'TP',
        
      })
    }else if(Indexs==3){
      this.setData({
      
        prefix:'UN',
        
      })
    }
    console.log(this.data.prefix)
    app.globalData.prefix = this.data.prefix
    

  },
  // 从全局获取选中的图书馆名字
  checkLib:function(){
    this.checkLib=app.globalData.checkLib
    
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getWeixinId()
    this.setData({
      checkLib:app.globalData.checkLib,
    weixinId:app.globalData.weixinId})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})