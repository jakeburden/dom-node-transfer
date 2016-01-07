module.exports = domNodeTransfer

function domNodeTransfer (node1, node2, cb) {
  var dup = node1.cloneNode(true)
  node2.appendChild(dup)
  node1.parentNode.removeChild(node1)
  cb()
}
