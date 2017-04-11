//Initialize the page and canvas.
makeFont();
sgSetup();

document.getElementById("headText").textContent = Window.winName;

var c = document.getElementById("myCanvas");
c.height = Window.winHeight;
c.width = Window.winWidth;
var ctx = c.getContext("2d");
Screen.buffer1 = ctx.createImageData(Window.winWidth, Window.winHeight);
Screen.buffer2 = ctx.createImageData(Window.winWidth, Window.winHeight);

//Show the buffer in the page.
var timeBegin = new Date().getTime(), timeEnd;
setInterval(update, 0);
function update() {
	if (!_inDelay)sgLoop();
	//if (_sglMode == 1)textLoop();
    timeEnd = new Date().getTime();
    if(timeEnd - timeBegin > _vectDelta){
    	timeBegin = new Date().getTime();
    	Vector._v8();
    }
    if(_visualPage==0)ctx.putImageData(Screen.buffer1, 0, 0);
    else ctx.putImageData(Screen.buffer2, 0, 0);
}

//Response the keyboard event.
onkeydown = function(event){
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if(e){
		Key.push(e.keyCode|0x8000);
	}
}; 
onkeyup = function(event){
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if(e){
		Key.push(e.keyCode&0x7FFF);
	}
}; 
onkeypress = function(event){
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if(e){
		_vectKey = e.keyCode;
		Vector._v9();
		_vectKey = 0;
	}
}

//Response the mouse event.
c.onmousemove = function(event){
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if(e){
		Mouse.pos.x = e.layerX;
		Mouse.pos.y = e.layerY;
		Mouse.left = e.buttons & 0x1;
		Mouse.right = e.buttons & 0x2;
		Mouse.middle = e.buttons & 0x4;
	}
}
onmousedown = function(event){
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if(e){
		Mouse.left = e.buttons & 0x1;
		Mouse.right = e.buttons & 0x2;
		Mouse.middle = e.buttons & 0x4;
	}
}
onmouseup = function(event){
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if(e){
		if(Mouse.left != e.buttons & 0x1){
			Mouse.left = e.buttons & 0x1;
			Mouse.push({ x:e.layerX, y:e.layerY, m:1});
		}
		if(Mouse.right != e.buttons & 0x2){
			Mouse.right = e.buttons & 0x2;
			Mouse.push({ x:e.layerX, y:e.layerY, m:2});
		}
		if(Mouse.middle != e.buttons & 0x4){
			Mouse.middle = e.buttons & 0x4;
			Mouse.push({ x:e.layerX, y:e.layerY, m:4});
		}
	}
}
