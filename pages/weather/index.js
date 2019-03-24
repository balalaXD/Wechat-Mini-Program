// pages/weather/index.js

const util = require("../../utils/util.js");
const formatTime = util.formatTime;
const param = util.param;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    weather: {
      wendu: 18,
      ganmao: '昼夜温差较大,较易发生感冒,请适当增减衣服。体质较弱的朋友请注意防护。',
      yesterday: {
        date: '17日星期四',
        type: '阴',
        fx: '南风',
        fl: '微风级',
        low: '低温8℃',
        high: '高温16℃',
      },
      forecast: [
        {
          date: '18日星期五',
          type: '阴',
          high: '高温16℃',
          low: '低温8℃',
          fengxiang: '南风',
          feng1i: '微风级',
        },
        {
          date: '18日星期五',
          type: '阴',
          high: '高温16℃',
          low: '低温8℃',
          fengxiang: '南风',
          feng1i: '微风级！',
        },
        {
          date: '18日星期五',
          type: '阴',
          high: '高温16℃',
          low: '低温8℃',
          fengxiang: '南风',
          feng1i: '微风级',
        },
        {
          date: '18日星期五',
          type: '阴',
          high: '高温16℃',
          low: '低温8℃',
          fengxiang: '南风',
          feng1i: '微风级',
        },
        {
          date: '18日星期五',
          type: '阴',
          high: '高温16℃',
          low: '低温8℃',
          fengxiang: '南风',
          feng1i: '微风级！'
        }
      ],
    },
    today: '2018-11-18',
    city: '北京',
    inputCity: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      today: formatTime(new Date()).split(' ')[0]
    })
    let self = this

    wx.getLocation({
      success: function (res) {
        wx.request({
          url: 'https://api.map.baidu.com/geocoder/v2/?' +
            param({
              'ak': 'ASAT5N3tnHIa4APW0SNPeXN5',
              'location': [res.latitude, res.longitude].join(","),
              'output': 'json',
              'pois': '0',
            }),
          data: {},
          header: {
            'Content-Type': 'application/json'
          },
          success(res) {
            var city = res.data.result.addressComponent.city.replace('市', '')
            self.searchWeather(city)
          }
        })
      },
    })
  },

  searchWeather(city) {
    let self = this

    wx.request({
      url: 'https://wthrcdn.etouch.cn/weather_mini?' +
        param({
          city
        }),
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success(res) {
        if (res.data.status == 1002)
          wx.showModal({
            title: 'WARN',
            content: 'Input City NOT Valid',
            showCancel: false,
            success(res) {
              self.setData({
                inputCity: ''
              })
            }
          })
          
        if (data.status === 1000)
        {
          let weather = res.data.data

          weather.forecast.forEach(function(day) {
            day.date = ' ' + day.date.replace('星期', '  星期')
          })

          this.setData({
            city,
            weather: weather,
            inputCity: ''
          })
        }
      }
    })
  },

  inputing(e) {
    this.setData({
      inputCity: e.detail.value
    })
  },

  bindSearch() {
    this.searchWeather(this.data.inputCity)
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