Linear search is the simplest type of search algorithm
It goes line by line, checking if the current value is equal to the search term.
It repeats this until it eventually finds it, or gets to the end of the array (which means the item is not in the array).


> [!NOTE] Linear search's algorithm in words.
> "Start at the beginning, check every item until you find what you're looking for, or, until you get to the end"

-----
## Pseudocode
```lua
-- LINEAR SEARCH FUNCTION --

function linearSearch(arr, target)
	for i = 1, #arr do
		if arr[i] == target then
			return i --Return item position
		end
	end
	return nil --Return nothing if target is not found
end

-- EXAMPLE USAGE --

local sexOffendersRegistry = {Sunny, Felix, Nikita, Milo, Sam}
local searchTerms = Milo

local result = linearSearch(numbers, target)
print(result)

```

-----
## [[Big O Notation|Complexity]]
Worst case?

