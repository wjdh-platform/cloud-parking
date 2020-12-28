var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:"",
    pwd:""
  },

  account:function(e){
    this.setData({id:e.detail.value});
    
  },
  password:function(e){
    this.setData({pwd:e.detail.value});
  },
  checkCode:function(){
    wx.request({
      url: 'http://172.0.0.1:8000/api/massage',
      data:{id:this.data.id,pwd:this.data.pwd},
      method:'GET',
      success:function(res){
        console.log(res);
      }
    })
  },
  loge:function(){
    console.log(this.data.id,this.data.pwd);
    wx.request({
      url: 'http://172.0.0.1:8000/api/login',
      data:{id:this.data.id,pwd:this.data.pwd},
      method:'POST',
      success:function(res){
        console.log(res);
      }
    })
  },
  loge:function(e){
    console.log(this.data.id,this.data.pwd);
    if(this.data.id.length != 11){
      wx.showToast({
        title: '您输入的手机号格式不正确',
        icon:'none'
      })
    }else{
    return
    }
    wx.request({
      url: 'http//127.0.0.1:8000/api/login/',
      data: { id : this.data.id, pwd:this.data.id},
      method: "POST",
      dataType:'json',
      success:function(res){
        if(res.data.status){
          console.log(res.data.data);
          app.globalData.id = res.data.data.id;
        }
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})