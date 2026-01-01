function DFS(graph, start, visited = new Set()){
   console.log(start);
   visited.add(start);
   
   for(let i of graph[start]){
       if(!visited.has(i)){
            DFS(graph, i, visited)
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

DFS(graph, "A");
