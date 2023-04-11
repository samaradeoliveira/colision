//Importando módulos necessários da lib Matter
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//variáveis
let engine, world;
var backgroundImg, boat;
var canvas, angle, tower, ground, cannon;

//matrizes para balas e barcos
var balls = [];
var boats = [];

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);

  engine = Engine.create();
  world = engine.world;

  //conversão de ângulo e definição de ângulo
  angleMode(DEGREES);
  angle = 15;

  //criação do chão e adicionando ao mundo
  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  //criação da torre e adicionando ao mundo
  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);

  //criação do canhão através da classe
  cannon = new Cannon(180, 110, 130, 100, angle);
}

function draw() {
  //exibição do fundo
  image(backgroundImg, 0, 0, width, height);

  //atualização
  Engine.update(engine);

  //linha embaixo do mar
  rect(ground.position.x, ground.position.y, width * 2, 1);

  //exibindo a torre 
  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();

  //chamando a função para criar barcos
  showBoats();

  //for percorre a matriz balls para exibir as balas 
  for (var i = 0; i < balls.length; i++) {
    //chamando a função que exibe balas conforme o for percorre a matriz
    showCannonBalls(balls[i], i);
    //chamar a função de colisão
   

  }

  //exibindo o canhão
  cannon.display();
}

//função para colisão, nome: collisionWithBoat
//ela receberá a bala através do parametro index para executar 
//aquilo que está dentro dela 
function collisionWithBoat(index) {
 
     
        


       
}
   
  






//função para criar balas de canhão
function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    var cannonBall = new CannonBall(cannon.x, cannon.y);
    cannonBall.trajectory = [];
    Matter.Body.setAngle(cannonBall.body, cannon.angle);
    balls.push(cannonBall);
  }
}

//função para exibir balas de canhão
function showCannonBalls(ball, index) {
  if (ball) {
    ball.display();
    //verificar se o corpo da bala está no mar, se sim, chamar remove


   

  }
}

//função para criar barcos, aplicar velocidade e exibí-los
function showBoats() {
  if (boats.length > 0) {
    if (
      boats[boats.length - 1] === undefined ||
      boats[boats.length - 1].body.position.x < width - 300
    ) {
      var positions = [-40, -60, -70, -20];
      var position = random(positions);
      var boat = new Boat(width, height - 100, 170, 170, position);

      boats.push(boat);
    }

    for (var i = 0; i < boats.length; i++) {
      if (boats[i]) {
        Matter.Body.setVelocity(boats[i].body, {
          x: -0.9,
          y: 0
        });

        boats[i].display();
      }
    }
  } else {
    var boat = new Boat(width, height - 60, 170, 170, -60);
    boats.push(boat);
  }
}

//função para atirar balas de canhão
function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    balls[balls.length - 1].shoot();
  }
}
