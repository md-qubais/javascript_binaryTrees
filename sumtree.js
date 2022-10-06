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
    if(arr[i]===null){
      return null;
    }

    let tree = new Node(arr[i]);
   
    tree.left = this.insertLevelOrder(arr, 2 * i + 1, n);
    tree.right = this.insertLevelOrder(arr, 2 * i + 2, n);
    return tree;
  }
}

function getSum(root){
  if(!root){
    return 0;
  }
  return getSum(root.left)+getSum(root.right)+root.data;
}

function isSumTree(root) {
  if(!root || (!root.left && !root.right)){
    return true;
  }
  let leftSum=getSum(root.left);
  let rightSum=getSum(root.right);
  if(((leftSum+rightSum) ===root.data) && isSumTree(root.left) && isSumTree(root.right)){
    return true;
  }
  return false; 
    
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
  if (isSumTree(tree.root)) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
