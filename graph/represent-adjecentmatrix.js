
class Graph{
    matrix;
    size;
    constructor(size){
        this.size = size;
        this.matrix = Array.from({length:size},()=> Array(size).fill(0));
    }
    
    addEdge(u,v){
        this.matrix[u][v] = 1;
        this.matrix[v][u] = 1;
    }
    
    printMatrix(){
        console.log(this.matrix);
    }
}


const g = new Graph(6);
g.addEdge(0,1)
g.addEdge(1,2)
g.printMatrix();
