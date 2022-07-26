// pages/Pim.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getUserInformation:'',
    checkLibId:'',//选择的图书馆id
    getUserInformationUrl:'',
    patronBarcode:''
  },
  getUserInformation:function(){
    
    var thisUrl=this.data.getUserInformationUrl
    wx.request({
      // var url1='http://localhost/i/api2/PatronApi/GetPatron?libId=62cf94ae2276ed9437e8e010&patronBarcode=P001&username',
      url:thisUrl+'libId='+this.data.checkLibId+'&patronBarcode='+this.data.patronBarcode+'&username=',
      
      method: "get",
      data: {
        
      },
      
      header: {
        "Content-Type": "application/x-www-form-urlencoded"

      },
      success: (res) => {
        
        
        if(res.data.errorInfo==""){
          console.log(res.data);
          this.setData({
            getUserInformation:res.data
          })
          wx.showToast({
          title: '请求成功',
          icon: 'success',
          duration: 2000//持续的时间
          
        })

       
       
     
      
          
      }else
       
      

      },
     
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      patronBarcode:app.globalData.patronBarcode,
      checkLibId:app.globalData.checkLibId,
      getUserInformationUrl:app.globalData.getUserInformationUrl
     
  })
  console.log(app.globalData.patronBarcode)
  console.log(app.globalData.checkLibId)
  console.log(app.globalData.getUserInformationUrl)
  this.getUserInformation()
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