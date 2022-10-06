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
      if (i >= n || arr[i]===null || arr[i]===NaN) {
        return null;
      }
      let tree = new Node(arr[i]);
      tree.left = this.insertLevelOrder(arr, 2 * i + 1, n);
      tree.right = this.insertLevelOrder(arr, 2 * i + 2, n);
      return tree;
    }
  }


  function getrightView(root,map,index){
    if(!root){
        return ;
    }
    if(map[index]===undefined){
        map[index]=root.data;
    }
    getrightView(root.right,map,index+1);
    getrightView(root.left,map,index+1);
  }


  function rightView(root){
    let map=new Map();
    getrightView(root,map,0);
    let arr=[];
    for(let i in map){
        arr.push(map[i]);
    }
    console.log(...arr);
  }


  
  function convertToNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== "N" && arr[i]!=='None') {
        arr[i] = parseInt(arr[i]);
      } else {
        arr[i] = null;
      }
    }
  }
  
  let T=parseInt(readLine())
  while(T--){
    let N=parseInt(readLine());
    let arr=readLine().split(" ");
    convertToNumber(arr);
    let tree = new BinaryTree();
    tree.root=tree.insertLevelOrder(arr,0,N);
  
    rightView(tree.root);
   
}  