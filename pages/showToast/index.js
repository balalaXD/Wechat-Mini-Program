// pages/showToast/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  showtoast1Tap() {
    wx.showToast({
      title: 'default showToast with 1.5 seconds',
      icon: "loading",
      success() {
        console.log("success.")
      },
      fail() {
        console.log("failed")
      }
    })
  },

  showtoast2Tap() {
    wx.showToast({
      title: "5 seconds showToast",
      icon: "loading",
      duration: 5000
    })
  },

  showtoast3Tap() {
    wx.showToast({
      title: "1.5 seconds showToast",
      icon: "sucess"
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