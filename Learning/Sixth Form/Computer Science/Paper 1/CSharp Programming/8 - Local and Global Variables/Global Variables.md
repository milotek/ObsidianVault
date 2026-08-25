> Global variables are accessible from **anywhere** within the program, not just within a specific scope

-----

## Example
In C# you **cannot define true global variables**, but instead, you can have them at the lowest level possible.

```c#
using System;

namespace MeasurementConversion

{
	class Program
	{
		// Global variables
		static int choice;
		static double cm;
		static double inches;
	}
}
```