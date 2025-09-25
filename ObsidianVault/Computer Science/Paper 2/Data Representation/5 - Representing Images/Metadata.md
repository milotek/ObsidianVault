
-----
Metadata refers to literally "data about data" - in the simplest way to describe it.
It is simply extra information related to the file - but not a core part of it.
For an example, most files in windows will have metadata like:
- "Last opened/edited"
- "Date Created"
- "Author"
et
-----
## Example of metadata within songs

![[Screenshot 2023-09-28 at 11.22.57.png|400]]

Typically within songs the metadata will be stuff like:
- Song name
- Track #
- Album
- Artist
- Year
Alongside the usual stuff mentioned above of course.. there's also some more advanced stuff:
- Sample rate (typically almost always 44100hz)
- Bit depth
- Bit rate 

---
## Example of metadata within photos

![[Pasted image 20230928113331.png|300]]

This is the metadata from my wallpaper! I'm not going to beat around the bush it's kinda gay but I don't care because it's funny.

Typically you would expect the following for a [[Bitmap Graphics]] file's metadata:
- [[Resolution]] / Dimensions
- Color (bit) depth
---
## Modern metadata standards today

Today most modern metadata is defined by yet another adobe file standard (***COUGH COUGH SVG***) which is called **XMP** - nowadays most files can use XMP data alongside their OG metadata.

Unlike previously, XMP data can be slapped onto almost every file - and it's essentially a "sidecar" file by definition, coming along with the original file/data. Instead of having predefined set metadata per file like the ones above, XMP lets you choose almost anything as a parameter, allowing you to basically put anything in it and keep it when transferring the file (say sending it to your friend).

For an example, you could use XMP to define a face region within a file or when scanning a file, and then editing and printing it you can track the progress and what has changed - or have per file settings for programs where you import things.

---
## Final notes

See and read [[EXIF data]]!
