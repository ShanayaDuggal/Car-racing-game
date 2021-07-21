class Form{
    constructor(){
        this.input=createInput("Name")
        this.button=createButton("Submit")
        this.greeting=createElement("h1")

    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
    display(){
        var title=createElement("h1")
        title.html("Car Racing Game")
        title.position(displayWidth/2-50,0)

       
        this.input.position(displayWidth/2-50,160)

       
        this.button.position(displayWidth/2-50,200)

        
        this.greeting.position(displayWidth/2-50,100)

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            this.greeting.html("Hello"+player.name)
            playerCount=playerCount+1;
            player.index=playerCount
            player.updateCount(playerCount)
            player.update()
            
        })
    }
}