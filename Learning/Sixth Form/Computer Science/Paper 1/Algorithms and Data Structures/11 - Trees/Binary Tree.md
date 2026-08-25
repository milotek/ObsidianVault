A **Binary Search Tree (BST)** is a data structure where each node has at most two children, often referred to as the left and right children. The properties of a BST are:
1. The left subtree of a node contains only nodes with values **less than** the node's value.
2. The right subtree of a node contains only nodes with values **greater than** the node's value.
3. The left and right subtrees must also be binary search trees.

This structure is useful for operations like search, insertion, and deletion, which can be performed efficiently (in O(log n) time) if the tree is balanced.

## Visualisation of BST
[Binary search tree visualisation](https://cs.usfca.edu/~galles/visualization/bst.html)



-----
## Making a BST
**To construct a BST** from an array, the general approach is:
1. Start with an empty tree.
2. Insert elements from the array one by one.
3. For each element, compare it with the root:
    - If the value is less than the current node, move to the left child.
    - If the value is greater than the current node, move to the right child.
    - Repeat until the appropriate position is found, and insert the value.

> [!NOTE] BST example
> ```mermaid
> graph TB;
> A((8))-->B((3))
> A-->C((10))
> B-->D((1))
> B-->E((6))
> C-->F((9))
> C-->G((14))
> E-->H((4))
> E-->I((7))
> ```


-----
## Question
**Construct the binary search tree using an array.**
17, 8, 4, 12, 22, 19, 14, 5, 30, 25

> [!NOTE]+ Answer
> ```mermaid
> graph TB;
> A((17))-->B((8))
> B-->C((4))
> B-->D((12))
> A-->E((22))
> E-->F((19))
> D-->G((14))
> C-->H((5))
> E-->I((30))
> I-->J((25))
> ```


-----
## Uses in real world
1. **Searching and Sorting**: Efficient for dynamic data where frequent insertions and deletions are needed.
2. **Database Indexing**: Used to maintain ordered data for fast access.
3. **Range Queries**: Efficient for finding all elements within a given range.
4. **Autocompletion Systems**: Helps with predictive text and lookup operations.