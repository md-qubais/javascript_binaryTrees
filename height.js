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
    
    height(root){

        // if(!root){
        //     return 0;
        // }
        // return  Math.max(this.height(root.left) ,this.height(root.right))+1

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
  
  function convertToNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== "N") {
        arr[i] = parseInt(arr[i]);
      } else {
        arr[i] = null;
      }
    }
  }
  
  let arr = readLine().split(" ");
  convertToNumber(arr);
  let tree = new BinaryTree();
  tree.root=tree.insertLevelOrder(arr,0,arr.length)
  console.log(tree.height(tree.root))
  