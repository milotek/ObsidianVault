
File handling is used in C# to **read** and **write** to text (.txt) files.

-----
## Usage
Using the `System.IO` module you can either [[#Reading from a file|read from a file]] or [[#Writing to a file|write to a file]].
#### Writing to a file

To use file handling methods within a program, you need to first add the `System.IO` module into the using part of the code at the top of the program:

![[CleanShot 2024-11-18 at 23.45.13@2x.png|300]]


> [!NOTE] Note
> It is best practice to include all of the modules you are using at the very start of the program so it is clear what modules the program is dependant on.

One way to create a file and write to it is with the `WriteAllText()` method from the File class. To use this method, you must specify the path and the filename of the file.

```c#
string drink;
string price;
string filename = "Price list.txt";

Console.WriteLine("Enter the drink: ");
drink = Console.ReadLine();
Console.WriteLine("Enter the price: ");
price = Console.ReadLine();

File.WriteAllText(filename, (drink + " £" + price));
```

The `WriteAllText()` method creates a file with the specified path and filename. If the file already exists, the contents of the file are overwritten.

*(If you do not specify the file path and only the filename, then by default the file will be created in the bin\debug folder of your visual studio project.)*

Alternatively, you can specify the full file path and the filename by including the @ symbol before the string:

```c#
string filename = @"U:\Documents\Price list.txt";
File.WriteAllText(filename, "Tea £1.50");
```


-----
## Reading from a file
The `ReadAllText()` method can be used to read the contents of a text file. You can either pass the filename or the file path and filename as a parameter.

*(If you do not specify the file path, it will look for the file in the bin\debug folder of your visual studio project.)*

```c#
string filename = @"U:\Documents\Price list.txt";
string text = File.ReadAllText(filename);

Console.WriteLine(text);
```

-----
## Methods
The File class has useful methods for creating, reading, updating and modifying files.


![[CleanShot 2024-11-18 at 23.56.32@2x.png]]