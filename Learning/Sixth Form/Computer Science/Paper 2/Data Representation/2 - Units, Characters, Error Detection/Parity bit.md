> ***Parity bits are a way to verify that the bytes sent over by one computer was correctly sent instead of an error/corrupted one.***

---

- Computers use either odd or even parity
- When sending a byte of data, one of those bits is used as a parity bit
- The bit is set to either a 1 or a 0 to make the total number of 1s or 0s in the byte odd or even (depending on the machine)

| 0 | 1 | 0 | 0 | 1 | 1 | 0 | 1 |
|---|---|---|---|---|---|---|---|

 ^
 This first one here is the parity bit. Because there is 4 bits which are = 1, the parity bit is set to 0 for parity systems where the receiver wants an odd number of bits. If the number of bits is even

>All machines require either odd or even parity - it differs per machine!