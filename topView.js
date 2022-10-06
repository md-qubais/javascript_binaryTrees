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
    if (i >= n || arr[i] === null || arr[i] === NaN) {
      return null;
    }
    let tree = new Node(arr[i]);
    tree.left = this.insertLevelOrder(arr, 2 * i + 1, n);
    tree.right = this.insertLevelOrder(arr, 2 * i + 2, n);
    return tree;
  }
}

function getrightView(root, map, index) {
  if (!root) {
    return;
  }
  if (map[index] === undefined) {
    map[index] = root.data;
  }
  getrightView(root.right, map, index + 1);
  getrightView(root.left, map, index + 1);
}

function getTopView(root,map,index,minmax){
  if(!root){
    return;
  }
  if(map[index]===undefined){
    map[index]=root.data
    if(minmax[0]>index){
      minmax[0]=index;
    }
    if(minmax[1]<index){
      minmax[1]=index;
    }
  }
  getTopView(root.left,map,index-1,minmax);
  getTopView(root.right,map,index+1,minmax);
}

function topView(root){
  let map=new Map();
  let ans=[];
  let minmax=[+Infinity,-Infinity]
  getTopView(root,map,0,minmax);
  for(let i=minmax[0] ;i<=minmax[1];i++){
      ans.push(map[i]);
  }
  console.log(...ans);
}

function convertToNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "N" && arr[i] !== "None") {
      arr[i] = parseInt(arr[i]);
    } else {
      arr[i] = null;
    }
  }
}

let N = parseInt(readLine());
let arr=[]
let length=N;
while (N--) {
  arr.push(readLine())
}
convertToNumber(arr);
let tree = new BinaryTree();
tree.root = tree.insertLevelOrder(arr, 0, length);
topView(tree.root);
