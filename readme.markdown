## dom-node-transfer

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

transfer one dom node into another, then delete the duplicated dom node, then call a callback.

```npm install dom-node-transfer -S```

### Usage

```js
var domNodeTransfer = require('dom-node-transfer')

var dup = document.getElementById('dup')
var target = document.getElementById('target')

domNodeTransfer(dup, target, function () {
  console.log('done!')
})

/*  before
<div id='dup'>wow</div>
<div id='target'></div>
*/

/* after
<div id='target'>
  <div id='dup'>wow</div>
</div>
*/
```

[jsfiddle](https://jsfiddle.net/jekrb/g8w8p9u9/)
