> A **subroutines** is a named section of a code that can be called (executed) to perform a specific task.
> It's called a subroutine as they can run alongside the main code
>*(i.e: a timer that measures how long the user takes to enter an input)*

**In PYTHON we would call these functions. In C# and other languages they are subroutines**

C# provides some pre-defined subroutines that we have already used, like the **Main()** method which is automatically executed upon program start.

```c#
namespace Guessing_Game;

class Program
{
    static void Main(string[] args)
    {
        // code goes here
    }
}
```

-----

## Defining subroutines
Alongside **Main()** you can also make your own methods.

```c#
static void MyFunction() 
{
	// code to be executed
}
```

- `MyMethod()` is the name of the method
- `static` means that the method belongs to the Program class and not an object of the Program class.
- `void` means that this method does not have a return value

C# has built in functions such as [[ToUpper() & ToLower()]], which convert a string to Upper/Lower case
