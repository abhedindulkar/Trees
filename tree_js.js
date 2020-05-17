class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (this.root === null) {
      let newNode = new Node(value);
      this.root = newNode;
      console.log(this.root, "first node");
    } else {
      let newNode = new Node(value);
      let currentNode = this.root;
      let previousNode;
      console.log(currentNode, "1")

      while (currentNode !== null) {
        if (value > currentNode.value) {
          previousNode = currentNode;
          currentNode = currentNode.right;
          console.log(currentNode, "2");
        } else {
          previousNode = currentNode;
          currentNode = currentNode.left;
          console.log(currentNode, "3");
        }
      }
      if (value > previousNode.value) {
        previousNode.right = newNode;
      } else {
        previousNode.left = newNode;
      }
      // currentNode = newNode;
      console.log(previousNode, "4");
    }
    // return this;
    //Code here
  }
  lookup(value) {
    //Code here
    let currentNode = this.root;
    if(value===currentNode.value){
      return currentNode;
    }
    while (currentNode !== null) {
      if (value === currentNode.value) {
        return currentNode;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
      
    }
    return "not included";


  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
JSON.stringify(traverse(tree.root))
// tree.lookup(4);

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}





