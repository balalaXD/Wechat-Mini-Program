// pages/toast/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    hidden2: true
  },

  toast1Change() {
    this.setData({
      hidden: true
    })
    console.log("toast 1 change event happening...")
  },

  toast2Change() {
    this.setData({
      hidden2: true
    })
    console.log("toast 2 change event happening...")
  },

  toast1Tap() {
    this.setData({
      hidden: false
    })
  },

  toast2Tap() {
    this.setData({
      hidden2: false
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