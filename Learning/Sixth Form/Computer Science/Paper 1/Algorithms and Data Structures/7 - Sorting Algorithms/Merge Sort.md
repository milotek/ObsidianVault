Merge sort is a sorting algorithm that works by splitting t

-----
## [Big O Notation](Learning/Sixth%20Form/Computer%20Science/Paper%201/Algorithms%20and%20Data%20Structures/7%20-%20Sorting%20Algorithms/Big%20O%20Notation.md)
Merge sort's [Big O Notation](Learning/Sixth%20Form/Computer%20Science/Paper%201/Algorithms%20and%20Data%20Structures/7%20-%20Sorting%20Algorithms/Big%20O%20Notation.md) is $O(n \log n)$

If you have 8 elements in your list, merge sort will split it 3 times.
If you have 16, split 4 times.
If you have 32, split 5 times.
Because of this, you can tell the number of splits from $n$ elements with the formula $log_{2}{n}$

Because the elements also need to be compared 

Therefore the overall complexity is $O((n \log) n)$ which simplifies to $O(n \log n)$.
