class Form{
    constructor(){
        this.inp = createInput("Name")
        this.button = createButton("PLAY")
        this.Greeting = createElement("h2")

    }
    hide(){
        this.Greeting.hide()
        this.inp.hide()
        this.button.hide()
        
    }
    display(){
        var title = createElement("h1")
        title.html(" Car Race ")
        title.position(200,200)
        this.inp.position(200,180)
        this.button.position(250,323)
        this.button.mousePressed(()=>{
        this.inp.hide()
        this. button.hide()
            player.name = this.inp.value()
            playerCount += 1
            player.index = playerCount                                                                                                      
            player.update()
            player.updateCount(playerCount)
            this.Greeting.html("Hello "+ player.name)
            this.Greeting.position(100,100)
        })
    }
    
}