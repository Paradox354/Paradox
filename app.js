// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    this.backgroundAudioManager = wx.getBackgroundAudioManager();
    this.backgroundAudioManager.title = '背景音乐';
    this.backgroundAudioManager.src = './3662_e816_f134_3ae9ca6ff3f68011d63d6d7125b7ea0d.mp3';
    this.backgroundAudioManager.loop = true;
  },
  globalData: {
    userInfo: null
  }
})
