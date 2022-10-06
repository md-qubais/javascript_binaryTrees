class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
 
  checkBst(root, max, min) {
    // if (!root) {
    //   return true;
    // }
    // if (
    //   root.data > min &&
    //   root.data < max &&
    //   this.checkBst(root.left, root.data, min) &&
    //   this.checkBst(root.right, max, root.data)
    // ) {
    //   return true;
    // }
    // return false;
  }

  buildTree(parent, arr) {
    if (parent >= arr.length || arr[parent] === null || arr.length === 0) {
      return null;
    }

    let tree = new Node(arr[parent]);
    let l = 2 * parent + 1;
    let r = 2 * parent + 2;
    tree.left = this.buildTree(l, arr);
    tree.right = this.buildTree(r, arr);
    return tree;
  }
}

function convertToNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "null") {
      arr[i] = parseInt(arr[i]);
    } else {
      arr[i] = null;
    }
  }
}

let T = parseInt(readLine())
while (T--) {
  let N=parseInt(readLine());
  let arr = readLine().split(' ');
  convertToNumber(arr);
  let bst = new BST();
  bst.root = bst.buildTree(0, arr);
  if (bst.checkBst(bst.root, 10 ** 19, -(10 ** 19))) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
