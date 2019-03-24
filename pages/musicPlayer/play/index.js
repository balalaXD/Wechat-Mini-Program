// pages/musicPlayer/play/index.js

var config = require('../../../config.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    song: undefined,
    playing: false,
  },

  playToggle() {
    var self = this;

    if (self.data.song.songname == '未选择歌曲') {
      return;
    }

    if (self.data.playing) {
      wx.stopBackgroundAudio();
    } else {
      wx.playBackgroundAudio({
        dataUrl: self.data.song.url || self.data.song.m4a,
        success(res) { }
      })
    }

    self.setData({
      playing: !self.data.playing
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {
    var self = this;
    var songid = wx.getStorageSync('selected_songid')

    if (songid === undefined) {
      var defaultSong = { songname: '未选择歌曲' }
      var song = wx.getStorageSync('curSong') || defaultSong

      this.setData({
        song
      })

      return
    }

    // specify an songid
    var songList = wx.getStorageSync('songlist') || [];
    var song = songList.find(song => song.songid == songid)

    this.setData({
      song
    })
    wx.setStorageSync('curSong', song);
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