A tree is a hierarchal data structure.
- A special kind of graph
- Example
	- Org chart
	- DOM tree
	- View tree

## Terminology
Node / vertex

| Term             |                                                 |
| ---------------- | ----------------------------------------------- |
| Node (or vertex) | An item in a tree                               |
| Root node        | The start node, at the top of the tree          |
| Child nodes      |                                                 |
| Sub-tree         |                                                 |
| Edge             |                                                 |
| Leaves           |                                                 |
| Depth            |                                                 |
| Height           |                                                 |
| Balance          | Evenly distributed child notes between subtrees |
## Node interface
```cpp
interface Node<T>
	function getValue(): T
	function getChildren(): List<Node<T>>
end interface
```

```cpp
interface Node<T>
	function getValue(): T
	function getChildren(): List<Node<T>>
end interface
```
## Tree types


## Traversing / visiting nodes


### Pre-order
1. Visit the current node
2. Recursively traverse left subtree
3. Recursively traverse right subtree

### Post-order
1. Left
2. Right
3. Current

## In-order
!. LEft
Current
Righta

## Level-order


## Binary Search Tree

```cpp
interface Node<T> extends Comparable
	function getValue(): T
	function getChildren(): List<Node<T>>
end interface
```

What is the big O of a BST?
- If balanced: O(log n)
- If not: O
### 2-3 Trees



New elements are always Inserted into a leaf node.
## Red-Black Trees
While 2-3 trees improve balance, they do not solve the problem.
They also violate the binary aspect of BSTs, which makes operations like search harder.
Red-Black trees are conceptually the same

### Rules
1. a
2. b
3. c


