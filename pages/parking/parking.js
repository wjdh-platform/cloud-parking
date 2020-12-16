// pages/parking/parking.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  goToManageMent(){
    wx.navigateTo({
      url: '/pages/pay/pay',
    })
  },
  goToOpinion(){
    wx.navigateTo({
      url: '/pages/opinion/opinion',
    })
  },
  methods: {
    changeTab(e){
      // console.log(e) 
      const url=e.currentTarget.dataset.pagepath
      // console.log(url)
      wx.switchTab({url})
      this.setData({
        selected:e.currentTarget.dataset.index
      })
    }
  },



goToPay(){
  wx.navigateTo({
    url: '/pages/pay/pay',
  })
}
  
})