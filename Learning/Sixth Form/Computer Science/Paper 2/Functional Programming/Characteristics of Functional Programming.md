## Purity of Functions
**Purity of Functions means no side effects.**
The only thing a function can do is calculate something and return the result.
- This means that if you give a function the same input it will *always* return the same result.
- No dependancy on [[Global Variables]].
- "Stateless", which means its outcomes do not depend on anything other than the inputs.


## Immutability
**Immutability refers to how there is no assignment statements in functional programming.**
In functional programming, you are stating functions or expressions. 
- If you say `a = 5`, then a is 5.
- If you try and say `a = 5` and `a = 7`, then you have written two contradictory statements and an error is thrown.
- This effectively eliminates the possibility of side-effects, as **once assigned a value cannot be changed.**

## Functions are *first class objects*.
**This means you can use functions like any other data type**
- Functions can have names.
- Functions can be used in expressions (be assigned to variables).
- Functions can be used as inputs to outputs.
- Functions can be used as outputs to inputs.

#### Examples
From: [First Class Functions Python](https://geeksforgeeks.org/first-class-functions-python/)


*Example: function as an object*

```python
def shout(text):
	return text.upper()

print shout("Hello")

yell = shout

print yell("Hello")
```


*Example: function as parameter*
```python
def shout(text):
	return text.upper()

def whisper(text):
	return text.lower()

def greet(func):
	# storing the function in a variable
	greeting = func("Hi, there")
	print(greeting)

greet(shout)
greet(whisper)
```

-----

