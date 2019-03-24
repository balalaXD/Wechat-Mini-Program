// pagges/audio/index.js
Page({

  /*
   * 页面的初始数据
   */
  data: {
    current: {
      poster: 'http://r1.ykimg.com/050E0000576B75F667BC3C136B06E4E7',
      name: '青云志主题曲《浮诛》',
      author: '张杰',
      src: 'http://fs.w.kugou.com/201903231350/9f159a4f12a96a13a7f4cfcbbab4cbd0/G064/M0A/1E/1F/4IYBAFetgLGAFfFMAD5NEba0dAY761.mp3',
      seek: 0
    },
    audioAction: {
      method: 'play'
    }
  },

  audioPlay() {
    this.audioPlay.play()
  },

  audioPause() {
    this.audioPlayer.pause()
  },

  audioForward(e, forward_time=20) {
    let current = this.data.current
    current.seek += forward_time
    this.audioPlayer.seek(current.seek)
    this.setData({current})
  },

  audioStart() {
    this.audioPlayer.seek(0)
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
    this.audioPlayer = wx.createAudioContext("audioPlayer", this)
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