class Rope 
{
    constructor(bodyA, pointB)
    {
        var options = {
                         bodyA: bodyA,
                         pointB: pointB,
                         stiffness: 0.04,
                         length : 200
                      }
        
        this.pointB = pointB;
        this.Rope = Matter.Constraint.create(options);
        World.add(world, this.Rope);
    }

    display()
    {
      if(this.Rope.bodyA)
      {
        var pointA = this.Rope.bodyA.position;
        var pointB = this.pointB;
      }
      strokeWeight(2);

      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}