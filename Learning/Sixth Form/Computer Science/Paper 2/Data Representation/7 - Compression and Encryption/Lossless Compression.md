k>Unlike [[Lossy Compression]], some files *need* to retain **ALL** of their data or else they'll get corrupted!

-----
## Run length encoding

**Run length encoding (RLE)** is a *lossless* compression technique.
It works by finding runs of repeated colours in a row of an images' pixels
(see [[Bitmap Graphics]])

Instead of these pixels having their binary colour pattern repeated constantly, which would take up valuable bytes, instead the colours codes are replaced with a colour code followed by the number of times they repeat

It should be noted that sometimes **RLE** can *increase* file size in some cases. On digital photos taken by cameras repeating colorus are very rare because our world isn't made of pixel art (lmao), so **RLE** ends up doing nothing or making it even worse.


%% If you go into a hex editor and fuck around with a the data enough to corrupt it you'll see pixels/colours repeat themself for longer than they should %%

-----
Types of Lossless compression:
