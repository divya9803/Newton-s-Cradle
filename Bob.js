class Bob
{
    constructor(x, y, radius)
    {
        var options = {
                        isStatic: false,
                        'restitution': 1.4,
                        'friction': 1.0,
                        'density':1.0
                      }

        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x, this.y, (this.radius-20)/2, options);

        World.add(world, this.body);
    }
    display()
    {
      var pos = this.body.position;

      push();
      //translate(bobpos.x, bobpos.y);
      rectMode(CENTER);
      fill("pink");
      ellipse(pos.x, pos.y, this.radius, this.radius);
      pop();
    }
}