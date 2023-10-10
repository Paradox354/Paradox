// pages/choose_people/choose_people.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedButton: 0,
    playcount: 0,
    count: 1,
    isActive2: 0,
    isActive3:0,
    urllist:[
      'cp_vs_p/cp_vs_p',
      '3p/3p',
      '4p/4p',
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  bindTouchStart3: function() {
    var audioContext = wx.createInnerAudioContext();
    audioContext.src = 'https://1111-1321099770.cos.ap-nanjing.myqcloud.com/%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE-%E6%B8%B8%E6%88%8Fui%28Button32%29_%E7%88%B1%E7%BB%99%E7%BD%91_aigei_com.mp3';
    audioContext.play();
    this.setData({
      isActive3: true
    });
  },
  
  bindTouchEnd3: function() {
    this.setData({
      isActive3: false
    });
  },
  bindTouchStart2: function() {
    var audioContext = wx.createInnerAudioContext();
    audioContext.src = 'https://1111-1321099770.cos.ap-nanjing.myqcloud.com/%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE-%E6%B8%B8%E6%88%8Fui%28Button32%29_%E7%88%B1%E7%BB%99%E7%BD%91_aigei_com.mp3';
    audioContext.play();
    this.setData({
      isActive2: true
    });
  },
  
  bindTouchEnd2: function() {
    this.setData({
      isActive2: false
    });
  },
  handleButtonClick1(event) {
    var audioContext = wx.createInnerAudioContext();
    audioContext.src = 'https://1111-1321099770.cos.ap-nanjing.myqcloud.com/%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE-%E6%B8%B8%E6%88%8Fui%28Button32%29_%E7%88%B1%E7%BB%99%E7%BD%91_aigei_com.mp3';
    audioContext.play();
    const buttonIndex = event.currentTarget.dataset.index;

    // 根据按钮的 data-index 值更新 selectedButton 和 playcount 变量
    this.setData({
      selectedButton: parseInt(buttonIndex),
      playcount: parseInt(buttonIndex) + 1
    });
    //const url = event.currentTarget.dataset.url;
    // 使用 navigateTo 方法进行页面跳转
    wx.navigateTo({
      url: '../charts/charts?playcount='+this.data.count+'&url='+this.data.urllist[0]
    });
  },
  handleButtonClick2(event) {
    var audioContext = wx.createInnerAudioContext();
    audioContext.src = 'https://1111-1321099770.cos.ap-nanjing.myqcloud.com/%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE-%E6%B8%B8%E6%88%8Fui%28Button32%29_%E7%88%B1%E7%BB%99%E7%BD%91_aigei_com.mp3';
    audioContext.play();
    const buttonIndex = event.currentTarget.dataset.index;

    // 根据按钮的 data-index 值更新 selectedButton 和 playcount 变量
    this.setData({
      selectedButton: parseInt(buttonIndex),
      playcount: parseInt(buttonIndex) + 1
    });
    //const url = event.currentTarget.dataset.url;
    // 使用 navigateTo 方法进行页面跳转
    wx.navigateTo({
      url: '../charts/charts?playcount='+this.data.count+'&url='+this.data.urllist[1]
    });
  },
  handleButtonClick3(event) {
    var audioContext = wx.createInnerAudioContext();
    audioContext.src = 'https://1111-1321099770.cos.ap-nanjing.myqcloud.com/%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE-%E6%B8%B8%E6%88%8Fui%28Button32%29_%E7%88%B1%E7%BB%99%E7%BD%91_aigei_com.mp3';
    audioContext.play();
    const buttonIndex = event.currentTarget.dataset.index;

    // 根据按钮的 data-index 值更新 selectedButton 和 playcount 变量
    this.setData({
      selectedButton: parseInt(buttonIndex),
      playcount: parseInt(buttonIndex) + 1
    });
    //const url = event.currentTarget.dataset.url;
    // 使用 navigateTo 方法进行页面跳转
    wx.navigateTo({
      url: '../charts/charts?playcount='+this.data.count+'&url='+this.data.urllist[2]
    });
  },
  handleButtonTouchStart(event) {
    const buttonIndex = event.currentTarget.dataset.index;
    this.setData({
      selectedButton: parseInt(buttonIndex)
    });
  },

  handleButtonTouchEnd() {
    this.setData({
      selectedButton: 0
    });
  },
  increaseCount: function() {
    let count = this.data.count+1;
    if (count>3) {
      count=1;
      
    }
    this.setData({
      count:count
    });
    
  },

  decreaseCount: function() {
    let count = this.data.count-1;
    if (count<1) {
      count=3;
      
    }
    this.setData({
      count:count
    });
  },
  onLoad(options) {

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