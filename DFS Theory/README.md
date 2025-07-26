🌍 Real-Life DFS Use Cases
Problem Type	DFS Usage
Maze solving	Explore paths until dead end (backtrack)
Flood fill / Paint fill	Fill connected areas (like MS Paint bucket)
Topological Sort	DFS on DAG (directed acyclic graph)
Cycle Detection	DFS to detect if you revisit a node
Island Counting	DFS on grid (count connected components)
File System Traversal	Recursively explore folders/files


🧠 Core Idea Behind DFS:
"Go as far as you can in one direction, then backtrack."

That basic idea can be adapted to:

Trees: go deep into left/right child nodes

Graphs: go through connected vertices

Matrices: go through adjacent cells

Mazes/games: explore all reachable paths


✅ DFS is a universal traversal strategy
It can be applied to:

Structure	How DFS is Applied
Array / 2D Matrix	Explore in 4 directions (up/down/left/right) like in flood fill
Binary Tree / N-ary Tree	Traverse nodes via Preorder, Inorder, Postorder (recursive or with stack)
Graph (adjacency list / matrix)	Visit nodes and all connected neighbors (to explore components, cycles, paths, etc.)


✅ DFS – Depth-First Search
💡 Idea:
Go as deep as possible down one path before backtracking.

📦 Used When:
You want to explore one path fully before trying others.

You're okay using recursion or a stack.

🔁 Logic:
Start at the current node

Mark it as visited

Visit one of its unvisited neighbors

Repeat for that neighbor

Backtrack when no unvisited neighbors remain



📘 Example (2D grid):
txt
Copy
Edit
Start at (0,0)

→ Go to (0,1)
   → Go to (0,2)
      → Backtrack
→ Go to (1,0)
   → Go to (2,0)


   ✅ You can implement DFS in two ways:
DFS Type	Tool
Recursive DFS	Function calls + call stack
Iterative DFS	Explicit stack (LIFO)

