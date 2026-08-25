When a signed x-bit integer goes over the limit of it maximum value it will have an overflow error! For an example if you have an 8 bit binary number and the value of it goes past **255** (or `1111111` in **binary**), it can't go any further as the maximum value that can be POSSIBLE has been reached.

As such, the value overflows back into 0, resetting to from the maximum to the very lowest possible value.

```
X = 11111111 <-- 8 bit binary
ADD 1 TO BINARY VALUE OF X?
...
*OVERFLOW ERROR - MAX VALUE HIT, RESETTING BACK TO 0*

X = 0
```

The same can also happen the **opposite way**. If you try take away one from the binary value of `0000 0000`then it shall result in a **backwards overflow error** and put the value at 255

For instance: `0000 0000` - 1 = `1111 1111`

-----
## Real world example
A famous example would be within the now ancient videogame Civilization for home computers in the 1980's.
