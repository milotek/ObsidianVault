![[CleanShot 2024-09-24 at 15.56.52@2x.png]]

The RPN is read from left to right.
The numbers are pushed onto the stack in that order.
When an operator is encountered, pop the last (top) two numbers from the stack.
Calculate the two numbers


![[CleanShot 2024-09-24 at 15.58.55@2x.png]]
 `3 4 2 * + 1 -`



![[CleanShot 2024-09-24 at 15.59.00@2x.png]]

| RPN           | Infix        |
| ------------- | ------------ |
| `45 6 +`      | `45 + 6`     |
| `12 19 + 8 *` | `(12+9) * 8` |
No need for order of operations (BIDMAS) or parenthesis.

![[CleanShot 2024-09-24 at 22.10.29@2x.png]]

![[CleanShot 2024-09-24 at 22.25.26@2x.png]]

![[CleanShot 2024-09-24 at 22.26.15@2x.png]]

`6 4 + 3 2 + *`

| String Pos | Token | Integer Val | Op1 | Op2 | Result | Stack        |     |
| ---------- | ----- | ----------- | --- | --- | ------ | ------------ | --- |
| 0          | -     | -           | -   | -   | -      | -            |     |
| 1          | 6     | 6           |     |     |        | 6            |     |
| 2          | 4     | 4           |     |     |        | 4<br>6       |     |
| 3          | +     |             | 6   | 4   | 10     | 10           |     |
| 4          | 3     | 3           |     |     |        | 3<br>10      |     |
| 5          | 2     | 2           |     |     |        | 2<br>3<br>10 |     |
| 6          | +     |             | 3   | 2   | 5      | 5<br>10      |     |
| 7          | *     |             | 10  | 5   | 50     | 50           |     |
Final output of algorithm: **50**

![[CleanShot 2024-09-24 at 22.31.56@2x.png]]

This is pretty much just Lua, but I make up the fact that Lua has arrays, starting at 0.
(it only has [[Dynamic data structures|dynamic size lists]]).

```lua
-- variables
local StackArray = {nil} * 20
local TopOfStackPointer = 0
local ANumber = 69

-- push function
function Push(array, value):  
	if type(array) == "array":
		for x = 0, array.Size(), 1 do
			if array[x] != nil
				array[x] = value
			end
			if x = array.Size and array[x] != value
				error("List is full")
			end
		end
	end
end

-- program
Push(StackArray, ANumber)
```

Now obviously there are better ways to do this and if the backend array gets manually fiddled with it will just put it in the first available space. Assuming the user only uses methods built for the Stack it will work fine.

