A binary tree is a type of data structure in which each node has at most two children, usually referred to as the left child and the right child.

✅ Basic Terminology
Root: The top node of the tree.

Leaf: A node with no children.

Internal node: A node with at least one child.

Height of tree: The number of edges on the longest path from the root to a leaf.

Depth of node: The number of edges from the root to the node.

🧱 Structure
plaintext
Copy
Edit
        10
       /  \
     5     20
    / \    / \
   3   7  15  25
Here:

10 is the root.

3, 7, 15, and 25 are leaves.

5 and 20 are internal nodes.

Types of Binary Trees
Full Binary Tree: Every node has 0 or 2 children.

Perfect Binary Tree: All internal nodes have 2 children and all leaves are at the same level.

Complete Binary Tree: All levels are completely filled except possibly the last, which is filled from left to right.

Balanced Binary Tree: The height difference between left and right subtrees of every node is no more than 1.

Binary Search Tree (BST): Left child < parent < right child.

Common Traversals
Inorder (LNR): Left → Node → Right

Preorder (NLR): Node → Left → Right

Postorder (LRN): Left → Right → Node

Level Order: Breadth-first using a queue.




1️⃣ Full Binary Tree
A full binary tree is a tree where every node has either 0 or 2 children (no node has only one child).

Example:
plaintext
Copy
Edit
        1
       / \
      2   3
     / \   \
    4   5   6  ❌ → This is NOT full because node 3 has only one child
✅ Correct Full Binary Tree:
plaintext
Copy
Edit
        1
       / \
      2   3
     / \ / \
    4  5 6  7
All non-leaf nodes have exactly 2 children.

2️⃣ Complete Binary Tree
A complete binary tree is a tree where all levels are fully filled, except possibly the last level, which is filled from left to right.

Example:
plaintext
Copy
Edit
        1
       / \
      2   3
     / \  4
This is a complete binary tree:

All levels are filled except the last.

The last level is filled left to right.

3️⃣ Perfect Binary Tree
A perfect binary tree is both:

Full, and

All leaf nodes are at the same depth

Example:
plaintext
Copy
Edit
        1
       / \
      2   3
     / \ / \
    4  5 6  7
✅ It's full — each node has 0 or 2 children
✅ All leaves (4, 5, 6, 7) are at the same level

4️⃣ Balanced Binary Tree
A balanced binary tree is a tree where the height difference between the left and right subtrees of every node is at most 1.

Example:
plaintext
Copy
Edit
        1
       / \
      2   3
     /
    4
Left subtree height = 2

Right subtree height = 1
✅ Difference ≤ 1 → It is balanced

