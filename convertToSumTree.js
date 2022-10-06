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
    insert(value,q){
        if(value===null){
            //do something
            return;
        }
        let node=new Node(value);
        if(root===null){
            root=node;
            return;
        }
        
    }
    insertLevelFromOrder(arr){
        let q=[];
        for(let i=0;i<arr.length;i++){
            insert(arr[i],q);
        }
        return this.root;
    }
  }


  function convertToSumTree(root){
    if(!root.left && !root.right){
        let val=root.data;
        root.data=0;
        return val;
    }
    let leftSum=0;
    if(root.left){
        leftSum=convertToSumTree(root.left)
    }
    let rightSum=0;
    if(root.right){
        rightSum=convertToSumTree(root.right)
    }
    let val=root.data;
    root.data=leftSum+rightSum;
    return val+leftSum+rightSum
  }


  function preorder(root){
    if(!root){
        return;
    }
    console.log(root.data);
    preorder(root.left);
    preorder(root.right)
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
  
  let T = 1//parseInt(readLine());
  while (T--) {
    let arr = "1 2 3 N N 4 6 N 5 N N 7 N".split(" ");
    convertToNumber(arr);
    let tree = new BinaryTree();
    tree.root = tree.insertLevelFromOrder(arr);
    convertToSumTree(tree.root);
    preorder(tree.root);
  }
  