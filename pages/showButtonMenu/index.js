// pagges/showButtonMenu/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus: ['menu 1', 'menu 2', 'menu 3', 'menu 4']
  },

  showActionSheet(e) {
    let self = this

    wx.showActionSheet({
      itemList: this.data.menus,
      itemColor: '',
      success: function(res) {
        console.log('success: ', res)
        let menu = !res.cancel ? self.data.menus[res.tapIndex] : null

        if (menu)
          console.log(menu)
      },
      fail: function(res) {
        console.log('failed: ', res)
      },
      complete: function(res) {
        console.log('complete: ', res)
      },
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