class SmallEnemy extends Enemy{
	constructor(id,type,hp,speed,score){
		type = ["image/enemy1.png","image/enemy1-bang.gif"];
		hp = 1;
		speed = Math.round(5+Math.random());
		score = 5;
		super(id,type,hp,speed,score);
	}
}
class MiddleEnemy extends Enemy{
	constructor(id,type,hp,speed,score){
		type = ["image/enemy2.png","image/enemy2-bang.gif"];
		hp = 5;
		speed = Math.round(3+Math.random());
		score = 10;
		super(id,type,hp,speed,score);
	}
}
class LargeEnemy extends Enemy{
	constructor(id,type,hp,speed,score){
		type = ["image/enemy3.png","image/enemy3-bang.gif"];
		hp = 10;
		speed = Math.round(1+Math.random());
		score = 50;
		super(id,type,hp,speed,score);
	}
}