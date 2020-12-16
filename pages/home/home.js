const app = getApp()
Page({

    data: {
        result: '',
        style:['now',''],
        hidden:[false,true],
        title:'输入车牌号缴费',
        adList:[{
            'title':'手动缴费，支付后可离场，快来体验吧！'
          },{
            'title':'广告位1'
          },{
            'title':'广告位2'
          },
        ],
  
    },
 
    goToInvoice(){
      wx.navigateTo({
        url: '/pages/invoice/invoice',   
      })
    },

    goToParking(){
      wx.navigateTo({
        url: '/pages/parking/parking',   
      })
    },
    goToPay(){
      wx.navigateTo({
        url: '/pages/pay/pay',
      })
    },
    goToSelf_help(){
      wx.navigateTo({
        url: '/pages/self_help/self_help',
      })
    },
    goToManagemen(){
      wx.navigateTo({
        url: '/pages/managemen/managemen',
      })
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
    },
    getScancode: function() {
        var _this = this;
        // 允许从相机和相册扫码
        wx.scanCode({
          success: (res) => {
            var result = res.result;
     
            _this.setData({
              result: result,
     
            })
          }
        })
     
      },
    
    
 
})