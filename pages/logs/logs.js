// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    isActive1: false,
    isActive2: false,
    isActive3: false,
    isActive4: false,
    isActive5: false,
    logs: []
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  },
 bindViewTap1:function(){
  this.setData({
    isActive1: true
  });
  var audioContext = wx.createInnerAudioContext();
    audioContext.src = 'https://1111-1321099770.cos.ap-nanjing.myqcloud.com/%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE-%E6%B8%B8%E6%88%8Fui%28Button32%29_%E7%88%B1%E7%BB%99%E7%BD%91_aigei_com.mp3';
    audioContext.play();
    wx.navigateTo({
      url: '/pages/choose_people/choose_people'
    })
    this.setData({
      isActive1: false
    });
  },
bindViewTap2:function(){
  this.setData({
    isActive2: true
  });
  var audioContext = wx.createInnerAudioContext();
    audioContext.src = 'https://1111-1321099770.cos.ap-nanjing.myqcloud.com/%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE-%E6%B8%B8%E6%88%8Fui%28Button32%29_%E7%88%B1%E7%BB%99%E7%BD%91_aigei_com.mp3';
    audioContext.play();
    wx.navigateTo({
      url: '/pages/aiplay/aiplay'
    })
    this.setData({
      isActive2: false
    });
  },
bindViewTap3:function(){
  this.setData({
    isActive3: true
  });
  var audioContext = wx.createInnerAudioContext();
    audioContext.src = 'https://1111-1321099770.cos.ap-nanjing.myqcloud.com/%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE-%E6%B8%B8%E6%88%8Fui%28Button32%29_%E7%88%B1%E7%BB%99%E7%BD%91_aigei_com.mp3';
    audioContext.play();
    wx.navigateTo({
      url: '/pages/rooms/rooms'
    })
    this.setData({
      isActive3: false
    });
  },
bindViewTap4:function(){
  this.setData({
    isActive4: true
  });
  var audioContext = wx.createInnerAudioContext();
    audioContext.src = 'https://1111-1321099770.cos.ap-nanjing.myqcloud.com/%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE-%E6%B8%B8%E6%88%8Fui%28Button32%29_%E7%88%B1%E7%BB%99%E7%BD%91_aigei_com.mp3';
    audioContext.play();
    wx.navigateTo({
      url: '/pages/rules/rules'
    })
    this.setData({
      isActive4: false
    });
  },
  bindViewTap5:function(){
    this.setData({
      isActive5: true
    });
    var audioContext = wx.createInnerAudioContext();
      audioContext.src = 'https://1111-1321099770.cos.ap-nanjing.myqcloud.com/%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE-%E6%B8%B8%E6%88%8Fui%28Button32%29_%E7%88%B1%E7%BB%99%E7%BD%91_aigei_com.mp3';
      audioContext.play();
    wx.navigateTo({
      url: '/pages/set_chips/set_chips'
    })
    this.setData({
      isActive5: false
    });
  },
  bindTouchStart1: function() {
    this.setData({
      isActive1: true
    });
  },
  
  bindTouchEnd1: function() {
    this.setData({
      isActive1: false
    });
  },
  bindTouchStart2: function() {
    this.setData({
      isActive2: true
    });
  },
  
  bindTouchEnd2: function() {
    this.setData({
      isActive2: false
    });
  },
  bindTouchStart3: function() {
    this.setData({
      isActive3: true
    });
  },
  
  bindTouchEnd3: function() {
    this.setData({
      isActive3: false
    });
  },
  bindTouchStart4: function() {
    this.setData({
      isActive4: true
    });
  },
  
  bindTouchEnd4: function() {
    this.setData({
      isActive4: false
    });
  },
  bindTouchStart5: function() {
    this.setData({
      isActive2: true
    });
  },
  
  bindTouchEnd5: function() {
    this.setData({
      isActive2: false
    });
  }
})

