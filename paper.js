class paper
{
  constructor(x,y,r)
  {
    var options ={
        isStatic:false,
        resitution:0.2,
        density:1.2,
        friction:0
    }
    this.image=loadImage("sprites/paper.png")
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options);
    World.add(world,this.body)
  }
  display(){
    fill("yellow")
    push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0, this.r,this.r);
        pop();
  }
}