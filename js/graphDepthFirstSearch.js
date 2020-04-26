// search inside an undirected graph

// same as breadth first, but timing of when to go another level changes

// in the var example graph, you can see that the '1's line up diagonally, meaning it's
// adjency matrix instead of an incidence matrix, meaning the rows AND columns represent nodes.

// 4 nodes and 3 undirected edges
//  node[1] - node[0] , node [2] - node [1] , node[2] - node[3]

// in the example call, it is setting node[3] as the root, and asking about the distance to all nodes from node[3]

function dfs(graph, root) {
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
    // keep track of current distance

    for (let i = 0; i < current.length; i++) {
      let saveDistance = distanceTracker;
      let saveNode = current;
      if (!doneDistance.includes(i)) {
        console.log(
          `current[i] is ${current[i]} and current node is ${graph[i]}`
        );
        if (current[i] === 1) {
          nodesLen[i] = distanceTracker;
          doneDistance.push(i);
          checkOneNode(
            doneNodes,
            doneDistance,
            (distanceTracker += 1),
            (current = graph[i])
          );
          // reset node and distance to current level
          distanceTracker = saveDistance;
          current = saveNode;
        }
      }
    }
  };

  checkOneNode(doneNodes, doneDistance, distanceTracker, current);

  const output = [];

  for (let key in nodesLen) {
    if (nodesLen[key] !== Infinity) {
      output.push(parseInt(key));
    }
  }
  return output;
}

var exDFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0],
];

console.log(dfs(exDFSGraph, 1));
// console.log(test);
