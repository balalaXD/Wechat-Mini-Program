// pages/button/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },

  setDisabled: function(e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },

  setPlain: function(e) {
    this.setData({
      plain: !this.data.plain
    })
  },

  setLoading: function(e) {
    this.setData({
      loading: !this.data.loading
    })
  },

  _changeSize(prop) {
    var d = this.data[prop] === 'default' ? 'mini' : 'default';
    this.setData({
      [prop]: d
    })
  },

  default: function(e) {
    this._changeSize('defaultSize')
  },

  primary: function(e) {
    this._changeSize('primarySize')
  },

  warn: function(e) {
    this._changeSize('warnSize')
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