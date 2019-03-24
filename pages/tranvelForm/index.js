// pages/tranvelForm/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sexes: [
      'male',
      'female'
    ],

    regions: [
      {
        name: 'CHN',
        value: 'China',
        checked: true
      },
      {
        name: 'USA',
        value: 'American'
      },
      {
        name: 'BRA',
        value: 'Brasil'
      },
      {
        name: 'ENG',
        value: 'English'
      },
      {
        name: 'TUR',
        value: 'french'
      }
    ],
    time: '8:00',
    date: '2019-03-22',
    suggest: '',
    feedback: '',
    pageLoading: true,
    submitting: false
  },

  onFormSubmit(e) {
    console.log("submited")
    console.log(e.detail)
    this.setData({
      submitting: true
    })
    let self = this
    setTimeout(function() {
      self.setData({
        submitting: false
      })
    }, 1500)
  },

  onFormReset(e) {
    console.log('reset form')
  },

  handleRadioChange(e) {
    console.log(e)
  },

  handleCheckboxChange(e) {
    console.log(e)
  },

  handleDateChange(e) {
    console.log(e)
  },

  handleTimeChange(e) {
    console.log(e)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var self = this
    setTimeout(function() {
      self.setData({
        pageLoading: false
      })
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})