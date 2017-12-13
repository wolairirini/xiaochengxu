class Engine{
	constructor(){
		this.game = document.querySelector("#game");
		this.score = this.game.firstElementChild;
		this.life = this.game.lastElementChild;
		this.status = false;
		this.hero;
		this.enemy = {};
		this.bullet = {};
	}
	init(){
		var _this = this;
		document.onclick = function(){
			if(!_this.status){
				_this.status = true;
				_this.start();
			}
			
		}
	}
	start(){
		this.loadBg();
		this.loadHero();
		this.loadEnemy();
		this.shoot();
	}
	loadBg(){
		var _this = this;
		var t = 0;
		this.score.style.display = "block";
		this.life.style.display = "block";
		this.game.style.background = "url(image/bg.png)";
		var timer = setInterval(function(){
			t++;
			_this.game.style.backgroundPositionY = t+"px";
		},20)
	}
	loadHero(){
		this.hero = new Hero; 
		this.hero.init();
	}
	loadEnemy(){
		var _this = this;
		var n = 0;
		this.timer = setInterval(function(){
			var ranN = Math.random()*100;
			var enemy;
			if(ranN>=50){
				enemy = new SmallEnemy(n);
			}else if(ranN>=10&&ranN<50){
				enemy = new MiddleEnemy(n);
			}else{
				enemy = new LargeEnemy(n);
			}
			enemy.init();
			n++;
		},1000)
	}
	shoot(){
		var n = 0;
		document.onkeydown = function(){
			n++;
			var bullet = new Bullet(n);
			bullet.init();
		}
	}
}
var engine = new Engine();
engine.init();