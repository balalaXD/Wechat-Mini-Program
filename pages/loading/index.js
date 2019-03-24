// pages/loading/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    pageLoading: true,
    timer: 2
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;

    setInterval(function() {
      var show = self.data.pageLoading;
      var timer = self.data.timer;

      if(show) {
        timer -= 1;
        var pageLoading = timer === 0 ? false : true;
          self.setData({
            timer,
            pageLoading
          })
      }
    }, 1000)
  },

  hideLoading() {
    this.setData({
      hidden: false
    })
  },

  loadingTap() {
    this.setData({
      hidden: true
    })
  },

  startTimerLoading() {
    this.setData({
      pageLoading: true,
      timer: 5
    })

    var self = this
    
    setTimeout(function() {
      self.setData({
        pageLoading: false
      })
    }, 5000)
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