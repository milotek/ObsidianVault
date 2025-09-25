Merge sort is a sorting algorithm that works by splitting t

-----
## [[Big O Notation]]
Merge sort's [[Big O Notation]] is $O(n \log n)$

If you have 8 elements in your list, merge sort will split it 3 times.
If you have 16, split 4 times.
If you have 32, split 5 times.
Because of this, you can tell the number of splits from $n$ elements with the formula $log_{2}{n}$

Because the elements also need to be compared 

Therefore the overall complexity is $O((n \log) n)$ which simplifies to $O(n \log n)$.
