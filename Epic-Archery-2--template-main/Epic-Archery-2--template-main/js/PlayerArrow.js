class Aroooooooow
{
  
  constructor(x,y)
  {
     this.x = x;
     this.y = y;
     this.width = 200;
     this.height = 150;
     var option =
     {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
     };

     this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,option)
     this.image = loadImage("assets/arrow.png")
     World.add(world, this.body);

  }
  shoot()
  {
    var velocity = p5.Vector.fromAngle(arroe.angle);
    velocity.mult(45)
    Matter.Body.setStatic(this.body,false)
    Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
  }
  display()
  {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
  }
}