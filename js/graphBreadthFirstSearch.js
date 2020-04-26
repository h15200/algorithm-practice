// search inside an undirected graph

// in the var example graph, you can see that the '1's line up diagonally, meaning it's
// adjency matrix instead of an incidence matrix, meaning the rows AND columns represent nodes.

// 4 nodes and 3 undirected edges
//  node[1] - node[0] , node [2] - node [1] , node[2] - node[3]

// in the example call, it is setting node[3] as the root, and asking about the distance to all nodes from node[3]

function bfs(graph, root) {
  // Distance object returned
  const nodesLen = {};

  // first, assign all as Infinity
  for (let i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity;
  }
  // assign self to 0
  nodesLen[root] = 0;

  let doneNodes = [];
  let doneDistance = [root];
  let distanceTracker = 1;
  let currentIndex = root;
  let current = graph[currentIndex];

  // set up loop

  const checkOneNode = (doneNodes, doneDistance, distanceTracker, current) => {
    const neighborNodes = [];
    // console.log(current);
    for (let i = 0; i < current.length; i++) {
      if (!doneDistance.includes(i)) {
        if (current[i] === 1) {
          // keep track of connected neighbor nodes
          neighborNodes.push(i);
          nodesLen[i] = distanceTracker;
          doneDistance.push(i);
        }
      }
    }
    doneNodes.push(currentIndex); // node index recorded as 'done'
    distanceTracker++;
    for (let index of neighborNodes) {
      if (!doneNodes.includes(index)) {
        checkOneNode(
          doneNodes,
          doneDistance,
          distanceTracker,
          (current = graph[index])
        );
      }
    }
  };
  checkOneNode(doneNodes, doneDistance, distanceTracker, current);

  return nodesLen;
}

var exBFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0],
];
console.log(bfs(exBFSGraph, 3));
