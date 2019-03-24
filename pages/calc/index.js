// pages/calc/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    augend: 0,
    addend: 0,
    sum: undefined,
  },

  _numberp(input) {
    return !isNaN(input)
  },

  bindSum(e) {
    var sum = this.data.augend + this.data.addend
    this.setData({
      sum
    })
  },

  bindAugendInput(e) {
    var augend = +e.detail.value;
    if (this._numberp(augend))
      this.setData({augend})
  },

  bindAddendInput(e) {
    var addend = +e.detail.value;
    if (this._numberp(addend))
      this.setData({addend})
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