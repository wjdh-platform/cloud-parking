// pages/coupons/coupons.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        style:['now','',''],
        hidden:[false,true,true]
    },

    tab(evt){
        let index = evt.target.dataset.index;
        let style = this.data.style;
        let hidden = this.data.hidden;
        style.forEach((item,key)=>{
          if(key == index){
            style[key] = 'now';
            hidden[key] = false;
          }else{
              style[key] = '';
              hidden[key] = true;
          }
        });
        this.setData({
          style,
          hidden
        })
      }
})