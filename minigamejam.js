// title:  game title
// author: game developer
// desc:   short description
// script: js

var t=0
var x=96
var y=24
var dx=0
var dy=0

// base animation code
function Animation(_frames, _timing, _width, _height, _ck) {
	return {
		"frames": _frames,
		"timing": _timing,
		"timeLast": time(),
		"width": _width || 8,
		"height": _height || 8,
		"currentFrame": 0,
		"ck": _ck || 0
	}
}

Animation.prototype.update = function() {
	if (time() - this.timeLast() > this.timing) {
		if (this.currentFrame < this.frames.length) {
			this.currentFrame+=1
		} else {
			this.currentFrame=1
		}
	}
}

Animation.prototype.draw = function(_x, _y, _flp, _rot) {
	var _currentFrame = this.frames[this.currentFrame]
	spr(_currentFrame, _x, _y, this.ck, 1, _flp, _rot, this.width/8, this.height/8)
}

// base actor code
function Actor() {

}

Actor.prototype.update = function() {

}

Actor.prototype.draw = function() {

}

// base state code
function State() {

}

function TIC()
{
	if(btn(0))y--
	if(btn(1))y++
	if(btn(2))x--
	if(btn(3))x++

	cls(13)
	spr(1+((t%60)/30|0)*2,x,y,14,3,0,0,2,2)
	print("HELLO WORLD!",84,84)
	t++
}

// <TILES>
// 001:efffffffff222222f8888888f8222222f8fffffff8ff0ffff8ff0ffff8ff0fff
// 002:fffffeee2222ffee88880fee22280feefff80fff0ff80f0f0ff80f0f0ff80f0f
// 003:efffffffff222222f8888888f8222222f8fffffff8fffffff8ff0ffff8ff0fff
// 004:fffffeee2222ffee88880fee22280feefff80ffffff80f0f0ff80f0f0ff80f0f
// 017:f8fffffff8888888f888f888f8888ffff8888888f2222222ff000fffefffffef
// 018:fff800ff88880ffef8880fee88880fee88880fee2222ffee000ffeeeffffeeee
// 019:f8fffffff8888888f888f888f8888ffff8888888f2222222ff000fffefffffef
// 020:fff800ff88880ffef8880fee88880fee88880fee2222ffee000ffeeeffffeeee
// </TILES>

// <WAVES>
// 000:00000000ffffffff00000000ffffffff
// 001:0123456789abcdeffedcba9876543210
// 002:0123456789abcdef0123456789abcdef
// </WAVES>

// <SFX>
// 000:000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000304000000000
// </SFX>

// <PALETTE>
// 000:140c1c44243430346d4e4a4e854c30346524d04648757161597dced27d2c8595a16daa2cd2aa996dc2cadad45edeeed6
// </PALETTE>

