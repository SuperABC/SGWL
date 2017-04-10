document.write("<script src = 'sgwl.js'></script>")

function sgSetup(){
	initWindow(640, 480, "Test succeed", 0);
}
function sgLoop(){
    for (var i = 0; i < Screen.buffer1.data.length; i += 4) {
        Screen.buffer1.data[i + 0] = time % 256;
        Screen.buffer1.data[i + 1] = 0;
        Screen.buffer1.data[i + 2] = 0;
        Screen.buffer1.data[i + 3] = 255;
    }
}
