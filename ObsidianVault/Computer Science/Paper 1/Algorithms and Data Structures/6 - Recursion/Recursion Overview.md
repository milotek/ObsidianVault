
> [!TLDR] Definition
> Recursion occurs when a function calls itself inside of itself.
> 
> A common use would be a **Fibbonachi** function, for example.
> Each number in the sequence is the *sum of the two numbers before it*.
> 
> ```python
> def fibonacci(n):
>     if n < 0:
>         raise ValueError("Fibonacci is not defined for negative numbers!")
>     elif n == 0:
>         return 0  # Fibbonacchi of 0 is always 0
>     elif n == 1:
>         return 1  # Fibbonacchi of 1 is always 1
>     else:
>         return fibonacci(n - 1) + fibonacci(n - 2)  # Recursive case
> 
> # Example usage:
> print(fibonacci(6))  # Output: 8
> 
> ```

-----

## Examples
```c#
// Calculates the factorial of the number given. Uses recursion.
static int Factorial(int num)  
{  
    int result = 1;  
    if (num == 1) return 1;  
    else  
    {  
        result = num * Factorial(num - 1);  
    }    return result;  
}


// OUTPUT
static void Main(string[] args)  
{  
    Console.WriteLine("Enter a number")  
    int poo = Convert.ToInt32(Console.ReadLine());  
}
```

```c#
// Calculates the <num> triangular number. Uses recursion
static int triangularNumber(int num)  
{  
    int result = 0;  
    if (num == 1) return 1;  
    else  
    {  
        return num + triangularNumber(num - 1);  
    }
}


// OUTPUT
static void Main(string[] args)  
{  
    Console.WriteLine("Enter a number")  
    int poo = Convert.ToInt32(Console.ReadLine());  
}
```

-----
## Real world use
Friendly reminder: 
1. In commercial code, readability and maintainability are top priorities.
2. Loops are easier for the next person to modify than recursion. 
3. Using recursion just because it's a cool concept will make your coworkers hate you.