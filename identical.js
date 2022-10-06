class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insertLevelOrder(arr, i, n) {
    if (i >= n) {
      return null;
    }
    let tree = new Node(arr[i]);
    tree.left = this.insertLevelOrder(arr, 2 * i + 1, n);
    tree.right = this.insertLevelOrder(arr, 2 * i + 2, n);
    return tree;
  }
}

function isIdentical(tree1,tree2) {
    // if(!tree1 && !tree2){
    //     return true;
    // }
    // return ((tree1 && tree2) && (tree1.data===tree2.data) && isIdentical(tree1.left,tree2.left) && (isIdentical(tree1.right,tree2.right)))
}

function convertToNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "N") {
      arr[i] = parseInt(arr[i]);
    } else {
      arr[i] = null;
    }
  }
}

let arr1 = readLine().split(" ");
let arr2 = readLine().split(" ");
convertToNumber(arr1);
convertToNumber(arr2);
let tree1 = new BinaryTree();
tree1.root = tree1.insertLevelOrder(arr1, 0, arr1.length);
let tree2 = new BinaryTree();
tree2.root = tree2.insertLevelOrder(arr2, 0, arr2.length);


if (isIdentical(tree1.root, tree2.root)) {
  console.log("True");
} else {
  console.log("False");
}
