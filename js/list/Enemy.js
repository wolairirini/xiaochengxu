class Enemy{
	constructor(id,type,hp,speed,score){
		this.type = type;
		this.hp = hp;
		this.speed = speed;
		this.score = score;
		this.enemy;
		this.t = 0;
		this.l = 0;
		this.id = id;
		this.dead;
	}
	init(){
		this.createEnemy();
		this.move();
	}
	createEnemy(){
		var _this = this;
		this.enemy = document.createElement("img");
		this.enemy.src = this.type[0];
		engine.game.appendChild(this.enemy);
		this.enemy.onload = function(){
			_this.t = -_this.enemy.offsetHeight;
			_this.l = Math.round((engine.game.offsetWidth-_this.enemy.offsetWidth)*Math.random());
			_this.enemy.style.top = _this.t+"px";
			_this.enemy.style.left = _this.l+"px";
			engine.enemy[_this.id] = _this;
		}
	}
	move(){
		var _this = this;
		this.timer = setInterval(function(){
			_this.t += _this.speed;
			_this.enemy.style.top = _this.t+"px";
			_this.struct();
			if(_this.t>=engine.game.offsetHeight){
				_this.enemy.remove();
				delete engine.enemy[_this.id];
				clearInterval(_this.timer);
			}
		},20)
	}
	destroy(){
		var _this = this;
		engine.score.firstElementChild.innerText = Number(engine.score.firstElementChild.innerText)+Number(this.score);
		this.dead = document.createElement("img");
		this.dead.src = this.type[1];
		engine.game.appendChild(this.dead);
		this.dead.style.top = this.enemy.style.top;
		this.dead.style.left = this.enemy.style.left;
		setTimeout(function(){
			_this.dead.remove();
		},1000)
		this.enemy.remove();
		delete engine.enemy[this.id];
		clearInterval(this.timer);
	}
	struct(){
		var l1 = this.l>engine.hero.l+engine.hero.hero.offsetWidth;
		var l2 = engine.hero.l>this.l+this.enemy.offsetWidth;	
		var t1 = this.t>engine.hero.t+engine.hero.hero.offsetHeight;
		var t2 = engine.hero.t>this.t+this.enemy.offsetHeight;
		if(l1||l2||t1||t2){
			
		}else{
			engine.hero.life--;
			engine.life.children[0].remove();
			if(engine.hero.life==0){
				engine.hero.die();
			}
			this.destroy();
		}
	}
}
