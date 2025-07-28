/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

     if(root===null ||  p===root  ||  q===root){
          return root;  
     }
     if(p.val>q.val){
      [p,q]=[q,p]
     }
     if(root.val>p.val && root.val<q.val){
        return root;
     }
     else if(root.val>p.val && root.val>q.val){
      return lowestCommonAncestor(root.left,p,q);
      
     }else{
      return lowestCommonAncestor(root.right,p,q)
     }

    
};


let root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);

              6
            /   \
           2     8
         /  \   / \
        0    4 7   9
            / \
           3   5

let p = root.left; // Node 2
let q = root.left.right; // Node 4

let result = lowestCommonAncestor(root, p, q);
console.log("LCA value:", result.val); // Output: 5



console.log()