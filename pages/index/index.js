//index.js
//获取应用实例
const app = getApp()
const formatRMB = require('../../miniprogram_npm/format-rmb/index.js')

Page({
  data: {
    price: 0,
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  handleInput: function(e) {
    const { value } = e.detail;

    if(!value){
      this.setData({
        price: 0
      })
      return;
    }

    let num = parseFloat(value)
    let result = formatRMB(num);
    if(result.errCode === 0){
      this.setData({
        price: result.value
      })
    }else {
      console.error(result.msg)
    }
    
  }
})
