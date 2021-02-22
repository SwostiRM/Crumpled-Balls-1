class Ground{
    constructor(width,height){
    var options={
    isStatic:true
    }
    this.body=Bodies.rectangle(400,450,width,height,options)
    this.width=width
    this.height=height
    World.add(world,this.body)
    }
    display(){
    fill("green")
    rectMode(CENTER)
    rect(400,450,this.width, this.height)
    }
    }