// pages/pay/pay.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        provinces:[
            ['京','沪','粤','津','冀','晋','蒙','辽','湘'],
            ['苏','浙','皖','闽','赣','鲁','豫','鄂','吉'],
            ['桂', '琼', '渝', '川', '贵', '云','黑'],
            ['陕', '甘', '青', '宁', '新', '藏'],
          ],
          numbers: [
            ["0", "1", "2", "3", "4", "5", "6","7","8","9"],
            ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
            ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
            ["Z", "X", "C", "V", "B", "N", "M"]
          ],
          carnum:[],
          showNewPower:false,
          keyboardState:true

    },

    bindChoose(e) {
        if (!this.data.carnum[6] || this.data.showNewPower) {
          var arr = [];
          arr[0] = e.target.dataset.val;
          this.data.carnum = this.data.carnum.concat(arr)
          this.setData({
            carnum: this.data.carnum
          })
        }
        if(this.data.carnum[6]){
          this.setData({
            showNewPower: true,
            KeyboardState: true
          })
        }
      },
      bindDelChoose() {
        if (this.data.carnum.length != 0) {
          this.data.carnum.splice(this.data.carnum.length - 1, 1);
          this.setData({
            carnum: this.data.carnum
          })
        }
        
      },
      showPowerBtn() {
        this.setData({
          showNewPower: true,
          KeyboardState: true
        })
      },
      closeKeyboard() {
        this.setData({
          KeyboardState: false
        })
      },
      openKeyboard() {
        this.setData({
          KeyboardState: true
        })
      },
      //清空按钮
      deleteAll(){
        this.setData({
          carnum:[],
        })
      },
      // 提交车牌号码
      submitNumber() {
        if(this.data.carnum.length<7){
          wx.showToast({
            title: '请输入完整的车牌!',
            icon:'none',
            duration: 2000,
          })
        }
        if (this.data.carnum[6]) {
               
          var carno=this.data.carnum;
          var carnonew=carno.join('');
          console.log(carnonew);
        }
      },
})