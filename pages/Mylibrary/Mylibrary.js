// pages/Mylibrary/Mylibrary.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getUserUrl:'',
    weixinidurl:'',
    delbindurl:'',
    patronBarcode:'',
    readerBarcode:'',
    bindUsers:'',
  },
  // 获取用户Barcode并跳转详细信息页
  getPatronBarcode:function(e){
    console.log(e.currentTarget.dataset.readerbarcode)
    this.setData({
      patronBarcode:e.currentTarget.dataset.readerbarcode
    })
    app.globalData.patronBarcode=this.data.patronBarcode
    wx.navigateTo({
 
      url: '../Pim/Pim',
 
      })

  },
  // 解绑
    delBind:function(e){
      console.log(e.currentTarget.dataset.userid)
      wx.removeStorageSync("weixinId")
      console.log(e.currentTarget.dataset.userid)
      var thisUrl=this.data.delbindurl
      console.log(thisUrl)
      wx.request({
        
        
        url:thisUrl+e.currentTarget.dataset.userid,
        data: {},
        method: 'delete',
        header: {
          "content-type":"application/x-www-form-urlencoded"
        },
       
        success :(res)=>{
         
          console.log(res.data)
          this.setData({
            bindUsers:{
              remark:'',
             
            },
          
          })
          app.globalData.bindUsers=this.data.bindUsers
          this.onLoad ()
          
          
        },
        fail: function (err) {
          console.log(err);
        }
      });
    },
  //  获取用户信息
    requestUsers: function () {
      var that = this;
      var thisUrl=this.data.getUserUrl
      wx.request({
       
        
        url:thisUrl+this.data.weixinId,
        data: {},
        header: {
          'content-type': 'application/json' // 默认值
        },
       
        success :(res)=>{
          console.log(res.data)
          console.log(res.data.users)
         this.onLoad()
           that.setData({
            //libList: res.data,
            bindUsers:res.data.users
            
        })
        console.log(this.data.bindUsers)
        app.globalData.bindUsers = this.data.bindUsers
        console.log('全局：',app.globalData.bindUsers)
        
       
          
        },
        fail: function (err) {
          console.log(err);
        }
      });
    },
    // 自动登录
    autGet:function(){
      var that=this
      console.log(app.globalData.weixinidurl)
     
      if(!wx.getStorageSync("weixinId")||wx.getStorageSync("weixinId")==''){
        //不存在数据时，发送请求
        wx.navigateTo({
          url: '../Binding/Binding'
        })

    }else{
        console.log("使用旧数据")
        // string.replace(/-/g,'')
        this.weixinId='!!'+wx.getStorageSync("weixinId").weixinId
        // .weixinId.replace(/-/g,'')
        app.globalData.weixinId=this.weixinId
        console.log('全局'+app.globalData.weixinId)
       console.log(this.weixinId)
      //  请求用户信息
       var that = this;
       var thisUrl=this.data.getUserUrl
       wx.request({
        
         
         url:thisUrl+this.weixinId,
         data: {},
         header: {
           'content-type': 'application/json' // 默认值
         },
        
         success :(res)=>{
           console.log(res.data)
           console.log(res.data.users)
           wx.switchTab({
   
             url: '../Mylibrary/Mylibrary'
            
             })
            that.setData({
             //libList: res.data,
             bindUsers:res.data.users
             
         })
         console.log(this.data.bindUsers)
         app.globalData.bindUsers = this.data.bindUsers
         console.log('全局：',app.globalData.bindUsers)
         
        
           
         },
         fail: function (err) {
           console.log(err);
         }
       });
      }
    },

 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      weixinidurl:app.globalData.weixinidurl,
      delbindurl:app.globalData.delbindurl,
      bindUsers:app.globalData.bindUsers,
      getUserUrl:app.globalData.getUserUrl,
    }),
    this.autGet()
    
   
    
  
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

    this.onLoad()

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    // this.setData({
    //   bindUsers:app.globalData.bindUsers,
      
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