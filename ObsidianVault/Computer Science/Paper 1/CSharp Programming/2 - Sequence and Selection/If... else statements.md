
---
Unlike python in C# statements are formatted similarly, but the condition needs to be written in brackets and then the code to be executed if condition is met should be within two following {} brackets, like so:

```
int yourMumsWeight = 361;

if (yourMumsWeight > 250):
{
	Console.Log("Damm. Your mum fat as fuck!");
}
else:
{
	Console.Log("Well done to ur mum m8")
}
```

If you didn't know an If.. statement checks is a certain condition is true. In the case that it is true, so in the example above if your mum does weigh above **250kg** then it will tell you your mum needs to lose some weight - and if not then it congratulates her!

Note the else part is optional and it can run without - just the congratulation won't be displayed!

---
## Nested 
Nested for loops refer to having a for loop inside of a for loop. This is useful for checking multiple statements and can be cleaner than checking for multiple conditions using && and ||.

```
bool gay = true
bool furry = false

/* THIS IS NOT REPRESENTATIVE OF ME THANKS :D */

if (gay == True) {
			Console.WriteLine("Okay. Awesome!");
            if (furry == True) {
               Console.WriteLine("Wow, furry and gay, pick a struggle retard");
            }
         }
```

---
## Alternatives

In some other cases where a different or many conditions are required, you may alternatively wish to use a [[Switch Statement]] as this will save you time - it's shorter to type out than multiple repeated [[If... else statements]]!