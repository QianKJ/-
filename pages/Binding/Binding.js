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
   checkLib:'',
   word:'',
   password:'',
   prefix:'',
   bindLibraryCode:'',
  },
  
  getWord: function(e) {
    
    this.setData({
      word:e.detail.value
    })
   
  },
  getPassWord: function(e) {
     //获取输入的内容
    this.setData({
      password:e.datail.value,//改变page--data中username的值
    })
   
  },

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
    

  },
  // 从全局获取选中的图书馆名字
  checkLib:function(){
    this.checkLib=app.globalData.checkLib
    
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      checkLib:app.globalData.checkLib})
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