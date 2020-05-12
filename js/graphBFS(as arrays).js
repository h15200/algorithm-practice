// copy of codesmith challenge

/* BIGGEST concepts:

// For a breadth first search, you need a few counting tools and procedures

1. A queue - Starts off with the first node you're checking initially. When you check your direct edges, see if they are 
in the isDone list and if not, add the edges to the queue. After addiing all neighbors, the current node queue shifts off 
into the isDone list.

2. isDone list. A potential queue item will always be checked against this so that we don't visit the same node twice

3. Visit node on the top of the queue (if you're pushing to the queue, it should be element 0). Make a note of its neighbors,
push them into the queue AFTER comparing against the isDone list.

4. Continue until the queue is empty, in which case you've traversed the entire graph!


*/

function Graph(value) {
  this.value = value;
  this.edges = [];
}

// creates another node (a node is another graph with its own value and edges) on the graph and adds it to the current edge
Graph.prototype.addNode = function (value) {
  this.edges.push(new Graph(value));
};

// returns true if the value is contained in the set
Graph.prototype.contains = function (value, queue = [this], isDone = []) {
  // base case if queue is empty, we've traversed through the entire graph without finding a match
  if (queue.length === 0) {
    return false;
  }
  const currentNode = queue[0];
  if (currentNode.value === value) return true;
  else {
    // if no match, loop through the neighbors (edges) and add to queue if not in the done list
    for (let i = 0; i < currentNode.edges.length; i++) {
      if (!isDone.includes(currentNode.edges[i])) {
        queue.push(currentNode.edges[i]);
      }
    }
    // pop off current queue item and add to isDone
    isDone.push(queue.shift());
    return this.contains(value, queue, isDone);
  }
};

// removes a given value from the graph

// similar to contain, but look for a node who's edge has the node. splice that parent node edge
Graph.prototype.remove = function (value, queue = [this], isDone = []) {
  // base case
  if (queue.length === 0) {
    return; // end of search. May or may not have found target node, but we keep going to find all connections
  }
  const node = queue[0];
  // check if any of edges are the target

  // in case there are multiple remove targets in one edge
  let isLoopDone = false;
  let spliceIndex;
  while (isLoopDone === false) {
    for (let i = 0; i < node.edges.length; i++) {
      if (node.edges[i].value === value) {
        spliceIndex = i;
      }
      // add edges to queue
      else if (!isDone.includes(node.edges[i])) {
        queue.push(node.edges[i]);
      }
    }
    if (spliceIndex === undefined) {
      // if target not found, get out of loop
      isLoopDone = true;
    } else if (spliceIndex !== undefined) {
      // if found, delete it and reset spliceIndex
      node.edges.splice(spliceIndex, 1);
      spliceIndex = undefined;
    }
  } // end of while loop

  // done with current queue node, add to isDone
  isDone.push(queue.shift());
  return this.remove(value, queue, isDone);
};

// const graph = new Graph(0);
// graph.addNode(3);
// graph.addNode(5);
// graph.addNode(6);
// graph.edges[2].edges = [new Graph(10)];
// graph.edges[2].edges[0].edges = [new Graph(5), new Graph(7)];
// graph.addNode(10);
// graph.addNode(10);
// graph.addNode(10);

// graph.remove(10);

// console.log(graph.contains(10));
// console.log(graph);
