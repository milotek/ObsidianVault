Checksums are checks / algorithms designed to validate the legitimacy/check the correctness of data.
A checksum works in a similar way to [[Transmission Errors#Parity Bits|Parity Bits]] in the way that they are 

---
## Simple checksum example
1. The number of bytes within a transmission is counted and found to be 4
2. The checksum is given the value of 4 and sent alongside the real data.
3. The receiving computer then checks at the end that there is 4 bytes (excluding) the checksum that it has received 4 different bytes in total.

Example:
```
The following data has been sent from Computer A:
-----
[ 00010101 01010011 01101100 ] (SOME RANDOM DATA)
[ CHECKSUM: 00000011 ] (3 IN BINARY)



Computer B recieves this data:
...

Computer B checks that the checksum is correct:
> Is the number of bytes recieved 3?
> YES!
> Checksum complete - files have been verified.

```

---
## Practical real world uses of checksums

Another example of a checksum in a more advanced/modernised way, would be how a game like Asssetto Corsa or CS:GO checks how the viewers hasn't modified any client side files.

- For an example a Assetto Corsa player could go into the game files and change the acceleration value of a car to something massive like x100 then they could go really fast and beat everyone in the race. 
- The checksum done by AC gets the client to send the handling.zip over to the server, who verifies that it matches their legitimate copy of handling.zip
- If the checksum fails the user is kicked out, and if it doesn't then they are allowed to play.


