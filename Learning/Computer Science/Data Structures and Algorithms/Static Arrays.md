- [ ] In statically typed languages, such as [[C#]], [[Java]] and [[C++]], arrays are of fixed size and length.
They have an allocated size and type allocated to them in memory.
These are known as [[Static Arrays]].

They are called static because the type and size cannot be changed, after being declared.
Once the array is full, it cannot store any more elements.

Some dynamically typed languages like Python or Lua do not have fixed size arrays, but rather [[Linked Lists]], which can grow or shrink in size.

## Reading
To read an element from an array, we can choose the position we want to access via an index.
An index is just a [[zero-indexed number]], indicating the position in the array. That means the first element would be at position `0`, the second at `1`, third at `2`, and so on.

![[static_array_representation_in_memory.png]]

## Traversal
We can also read all values in an array by traversing through it.

```python
for x in range(len(myArray)):
   print(myArray[x])
```

## Deleting
Deleting from an index can be tricky.

### Deleting from the end

In statically typed languages, all array indices are filled with `0`s, or some default value upon initialisation.

If we would like to remove an element from the **end of the array**, we can set its value to `0`, `null` or `-1` or whatever default value the language uses. We also reduce the array length by 1.

This is known as a soft delete. It is not deleted exactly, but overwritten by a value that denotes an empty index. We will also reduce the length by 1, since we have 1 less element in the array after deletion. 

```python
# This is a terrible example - python doesn't have static arrays!
def removeEnd(arr):
    arr[-1] = 0
```

![[static_array_delete_at_last_index.png]]
> In the above example, the value at position 2 is overwritten by 0, which represents a default value.

### Deleting at the nth position
If instead of deleting at the end, we wanted to delete an element at a random index (we'll call this index n), would we be able to perform this in $O(1)$?

We could just replace it with a default value, like we did for [[#Deleting from the end|the last one]], but this would break the contiguous nature of our array. It's ok to do that from the end, but from the middle it's not.

A better approach would be:
1. We are given the deletion index, n.
2. Iterate through the array, starting from n + 1.
3. Shift each element 1 position to the left.
4. Replace the last element with a default value, decrement length value by 1.

```python
def removeAtIndex(arr, n):
    for x in range(n + 1, len(array)):
        arr[index - 1] = arr[index]
```

![[static_array_removing_at_nth_index.png]]

The worst case for this algorithm would be: remove at the first position - because we would need to shift every element to the left. Therefore, the code above is $O(n)$.

## Insertion
Inserting into an array can be done in two different ways, too.

### Inserting at the end
If we want to insert an element at the end of the array, we can simply insert it at the next open position, which will be the last index.

```python
def insertEnd(arr, n, length, capacity):
    if length < capacity:
        arr[length] = n
```

Since we are writing a single value to the array, the time complexity is $O(1)$.

### Inserting at the nth position
Inserting at a certain index is more involved, since we will likely insert in the middle.
The way we do this is similar to [[#Deleting at the nth position]].

Consider the array `[4, 5, 6]`. If we need to insert `value` at index `n`, we cannot overwrite the original value because we would lose it.
We will need to shift all values, starting at index `n`, one position to the right.

```python
def insertMiddle(arr, n, value):
	# Shift
	# From the end, go backwards from position `n`, to make the gap
    for x in range(len(arr), n - 1, -1):
        arr[x + 1] = arr[x]
    # Insert
    arr[i] = n
```

The above image visualises the insertion of 8 at index 1, in the array [4, 5, 6]. Since we don't have enough space to keep the last element it is lost.

![[static_array_insertion_at_nth_index.png]]

## Time Complexity
Note that the Big-O Time is for worst case.

| Operation | Big-O Time | Notes                                      |
| --------- | ---------- | ------------------------------------------ |
| Reading   | $O(1)$     |                                            |
| Insertion | $O(n)$*    | If inserting at the end of the array, O(1) |
| Deletion  | $O(n)$*    | If deleting at the end of the array, O(1)  |

## Evaluation
The operations discussed are **critical** to solving a lot of interview problems. In fact, the key to solving many problems lies in being able to implement the [[#inserting at the nth position]] and [[#deleting at the nth position]] operations efficiently.

### Suggested problems
- [ ] [Max Consecutive Ones](https://leetcode.com/problems/max-consecutive-ones/)
- [ ] [Remove Element](https://leetcode.com/problems/remove-element/)
- [ ] [Replace Elements With Greatest Element On Right Side](https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/)
