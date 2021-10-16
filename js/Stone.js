class Stone{
          constructor(x, y, w, h) {
            let options = {
              restitution: 0.8
            };
        
            this.body = Bodies.rectangle(x, y, w, h, options);
            this.w = w;
            this.h = h;
            this.color = color;
            World.add(world, this.body);
          }
      
      display(){
          var pos = this.body.position;
          translate(pos.x, pos.y);
          push();
         
          ellipseMode(CENTER);
          ellipse(0, 0, this.w, this.h);
          pop();
      }
    }
