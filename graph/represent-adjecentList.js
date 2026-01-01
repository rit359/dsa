
class Graph{
   
    constructor(size){
        this.list = {}
    }
    
    addVertex(v){
        if(!this.list[v]){
            this.list[v] = []
        }
    }
    
    addEdge(u,v){
         this.list[v].push(u)
         this.list[u].push(v)
    }
    
    printMatrix(){
        for(let v in this.list){
            console.log(v,`-> ${this.list[v].join(",")}`)
        }
    }
}


const g = new Graph();
g.addVertex(1)
g.addVertex(2)
g.addEdge(1,2)

g.printMatrix();
