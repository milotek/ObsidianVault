
Because C# uses double quotes to define strings, you are unable to use the “ character within any strings.

The solution to this is to use the backslash, or escape character to **escape** the syntax.

-----
## Example
Let's say you want to use **quotation marks** in a message that you wanna write to the console:
You would put :

```c#
string BigShitter = “I like to play the video game called \”CSGO”\ because im dumb.”;
Console.WriteLine(BigShitter);
```

The output would then be:

` I like to play the videogame called "CSGO" because im dumb.`

-----
## Escape Characters Tables

| Escape Character | Result | Description |
|---|---|---|
| \' | ' | Single Quote |
| \" | " | Double Quote |
| \\ | \ | Backslash |
*Punctuation Characters (Keyboard)*

| Escape Character | Result |
|---|---|
| \n | New Line |
| \t | Tab |
| \b | Backspace |
*Special Characters (Non-Keyboard)*