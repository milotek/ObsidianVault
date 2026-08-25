[[Dynamic arrays]] are a much more common alternative to [[static arrays]].
Unlike [[static arrays]], [[dynamic arrays]] grow as elements are added. We don’t have to specify a size upon initialisation. 

Dynamic arrays are much more common, and much more useful. The downside is, they use more memory (because of overhead), and processing power for operations.

```python
names = ["Milo", "Lukas", "Robin", "Dax"];
```

## Resize
In Python, a `list` is actual block in memory is allocated to it.
When the list needs to grow, it just doubles in size.
But this is not magic. This is actually done by copying the existing values over to a new static array that is double the size. Then the old array is deallocated.

## Explanation
With dynamic arrays, t


## Insertion



## Practice
- [ ] [Concatenation Of Array](https://leetcode.com/problems/concatenation-of-array/)

