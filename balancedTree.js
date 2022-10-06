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


  function height(root){
    if(!root){
        return 0;
    }
    return 1+height(root.left)+height(root.right)
  }

  function isBalanced(root){
    if(!root){
        return true;
    }
    let leftans=isBalanced(root.left);
    if(!leftans){
        return false;
    }
    let rightans=isBalanced(root.right);
    if(!rightans){
        return false;
    }
    let leftheight=height(root.left);
    let rightheight=height(root.right);
    if(Math.abs(leftheight-rightheight<=1)){
        return true;
    }
    return false;

  }
  
  function convertToNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== "N" || arr[i]!=='None') {
        arr[i] = parseInt(arr[i]);
      } else {
        arr[i] = null;
      }
    }
  }
  
  let N=parseInt(readLine());
  let arr=[];
  while(N--){
    arr.push(readLine());
  }
  convertToNumber(arr);
  let tree = new BinaryTree();
  tree.root=tree.insertLevelOrder(arr,0,arr.length);
  if(isBalanced(tree.root)){
    console.log("True")
  }else{
    console.log("False")
  }
  