class UndirectedWeightedGraph {
    constructor(){
        this.nodeCount = 0;
        this.graph = {};
    }

    addNode(node){
     if(!this.graph[node]){
         this.graph[node] = {};
         this.nodeCount++;
     }
    }

    addEdge(node1, node2, edgeWeight){
     function insertEntryForBothNodes(node1, node2, edgeWeight){
        if(this.graph[node1]){
            this.graph[node1][node2] = edgeWeight;
          }
          else {
              this.graph[node1] = {[node2]: edgeWeight};
              this.nodeCount++;
          }
     }

     insertEntryForBothNodes =  insertEntryForBothNodes.bind(this);
     
     insertEntryForBothNodes(node1, node2, edgeWeight);
     insertEntryForBothNodes(node2, node1, edgeWeight);
    }

    showConnections(){
        Object.keys(this.graph).forEach(node=>console.log(
            `${node}--> ${JSON.stringify(this.graph[node])}`
        ))
    }
}