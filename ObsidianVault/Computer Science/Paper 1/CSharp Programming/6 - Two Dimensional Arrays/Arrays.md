An array is a data structure that can store multiple values in a single value.

Arrays are:
- An ordered group of elements (values) that are of the same data type
- Organised by an index; the position of the data in a list
- and **FIXED SIZE**

-----
## Size
In python we are familiar with a **list**, but in C# arrays are of a set length which means items cannot be easily removed or added. This is known as a [[Static data structures|Static data structure]].

For example if I wanted to remove the item "Robin" or `index [2]` from the below list, I could not.
What I would need to do, is recreate the whole array, just without the item Dax in it, which would make a new array of length `3`.

| Index: | 0    | 1     | 2     | 3   |
| ------ | ---- | ----- | ----- | --- |
| Value: | Milo | Lukas | Robin | Dax |

```c#
// Create array
string[] names = {"Milo", "Lukas", "Robin", "Dax"};

// Remove index[3] or "Robin" from the array
names = names.Where((num, index) => index != 2).ToArray();
```

-----
## Declaring an array
To declare an array, define the variable type with **square brackets**
`string[] myBros`

To delclare an array and insert values into it, place the values like so:
`string myBros = {"Milo", "Lukas", "Robin", "Dax"}`