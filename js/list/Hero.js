class Hero{
	constructor(){
		this.life = 3;
		this.hero;
		this.t = 0;
		this.l = 0;
	}
	init(){
		this.createHero();
		this.move();
	}
	createHero(){
		var _this = this;
		this.hero = document.createElement("img");
		this.hero.src = "image/hero.gif";
		engine.game.appendChild(this.hero);
		this.hero.onload = function(){
			_this.t = engine.game.offsetHeight-_this.hero.offsetHeight;
			_this.l = engine.game.offsetWidth/2-_this.hero.offsetWidth/2;
			_this.hero.style.top = _this.t+"px";
			_this.hero.style.left = _this.l+"px";
		}
	}
	move(){
		var _this = this;
		document.onmousemove = function(e){
			var e = e||event;
			_this.t = e.clientY-engine.game.offsetTop-_this.hero.offsetHeight/2;
			_this.l = e.clientX-engine.game.offsetLeft-_this.hero.offsetWidth/2;
			if(_this.t<=0){
				_this.t = 0;
			}
			if(_this.t>=engine.game.offsetHeight-_this.hero.offsetHeight){
				_this.t=engine.game.offsetHeight-_this.hero.offsetHeight;
			}
			if(_this.l<=0){
				_this.l = 0;
			}
			if(_this.l>=engine.game.offsetWidth-_this.hero.offsetWidth){
				_this.l=engine.game.offsetWidth-_this.hero.offsetWidth;
			}
			_this.hero.style.top = _this.t+"px";
			_this.hero.style.left = _this.l+"px";
		}
	}
	die(){
		var _this = this;
		this.dead = document.createElement("img");
		this.dead.src = "image/hero-bang.gif";
		engine.game.appendChild(this.dead);
		this.dead.style.top = this.hero.style.top;
		this.dead.style.left = this.hero.style.left;
		setTimeout(function(){
			_this.dead.remove();
			alert("You Die!");
			location.reload();
		},1000)
		this.hero.remove();
	}
}
