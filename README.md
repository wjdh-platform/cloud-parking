## 数据绑定
### 内容：
1.wx.getuserInfo 获取微信用户名 图片接口方法
2.wx.opensettings 手动获取微信授权功能
3.wx.chooselocation 获取微信位置功能
4.wx.choolseLocation 显示当前所在位置
(1) 通过res.address 坐标返回获取当前所在位置
## 学习微信for指令
wx：for [item:元素；index:索引值]
可自定义标题： 
wx:for-item="new_item" 
wx:for-index="new_index"

上传照片
chooseImage{ count:'9',sizeType,sourceType}  success or fail
(可覆盖)

上传照片（添加）

列表法： 创建新的列表，默认照片+选择要上传的照片（注意：修改js页面元素时用setdata）

已上传的照片+consat+新上传的照片
## 双向绑定

### 通过input中的value值来实现

this.setdata({id.e.detail.value})
### 后台网络映射

wx.request 网络请求 ：网络地址   接口映射后对后台进行其他接口配置
# 用户登录
## 流程：
1.手机号：
   校验手机号位数

   判断字符是否合法

   生成随机码发送到手
   
   校验验证码是否正确

   提示弹窗

案例：
if条件判断 
 if（this.data.phone.lenght!=11)

//弹窗

wx.showToast{//title ：//显示的文字  
//icon样式：none,loading,success  