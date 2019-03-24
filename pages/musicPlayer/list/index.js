// pages/musicPlayer/list/index.js

var config = require('../../../config.js');

var formatSeconds = require("../../../utils/util.js").formatSeconds

Page({

  /**
   * 页面的初始数据
   */
  data: {
    board: '',
    songlist: [],
    loading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var self = this;
    var topid = options.type;

    this.setData({
      loading: true
    })

    wx.request({
      url: config.hotUrl,
      data: {
        topid
      },
      success(e) {
        if (e.statusCode == 200) {
          let pagebean = e.data.showapi_res_body.pagebean;
          var songlist = pagebean.songlist;

          songlist.forEach(song => song.seconds = formatSeconds(song.seconds))

          self.setData({
            board: pagebean.songlist[0].albumpic_big,
            songlist,
            loading: false
          });
          wx.setStorageSync('songlist', songlist);
        }
      }
    })
  },

  taptap(e) {
    let songid = e.currentTarget.dataset.songid
    wx.setStorageSync("selected_songid", songid)
    console.log('You have selecte song with id', songid)
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