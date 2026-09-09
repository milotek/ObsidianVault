
> [!NOTE] 
> Dynamic Programming

## Motivation
Solve problems with recursive structure:
- We've already seen divide and conquer strategies...
	- Such as merge sort
- But what is sub-problems overlap?

Application domains:
- Quantitative finance
- Optimisation
- Bioinformatics
- Linguistics

### Alternative motivation
It's interview fodder:
- It's a classic technique that's been around since the 20th century.
- Demonstrates problem-solving skills
- Also tests for clarity of commucation
It's also useful in practice:
- EXAMPLE TODO


## General Dynamic Programming
Requires two things:
1. Optimal substructure
	- Can you express finding the best answer to the problem in terms of combining best answers to smaller problems?
2. Overlapping sub-problems
	- Do those smaller problems potentially involving solving the same sub-sub-problems?

With optimal substructure but non-overlapping sub-problems, you have regular divide-and-conquer.

The key thing is - we remember solutions we have already computed, so we don't have to compute them again.

### Fibonacci

Compute the $n$

Imagine you wanted to find out $fib(10)$ as a human - you would go from the left to the righg

#### Code
```

function fib(k)

if k < 2 

  return k

else 

  return fib(k-1) + fib(k-2)
end if
end function
```

```
function dynamicFib(n)
    if n = 0
        return 0
    else
        previousFib ← 0
        currentFib ← 1
        repeat n − 1 times
            newFib ← previousFib + currentFib
            previousFib ← currentFib
            currentFib  ← newFib
        return currentFib
```

### Minimum cost path


| 1   | 2   | 3   |
| --- | --- | --- |
| 4   | 9   | 1   |
| 8   | 4   | 3   |

1. **INPUT**: a matrix $m * n$
2. TODO

```python
# Recursive solution
def minCost(costGrif, m, n):
	if (n < 0 or m < 0):
		return Integer.MAX_VALUE
	elif (m == 0 && n == 0)
		return costGrid[m][n]
	else:
		return costGrid[m][n] + min(minCost(costGrid, m - 1, n - 1), minCost(costGrid, m - 1, n), minCost(costGrid, m, n - 1)

# Usage
minCost(grid, 2, 2)
```


#### Decoding strings
[Compute the count of valid decodings of a string](https://www.geeksforgeeks.org/dsa/count-possible-decodings-given-digit-sequence/)



### Examples

### In the real world
- Nix and NixOS's build system?


## Summary
- Dynamic programming is an implementation technique for solving recursive problems:
	- Generalisation of divide-and-conquer
	- Two requirements:
		1. Optimal sub-structure
		2. Overlapping sub-problems
	- a

## More reading
TODO

## Endnotes

TODO

