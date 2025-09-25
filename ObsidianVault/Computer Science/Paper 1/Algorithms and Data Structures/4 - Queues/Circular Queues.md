
A **circular queue** is a linear data structure that follows the **FIFO (First In, First Out)** principle but connects the last position back to the first, forming a circle. This avoids the issue of wasted space in a traditional queue where elements are dequeued but space isn't reused.
#### Key Points:
- **Front**: Points to the first element  of the queue.
- **Rear**: Points to the last element.
- **Wrap Around**: When the rear or front reaches the end of the array, they wrap around to the beginning, if space is available.

-----
#### Operations:
1. **Enqueue**: Adds an element to the rear. If the rear is at the end, it wraps to the front if there’s space.
2. **Dequeue**: Removes an element from the front. The front moves forward, wrapping to the beginning if necessary.
3. **Full Queue**: Occurs when `(rear + 1) % size == front`.
4. **Empty Queue**: Occurs when `front == rear`.

![[CleanShot 2024-10-03 at 08.45.40@2x.png]]
#### Advantages:
- Efficient use of space.
- Useful in buffering scenarios (e.g., circular buffers, task scheduling).

