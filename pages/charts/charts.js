// pages/charts/charts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttonClass: 'button',
    value:100,
    playcount:0,
    url:''
  },
  onLoad(options){
    this.setData({
      playcount:options.playcount,
      url:options.url
    })
    
  },
  changeToGolden() {
    var audioContext = wx.createInnerAudioContext();
    audioContext.src = 'https://1111-1321099770.cos.ap-nanjing.myqcloud.com/%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE-%E6%B8%B8%E6%88%8Fui%28Button32%29_%E7%88%B1%E7%BB%99%E7%BD%91_aigei_com.mp3';
    audioContext.play();
    this.setData({
      buttonClass: 'button golden',
    });
  },
  restoreStyle() {
    this.setData({
      buttonClass: 'button',
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  redirectToPage: function() {
    wx.navigateTo({
      url: '../'+this.data.url+'?playcount='+this.data.playcount+'&value='+this.data.value // 替换成目标页面的路径
    })
  },
  onInputChange(event) {
    this.setData({
      value: event.detail.value
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})