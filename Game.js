class Game{
    constructor(){

    }
    getState(){
        var gameStateref=database.ref('gameState')
        gameStateref.on("value",function(data){
            gameState=data.val()
        })
        
    }
    update(state){
        database.ref('/').update({
            'gameState':state
        })
    }
    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
            car1=createSprite(100,200)
            car2=createSprite(300,200)
            car3=createSprite(500,200)
            car4=createSprite(700,200)
            cars=[car1,car2,car3,car4]

            drawSprites();

        }
    }
   play(){
       form.hide()
       textSize(30)
       text("Game Start",250,250)
       Player.getPlayerInfo()
       if(allPlayers!==undefined){
           var position=130;
           var x=0;
           var y=0;

       for(var i=1;1<=4;i++){
           var playerIndex="player"+i;
          // y=displayHeight-allPlayers[playerIndex].distance;
           x=x+200;
           cars[i-1].x=x;
           cars[i-1].y=y;
           if(player.index==i){
               fill("red")
               cars[i-1].shapeColor="red"
               //text(allPlayers[playerIndex].name,cars[i-1].x,cars[i-1].y+75)
               camera.position.x=displayWidth/2
               camera.position.y=cars[i-1].y
           }
           else{
               fill("black")
               cars[i-1].shapeColor="green"
               //text(allPlayers[playerIndex].name,cars[i-1].x,cars[i-1].y+75)
           }
           position=position+30
           //text(allPlayers[playerIndex].name+"--"+allPlayers[playerIndex].distance,300,position)

       }
    }
    if(keyIsDown(UP_ARROW)&&player.index!==null){
        player.distance=player.distance+50
        player.update()
    }
    
    
   }

}