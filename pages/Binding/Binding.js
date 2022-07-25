
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weixinidurl:'',
    getUserUrl:'',
    postBindUrl:'',
    patronBarcode:'',
    bindUsers:'',
    shows: false, //控制下拉列表的显示隐藏，false隐藏、true显示
    selectDatas: ['姓名', '证条码', '电话','工作人员账户'], //下拉列表的数据
    indexs: 0, //选择的下拉列 表下标,
   checkLib:'',//选择的图书馆
   word:'',//输入账号
   mima:'',
   prefix:'NB',//登录方式
   bindLibraryCode:'',//图书馆的code
   weixinId:'',//微信用户唯一ID
   libId:'',
  },
  postData:function(){
   
    console.log(this.data.bindLibraryCode)
   console.log(this.weixinId)

    wx.request({
      url:this.data.postBindUrl,
      method: "POST",
      data: {
        weixinId:this.data.weixinId,
        libId:this.data.libId,
        bindLibraryCode:this.data.bindLibraryCode,
        prefix:this.data.prefix,
        word:this.data.word,
        password:this.data.mima,
        
      },
      
      header: {
        "Content-Type": "application/x-www-form-urlencoded"

      },
      success: (res) => {
        
        
        if(res.data.errorInfo==""){
         
          wx.showToast({
          title: '请求成功',
          icon: 'success',
          duration: 2000//持续的时间
          
        })

        this.requestUsers()
       
     
      
          
      }else{ 
        console.log(app.globalData.weixinId)
        console.log(res.data)
        wx.showToast({
          title: res.data.errorInfo,
          icon:'none',
          duration: 2000//持续的时间
         
        })}
      

      },
     
    })
  },
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
  },

  getWeixinId:function(){
    var that=this
    console.log(app.globalData.weixinidurl)
   
    if(!wx.getStorageSync("weixinId")||wx.getStorageSync("weixinId")==''){
      //不存在数据时，发送请求
      wx.request({
        url:app.globalData.weixinidurl,
       
        data: {},
        header: {
          'content-type': 'application/json' // 默认值
        },
       
  
       
        success :(res)=>{
          console.info("登录成功返回的openId：" +res.data);
          wx.setStorageSync("weixinId",{weixinId:res.data})       
                app.globalData.weixinId ='!!'+wx.getStorageSync("weixinId").weixinId
                console.log(app.globalData.weixinId)
              
               
                this.weixinId='!!'+wx.getStorageSync("weixinId").weixinId
                console.log(this.weixinId)
        },
        fail: function (err) {
          console.log(err);
        }
      });
  }else{
      console.log("使用旧数据")
      // string.replace(/-/g,'')
      this.weixinId='!!'+wx.getStorageSync("weixinId").weixinId
      // .weixinId.replace(/-/g,'')
      app.globalData.weixinId=this.weixinId
      console.log('全局'+app.globalData.weixinId)
     console.log(this.weixinId)
    }
   

  },
   

  


  
  getWord: function(e) {
    
    this.setData({
      word:e.detail.value
    })
    app.globalData.word = this.data.word
  },
  getMiMa: function(e) {
    
    this.setData({
      mima:e.detail.value
    })
    app.globalData.mima = this.data.mima
   
  },
  
    
  

  
  gotoLibraryPage: function (options) {
    wx.navigateTo({
    url: '../library/library',
    })
    // Page.onLoad()
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
      weixinidurl:app.globalData.weixinidurl,
      checkLib:app.globalData.checkLib,
      weixinId:app.globalData.weixinId,
      bindLibraryCode:app.globalData.libraryCode,
      libId:app.globalData.checkLibId,
      getUserUrl:app.globalData.getUserUrl,
      postBindUrl:app.globalData.postBindUrl,
      // weixinidurl:app.globalData.weixinidurl,
  })
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