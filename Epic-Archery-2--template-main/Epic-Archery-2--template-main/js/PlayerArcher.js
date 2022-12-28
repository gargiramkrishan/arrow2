class Archery
{
  constructor(x,y,width,height,angle)
  {
     this.x = x;
     this.y = y;
     this.width = width;
     this.height = height;
     this.angle = angle;

     this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,this.angle)
     this.image = loadImage("assets/playerArcher.png")

  }
  display()
  {
    if(keyIsDown(RIGHT_ARROW) && this.angle < 457.37999999999965)
    {
       this.angle += 0.02;
    }
    if(keyIsDown(LEFT_ARROW) && this.angle > 456.82000000000016)
    {
       this.angle -= 0.02;
    }
    console.log(this.angle)
    push();
    translate(this.x,this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
  }
}