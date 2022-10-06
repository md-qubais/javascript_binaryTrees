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
    if (arr[i] === null) {
      return null;
    }

    let tree = new Node(arr[i]);
    tree.left = this.insertLevelOrder(arr, 2 * i + 1, n);
    tree.right = this.insertLevelOrder(arr, 2 * i + 2, n);
    return tree;
  }
}

function isSymmetric(left,right) {
    if(left==null && right==null){
        return true;
    }
    if(left && right==null){
        return false;
    }
    if(right && left==null){
        return false;
    }
    let ans1=isSymmetric(left.left,right.right);
    if(!ans1){
        return false;
    }
    let ans2=isSymmetric(left.right,right.left);
    if(!ans2){
        return false;
    }
    return true;
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

let T = parseInt(readLine());
while (T--) {
  let arr = readLine().split(" ");
  convertToNumber(arr);
  let tree = new BinaryTree();
  tree.root = tree.insertLevelOrder(arr, 0, arr.length);
  if (isSymmetric(tree.root,tree.root)) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
