

> [!TLDR] TL:DR
> ==THEY ARE NOT THE SAME==
> 
> **Parameter** is the variable in the definition of the function.
> **Argument** is the actual value of this variable that gets passed to the function.


-----
## Arguements

When you have a [[Subroutines#Functions|function]] in C# sometimes it can option take some information to be used in the function in the form of arguements, which are passed into it by

For an example, the [[ToUpper() & ToLower()|ToUpper()]] function takes **no** arguements.

```c#
string bee = "i throw bricks at the homeless";
string poop = str1.ToUpper();

Console.WriteLine(poop);

//output: I THROW BRICKS AT THE HOMELESS
```

Conversely, `Console.WriteLine()` takes **one** parameter

-----
## Parameters
Parameters