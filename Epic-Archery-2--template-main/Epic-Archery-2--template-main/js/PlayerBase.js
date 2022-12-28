class PlayerBase
{
  constructor(x,y,width,height)
  {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    var option = 
    {
      isStatic:true
    };


    this.image = loadImage("assets/base1.png")
    
  }
  display()
  {
    imageMode(CENTER);
    image(this.image,this.x,this.y,this.width,this.height);
  }
}