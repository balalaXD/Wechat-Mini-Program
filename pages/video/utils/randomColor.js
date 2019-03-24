function getRandomColor () {
  var colorStr = Math.floor(Math.random() * 0xFFFFFF).toString(16);
  var prefix = "0".repeat(6 - colorStr.length)

  return "#" + prefix + colorStr;
}



module.exports = getRandomColor