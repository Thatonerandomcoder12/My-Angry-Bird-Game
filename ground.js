class Ground {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.2,
          'friction':1,
          'density':1.0,
          'isStatic': true
      }
      this.ground = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.ground);
    }



    display(){
      var pos =this.ground.position;
      rectMode(CENTER);
      fill(163, 247, 94);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
  