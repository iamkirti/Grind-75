/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {

    if(root===null){
        return true
    }

    function heightofSubtree(root){
        if(root===null){
            return 0;
        }

        return 1+Math.max(heightofSubtree(root.left),heightofSubtree(root.right))

    }
   if(Math.abs(heightofSubtree(root.left)-heightofSubtree(root.right))>1) 
    return false;
   else
    return isBalanced(root.left)&&isBalanced(root.right);

    
};