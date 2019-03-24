// pagges/buttonMenu/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus: ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'],
    actionsheetHidden: true,
  },

  showActionSheet(e) {
    this.setData({
      actionSheetHidden: false
    })
  },

  hideActionSheet(e) {
    this.setData({
      actionSheetHidden: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this

    this.data.menus.map(function (menu) {
      self['bind' + menu] = function (e) {
        console.log("aha, you click " + menu)
        console.log(e)
        self.setData({ actionSheetHidden: true })
      }
    })
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