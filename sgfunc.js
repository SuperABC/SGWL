var Window = {
	winWidth:640,
	winHeight:480,
	txtWidth:80,
	txtHeight:25,
	timeFreq:50,
	winName:"SGL Demo"
};
var Screen = {
	buffer1:null,
	buffer2:null,
	content:{ width:0, height:0, content:[] },
	changed:{ width:0, height:0, content:[] },
	rgb:new Array(3),
	bfc:0xF<<4
};
var Mouse = {
	pos:{ x:0, y:0 },
	mouseBuf:new Array(1024),
	front:-1, rear:0,
	left:0, middle:0, right:0,
	clicked:0, coord:0,
	push:function(num){
		this.front = (this.front+1)%1024;
		this.mouseBuf[this.front] = num;
	},
	pop:function(){
		if(this.front+1==this.rear)return null;
		var ret = this.mouseBuf[this.rear];
		this.rear = (this.rear+1)%1024;
		return ret;
	}
};
var Key = {
	keyBuf:new Array(1024),
	front:-1, rear:0,
	push:function(num){
		this.front = (this.front+1)%1024;
		this.keyBuf[this.front] = num;
	},
	pop:function(){
		if(this.front+1==this.rear)return null;
		var ret = this.keyBuf[this.rear];
		this.rear = (this.rear+1)%1024;
		return ret;
	}
};
var Vector = {
	_v8:function(){},
	_v9:function(){}
};

var _sglMode = 0, _innerFunc = 0;
var _delaySE = 0, _inDelay = 0;
var _delayBegin = 0, _delayEnd = 0, _vectDelta = 50;
var _vectKey = 0;
var _enMouse = 0, _enKey = 0;
var _activePage = 0, _visualPage = 0;
var _inLoop = 0, _full = 0;

function initWindow(width, height, title, mode){
	Window.winName = title;
	if(mode==0){
		Window.winWidth = width;
		Window.winHeight = height;
	}
	else if(mode==1){
		Window.txtWidth = width;
		Window.txtHeight = height;
		Window.winWidth = width*8;
		Window.winHeight = height*16;
	}
}