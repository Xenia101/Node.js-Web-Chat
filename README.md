# Node.js Web Chat

Node.js Chat Web Application with socket.io

Designed by XENIA **Bootstrap4**

## Execution / Test Environment

- Window 10
- Node.js **latest version**

## Example

- **Message Show**

```javascript
// BackEnd
var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

// FrontEnd
$("#chatLogs").append("<div class='animated fadeIn' style='background-color:rgb(248, 249, 250)'>" + data.msg + "</div>");
```

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

- **Online User Count**

```html
<div class="p-1 text-center">
    <div id="UserCount" class="badge badge-pill badge-success"></div> 
</div>
```

```javascript
// BackEnd
io.on('connection', function(socket){
    ...
    socket.on('', function(data){
        var msg = {
            mag : data.msg
            count : socket.client.conn.server.clientsCount
            }

        io.emit('', msg)
        }
    ...
});

// FrontEnd
$("#UserCount").text(data.count);
```

- **View**

<p align=center>
  <img width="300px" src="https://github.com/Xenia101/Node.js-Web-Chat/blob/master/img/image.gif?raw=true">
</p>
