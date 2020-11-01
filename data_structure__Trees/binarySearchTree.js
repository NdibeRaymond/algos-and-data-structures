debugger;
function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value);
        
        if(this.root === null){
            this.root = newNode;
            return this.root;
        }
        else {
            let currentNode = this.root;
            while(true){
               if(currentNode.value > newNode.value){
                   //left
                   if(currentNode.left === null){
                       currentNode.left = newNode;
                       return this.root;
                   }
                   currentNode = currentNode.left;
               }
               else {
                   //right
                   if(currentNode.right === null){
                       currentNode.right = newNode;
                       return this.root;
                   }
                   currentNode = currentNode.right;
               }
            }
        }
    }

    lookup(value){
        if(this.root === null) return null;
        let currentNode = this.root;
        while(true){
           if(currentNode.value === value) return currentNode;
           if(currentNode.value > value){
               if(!currentNode.left) return null;
               currentNode = currentNode.left;
           }
           else {
               if(!currentNode.right) return null;
               currentNode = currentNode.right;
           } 

        }
    }
}

// class BinarySearchTree{
//     constructor(){
//     this.root = new Node(null);
//     }
// insert(value){
//    let node = this.getNode(this.root, value);
//    if(node.value === null){
//      node.value = value;
//      return node;
//    }

//    else if(node.value > value){
//        node.left = new Node(value);
//        return node.left;
//    }
//    else {
//        node.right = new Node(value);
//        return node.right;
//    }
// }

// getNode(node, value){
//   if(node.value === null){
//     return node;
//   }
//   else {
//     if(node.value > value){
//         if(node.left === null){
//         return node;
//         }
//         return this.getNode(node.left, value);
//     }
//     else {
//         if(node.right === null){
//             return node;
//         }
//         return this.getNode(node.right, value);
//     }
//   }
// }

// search(value){
//     let node = this.getNode(this.root, value);
//     return node && node.value;
// }

// }



//             9
//       4          20
//  1       6    15     170

let tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);

