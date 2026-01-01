function BFS(graph, start){
    const queue = [start];
    const visited = new Set();
    
    while (queue.length > 0){
        let node = queue.shift();
        console.log(node);
        
        if(!visited.has(node)){
            visited.add(node)
            for(let i of graph[node]){
                if(!visited.has(i)){
                     queue.push(i)
                }
               
            }
        }
        
    }
}

const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: []
};

BFS(graph, "A");