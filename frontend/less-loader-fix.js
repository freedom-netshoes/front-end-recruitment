module.exports = function (content) {
  debugger
  return content.replace(/url\(('|")*(\.\/)*(.+?)('|")*\)/g, 'url(./$3)').replace(/\.\/((https?|ftp):\/\/)/, '$1')
}
