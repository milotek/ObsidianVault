Bubble sort is probably the *easiest* sorting algorithm to understand.

This simple algorithm _performs poorly in real-world use_ and is used primarily as an educational tool. More efficient algorithms such as [[Insertion Sort]] are normally used.

-----
## Step by Step example
Take an array of numbers "5 1 4 2 8", and sort the array from lowest number to greatest number using bubble sort. In each step, elements written in **bold** are being compared. Three passes will be required;

First Pass

( **5** **1** 4 2 8 ) → ( **1** **5** 4 2 8 ), *The algorithm compares the first two elements, & swaps since 5 > 1.*
( 1 **5** **4** 2 8 ) → ( 1 **4** **5** 2 8 ), *Swap since 5 > 4*
( 1 4 **5** **2** 8 ) → ( 1 4 **2** **5** 8 ), *Swap since 5 > 2*
( 1 4 2 **5** **8** ) → ( 1 4 2 **5** **8** ), *Since these elements are already in order (8 > 5), they don't swap.*

Second Pass

( **1** **4** 2 5 8 ) → ( **1** **4** 2 5 8 )
( 1 **4** **2** 5 8 ) → ( 1 **2** **4** 5 8 ), *Swap since 4 > 2*
( 1 2 **4** **5** 8 ) → ( 1 2 **4** **5** 8 )
( 1 2 4 **5** **8** ) → ( 1 2 4 **5** **8** )

Now, the array is already sorted, but the algorithm does not know if it is completed. The algorithm needs one additional **whole** pass without **any** swap to know it is sorted.

Third Pass

( **1** **2** 4 5 8 ) → ( **1** **2** 4 5 8 )
( 1 **2** **4** 5 8 ) → ( 1 **2** **4** 5 8 )
( 1 2 **4** **5** 8 ) → ( 1 2 **4** **5** 8 )
( 1 2 4 **5** **8** ) → ( 1 2 4 **5** **8** )

-----
## Code implementation examples
```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for x in range(0, n-i-1):
            if arr[x] > arr[x+1]:
                arr[x], arr[x+1] = arr[x+1], arr[x]
                swapped = True
        if not swapped:
            break

# Example usage:
arr = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(arr)
print("Sorted array:", arr)
```
