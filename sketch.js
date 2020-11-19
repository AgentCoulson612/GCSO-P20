var car, wall;
var speed, mass;
var deformation;

function setup() {
    createCanvas(1600,400);
    frameRate = 120;

    speed = random(50,90);
    mass = random(400,1500);
    car = createSprite(50,200,50,50);
    wall = createSprite(1500,200,60,height/2);
    wall.shapeColor = "rgb(80,80,80)";
    car.velocityX = speed;
}

function draw() {
    background(0,0,0);

    Collide(car,wall);

    if (isTouching(car,wall))
    {
        deformation = (mass * speed * speed * 0.5)/22500;

        console.log(deformation)

        if (deformation >= 150)
        {
            car.shapeColor = "rgb(255,0,0)";
        }
        else if (deformation < 150 && deformation > 90)
        {
            car.shapeColor = "rgb(230,230,0)";
        }
        else
        {
            car.shapeColor = "rgb(0,255,0)";
        }
    }

    drawSprites();
}

function isTouching(object1, object2)
{
    if (object1.x - object2.x < object2.width/2 + object1.width/2
        && object2.x - object1.x < object2.width/2 + object1.width/2
        && object1.y - object2.y < object2.height/2 + object1.height/2
        && object2.y - object1.y < object2.height/2 + object1.height/2)
    {
        return true;
    } 
    else {
        return false;
    } 
}

function Collide(object1, object2)
{
    hasDecreased = false;

    if (isTouching(object1, object2)) {
        object1.velocityX = 0;
        object1.velocityY = 0;
        object2.velocityX = 0;
        object2.velocityY = 0;

        if (hasDecreased == false)
        {
            object1.x -= speed/30;
            hasDecreased = true
        }
    }
}