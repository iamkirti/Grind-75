✅ BFS – Breadth-First Search
💡 Idea:
Visit all neighbors first, then their neighbors, and so on — like ripple spreading out.

📦 Used When:
You want the shortest path (like in a maze).

You want to avoid recursion.

🔁 Logic:
Start at the current node

Put it in a queue

While queue not empty:

Remove node

Visit all its unvisited neighbors and add them to the queue

🔧 BFS Pseudocode (Using Queue):
js
Copy
Edit
function bfs(start):
    queue = [start]
    while queue not empty:
        (r, c) = queue.shift()
        for each (nr, nc) in neighbors:
            if not visited:
                mark visited
                queue.push((nr, nc))
🔄 Key Differences
Feature	DFS	BFS
Data Structure	Stack (or recursion)	Queue
Traversal Style	Go deep first	Explore level-by-level
Memory Usage	Less (usually)	More (can grow wide)
Finds Shortest Path	❌ No (unless weighted)	✅ Yes (in unweighted graphs)
Implementation	Easier with recursion	Better with queue

👀 In Flood Fill:
DFS: fills deep connected pixels first

BFS: fills layer by layer from center

