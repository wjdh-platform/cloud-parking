const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        name:"",
        phone:"",
    },
    bindname:function(e){
        this.setData({name:e.detail.value});
    },
    bindphone:function(e){
        this.setData({phone:e.detail.value});
    },
    bindlocation:function(e){
       console.log(this.data.name,this.data.phone);
       wx.request({
        url: 'http//127.0.0.1:8000/api/login/',
        data: { name : this.data.name, phone: this.data.phone},
        method: 'POST',
               

      })
    },
    //将手机号和验证码发送到后端，后端进行登录


})