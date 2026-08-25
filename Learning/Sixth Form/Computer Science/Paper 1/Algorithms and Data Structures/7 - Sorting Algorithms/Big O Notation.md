
Big O notation is a fundamental concept in computer science that quantifies the efficiency of algorithms. It provides a standardized way to analyze and compare the performance of different algorithms as the input size grows. Understanding Big O notation is used to analyse the efficiency of code where performance matters.

-----
## Example
Suppose we have an algorithm that iterates through an array of size n and performs a constant-time operation on each element. The time complexity of this algorithm would be O(n) since the number of operations grows linearly with the input size.

-----
## Families
O notations can be classified into mainly 5 different types:

1. $O(1)$ - Constant Time: Operations take the same amount of time regardless of the input size.
2. $O(\log n)$ - Logarithmic Time: The time taken grows logarithmically with the input size.
3. $O(n)$ - Linear Time: Time complexity increases linearly with the input size.
4. $O(n^2)$ - Quadratic Time: Time complexity grows quadratically with the input size.
5. $O(2^n)$ - Exponential Time: Time complexity doubles with each addition to the input size.

If you have one like $n^2 - n + 1$, then the family would be **quadratic** as the $n^2$ is making the biggest contribution number-wise (highest power).


-----
## Sorting algorithms and their O Complexities

> [!NOTE] Note
> Sorting algorithms do not just have a single o complexity as they are used on a wide variety of datasets, some of which can be inefficient for one algorithm but great for the other, or vice versa.
> Because of this, they have a **best**, **average** **worst** and **space** complexity.
> - **Best** describes how efficient they would be given the absolute perfect, best dataset for them, for example already fully sorted or nearly fully sorted dataset *of n length.*
> - **Average** is the average, typically time it would take on a typical dataset *of n length.*
> - **Worst** is the performance it will have *at least* on any given dataset *of n length.*
> - The **space complexity** is the amount of memory space required for the algorithm to work on a dataset *of n length*
#### [[Bubble sort]]
- Worst-case time complexity: O(n^2)
- Average-case time complexity: O(n^2)
- Best-case time complexity: O(n)
- Space complexity: O(1)

#### [[Selection sort]]
- Worst-case time complexity: O(n^2)
- Average-case time complexity: O(n^2)
- Best-case time complexity: O(n^2)
- Space complexity: O(1)

#### [[Insertion Sort]]
- Worst-case time complexity: O(n^2)
- Average-case time complexity: O(n^2)
- Best-case time complexity: O(n)
- Space complexity: O(1)