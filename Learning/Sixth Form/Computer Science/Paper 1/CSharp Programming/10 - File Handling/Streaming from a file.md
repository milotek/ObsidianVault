- The StreamWriter and StreamReader classes are alternatives to the [[File Handling Basics|file handling methods described before]].
- They can save memory when dealing with large files as it writes to files line by line and reads from files line by line, rather than the entire contents of the file.
- You still need to import the `System.IO` module into the using part of the code at the top of the program.


> [!QUESTION]- **Question:** When might you use file streaming as opposed to [[File Handling Basics|normal file handling]]?
> **Answer:**
>  When you are reading or writing to large files, as a streamer only reads a certain number of lines or the ones you tell it to.
>  
>  This saves a lot of memory and lag when dealing with *very* big text files.


-----
## Basic methods

|Method|Description|
|---|---|
|Close()|Closes the current StreamWriter object and stream associate with it.|
|Flush()|Clears all the data from the buffer and write it in the stream associate with it.|
|Write()|Write data to the stream. It has different overloads for different data types to write in stream.|
|WriteLine()|It is same as Write() but it adds the newline character at the end of the data.|
