const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageList:["../../image/img/user_img.jpg","../../image/img/user.png"],
   
  },
  upLoadimage:function(){ 
    // wx.openSetting({})  
    var that = this;
      wx.chooseImage({
        count: 9,
        sizeType:['original','compressed'],
        sourceType:['album','camera'],
        success:function(res){
          // that.setData({
          //   imageList:res.tempFilePaths
          // })
          that.setData({
            imageList: that.data.imageList.concat(res.tempFilePaths)
          })
        },   
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