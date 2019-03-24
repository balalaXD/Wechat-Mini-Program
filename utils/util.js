const formatSeconds = time => {
  var time = parseFloat(time)
  var h = Math.floor(time/3600)
  var m = Math.floor((time-h*3600)/60)
  var s = time - h*3600 -m*60

  return [h, m, s].map(formatNumber).join(':')
}

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const param = params => {
  const ret = [];
  for (let key in params)
    ret.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
  return ret.join('&');
}

module.exports = {
  formatTime,
  formatSeconds,
  param
}
