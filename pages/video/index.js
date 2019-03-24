// pages/video/index.js
const getRandomColor = require('./utils/randomColor.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: 'https://s3.bytecdn.cn/aweme/resource/web/static/image/index/tvc-v2_30097df.mp4',
    danmuList: [
      {
        text: 'danmu biu biu...',
        color: '#234',
        time: 1
      }
    ],
    inputDanmu: ""
  },

  videoErrorCallback(e) {
    console.log("Loading video with error. ", e.detail.errMsg)
  },

  bindInputBlur(e) {
    this.inputValue = e.detail.value
  },

  bindSendDanmu(e) {
    let danmu = {
      text: this.inputValue,
      color: getRandomColor()
    }

    this.setData({
      inputDanmu: ""
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
    this.videoContext = wx.createVideoContext('videoPlayer')
    this.videoContext.sendDanmu
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