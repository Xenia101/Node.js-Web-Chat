# Node.js Web Chat

Node.js Chat Web Application with socket.io

## Execution / Test Environment

- Window 10
- Node.js **latest version**

## Example

- **HTML**

```html
<div id="chatLogs" class="p-1"></div>

<div class="fixed-bottom p-1">
  <form class="input-group">
    <input type="text" class="form-control" id="msgForm" aria-describedby="button-addon" placeholder="텍스트를 입력해주세요!" autocomplete="off" required>
    <div class="input-group-append">
      <button type="submit" class="btn upText" id="button-addon">
        <i class="fa fa-paper-plane"></i>
      </button>
    </div>
  </form>
</div>
```

- **Node.js**

```javascript
var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
```

<p align=center>
  <img width="300px" src="https://github.com/Xenia101/Node.js-Web-Chat/blob/master/img/image.gif?raw=true">
</p>
