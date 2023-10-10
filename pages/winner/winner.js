// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    winner:"",
    buttonClass: 'button',
    motto: '点击进入游戏',
    userInfo: {},
    hasUserInfo: true,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: true,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  buttonTouchStart: function (event) {
    var audioContext = wx.createInnerAudioContext();
    audioContext.src = 'https://1111-1321099770.cos.ap-nanjing.myqcloud.com/%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE-%E6%B8%B8%E6%88%8Fui%28Button32%29_%E7%88%B1%E7%BB%99%E7%BD%91_aigei_com.mp3';
    audioContext.play();
    // 更新按钮的样式类名
    this.setData({
      buttonClass: 'button active',
    });
  },
  
  buttonTouchEnd: function (event) {
    // 延时一段时间后恢复初始样式
    setTimeout(() => {
      this.setData({
        buttonClass: 'button',
      });
    }, 200);
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  buttonTap:function(event) {
    // 添加按钮按下时的类名
    this.setData({
      buttonClass: 'button active',
    });
    
    // 延时一段时间后移除按钮的类名，以恢复初始样式并执行跳转
    setTimeout(() => {
      this.setData({
        buttonClass: 'button active',
      });
      
      // 执行跳转功能
      wx.navigateTo({
        url: '../logs/logs'
      });
    }, 200);
  },
  onLoad(options) {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true,
        winner:options.winner
      })
    }


  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
wx.loadFontFace({
  family: 'HYQH-50S',
  source: 'url("https://www.xxx.com/font/HYQH-50S.ttf")',
  success: function (res) {
    console.log(res.status)
  },
  fail: function (res) {
    console.log(res.status)
  },
  complete: function (res) {
    console.log(res.status);
  },
});
