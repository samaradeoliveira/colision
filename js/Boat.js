class Boat {
  //método para construir barcos
  constructor(x, y, width, height, boatPos) {

    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;

    this.image = loadImage("./assets/boat.png");
    this.boatPosition = boatPos;
    World.add(world, this.body);
  }

  //ativar método remove
  //remove o barco depois de 2 segundos 
  /*remove(i) {
    setTimeout(() => {
      Matter.World.remove(world, boats[i].body);
      delete boats[i];
    }, 2000);
  }*/


  //método para exibir os barcos
  display() {
    var angle = this.body.angle;
    var pos = this.body.position;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, this.boatPosition, this.width, this.height);
    pop();
  }
}
