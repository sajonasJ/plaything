class ballManager {
  constructor() {
    this.ball;
  }

  bounce(){
    let _ball = createSprite(x,y);
    _ball.setCollider("circle",0,0,50,50);
    _ball.setSpeed(2,100);

    
  }
  
}
