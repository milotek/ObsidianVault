![[CleanShot 2024-10-02 at 03.13.43@2x.png]]

Find the first available (empty) position in the array and add the item to that index. If there an no available indexes then the queue is full.

-----

![[CleanShot 2024-10-02 at 03.14.05@2x.png]]

A queue is a suitable data structure as the cards come out in a specific order, and are returned back into the bottom end at the end, closely mirroring how a queue would work.

![[CleanShot 2024-10-02 at 03.14.23@2x 2.png]]
![[CleanShot 2024-10-02 at 03.14.47@2x.png]]
![[CleanShot 2024-10-02 at 03.14.59@2x.png]]

FrontPointer = **13**
RearPointer = **52**
QueueSize = **39**

![[CleanShot 2024-10-02 at 03.15.08@2x.png]]

FrontPointer = **13**
RearPointer = **3**
QueueSize = **48**

![[CleanShot 2024-10-02 at 03.15.18@2x.png]]

```lua
-- Function
local function DealCard(DeckQueue, FrontPointer, QueueSize):
	if (QueueSize > 0) then
		print(DeckQueue[FrontPointer])
		DeckQueue[FrontPointer] = nil
		DeckQueue[FrontPointer] +=
	else
		print("ERROR: deck is empty")
	end
end
```

-----

![[CleanShot 2024-10-02 at 03.15.54@2x.png]]

Array implementation: **More complicated and prone to errors**
Linked list implementation: **Less performant / slower, takes up more space**

![[CleanShot 2024-10-02 at 23.11.10@2x.png]]

By wrapping around to the start of the array, assuming it is not full.

![[CleanShot 2024-10-02 at 23.31.09@2x.png]]

`WrapAround`? I don't know...

-----

![[CleanShot 2024-10-02 at 23.32.44@2x.png]]
![[CleanShot 2024-10-03 at 00.00.59@2x.png]]

Represents the end position in the queue, where `Tail + 1` will be where new items will be enqueued.

![[CleanShot 2024-10-03 at 00.01.12@2x 1.png]]

`Cat`

![[CleanShot 2024-10-03 at 00.03.41@2x.png]]

![[CleanShot 2024-10-03 at 00.15.13@2x.png|200]]

![[CleanShot 2024-10-03 at 00.14.13@2x.png]]

Queue will become full, or assuming there is no wraparound, the tail will max out at index `99`.

-----
