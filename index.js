if (typeof document === 'undefined')
  module.exports = require('canvas')
else {
  exports = module.exports = 
  function Canvas(width, height) {
    var canvas = document.createElement('canvas') 
    canvas.width = width
    canvas.height = height
    return canvas
  }
  exports.Image = Image
  exports.Canvas = Canvas
}
