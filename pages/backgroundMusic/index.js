// pages/backgroundMusic/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  play() {
    wx.playBackgroundAudio({
      dataUrl: 'http://fs.w.kugou.com/201903231350/9f159a4f12a96a13a7f4cfcbbab4cbd0/G064/M0A/1E/1F/4IYBAFetgLGAFfFMAD5NEba0dAY761.mp3',
      title: '青云志主题曲《浮诛》',
      coverImgUrl: 'http://r1.ykimg.com/050E0000576B75F667BC3C136B06E4E7'
    })
  },

  pause() {
    wx.pauseBackgroundAudio()
  },

  seek(e, forward_time = 20) {
    wx.seekBackgroundAudio({
      position: forward_time,
    })
  },

  stop() {
    wx.stopBackgroundAudio()
  },

  getPlayState() {
    let state = undefined

    wx.getBackgroundAudioPlayerState({
      success: function (res) {
        state = res
        console.log(state)
      }
    })

    return state
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.onBackgroundAudioPlay(function () {
      console.log('Watching: start music')
    })
    
    wx.onBackgroundAudioPause(function () {
      console.log('Watching: pause music')
    })

    wx.onBackgroundAudioStop(function () {
      console.log('Watching: stop music')
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