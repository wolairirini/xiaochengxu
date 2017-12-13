class Bullet{
	constructor(id){
		this.bullet;
		this.t = 0;
		this.l = 0;
		this.id = id;
	}
	init(){
		this.createBullet();
		this.move();
	}
	createBullet(){
		var _this = this;
		this.bullet = document.createElement("img");
		this.bullet.src = "image/bullet1.png";
		engine.game.appendChild(this.bullet);
		this.bullet.onload = function(){
			_this.t = engine.hero.t-_this.bullet.offsetHeight;
			_this.l = engine.hero.l+engine.hero.hero.offsetWidth/2;
			_this.bullet.style.top = _this.t+"px";
			_this.bullet.style.left = _this.l+"px";
			engine.bullet[_this.id] = _this;
		}
	}
	move(){
		var _this = this;
		this.timer = setInterval(function(){
			_this.t --;
			_this.bullet.style.top = _this.t+"px";
			_this.struct();
			if(_this.t<=0){
				_this.bullet.remove();
				delete engine.bullet[_this.id];
				clearInterval(_this.timer);
			}
		},20)
	}
	destroy(){
		this.bullet.remove();
		delete engine.bullet[this.id];
		clearInterval(this.timer);
	}
	struct(){
		for (var i in engine.enemy) {
			var l1 = this.l>engine.enemy[i].l+engine.enemy[i].enemy.offsetWidth;
			var l2 = engine.enemy[i].l>this.l+this.bullet.offsetWidth;	
			var t1 = this.t>engine.enemy[i].t+engine.enemy[i].enemy.offsetHeight;
			var t2 = engine.enemy[i].t>this.t+this.bullet.offsetHeight;
			if(l1||l2||t1||t2){
				
			}else{
				engine.enemy[i].hp--;
				if(engine.enemy[i].hp==0){
					engine.enemy[i].destroy();
				}
				this.destroy();
			}
		}
		
	}
}
