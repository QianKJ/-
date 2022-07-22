// pages/Mylibrary/Mylibrary.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bindUsers:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
   
   //用onLoad周期方法重新加载，实现当前页面的刷新
  
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