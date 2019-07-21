App({
  
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}  
    // my.alert({content:'欢迎来到支付宝小程序'})
    // my.alert({content:"支付成功"})
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}  
  },
  
});
