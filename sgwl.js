//Initialize the page and canvas.
sgSetup();

document.getElementById("headText").textContent = Window.winName;

var c = document.getElementById("myCanvas");
c.height = Window.winHeight;
c.width = Window.winWidth;
var ctx = c.getContext("2d");
Screen.buffer1 = ctx.createImageData(Window.winWidth, Window.winHeight);
Screen.buffer2 = ctx.createImageData(Window.winWidth, Window.winHeight);

//Show the buffer in the page.
var time = 0;
setInterval(update, 0);
function update() {
    time++;
    sgLoop();
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

c.onmousemove = function(event){
	debugger;
}

