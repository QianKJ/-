// pages/Mylibrary/Mylibrary.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    patronBarcode:'',
    readerBarcode:''
  },
  getPatronBarcode:function(e){
    console.log(e.currentTarget.dataset.readerbarcode)
    this.setData({
      patronBarcode:e.currentTarget.dataset.readerbarcode
    })
    app.globalData.patronBarcode=this.data.patronBarcode
    

  },
  
    delBind:function(e){
      console.log(e.currentTarget.dataset.text)
      var thisUrl='http://localhost/iLove/api2/wxuserApi/Delete?bindUserId='
      wx.request({
        
        
        url:thisUrl+e.currentTarget.dataset.text,
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
          wx.reLaunch({

            url: '../Mylibrary/Mylibrary',
  
          })
          
          
        },
        fail: function (err) {
          console.log(err);
        }
      });
    },
   
  

 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
   
    
  
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
    this.setData({
      bindUsers:app.globalData.bindUsers,
      
   
  })

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