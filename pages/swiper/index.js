// pages/swiper/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: [
      '/public/images/01.jpg',
      '/public/images/02.jpg',
      '/public/images/03.jpg'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interlval: 0,
    duration: 0
  },

  changeIndicatorDots(e) {
    console.log('changeIndicatorDots: ' + e)
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeVertical(e) {
    console.log('changeVertical: ' + e)
    this.setData({
      vertical: !this.data.vertical
    })
  },

  changeAutoplay(e) {
    console.log('changeAutoplay: ' + e)
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    console.log('intervalChange: ' + e)
    this.setData({
      interlval: e.detail.value
    })
  },

  durationChange(e) {
    console.log('durationChange: ' + e)
    this.setData({
      duration: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})