-----
>Lossy Compression refers to [[Compression]] - more specifically, the techniques therein which quality or data is lost after a file / data has been compressed. 

- When the file is decompressed, the data that was removed in the compression process will be attempted to be recreated from the data that remains by means of an algorithm

- However it will never be the exact same as the original, uncompressed file, and will assumably be of a lower quality because quality has been ***lost*.**

-----
## Why lossy compression?

For certain files like music and [[Bitmap Graphics|images]] and videos not all the data is needed - for example you could see a **4k** picture of a dog, versus a **480p** (lower resolution) picture - *you'd still know it was a dog either picture.*

>The best example I can think of would be ==YouTube== 

Same goes for music - if you listen to it in a lower quality

-----
## Example - Picture

![[splash.png|700]]
**A random picture from my desktop - it's really dumb but it's one of the 5 pictures I have saved on my mac** 

#### Now look - let's reduce the resolution (and therefore filesize!)

![[Pasted image 20231009002538.png|700]]
**The same picture from above just in a lower resolution. Can you *really* tell a difference?**
I mean - it's a little more blurry - but we halfed the filesize - which is a pretty big win.

This might not seem important but it does in the ***big scale.***
For example if you were to download say ***A MILLION** different pictures* it would take like ==10 minutes== to download them all. If they were *compressed* it would probably taker closer to ==1==.

-----