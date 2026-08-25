
-----
A while loop repeatedly executes a block of code as long as the specified condition is **true**.

```csharp
Random rnd = new Random();
int ans = rnd.Next(1, 10);
int guess;
int guessCount = 0;

Console.WriteLine("guess my number from 1-10 teehee");![[Compression Techniques]]
guess = Convert.ToInt32(Console.ReadLine());

while (guess != ans)
{
    Console.WriteLine("lol your wrong. guess again noob.")
    guess = ****Convert.ToInt32(Console.ReadLine());
    guessCount += 1;
}

        Console.WriteLine  no h mi("YOU GUESSED IT WEL DONE U DONNY");
        Console.WriteLine($"that took you {guessCount} guesses lol");
```

*A simple number guessing game written in C# that utilises a while loop*. inj

-----
# While loopj