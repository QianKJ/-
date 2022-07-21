// pages/library/library.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    libList: '',
    checkLib:'',
     checkLibId:'',//获取图书馆的name和libId
     libraryCode:'',
   

  },
  goback: function(){
    wx.navigateTo({
 
      url: '/pages/Binding/Binding',
 
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.requestData();
    
  
  },
  requestData: function () {
    var that = this;
    wx.request({
      url: 'http://dp2003.com/i/api2/LibSettingApi/GetAreaLib',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
     
      success :(res)=>{
        console.log(res.data)
       
         that.setData({
          libList: res.data,
         
      }),
         app.globalData.libLists = this.libList
      //  console.log( app.globalData.libLists)
      },
      fail: function (err) {
        console.log(err);
      }
    });
  },
  radioChange:function(e){
  
    
       this.checkLib = e.detail.value;
      
       app.globalData.checkLib = this.checkLib;
       
      // ~~~~~~~~~~~~
      
    
    console.log(this.checkLib)
    console.log(app.globalData.checkLib)
   
  },
inputChange:function(e){
  this.checkLibId=e.detail.value;
  app.globalData.checkLibId = this.checkLibId;
 
  console.log(this.checkLibId)
  console.log(app.globalData.checkLibId)
},
inputChange2:function(e){
  this.libraryCode=e.detail.value;
  app.globalData.libraryCode = this.libraryCode;
 
  console.log(this.libraryCode)
  console.log(app.globalData.libraryCode)
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