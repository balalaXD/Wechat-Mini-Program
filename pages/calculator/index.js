// pages/calculator/index.js
const calc_expr = require('../../utils/calculate_expression.js').calculate

Page({

  /**
   * 页面的初始数据
   */
  data: {
    expression: '',
    result: '0',
    record_history: false
  },

  _add_to_historys(value) {
    let historys = wx.getStorageSync("historys")
    historys.unshift(value)
    wx.setStorageSync("historys", historys)
  },

  _handle_pressed_value(value) { 
    let valid_symbols = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.',
                          '+', '-', '*', '÷' ]
    let expression = this.data.expression
    let _symbol = valid_symbols.find(symbol => value === symbol) ? value : ''

    return expression + _symbol
  },

  handleTap(e) {
    let pressed_value = e.target.dataset.value
    let expression = this._handle_pressed_value(pressed_value)

    if (pressed_value === "=") {
      let result = calc_expr(expression)

      if (this.data.record_history)
        this._add_to_historys(`${expression} = ${result}`)

      this.setData({
        expression: '',
        result
      })
    } else {
      this.setData({
        expression,
        result: expression
      })
    }

    if (pressed_value === "history")
      wx.navigateTo({
        url: "history/index"
      })
  },

  handleSwitchRecordHistory(e) {
    this.setData({
      record_history: e.detail.value
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
    let historys = wx.getStorageSync("historys")
    if (historys === undefined)
      wx.setStorageSync("historys", [])
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