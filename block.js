class block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:0,
		  friction:1	
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);    
      fill('rgba(0,255,0, 0.25)');
      rect(pos.x, pos.y, this.width, this.height);
    }
  };