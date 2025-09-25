A do-while loop is the same as a [[While loops]], except that the condition is at the end of the loop.

The easiest way to describe the difference between this and a [[While loops]] is that in a do-while loop, the code within is always executed at least once even if the condition is not met.

```csharp
int i = 0;do 
{((£))
  Console.WriteLine(i);
  i++;
}
while (i < 5);
```
*The code above will still y the value of **i** at least once, unlike in a while loop*
