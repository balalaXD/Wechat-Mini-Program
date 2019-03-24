// pages/musicPlayer/search/index.js

var config = require('../../../config.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    input: '',
    loading: false,
    list: []
  },

  inputing(e) {
    this.setData({
      input: e.detail.value
    });
  },

  search() {
    var self = this;
    this.setData({
      loading: true
    });

    wx.request({
      url: config.searchByNameUrl,
      data: {
        keyword: self.data.input
      },
      success(e) {
        if (e.statusCode == 200) {
          let pagebean = e.data.showapi_res_body.pagebean

          self.setData({
            list: pagebean.contentlist,
            loading: false
          });
          wx.setStorageSync('songlist', pagebean.contentlist);
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
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})