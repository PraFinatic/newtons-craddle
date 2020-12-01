class roof1 {
    constructor(x,y,width,height) {

    var options={
            restitution:0.5,
            friction:0.5,
            density:1.2
            }
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        Matter.body.setAngle(this.body,angle);
        this.body=Bodies.rect(x,y,width,height,options);
        World.add(world,this.body);

        display(); {
            var roof1Pos=this.body.position;
            push();
            translate(roof1Pos.x,roof1Pos.y);
            //rectMode(CENTER);
            strokeWeight(3);
            fill("blue");
            rect(0,0,this.width,this.height);
            pop();
        }
        
    }
}