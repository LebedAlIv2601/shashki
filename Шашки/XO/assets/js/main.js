
var GameState = {
preload: function() {
this.load.image('background', 'assets/images/background.jpg');
this.load.image('black', 'assets/images/black.png')
this.load.image('white', 'assets/images/white.png')
this.load.image('pig', 'assets/images/pig.png')
this.load.image('kluv', 'assets/images/kluv.png')

},

init: function() { 
this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
this.scale.pageAlignHorizontally = true;
this.scale.pageAlignVertically = true;
},

create: function() {
this.background = this.game.add.sprite(0,0,'background')
// this.gamename = this.game.add.sprite(0,0,'gamename')
// this.restartButton = this.game.add.sprite(640, this.game.world.centerY+300-20,'restartButton')
// this.restartButton.anchor.setTo(0.5)
// this.restartButton.inputEnabled = true
// this.restartButton.input.pixelPerfectClick = true
// this.restartButton.events.onInputDown.add(this.restart, this)

var x = 0
var y = 0
var xx = 0
var yy = 0
var yyy = 400
this.button = [];
this.game.pig = [];
this.game.kluv = [];
this.game.field = [];
this.game.turn = true;
this.game.count = 0;
// this.button[i] = this.game.add.sprite(x+45,y+45 ,'white');
// this.button[i].anchor.setTo(0.5)
// this.button[i].isWhite = true
// this.button[i].prop = {number : i, status: true};
// this.button[i].inputEnabled = true
// this.button[i].pixelPerfectClick = true
// this.button[i].events.onInputDown.add(this.paint, self)

for (var i = 0; i < 64; i++) {

if(i > 0 && (i % 8) === 0)
y += 100

x = i % 8
if ((y/100) % 2 === 0){
if (i % 2 === 0){
this.button[i] = this.game.add.sprite(100 * x+50,y+50 ,'white');
this.button[i].anchor.setTo(0.5)
this.button[i].prop = {number : i, status: true};
this.button[i].isWhite = true
this.button[i].inputEnabled = false
this.button[i].pixelPerfectClick = true
// this.button[i].events.onInputDown.add(this.paint, self)
} else{
	this.button[i] = this.game.add.sprite(100 * x+50,y+50 ,'black');
	this.button[i].anchor.setTo(0.5)
this.button[i].prop = {number : i, status: true};
this.button[i].isWhite = false
this.button[i].inputEnabled = false
this.button[i].pixelPerfectClick = true
// this.button[i].events.onInputDown.add(this.paint, self)
}

}else{
	if (i % 2 === 0){
		this.button[i] = this.game.add.sprite(100 * x+50,y+50 ,'black');
		this.button[i].anchor.setTo(0.5)
this.button[i].prop = {number : i, status: true};
this.button[i].isWhite = false
this.button[i].inputEnabled = false
this.button[i].pixelPerfectClick = true
// this.button[i].events.onInputDown.add(this.paint, self)
} else{
	this.button[i] = this.game.add.sprite(100 * x+50,y+50 ,'white');
	this.button[i].anchor.setTo(0.5)
this.button[i].prop = {number : i, status: true};
this.button[i].isWhite = true
this.button[i].inputEnabled = false
this.button[i].pixelPerfectClick = true
// this.button[i].events.onInputDown.add(this.paint, self)
}}
}
for (var i = 0; i < 24; i++){
	if(i > 0 && (i % 8) === 0)
yy += 100
xx = i % 8
	if (!this.button[i].isWhite){
		this.game.pig[i] = this.game.add.sprite(100 * xx+50,yy+50 ,'pig');
		this.game.pig[i].anchor.setTo(0.5)
		// this.game.pig[i].prop = {number : i, status: true};
		this.game.pig[i].inputEnabled = true
this.game.pig[i].pixelPerfectClick = true
this.button[i].inputEnabled = false
// this.game.pig[i].events.onInputDown.add(this.hodP, self)
	}
}
for (var i = 40; i < 64; i++){
	if(i > 0 && (i % 8) === 0)
yyy += 100
xx = i % 8
	if (!this.button[i].isWhite){
		this.game.kluv[i] = this.game.add.sprite(100 * xx+50,yyy+50 ,'kluv');
		this.game.kluv[i].anchor.setTo(0.5)
		// this.game.kluv[i].prop = {number : i, status: true};
		this.game.kluv[i].inputEnabled = true
this.game.kluv[i].pixelPerfectClick = true
this.button[i].inputEnabled = false
// this.game.pig[i].events.onInputDown.add(this.hodK, self)
	}
}
},

update: function() {
this.winner(true)
this.winner(false)
},

actionOnClick: function(index) {
this.game.pig.this.prop.index
},

// hodP: function(index){
// 	var id = index.prop.number
// 	var k = id + 7;
// 	var l = id + 9;
// 	if(this.button[k].inputEnabled = true){
// 		this.button[k].events.onInputDown.add(this.hodPK, self)
// 	}
// 	if(this.button[l].inputEnabled = true){
// 		this.button[l].events.onInputDown.add(this.hodPL, self)
// 	}
// },

// hodPK: function(){
// 	this.game.pig[i].destroy();

// 	this.game.pig[k] = this.game.add.sprite(100 * k % 8+50, k % 8 * 100+50 ,'pig');
// 	this.game.pig[k].anchor.setTo(0.5)
// 		this.game.pig[k].inputEnabled = true
// this.game.pig[k].pixelPerfectClick = true
// this.button[k].inputEnabled = false
// this.game.pig[k].events.onInputDown.add(this.hodP, self)
// },

// hodK: function(index){
// var id = index.prop.number

// if(index.prop.status) {
// this.button = this.game.add.sprite(index.x, index.y, this.game.turn === true? 'krestik': 'nolik' );
// this.game.field[id] = this.game.turn
// this.game.turn === true? this.game.turn = false : this.game.turn = true;
// this.game.count++;
// }

// index.prop.status = false
// },



restart: function(){
	location.reload();
},

winner: function(number){
	if((this.game.field[0] == number && this.game.field[1] == number && this.game.field[2] == number)||(this.game.field[0] == number && this.game.field[3] == number && this.game.field[6] == number)||(this.game.field[0] == number && this.game.field[4] == number && this.game.field[8] == number)||(this.game.field[1] == number && this.game.field[4] == number && this.game.field[7] == number)||(this.game.field[2] == number && this.game.field[5] == number && this.game.field[8] == number)||(this.game.field[2] == number && this.game.field[4] == number && this.game.field[6] == number)||(this.game.field[3] == number && this.game.field[4] == number && this.game.field[5] == number)||(this.game.field[6] == number && this.game.field[7] == number && this.game.field[8] == number)){
		if (number) {
		this.nolikWin = this.game.add.sprite(640, this.game.world.centerY-20,'nolikWin')
		this.nolikWin.anchor.setTo(0.5)
	}
		if (!number){
			this.krestikiWin = this.game.add.sprite(640, this.game.world.centerY-20,'krestikiWin')
		this.krestikiWin.anchor.setTo(0.5)
		}
	} 
// 	if (((this.one)&&(!this.kvadratOne.inputEnabled) && (!this.kvadratTwo.inputEnabled) && (this.two)&&(!this.kvadratThree.inputEnabled)&&(this.three))||((this.two)&&(!this.kvadratTwo.inputEnabled) && (!this.kvadratFive.inputEnabled) && (this.five)&&(!this.kvadratEight.inputEnabled)&&(this.eight))||((this.one)&&(!this.kvadratOne.inputEnabled) && (!this.kvadratFour.inputEnabled) && (this.four)&&(!this.kvadratSeven.inputEnabled)&&(this.seven))||((this.four)&&(!this.kvadratFour.inputEnabled) && (!this.kvadratFive.inputEnabled) && (this.five)&&(!this.kvadratSix.inputEnabled)&&(this.six))||((this.one)&&(!this.kvadratOne.inputEnabled) && (!this.kvadratFive.inputEnabled) && (this.five)&&(!this.kvadratNine.inputEnabled)&&(this.nine))||((this.three)&&(!this.kvadratThree.inputEnabled) && (!this.kvadratSix.inputEnabled) && (this.six)&&(!this.kvadratNine.inputEnabled)&&(this.nine))||((this.three)&&(!this.kvadratThree.inputEnabled) && (!this.kvadratFive.inputEnabled) && (this.five)&&(!this.kvadratSeven.inputEnabled)&&(this.seven))||((this.seven)&&(!this.kvadratSeven.inputEnabled) && (!this.kvadratEight.inputEnabled) && (this.eight)&&(!this.kvadratNine.inputEnabled)&&(this.nine))){
// 		this.krestikiWin = this.game.add.sprite(640, this.game.world.centerY-20,'krestikiWin')
// 		this.krestikiWin.anchor.setTo(0.5)
// }
},





};
var game = new Phaser.Game(1280, 1220, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');