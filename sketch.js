var canvas,bg
var together
var tom,tomImg1,tomImg2
var jerry,jerryImg1,jerryImg2,jerryImg3

function preload(){
    bg = loadImage("images/garden.png")
    tomImg1 = loadImage("images/mouse1.png")
    tomImg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    tomeImg3 = loadImage("images/mouse4.png")
    jerryImg1 = loadImage("cat1.png")
    jerryImg2 = loadAnimation("images/cat2.png","images/cat3.png")
    jerryImg3 = loadImage("images/cat4.png")
}

function setup(){
    canvas = createCanvas(1000,800)

    tom = createSprite(870,600)
    tom.addAnimation("tomSleeping",tomImg1)
    tom.scale = 0.2

    jerry = createSprite(200,600)
    jerry.addAnimation("jerrySmiling",jerryImg1)
    jerry.scale = 0.15
}

function draw(){
    background(bg)

    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
       tom.velocityX-0;
       tom.addAnimation("tomLastImg",jerryImg3)
       tom.x = 300
       tom.scale = 0.2
       tom.changeAnimation("tomLastImg")
       jerry.addAnimation("jerryLastImg",jerryImg3)
       jerry.scale = 0.15
       jerry.changeAnimation(jerryLastImg)
    }

    drawSprites()
}

function keyPressed(){
if(keyCode === LEFT_ARROW){
    tom.velocityX = -5
    tom.addAnimation("tomRunning",tomImg2)
    tom.changeAnimation("tomRunning")

    jerry.addAnimation("jerryTeasing",jerryImg2)
    jerry.frameDelay = 25
    jerry.changeAnimation("jerryTeasing")
}
}
