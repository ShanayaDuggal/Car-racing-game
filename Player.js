class Player{
    constructor(){
        this.index=null
        this.distance=0
        this.name=null

    }
    getCount(){
        var playerCountref=database.ref('playerCount')
        playerCountref.on("value",function(data){
        playerCount=data.val()
        })

    }
    updateCount(count){
        database.ref('/').update({
            'playerCount':count
        })

    }
    update(){
        var playerIndex="player"+playerCount
        database.ref(playerIndex).set({
            'name':this.name,
            'distance':this.distance
        })

    }
     static getPlayerInfo(){
        database.ref('/').on("value",function(data){ 
            allPlayers=data.val() 
        })
     }
    }